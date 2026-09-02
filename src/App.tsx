import { ThemeProvider } from '@hakit/components';
import { HassConnect } from '@hakit/core';
import Dashboard from './Dashboard';
import { useDashboardConfig } from './useDashboardConfig';

function Loading({ error }: { error?: string }) {
  return <main className="boot-screen">
    <div className="boot-mark">H</div>
    <p>{error ?? 'Dashboard wordt geladen…'}</p>
  </main>;
}

function App() {
  const { config, error, refresh } = useDashboardConfig();
  if (!config) return <Loading error={error} />;
  const hassUrl = String(config.settings.homeAssistantUrl ?? 'https://homeassistant.roes.ink');
  return <HassConnect hassUrl={hassUrl}>
    <ThemeProvider darkMode={config.settings.defaultDarkMode !== false} />
    <Dashboard config={config} configError={error} onRefresh={refresh} />
  </HassConnect>;
}

export default App;
