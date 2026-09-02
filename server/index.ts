import { resolve } from 'node:path';
import { openDashboardDatabase } from './database.ts';
import { defaultDashboard } from './defaults.ts';
import { createDashboardServer } from './server.ts';

const port = Number(process.env.PORT ?? 3000);
const databasePath = process.env.DASHBOARD_DB ?? './data/dashboard.sqlite';
const distDirectory = process.env.DASHBOARD_DIST ?? './dist';
const database = openDashboardDatabase(resolve(databasePath));
database.migrate();
database.seed(defaultDashboard);
const server = createDashboardServer({ databasePath, distDirectory: resolve(distDirectory), database });

await server.listen(port);
console.log(`HA dashboard listening on :${port}`);

const stop = async () => {
  await server.close();
  process.exit(0);
};
process.on('SIGINT', stop);
process.on('SIGTERM', stop);
