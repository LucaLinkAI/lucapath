import { Router } from 'express';
import fs from 'node:fs';
import { getSession } from '../sessions.ts';

export const artifactRouter = Router();

/**
 * GET /api/artifact/:sessionId/:file        → inline HTML (for the iframe preview)
 * GET /api/artifact/:sessionId/:file?download=1 → attachment with UTF-8 filename
 *
 * Security: the requested file is whitelisted against session.artifacts (never a
 * raw path.join of user input), preventing path traversal.
 */
artifactRouter.get('/:sessionId/:file', (req, res) => {
  const { sessionId, file } = req.params;
  const session = getSession(sessionId);
  if (!session) {
    res.status(404).send('session not found');
    return;
  }
  const name = decodeURIComponent(file);
  const ref = session.artifacts.find((a) => a.file === name);
  if (!ref || !fs.existsSync(ref.absPath)) {
    res.status(404).send('artifact not found');
    return;
  }

  const html = fs.readFileSync(ref.absPath);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  if (req.query.download === '1') {
    const encoded = encodeURIComponent(ref.file);
    const asciiFallback = ref.file.replace(/[^\x20-\x7E]/g, '_');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${asciiFallback}"; filename*=UTF-8''${encoded}`,
    );
  }
  res.send(html);
});
