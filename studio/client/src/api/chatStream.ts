import type { SSEEvent, AuthStatus } from '../types';

export async function fetchAuthStatus(force = false): Promise<AuthStatus> {
  const r = await fetch(`/api/auth/status${force ? '?force=1' : ''}`);
  return r.json();
}

/**
 * POST a chat turn and stream SSE events. Parses the `event:`/`data:` wire format
 * from the response body and invokes onEvent for each. Resolves when the stream ends.
 */
export async function streamChat(
  body: { sessionId?: string; prompt: string },
  onEvent: (ev: SSEEvent) => void,
  signal?: AbortSignal,
): Promise<void> {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal,
  });

  if (!res.ok || !res.body) {
    let message = `请求失败 (${res.status})`;
    try {
      const j = await res.json();
      if (j?.error) message = j.error;
    } catch {
      /* ignore */
    }
    onEvent({ type: 'error', message });
    onEvent({ type: 'done', turnId: '' });
    return;
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    // SSE frames are separated by a blank line
    let idx: number;
    while ((idx = buffer.indexOf('\n\n')) !== -1) {
      const frame = buffer.slice(0, idx);
      buffer = buffer.slice(idx + 2);
      parseFrame(frame, onEvent);
    }
  }
}

function parseFrame(frame: string, onEvent: (ev: SSEEvent) => void) {
  let event = 'message';
  let data = '';
  for (const line of frame.split('\n')) {
    if (line.startsWith(':')) continue; // comment / heartbeat
    if (line.startsWith('event:')) event = line.slice(6).trim();
    else if (line.startsWith('data:')) data += line.slice(5).trim();
  }
  if (!data) return;
  try {
    const payload = JSON.parse(data);
    onEvent({ type: event, ...payload } as SSEEvent);
  } catch {
    /* ignore malformed */
  }
}
