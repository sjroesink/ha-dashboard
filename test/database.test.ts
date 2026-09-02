import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { openDashboardDatabase, type DashboardSeed } from '../server/database.ts';

const seed: DashboardSeed = {
  settings: {
    title: 'Thuis',
    subtitle: 'Sander & Ebru',
    homeAssistantUrl: 'https://homeassistant.roes.ink',
  },
  sections: [
    { id: 'climate', title: 'Klimaat', position: 20 },
    { id: 'living', title: 'Woonkamer', position: 10 },
  ],
  cards: [
    {
      id: 'temperature',
      sectionId: 'climate',
      kind: 'sensor',
      entityId: 'sensor.woonkamer_temperatuur',
      title: 'Temperatuur',
      position: 20,
      options: { graph: 'line' },
    },
    {
      id: 'living-light',
      sectionId: 'living',
      kind: 'button',
      entityId: 'light.woonkamer',
      title: 'Woonkamer',
      position: 10,
      options: { service: 'toggle' },
    },
  ],
};

test('seed is idempotent and dashboard configuration is ordered', () => {
  const directory = mkdtempSync(join(tmpdir(), 'ha-dashboard-'));
  const database = openDashboardDatabase(join(directory, 'dashboard.sqlite'));
  try {
    database.migrate();
    database.seed(seed);
    database.seed(seed);

    const dashboard = database.getConfig();
    assert.equal(dashboard.settings.title, 'Thuis');
    assert.deepEqual(
      dashboard.sections.map((section) => section.id),
      ['living', 'climate'],
    );
    assert.equal(dashboard.sections[0]?.cards[0]?.id, 'living-light');
    assert.equal(dashboard.sections[1]?.cards[0]?.options.graph, 'line');
  } finally {
    database.close();
    rmSync(directory, { recursive: true, force: true });
  }
});
