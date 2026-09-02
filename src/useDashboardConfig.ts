import { useCallback, useEffect, useState } from 'react';
import type { DashboardConfig } from './dashboard-config';

export function useDashboardConfig() {
  const [config, setConfig] = useState<DashboardConfig>();
  const [error, setError] = useState<string>();

  const refresh = useCallback(async () => {
    try {
      const response = await fetch('/api/config', { cache: 'no-store' });
      if (!response.ok) throw new Error(`configuratie kon niet worden geladen (${response.status})`);
      setConfig(await response.json() as DashboardConfig);
      setError(undefined);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : String(reason));
    }
  }, []);

  useEffect(() => {
    void refresh();
    const timer = window.setInterval(() => void refresh(), 15_000);
    return () => window.clearInterval(timer);
  }, [refresh]);

  return { config, error, refresh };
}
