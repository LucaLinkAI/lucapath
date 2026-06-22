import express from 'express';
import cors from 'cors';
import fs from 'node:fs';
import path from 'node:path';
import { PORT, OUTPUT_ROOT, PROJECT_ROOT, STUDIO_DIR, EXPECTED_SKILLS } from './config.ts';
import { authRouter } from './routes/auth.routes.ts';
import { chatRouter } from './routes/chat.routes.ts';
import { artifactRouter } from './routes/artifact.routes.ts';
import { uploadRouter } from './routes/upload.routes.ts';
import { probeSkills, getCwdMode } from './agent.ts';

fs.mkdirSync(OUTPUT_ROOT, { recursive: true });

const app = express();
app.use(cors());
// Raised from 1mb to accommodate base64-encoded file/photo attachments.
app.use(express.json({ limit: '32mb' }));

app.get('/api/health', (_req, res) => res.json({ ok: true }));
app.use('/api/auth', authRouter);
app.use('/api/chat', chatRouter);
app.use('/api/artifact', artifactRouter);
app.use('/api/upload', uploadRouter);

// In a packaged build the React client is pre-built to client/dist and served from this
// same origin, so the client's relative `/api` calls resolve here. In dev this directory
// is absent (the Vite dev server serves the UI on :3000 and proxies /api), so this block
// is a no-op. The SPA fallback regex deliberately excludes /api so API 404s stay JSON.
const CLIENT_DIST = path.join(STUDIO_DIR, 'client', 'dist');
if (fs.existsSync(CLIENT_DIST)) {
  app.use(express.static(CLIENT_DIST));
  app.get(/^(?!\/api\/).*/, (_req, res) => {
    res.sendFile(path.join(CLIENT_DIST, 'index.html'));
  });
  console.log(`  │  serving client: ${CLIENT_DIST}`);
}

app.listen(PORT, async () => {
  console.log(`\n  ┌─ LucaPath Studio server`);
  console.log(`  │  http://localhost:${PORT}`);
  console.log(`  │  project root: ${PROJECT_ROOT}`);
  console.log(`  │  output:       ${OUTPUT_ROOT}`);
  console.log(`  │  probing skills + auth …`);

  // Boot probe: confirm auth + skill discovery; choose cwd mode.
  try {
    const probeDir = `${OUTPUT_ROOT}/__probe__`;
    fs.mkdirSync(probeDir, { recursive: true });
    const r = await probeSkills(EXPECTED_SKILLS, probeDir);
    if (!r.authed) {
      console.log(`  │  ⚠ NOT authenticated — run \`claude\` in a terminal to log in.`);
    } else if (r.ok) {
      console.log(`  │  ✓ authed · skills OK (${r.skills.length}) · cwd mode: ${r.mode}`);
    } else {
      console.log(`  │  ⚠ authed but skills incomplete (${r.reason}).`);
      console.log(`  │    found: ${r.skills.join(', ') || '(none)'}`);
      console.log(`  │    cwd mode forced to: ${getCwdMode()}`);
    }
  } catch (e) {
    console.log(`  │  ⚠ probe failed: ${String(e)}`);
  }
  console.log(`  └─ ready\n`);
});
