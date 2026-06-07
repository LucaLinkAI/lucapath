import { Router } from 'express';
import { createSession, getSession } from '../sessions.ts';
import { runTurn } from '../agent.ts';
import { detectArtifacts, artifactUrl } from '../artifacts.ts';
import { SSE } from '../sse.ts';

export const chatRouter = Router();

/**
 * POST /api/chat  body: { sessionId?, prompt }
 * Streams Server-Sent Events for one conversational turn.
 */
chatRouter.post('/', async (req, res) => {
  const { sessionId, prompt } = req.body ?? {};
  if (typeof prompt !== 'string' || !prompt.trim()) {
    res.status(400).json({ error: 'prompt required' });
    return;
  }

  let session = sessionId ? getSession(sessionId) : undefined;
  if (sessionId && !session) {
    res.status(404).json({ error: 'session not found' });
    return;
  }
  if (!session) session = createSession();

  if (session.busy) {
    res.status(409).json({ error: 'session busy' });
    return;
  }
  session.busy = true;
  session.turnStartedAt = Date.now();
  session.pendingWritePaths = [];
  if (!session.title) session.title = prompt.trim().slice(0, 40);

  const sse = new SSE(res);
  const turnId = `${session.id}:${session.turnStartedAt}`;
  sse.send('session', { sessionId: session.id });
  sse.send('start', { turnId });

  // If the client disconnects, stop work. NOTE: use res 'close' (client gone),
  // not req 'close' — req 'close' fires when the upload stream ends, which is
  // almost immediately for a POST and would abort the turn prematurely.
  let aborted = false;
  res.on('close', () => {
    aborted = true;
  });

  try {
    for await (const ev of runTurn(session, prompt)) {
      if (aborted) break;
      switch (ev.kind) {
        case 'token':
          sse.send('token', { text: ev.text });
          break;
        case 'tool':
          sse.send('tool', { name: ev.name, summary: ev.summary });
          break;
        case 'auth_error':
          sse.send('error', { message: '认证失败，请在终端运行 `claude` 登录后刷新。' });
          break;
        case 'error':
          sse.send('error', { message: ev.message });
          break;
        case 'write':
        case 'session':
        case 'done':
        default:
          break;
      }
    }

    // After the turn, detect generated HTML reports.
    const added = detectArtifacts(session);
    for (const a of added) {
      sse.send('artifact', {
        file: a.file,
        url: artifactUrl(session.id, a.file),
        accent: a.accent,
      });
    }
    sse.send('done', { turnId });
  } catch (err: any) {
    sse.send('error', { message: String(err?.message ?? err) });
  } finally {
    session.busy = false;
    sse.close();
  }
});
