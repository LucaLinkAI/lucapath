'use strict';

// LucaPath Studio — Electron shell.
//
// Strategy: start the EXISTING Express server (server/src/index.ts) as a child process
// using the user's own Node (via a login shell, so the GUI-launched app inherits the same
// PATH a terminal has — this is also how the Agent SDK finds the `claude` runtime), then
// open a window pointed at it. Express serves both the built React client and /api, so the
// renderer is a plain same-origin web page. No API key — auth is the machine's logged-in
// Claude Code subscription (see studio/Architecture.html).

const { app, BrowserWindow, shell: electronShell, dialog } = require('electron');
const { spawn } = require('node:child_process');
const path = require('node:path');
const http = require('node:http');
const net = require('node:net');

let serverProc = null;
let win = null;

// ── Resolve the bundled app tree ───────────────────────────────────────────────
// Packaged: <App>.app/Contents/Resources/app-tree/{studio/, .claude/skills}
// Dev:      repo root (electron/ -> studio/ -> LucaPath)
const APP_TREE = app.isPackaged
  ? path.join(process.resourcesPath, 'app-tree')
  : path.resolve(__dirname, '..', '..');

const SERVER_DIR = path.join(APP_TREE, 'studio', 'server');
const SERVER_ENTRY = path.join(SERVER_DIR, 'src', 'index.ts');

// ── Pick a free localhost port ─────────────────────────────────────────────────
function freePort() {
  return new Promise((resolve, reject) => {
    const srv = net.createServer();
    srv.unref();
    srv.on('error', reject);
    srv.listen(0, '127.0.0.1', () => {
      const { port } = srv.address();
      srv.close(() => resolve(port));
    });
  });
}

// ── Wait for the server to answer /api/health ──────────────────────────────────
function waitForHealth(port, timeoutMs = 40000) {
  const deadline = Date.now() + timeoutMs;
  return new Promise((resolve, reject) => {
    const tick = () => {
      const req = http.get(
        { host: '127.0.0.1', port, path: '/api/health', timeout: 2000 },
        (res) => {
          res.resume();
          if (res.statusCode === 200) return resolve();
          retry();
        },
      );
      req.on('error', retry);
      req.on('timeout', () => req.destroy());
    };
    const retry = () => {
      if (Date.now() > deadline) return reject(new Error('server did not become healthy'));
      setTimeout(tick, 300);
    };
    tick();
  });
}

// ── Start the Express server child ─────────────────────────────────────────────
function startServer(port) {
  const env = {
    ...process.env,
    PORT: String(port),
    PROJECT_ROOT: APP_TREE, // holds .claude/skills
    OUTPUT_ROOT: path.join(app.getPath('userData'), 'output'), // writable
  };

  // Run through a login shell so a Finder-launched app gets the user's real PATH
  // (homebrew / nvm node, and `claude`). `exec` replaces the shell with node, so
  // serverProc.pid is node itself — a clean kill target on quit.
  const loginShell = process.env.SHELL || '/bin/zsh';
  const cmd = `exec node --import tsx ${JSON.stringify(SERVER_ENTRY)}`;

  serverProc = spawn(loginShell, ['-l', '-c', cmd], {
    cwd: SERVER_DIR,
    env,
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  serverProc.stdout.on('data', (d) => process.stdout.write(`[server] ${d}`));
  serverProc.stderr.on('data', (d) => process.stderr.write(`[server] ${d}`));
  serverProc.on('exit', (code) => {
    console.log(`[server] exited (${code})`);
    serverProc = null;
  });
}

function createWindow(port) {
  win = new BrowserWindow({
    width: 1280,
    height: 860,
    minWidth: 920,
    minHeight: 600,
    title: 'LucaPath Studio',
    backgroundColor: '#12151c',
    webPreferences: { contextIsolation: true, nodeIntegration: false },
  });

  // Open external links (e.g. "open report in browser") in the default browser.
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http://127.0.0.1') || url.startsWith('http://localhost')) {
      return { action: 'allow' };
    }
    electronShell.openExternal(url);
    return { action: 'deny' };
  });

  win.loadURL(`http://127.0.0.1:${port}/`);
  win.on('closed', () => { win = null; });
}

app.whenReady().then(async () => {
  try {
    const port = await freePort();
    startServer(port);
    await waitForHealth(port);
    createWindow(port);
  } catch (err) {
    dialog.showErrorBox(
      'LucaPath 启动失败',
      `本地服务未能启动。\n\n请确认本机已安装 Node.js,并已用 \`claude\` 登录 Claude Code 订阅。\n\n${String(err)}`,
    );
    app.quit();
  }
});

app.on('window-all-closed', () => app.quit());

app.on('before-quit', () => {
  if (serverProc) {
    try { serverProc.kill(); } catch { /* ignore */ }
    serverProc = null;
  }
});
