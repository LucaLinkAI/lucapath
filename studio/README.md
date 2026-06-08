# LucaPath Studio 路卡命运罗盘

A local single-user webapp that wraps the four LucaPath destiny-report skills behind a
Claude-style 3-column chat UI. It runs on **your machine's Claude Code Pro/Max
subscription** via the Claude Agent SDK — **no API key required**.

```
Welcome board  →  3-column Studio
                   ├─ left:   New chat · report types · recents
                   ├─ center: streaming chat (drives the skills)
                   └─ right:  generated HTML report preview + Download
```

## Prerequisites

- Node.js 20+ and npm
- The **Claude Code CLI** installed and **logged in** (`claude` in a terminal, then sign
  in with your Claude Pro/Max account). The app uses this local session for auth.

## Run

```bash
cd studio
npm install
npm run dev
```

- Client: <http://localhost:3000>
- Server: <http://localhost:8787> (API only)

> **Port 3000 must be free.** The client uses `strictPort`, so if another app is
> already on 3000 (`lsof -i :3000`), Vite will exit instead of silently moving ports.
> Stop the other app, or change `server.port` in `client/vite.config.ts`.

On boot, the server probes Claude Code auth and confirms the four project skills
(`lucapath`, `personal-destiny-report`, `family-report`, `children-ai-report`) load from
`../.claude/skills`. Watch the server log for `✓ authed · skills OK`.

## How it works

- **Auth**: the Agent SDK spawns the Claude Code CLI, which authenticates with your
  subscription. The landing page calls `GET /api/auth/status` (a tiny probe query) to gate
  entry. If not logged in, run `claude` in a terminal first.
- **Chat → skills**: `POST /api/chat` (SSE) runs `query()` with
  `settingSources:['user','project','local']` so the project skills load, and
  `permissionMode:'bypassPermissions'` for headless autonomy. Each user message resumes the
  same SDK session, so a skill's multi-step intake flows turn-by-turn.
- **Artifacts**: generated report `.html` files land in `studio/output/<sessionId>/`.
  The server detects them (Write-tool events ∪ dir scan) and streams an `artifact` event;
  the right column previews it in an iframe and the Download button serves it with the
  original Chinese filename.

## Notes

- **In-memory only**: conversations and the Recents list reset when the server restarts
  (generated HTML files remain on disk under `output/`).
- Single-user / local: uses whichever Claude account is logged into Claude Code on this
  machine.
