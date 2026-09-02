import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer, type Server } from 'node:http';
import { extname, resolve, sep } from 'node:path';
import { openDashboardDatabase, type DashboardDatabase } from './database.ts';

export interface DashboardServerOptions {
  databasePath: string;
  distDirectory: string;
  database?: DashboardDatabase;
}

export interface DashboardServer {
  listen(port: number, host?: string): Promise<void>;
  address(): ReturnType<Server['address']>;
  close(): Promise<void>;
}

const MIME: Record<string, string> = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

function json(response: Parameters<Parameters<typeof createServer>[0]>[1], status: number, body: unknown) {
  const payload = JSON.stringify(body);
  response.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': Buffer.byteLength(payload),
    'cache-control': 'no-store',
  });
  response.end(payload);
}

export function createDashboardServer(options: DashboardServerOptions): DashboardServer {
  const database = options.database ?? openDashboardDatabase(options.databasePath);
  database.migrate();

  const server = createServer((request, response) => {
    const url = new URL(request.url ?? '/', 'http://dashboard.local');
    if (request.method === 'GET' && url.pathname === '/healthz') {
      json(response, 200, { status: 'ok', database: 'ready' });
      return;
    }
    if (request.method === 'GET' && url.pathname === '/api/config') {
      json(response, 200, database.getConfig());
      return;
    }
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      json(response, 405, { error: 'method not allowed' });
      return;
    }
    const root = resolve(options.distDirectory);
    const requested = resolve(root, `.${url.pathname}`);
    const insideRoot = requested === root || requested.startsWith(`${root}${sep}`);
    const file = insideRoot && existsSync(requested) && statSync(requested).isFile()
      ? requested
      : resolve(root, 'index.html');
    if (!existsSync(file)) {
      json(response, 503, { error: 'dashboard assets are not built' });
      return;
    }
    const size = statSync(file).size;
    response.writeHead(200, {
      'content-type': MIME[extname(file)] ?? 'application/octet-stream',
      'content-length': size,
      'cache-control': file.endsWith('index.html') ? 'no-cache' : 'public, max-age=31536000, immutable',
      'x-content-type-options': 'nosniff',
      'referrer-policy': 'same-origin',
    });
    if (request.method === 'HEAD') response.end();
    else createReadStream(file).pipe(response);
  });

  return {
    listen: (port, host = '0.0.0.0') => new Promise((resolve, reject) => {
      server.once('error', reject);
      server.listen(port, host, () => {
        server.off('error', reject);
        resolve();
      });
    }),
    address: () => server.address(),
    close: () => new Promise((resolve, reject) => {
      if (!server.listening) {
        database.close();
        resolve();
        return;
      }
      server.close((error) => {
        database.close();
        if (error) reject(error);
        else resolve();
      });
    }),
  };
}
