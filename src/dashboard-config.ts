export type DashboardCardKind = 'button' | 'sensor' | 'climate' | 'media' | 'entities' | 'weather' | 'camera';

export interface DashboardCardConfig {
  id: string;
  sectionId: string;
  kind: DashboardCardKind;
  entityId?: string;
  title?: string;
  icon?: string;
  position: number;
  enabled: boolean;
  options: Record<string, unknown>;
}

export interface DashboardSectionConfig {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  layout?: 'grid' | 'row';
  position: number;
  enabled: boolean;
  cards: DashboardCardConfig[];
}

export interface DashboardConfig {
  settings: {
    title?: string;
    subtitle?: string;
    homeAssistantUrl?: string;
    accent?: string;
    defaultDarkMode?: boolean;
    [key: string]: unknown;
  };
  sections: DashboardSectionConfig[];
}
