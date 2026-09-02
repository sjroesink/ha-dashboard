import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { DatabaseSync } from 'node:sqlite';

export type CardKind = 'button' | 'sensor' | 'climate' | 'media' | 'entities' | 'weather' | 'camera';

export interface DashboardSectionSeed {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  layout?: 'grid' | 'row';
  position: number;
  enabled?: boolean;
}

export interface DashboardCardSeed {
  id: string;
  sectionId: string;
  kind: CardKind;
  entityId?: string;
  title?: string;
  icon?: string;
  position: number;
  enabled?: boolean;
  options?: Record<string, unknown>;
}

export interface DashboardSeed {
  settings: Record<string, unknown>;
  sections: DashboardSectionSeed[];
  cards: DashboardCardSeed[];
}

export interface DashboardCard extends Omit<DashboardCardSeed, 'enabled' | 'options'> {
  enabled: boolean;
  options: Record<string, unknown>;
}

export interface DashboardSection extends Omit<DashboardSectionSeed, 'enabled'> {
  enabled: boolean;
  cards: DashboardCard[];
}

export interface DashboardConfig {
  settings: Record<string, unknown>;
  sections: DashboardSection[];
}

export interface DashboardDatabase {
  migrate(): void;
  seed(seed: DashboardSeed): void;
  getConfig(): DashboardConfig;
  setSetting(key: string, value: unknown): void;
  upsertSection(section: DashboardSectionSeed): void;
  upsertCard(card: DashboardCardSeed): void;
  deleteSection(id: string): void;
  deleteCard(id: string): void;
  close(): void;
}

function parseJson<T>(value: string, fallback: T): T {
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function openDashboardDatabase(path: string): DashboardDatabase {
  mkdirSync(dirname(path), { recursive: true });
  const db = new DatabaseSync(path);
  db.exec('PRAGMA foreign_keys = ON; PRAGMA journal_mode = WAL; PRAGMA busy_timeout = 5000;');

  const migrate = () => {
    db.exec(`
      CREATE TABLE IF NOT EXISTS settings (
        key TEXT PRIMARY KEY,
        value_json TEXT NOT NULL,
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS sections (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        icon TEXT,
        layout TEXT NOT NULL DEFAULT 'grid' CHECK (layout IN ('grid', 'row')),
        position INTEGER NOT NULL DEFAULT 0,
        enabled INTEGER NOT NULL DEFAULT 1 CHECK (enabled IN (0, 1)),
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS cards (
        id TEXT PRIMARY KEY,
        section_id TEXT NOT NULL REFERENCES sections(id) ON DELETE CASCADE,
        kind TEXT NOT NULL,
        entity_id TEXT,
        title TEXT,
        icon TEXT,
        position INTEGER NOT NULL DEFAULT 0,
        enabled INTEGER NOT NULL DEFAULT 1 CHECK (enabled IN (0, 1)),
        options_json TEXT NOT NULL DEFAULT '{}',
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
      CREATE INDEX IF NOT EXISTS cards_section_position ON cards(section_id, position, id);
    `);
  };

  const setSetting = (key: string, value: unknown) => {
    db.prepare(`
      INSERT INTO settings (key, value_json, updated_at)
      VALUES (?, ?, CURRENT_TIMESTAMP)
      ON CONFLICT(key) DO UPDATE SET value_json = excluded.value_json, updated_at = CURRENT_TIMESTAMP
    `).run(key, JSON.stringify(value));
  };

  const upsertSection = (section: DashboardSectionSeed) => {
    db.prepare(`
      INSERT INTO sections (id, title, description, icon, layout, position, enabled, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
      ON CONFLICT(id) DO UPDATE SET
        title = excluded.title,
        description = excluded.description,
        icon = excluded.icon,
        layout = excluded.layout,
        position = excluded.position,
        enabled = excluded.enabled,
        updated_at = CURRENT_TIMESTAMP
    `).run(
      section.id,
      section.title,
      section.description ?? null,
      section.icon ?? null,
      section.layout ?? 'grid',
      section.position,
      section.enabled === false ? 0 : 1,
    );
  };

  const upsertCard = (card: DashboardCardSeed) => {
    db.prepare(`
      INSERT INTO cards (id, section_id, kind, entity_id, title, icon, position, enabled, options_json, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
      ON CONFLICT(id) DO UPDATE SET
        section_id = excluded.section_id,
        kind = excluded.kind,
        entity_id = excluded.entity_id,
        title = excluded.title,
        icon = excluded.icon,
        position = excluded.position,
        enabled = excluded.enabled,
        options_json = excluded.options_json,
        updated_at = CURRENT_TIMESTAMP
    `).run(
      card.id,
      card.sectionId,
      card.kind,
      card.entityId ?? null,
      card.title ?? null,
      card.icon ?? null,
      card.position,
      card.enabled === false ? 0 : 1,
      JSON.stringify(card.options ?? {}),
    );
  };

  const seed = (seedData: DashboardSeed) => {
    const insertSetting = db.prepare('INSERT OR IGNORE INTO settings (key, value_json) VALUES (?, ?)');
    const insertSection = db.prepare(`
      INSERT OR IGNORE INTO sections (id, title, description, icon, layout, position, enabled)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
    const insertCard = db.prepare(`
      INSERT OR IGNORE INTO cards (id, section_id, kind, entity_id, title, icon, position, enabled, options_json)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    db.exec('BEGIN IMMEDIATE');
    try {
      for (const [key, value] of Object.entries(seedData.settings)) {
        insertSetting.run(key, JSON.stringify(value));
      }
      for (const section of seedData.sections) {
        insertSection.run(
          section.id,
          section.title,
          section.description ?? null,
          section.icon ?? null,
          section.layout ?? 'grid',
          section.position,
          section.enabled === false ? 0 : 1,
        );
      }
      for (const card of seedData.cards) {
        insertCard.run(
          card.id,
          card.sectionId,
          card.kind,
          card.entityId ?? null,
          card.title ?? null,
          card.icon ?? null,
          card.position,
          card.enabled === false ? 0 : 1,
          JSON.stringify(card.options ?? {}),
        );
      }
      db.exec('COMMIT');
    } catch (error) {
      db.exec('ROLLBACK');
      throw error;
    }
  };

  const getConfig = (): DashboardConfig => {
    const settings: Record<string, unknown> = {};
    for (const row of db.prepare('SELECT key, value_json FROM settings ORDER BY key').all() as Array<Record<string, unknown>>) {
      settings[String(row.key)] = parseJson(String(row.value_json), null);
    }
    const sectionRows = db.prepare(`
      SELECT id, title, description, icon, layout, position, enabled
      FROM sections WHERE enabled = 1 ORDER BY position, id
    `).all() as Array<Record<string, unknown>>;
    const cardRows = db.prepare(`
      SELECT id, section_id, kind, entity_id, title, icon, position, enabled, options_json
      FROM cards WHERE enabled = 1 ORDER BY section_id, position, id
    `).all() as Array<Record<string, unknown>>;
    const cardsBySection = new Map<string, DashboardCard[]>();
    for (const row of cardRows) {
      const sectionId = String(row.section_id);
      const cards = cardsBySection.get(sectionId) ?? [];
      cards.push({
        id: String(row.id),
        sectionId,
        kind: String(row.kind) as CardKind,
        entityId: row.entity_id === null ? undefined : String(row.entity_id),
        title: row.title === null ? undefined : String(row.title),
        icon: row.icon === null ? undefined : String(row.icon),
        position: Number(row.position),
        enabled: Boolean(row.enabled),
        options: parseJson(String(row.options_json), {}),
      });
      cardsBySection.set(sectionId, cards);
    }
    return {
      settings,
      sections: sectionRows.map((row) => ({
        id: String(row.id),
        title: String(row.title),
        description: row.description === null ? undefined : String(row.description),
        icon: row.icon === null ? undefined : String(row.icon),
        layout: String(row.layout) as 'grid' | 'row',
        position: Number(row.position),
        enabled: Boolean(row.enabled),
        cards: cardsBySection.get(String(row.id)) ?? [],
      })),
    };
  };

  return {
    migrate,
    seed,
    getConfig,
    setSetting,
    upsertSection,
    upsertCard,
    deleteSection: (id) => void db.prepare('DELETE FROM sections WHERE id = ?').run(id),
    deleteCard: (id) => void db.prepare('DELETE FROM cards WHERE id = ?').run(id),
    close: () => db.close(),
  };
}
