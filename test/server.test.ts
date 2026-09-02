import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { createDashboardServer } from '../server/server.ts';
import { openDashboardDatabase } from '../server/database.ts';

test('health endpoint reports the service and database are ready', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'ha-dashboard-server-'));
  const dist = join(directory, 'dist');
  const databasePath = join(directory, 'data', 'dashboard.sqlite');
  writeFileSync(join(directory, 'placeholder'), '');
  const server = createDashboardServer({ databasePath, distDirectory: dist });
  try {
    await server.listen(0, '127.0.0.1');
    const address = server.address();
    assert.ok(address && typeof address !== 'string');
    const response = await fetch(`http://127.0.0.1:${address.port}/healthz`);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { status: 'ok', database: 'ready' });
  } finally {
    await server.close();
    rmSync(directory, { recursive: true, force: true });
  }
});

test('configuration endpoint returns the database-backed dashboard', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'ha-dashboard-config-'));
  const databasePath = join(directory, 'dashboard.sqlite');
  const database = openDashboardDatabase(databasePath);
  database.migrate();
  database.seed({
    settings: { title: 'Thuis' },
    sections: [{ id: 'living', title: 'Woonkamer', position: 10 }],
    cards: [{ id: 'light', sectionId: 'living', kind: 'button', entityId: 'light.woonkamer', position: 10 }],
  });
  const server = createDashboardServer({ databasePath, distDirectory: join(directory, 'dist'), database });
  try {
    await server.listen(0, '127.0.0.1');
    const address = server.address();
    assert.ok(address && typeof address !== 'string');
    const response = await fetch(`http://127.0.0.1:${address.port}/api/config`);
    assert.equal(response.status, 200);
    const body = await response.json() as { settings: { title: string }; sections: Array<{ id: string }> };
    assert.equal(body.settings.title, 'Thuis');
    assert.deepEqual(body.sections.map((section) => section.id), ['living']);
  } finally {
    await server.close();
    rmSync(directory, { recursive: true, force: true });
  }
});

test('unknown application routes serve the single-page dashboard', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'ha-dashboard-static-'));
  const dist = join(directory, 'dist');
  mkdirSync(dist);
  writeFileSync(join(dist, 'index.html'), '<!doctype html><title>Thuis</title>');
  const server = createDashboardServer({ databasePath: join(directory, 'dashboard.sqlite'), distDirectory: dist });
  try {
    await server.listen(0, '127.0.0.1');
    const address = server.address();
    assert.ok(address && typeof address !== 'string');
    const response = await fetch(`http://127.0.0.1:${address.port}/woonkamer`);
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type') ?? '', /^text\/html/);
    assert.match(await response.text(), /<title>Thuis<\/title>/);
  } finally {
    await server.close();
    rmSync(directory, { recursive: true, force: true });
  }
});
