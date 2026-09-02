import { pathToFileURL } from 'node:url';
import { openDashboardDatabase, type DashboardDatabase, type DashboardCardSeed, type DashboardSectionSeed } from './database.ts';

export function runDashboardCommand(
  database: DashboardDatabase,
  args: string[],
  output: (line: string) => void = console.log,
): void {
  const [command, ...values] = args;
  switch (command) {
    case 'export':
      output(JSON.stringify(database.getConfig(), null, 2));
      return;
    case 'set-setting': {
      const [key, valueJson] = values;
      if (!key || valueJson === undefined) throw new Error('usage: set-setting <key> <json-value>');
      database.setSetting(key, JSON.parse(valueJson));
      output(`updated setting ${key}`);
      return;
    }
    case 'upsert-section': {
      const payload = values.join(' ');
      if (!payload) throw new Error('usage: upsert-section <json>');
      const section = JSON.parse(payload) as DashboardSectionSeed;
      database.upsertSection(section);
      output(`updated section ${section.id}`);
      return;
    }
    case 'upsert-card': {
      const payload = values.join(' ');
      if (!payload) throw new Error('usage: upsert-card <json>');
      const card = JSON.parse(payload) as DashboardCardSeed;
      database.upsertCard(card);
      output(`updated card ${card.id}`);
      return;
    }
    case 'delete-section': {
      const [id] = values;
      if (!id) throw new Error('usage: delete-section <id>');
      database.deleteSection(id);
      output(`deleted section ${id}`);
      return;
    }
    case 'delete-card': {
      const [id] = values;
      if (!id) throw new Error('usage: delete-card <id>');
      database.deleteCard(id);
      output(`deleted card ${id}`);
      return;
    }
    default:
      throw new Error('commands: export, set-setting, upsert-section, upsert-card, delete-section, delete-card');
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const databasePath = process.env.DASHBOARD_DB ?? './data/dashboard.sqlite';
  const database = openDashboardDatabase(databasePath);
  try {
    database.migrate();
    runDashboardCommand(database, process.argv.slice(2));
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  } finally {
    database.close();
  }
}
