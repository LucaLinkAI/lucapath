import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useStore } from '../state/store';
import type { Message } from '../types';

export function ChatPanel() {
  const current = useStore((s) => s.current());
  const busy = useStore((s) => s.busy);
  const send = useStore((s) => s.send);
  const [draft, setDraft] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [current?.messages]);

  function submit() {
    const text = draft.trim();
    if (!text || busy) return;
    setDraft('');
    void send(text);
  }

  const messages = current?.messages ?? [];

  return (
    <main className="chat">
      <div className="chat-head">
        <div className="chat-head-title">{current?.title ?? '路卡成长罗盘'}</div>
        <div className="status-indicator">
          <span className={`status-dot${busy ? ' busy' : ''}`} />
          {busy ? '生成中…' : 'Claude · 本地订阅'}
        </div>
      </div>

      <div className="messages" ref={scrollRef}>
        {messages.length === 0 ? (
          <div className="empty-chat">
            <div className="glyph">🧭</div>
            <div className="et">从左侧选择一种报告，或直接开始对话</div>
            <div className="es">
              我会一步步询问出生信息与背景，融合八字、MBTI、星盘与紫微，生成你的专属命理报告。
            </div>
          </div>
        ) : (
          messages.map((m) => <Bubble key={m.id} msg={m} busy={busy} />)
        )}
      </div>

      <div className="composer">
        <div className="composer-inner">
          <textarea
            rows={1}
            placeholder="输入消息…（Enter 发送，Shift+Enter 换行）"
            value={draft}
            disabled={busy}
            onChange={(e) => {
              setDraft(e.target.value);
              e.target.style.height = 'auto';
              e.target.style.height = Math.min(e.target.scrollHeight, 180) + 'px';
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                submit();
              }
            }}
          />
          <button className="send-btn" disabled={busy || !draft.trim()} onClick={submit}>
            ↑
          </button>
        </div>
        <div className="composer-hint">
          报告由 Claude 结合命理算法生成，仅供参考与娱乐。
        </div>
      </div>
    </main>
  );
}

function Bubble({ msg, busy }: { msg: Message; busy: boolean }) {
  const isUser = msg.role === 'user';
  const showSpinner = busy && msg.role === 'assistant' && !msg.text;
  return (
    <div className={`msg ${msg.role}`}>
      <div className="msg-role">{isUser ? '你' : '罗盘'}</div>
      {msg.tools && msg.tools.length > 0 && (
        <div style={{ marginBottom: 8, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {msg.tools.map((t, i) => (
            <span key={i} className="tool-chip">
              <span className="spinner" />
              {t.summary || t.name}
            </span>
          ))}
        </div>
      )}
      <div className="msg-body">
        {isUser ? (
          msg.text
        ) : msg.text ? (
          <ReactMarkdown>{msg.text}</ReactMarkdown>
        ) : showSpinner ? (
          <span style={{ color: 'var(--w4)' }}>正在思考…</span>
        ) : null}
      </div>
    </div>
  );
}
