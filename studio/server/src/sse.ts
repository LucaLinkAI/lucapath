import type { Response } from 'express';

export class SSE {
  private heartbeat: NodeJS.Timeout;
  constructor(private res: Response) {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
      'X-Accel-Buffering': 'no',
    });
    // flush headers immediately
    res.flushHeaders?.();
    this.heartbeat = setInterval(() => {
      try {
        this.res.write(': ping\n\n');
      } catch {
        /* ignore */
      }
    }, 15000);
  }

  send(event: string, data: unknown) {
    this.res.write(`event: ${event}\n`);
    this.res.write(`data: ${JSON.stringify(data)}\n\n`);
  }

  close() {
    clearInterval(this.heartbeat);
    try {
      this.res.end();
    } catch {
      /* ignore */
    }
  }
}
