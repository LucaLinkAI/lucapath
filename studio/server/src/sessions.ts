import fs from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { OUTPUT_ROOT } from './config.ts';

export type ArtifactRef = {
  file: string; // basename, e.g. "林均元 · 四系统命理综合分析报告.html"
  absPath: string;
  accent: string; // hex color inferred from report type
  createdAt: number;
};

export type SessionState = {
  id: string; // our session id == output subdir name
  sdkSessionId?: string; // Claude Agent SDK session id (for resume)
  outputDir: string;
  artifacts: ArtifactRef[];
  pendingWritePaths: string[]; // .html paths seen in Write tool_use during the current turn
  turnStartedAt: number;
  busy: boolean;
  title?: string; // first user line, for Recents
  createdAt: number;
};

const sessions = new Map<string, SessionState>();

export function createSession(): SessionState {
  const id = randomUUID();
  const outputDir = path.join(OUTPUT_ROOT, id);
  fs.mkdirSync(outputDir, { recursive: true });
  const s: SessionState = {
    id,
    outputDir,
    artifacts: [],
    pendingWritePaths: [],
    turnStartedAt: 0,
    busy: false,
    createdAt: Date.now(),
  };
  sessions.set(id, s);
  return s;
}

export function getSession(id: string): SessionState | undefined {
  return sessions.get(id);
}

export function inferAccent(filename: string): string {
  if (filename.includes('AI时代') || filename.includes('培养')) return '#e08090'; // child
  if (filename.includes('家族') || filename.includes('家') ) return '#40b890'; // family
  if (filename.includes('四系统') || filename.includes('命理')) return '#7090e0'; // personal
  return '#e8a050'; // meta / fallback gold-orange
}
