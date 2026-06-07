LucaPath Studio — Local Webapp Plan

 Context

 The LucaPath project has four Claude Code skills (lucapath router + 3 report
 generators) at /Users/junyuanlin/Project/LucaPath/.claude/skills/, plus a visual
 routing doc lucapath_skill_architecture.html. Today they only run inside a terminal
 Claude Code session. The user wants a local webapp at localhost:3000 that gives a
 customer a Claude-style experience: a welcome board, then a 3-column UI (sidebar / chat /
 artifact HTML preview) with a top-right Download button — driving the skills through chat
 and rendering the generated HTML report on the right.

 The engine is the Claude Agent SDK (@anthropic-ai/claude-agent-sdk), which
 authenticates automatically through the machine's installed Claude Code CLI OAuth
 (the user's Claude Pro/Max subscription — no API key), loads the project skills via
 settingSources, and writes report files autonomously. Environment verified: Node v25.6.1,
 npm 11.9.0, claude CLI at /Users/junyuanlin/.local/bin/claude, credentials in macOS
 keychain ("Claude Code-credentials").

 Locked decisions (confirmed with user)

 - Single-user, local: uses this machine's Claude Code subscription. The login screen is a start-gate that checks Claude Code auth — not multi-tenant.
 - Stack: Vite + React + TypeScript (client) · Express + TypeScript (server) · SSE streaming.
 - Persistence: in-memory only. Recents live in React state for the session; no DB/disk chat history.
 - Download: HTML only (the self-contained report files the skills generate). No PDF.

 ---
 Architecture

 Browser (localhost:3000, Vite)
   └─ POST /api/chat (SSE)  ─────►  Express (:8787)
                                      └─ @anthropic-ai/claude-agent-sdk  query()
                                           ├─ auth: local Claude Code OAuth (machine subscription)
                                           ├─ settingSources:['project','local'] + skills:'all'
                                           │     → loads PROJECT_ROOT/.claude/skills (4 skills)
                                           ├─ permissionMode:'acceptEdits'  (autonomous Write)
                                           └─ cwd: studio/output/<sessionId>/  → report .html lands here

 One Express session wraps one Agent SDK session (resumed per user message), so each
 skill's multi-step intake (6/5/5 steps) flows turn-by-turn over chat.

 ---
 File tree (new — all under /Users/junyuanlin/Project/LucaPath/studio/)

 studio/
 ├─ package.json            # npm workspaces + concurrently; one `npm run dev`
 ├─ .gitignore              # node_modules, dist, output
 ├─ README.md
 ├─ output/<sessionId>/     # generated report HTML per session (gitignored)
 ├─ server/
 │  ├─ package.json  tsconfig.json
 │  └─ src/
 │     ├─ index.ts          # express bootstrap, cors, mount routes, boot skill-probe
 │     ├─ config.ts         # PROJECT_ROOT, OUTPUT_ROOT, PORT=8787
 │     ├─ auth.ts           # checkClaudeAuth() probe
 │     ├─ sessions.ts       # in-memory Map<id, SessionState>
 │     ├─ agent.ts          # core query() integration + message→event normalize
 │     ├─ artifacts.ts      # detect generated .html (events ∪ dir scan) + safe serve
 │     ├─ sse.ts            # SSE writer + 15s heartbeat
 │     └─ routes/{auth,chat,artifact}.routes.ts
 └─ client/
    ├─ package.json  tsconfig.json  vite.config.ts(port 3000, proxy /api→:8787)  index.html
    └─ src/
       ├─ main.tsx  App.tsx(Landing|Studio)  theme.css(design tokens)  types.ts
       ├─ state/store.ts          # zustand: entered, auth, sessionId, sessions, recents, busy
       ├─ api/{client,chatStream}.ts
       ├─ screens/{Landing,Studio}.tsx
       └─ components/{Sidebar,ChatPanel,MessageList,MessageBubble,Composer,
                      StatusIndicator,ArtifactPanel,AuthGate}.tsx

 studio/ lives inside the project so skill resolution is trivial.

 ---
 Backend — key patterns

 Core query() options (agent.ts) — the heart of the integration

 import { query } from '@anthropic-ai/claude-agent-sdk';
 const opts = {
   cwd: session.outputDir,                       // output/<id>; SDK ascends to find project .claude/skills
   settingSources: ['project', 'local'],         // loads PROJECT_ROOT/.claude/skills
   skills: 'all',                                // auto-adds the Skill tool, exposes all 4
   permissionMode: 'acceptEdits',                // autonomous file writes, no prompts
   tools: { type: 'preset', preset: 'claude_code' },
   ...(session.sdkSessionId ? { resume: session.sdkSessionId } : {}),  // multi-turn continuity
 };
 for await (const message of query({ prompt, options: opts })) {
   if (!session.sdkSessionId) session.sdkSessionId = message.session_id ?? message.sessionId;
   // normalize → SSE events (see protocol)
 }
 - Skill resolution: primary = nested cwd + settingSources:['project'] (SDK walks up to project root). Fallback if boot-probe shows skills missing: cwd = PROJECT_ROOT and inject the
 explicit output/<id>/ path into the prompt. Decide at server boot via a probe query ("list the skills you can access" → assert lucapath etc. appear), log chosen mode.
 - Multi-turn: capture the SDK session_id on the first turn; pass resume on every later turn so the step-by-step intake continues.

 Artifact detection (artifacts.ts) — union for robustness

 1. Capture Write tool_use file_path args ending in .html during streaming.
 2. After the turn, readdir(outputDir) for .html with mtime ≥ turn start.
 Take the union, dedupe by absolute path, newest = active. Infer accent from filename
 (四系统→personal #7090e0, 家族→family #40b890, AI时代→child #e08090).

 Serving + Chinese filenames (artifact.routes.ts)

 GET /api/artifact/:sessionId/:file — decodeURIComponent, whitelist against
 session.artifacts (never raw path.join → blocks traversal), serve
 text/html; charset=utf-8. ?download=1 adds
 Content-Disposition: attachment; filename*=UTF-8''<encoded> so ·/×/CJK survive.

 Start-gate auth (auth.ts)

 GET /api/auth/status runs a tiny probe query({prompt:'ping', maxTurns:1}); any
 successful stream ⇒ {ok:true}. Auth-pattern error ⇒ {ok:false, reason:'not_logged_in'}
 with UI hint: "请先在终端运行 claude 登录，然后刷新本页。" Cache ~30s.

 SSE protocol (POST /api/chat body {sessionId?, prompt})

 ┌──────────┬─────────────────────┬─────────────────────────────────────────────────────────────┐
 │  event   │        data         │                           meaning                           │
 ├──────────┼─────────────────────┼─────────────────────────────────────────────────────────────┤
 │ session  │ {sessionId}         │ first event; client adopts id                               │
 ├──────────┼─────────────────────┼─────────────────────────────────────────────────────────────┤
 │ start    │ {turnId}            │ streaming begins (UI sets busy)                             │
 ├──────────┼─────────────────────┼─────────────────────────────────────────────────────────────┤
 │ token    │ {text}              │ assistant text chunk (append)                               │
 ├──────────┼─────────────────────┼─────────────────────────────────────────────────────────────┤
 │ tool     │ {name, summary}     │ tool activity → status chip ("Skill: …", "Writing report…") │
 ├──────────┼─────────────────────┼─────────────────────────────────────────────────────────────┤
 │ artifact │ {file, url, accent} │ report ready → right column swaps to iframe                 │
 ├──────────┼─────────────────────┼─────────────────────────────────────────────────────────────┤
 │ error    │ {message}           │ recoverable; turn ends                                      │
 ├──────────┼─────────────────────┼─────────────────────────────────────────────────────────────┤
 │ done     │ {turnId}            │ unlock composer                                             │
 └──────────┴─────────────────────┴─────────────────────────────────────────────────────────────┘

 Guard: SessionState.busy → reject a 2nd concurrent POST per session with 409; different sessions run in parallel (own SDK session + output dir). 15s heartbeat keeps SSE alive.

 ---
 Frontend — columns

 3-column CSS grid 280px | 1fr | 460px, navy/gold tokens copied from
 lucapath_skill_architecture.html (--bg:#07101e --surf:#0f1e35 --card:#131f38 --gold:#c8a03c --gl:#e0bc5a, cream text; per-type accents). Fonts: Noto Serif SC /
 Noto Sans SC / DM Mono.

 - Landing: branded welcome board + AuthGate (polls /api/auth/status); "进入/开始" enabled only when authed.
 - Sidebar (L): "＋ New chat"; 3 report-type quick-starts (个人/家族/孩子AI) that open a chat and send a seed prompt so the matching skill intake starts; in-memory Recents (click to
 switch — server session still alive, conversation resumes); brand footer.
 - ChatPanel (C): StatusIndicator (model "Claude · Pro/Max", streaming/tool state); MessageList → MessageBubble (markdown via react-markdown, tool chips); Composer (Enter=send,
 disabled while busy).
 - ArtifactPanel (R): empty state (gold compass + "报告将在这里出现"); header filename + accent dot + Download (<a href={url+'?download=1'} download>); <iframe src={url}
 sandbox="allow-same-origin allow-scripts"> (use src, not srcDoc, so the report's Google-Fonts <link> loads).
 - chatStream.ts: fetch POST → response.body.getReader(), split on \n\n, parse event:/data: → dispatch into zustand store.
     disabled while busy).
     - ArtifactPanel (R): empty state (gold compass + "报告将在这里出现"); header filename + accent dot + Download (<a href={url+'?download=1'} download>); <iframe src={url}
     sandbox="allow-same-origin allow-scripts"> (use src, not srcDoc, so the report's Google-Fonts <link> loads).
     - chatStream.ts: fetch POST → response.body.getReader(), split on \n\n, parse event:/data: → dispatch into zustand store.

     ---
     Run (one command)

     Root studio/package.json = npm workspaces + concurrently:
     "dev": concurrently npm:dev:server npm:dev:client. Server tsx watch src/index.ts;
     client vite (port 3000, proxy /api→:8787).

     cd /Users/junyuanlin/Project/LucaPath/studio
     npm install
     npm run dev          # client http://localhost:3000 · server :8787
     Deps — server: @anthropic-ai/claude-agent-sdk express cors (+ tsx, typescript, @types).
     client: react react-dom react-markdown zustand (+ vite, @vitejs/plugin-react, typescript).

     ---
     Verification (end-to-end)

     1. npm install && npm run dev; server log shows skill-probe result (skills found + mode).
     2. localhost:3000 → welcome board; AuthGate shows "已连接 Claude Code".
     3. 进入 → click 个人命理 quick-start → assistant greets + asks Step 1 基本信息.
     4. Walk the 6-step intake → on confirm, see tool chips then artifact; right column renders the report with personal accent.
     5. Download → saves {中文名} · 四系统命理综合分析报告.html with Chinese filename intact.
     6. Repeat 家族 (…家N口 八字×MBTI 家族分析报告.html) and 孩子AI (AI时代如何培养….html); confirm Recents switching preserves each conversation.
     7. Negative: logged-out state → 进入 disabled + login hint.

     - Path traversal: resolve only to paths already in session.artifacts.
     - Long turns / SSE timeout: heartbeat, disable proxy buffering, tool chips for progress.
     - In-memory loss on restart: accepted per decision; output/<id> HTML files remain but chats reset.

     Critical files to create

     - studio/server/src/agent.ts — query() options + message→event normalization (core)
     - studio/server/src/artifacts.ts — HTML detection union + Chinese-safe serving
     - studio/server/src/routes/chat.routes.ts — SSE protocol + session/turn lifecycle
     - studio/client/src/api/chatStream.ts — SSE parser → store
     - studio/client/src/screens/Studio.tsx — 3-column layout + ArtifactPanel iframe/download
     - studio/client/src/theme.css — design tokens copied from lucapath_skill_architecture.html
