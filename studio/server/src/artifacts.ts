import fs from 'node:fs';
import path from 'node:path';
import type { SessionState, ArtifactRef } from './sessions.ts';
import { inferAccent } from './sessions.ts';

/**
 * Detect HTML reports generated during the just-finished turn. Union of:
 *  (1) .html paths captured from Write tool_use events (session.pendingWritePaths)
 *  (2) a mtime scan of the session output dir
 * Dedupe by absolute path, register new ones on the session, return the newly added.
 */
export function detectArtifacts(session: SessionState): ArtifactRef[] {
  const found = new Map<string, number>(); // absPath -> mtimeMs

  // (1) event-based. If the model wrote the report outside the session dir
  // (e.g. the project root), relocate it in so the project stays clean and all
  // serving is uniform.
  for (const p of session.pendingWritePaths) {
    try {
      let abs = path.resolve(p);
      if (!abs.endsWith('.html') || !fs.existsSync(abs)) continue;
      const insideSession = abs.startsWith(session.outputDir + path.sep);
      if (!insideSession) {
        const dest = path.join(session.outputDir, path.basename(abs));
        try {
          fs.renameSync(abs, dest);
        } catch {
          fs.copyFileSync(abs, dest);
          try {
            fs.unlinkSync(abs);
          } catch {
            /* ignore */
          }
        }
        abs = dest;
      }
      found.set(abs, fs.statSync(abs).mtimeMs);
    } catch {
      /* ignore */
    }
  }

  // (2) scan output dir for .html newer than turn start
  try {
    for (const f of fs.readdirSync(session.outputDir)) {
      if (!f.endsWith('.html')) continue;
      const abs = path.join(session.outputDir, f);
      const st = fs.statSync(abs);
      if (st.mtimeMs >= session.turnStartedAt - 1000) {
        found.set(abs, st.mtimeMs);
      }
    }
  } catch {
    /* ignore */
  }

  const known = new Set(session.artifacts.map((a) => a.absPath));
  const added: ArtifactRef[] = [];
  for (const [abs, mtime] of found) {
    if (known.has(abs)) continue;
    const file = path.basename(abs);
    const ref: ArtifactRef = { file, absPath: abs, accent: inferAccent(file), createdAt: mtime };
    session.artifacts.push(ref);
    added.push(ref);
  }
  // newest first
  added.sort((a, b) => b.createdAt - a.createdAt);
  return added;
}

/** Build the client-facing URL for an artifact (encodes the Chinese/full-width filename). */
export function artifactUrl(sessionId: string, file: string): string {
  return `/api/artifact/${sessionId}/${encodeURIComponent(file)}`;
}
