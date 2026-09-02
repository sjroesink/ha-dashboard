import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { openDashboardDatabase } from '../server/database.ts';
import { runDashboardCommand } from '../server/cli.ts';

test('set-setting updates a JSON value through the management CLI', () => {
  const directory = mkdtempSync(join(tmpdir(), 'ha-dashboard-cli-'));
  const database = openDashboardDatabase(join(directory, 'dashboard.sqlite'));
  const output: string[] = [];
  try {
    database.migrate();
    runDashboardCommand(database, ['set-setting', 'title', '"Mijn huis"'], (line) => output.push(line));
    assert.equal(database.getConfig().settings.title, 'Mijn huis');
    assert.match(output.join('\n'), /updated setting title/);
  } finally {
    database.close();
    rmSync(directory, { recursive: true, force: true });
  }
});
