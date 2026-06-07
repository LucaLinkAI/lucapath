import { create } from 'zustand';
import type { ChatSession, Message, Artifact, AuthStatus } from '../types';
import { streamChat } from '../api/chatStream';

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

type Store = {
  entered: boolean;
  auth: AuthStatus | null;
  sessions: Record<string, ChatSession>; // keyed by localId
  order: string[]; // localIds, most-recent first
  activeId: string | null; // localId
  busy: boolean;

  setEntered: (v: boolean) => void;
  setAuth: (a: AuthStatus) => void;
  newChat: () => string; // returns localId
  selectChat: (localId: string) => void;
  current: () => ChatSession | null;
  send: (prompt: string, opts?: { newChat?: boolean }) => Promise<void>;
  setActiveArtifact: (file: string) => void;
};

export const useStore = create<Store>((set, get) => ({
  entered: false,
  auth: null,
  sessions: {},
  order: [],
  activeId: null,
  busy: false,

  setEntered: (v) => set({ entered: v }),
  setAuth: (a) => set({ auth: a }),

  newChat: () => {
    const localId = uid();
    const session: ChatSession = {
      id: '',
      localId,
      title: '新对话',
      accent: '#e8a050',
      messages: [],
      artifacts: [],
    };
    set((s) => ({
      sessions: { ...s.sessions, [localId]: session },
      order: [localId, ...s.order],
      activeId: localId,
    }));
    return localId;
  },

  selectChat: (localId) => set({ activeId: localId }),

  current: () => {
    const { activeId, sessions } = get();
    return activeId ? sessions[activeId] ?? null : null;
  },

  setActiveArtifact: (file) => {
    const { activeId, sessions } = get();
    if (!activeId) return;
    const s = sessions[activeId];
    if (!s) return;
    set({ sessions: { ...sessions, [activeId]: { ...s, activeArtifact: file } } });
  },

  send: async (prompt, opts) => {
    if (get().busy) return;
    let localId = get().activeId;
    if (opts?.newChat || !localId) localId = get().newChat();
    const lid = localId!;

    const patch = (mut: (s: ChatSession) => ChatSession) =>
      set((st) => {
        const cur = st.sessions[lid];
        if (!cur) return {};
        return { sessions: { ...st.sessions, [lid]: mut(cur) } };
      });

    // append user message + a placeholder assistant message
    const userMsg: Message = { id: uid(), role: 'user', text: prompt };
    const asstMsg: Message = { id: uid(), role: 'assistant', text: '', tools: [] };
    patch((s) => ({
      ...s,
      title: s.messages.length === 0 ? prompt.slice(0, 24) : s.title,
      messages: [...s.messages, userMsg, asstMsg],
    }));
    // bump recency
    set((st) => ({ order: [lid, ...st.order.filter((x) => x !== lid)] }));
    set({ busy: true });

    const serverSessionId = get().sessions[lid]?.id || undefined;

    try {
      await streamChat({ sessionId: serverSessionId, prompt }, (ev) => {
        switch (ev.type) {
          case 'session':
            patch((s) => ({ ...s, id: ev.sessionId }));
            break;
          case 'token':
            patch((s) => ({
              ...s,
              messages: s.messages.map((m) =>
                m.id === asstMsg.id ? { ...m, text: m.text + ev.text } : m,
              ),
            }));
            break;
          case 'tool':
            patch((s) => ({
              ...s,
              messages: s.messages.map((m) =>
                m.id === asstMsg.id
                  ? { ...m, tools: [...(m.tools ?? []), { name: ev.name, summary: ev.summary }] }
                  : m,
              ),
            }));
            break;
          case 'artifact': {
            const art: Artifact = { file: ev.file, url: ev.url, accent: ev.accent };
            patch((s) => ({
              ...s,
              accent: ev.accent,
              artifacts: [...s.artifacts.filter((a) => a.file !== art.file), art],
              activeArtifact: art.file,
            }));
            break;
          }
          case 'error':
            patch((s) => ({
              ...s,
              messages: s.messages.map((m) =>
                m.id === asstMsg.id
                  ? { ...m, text: m.text + `\n\n⚠ ${ev.message}` }
                  : m,
              ),
            }));
            break;
          case 'done':
          case 'start':
          default:
            break;
        }
      });
    } finally {
      set({ busy: false });
    }
  },
}));
