import type { ComponentType, CSSProperties } from 'react';
import {
  ButtonCard,
  ClimateCard,
  EntitiesCard,
  EntitiesCardRow,
  Row,
  MediaPlayerCard,
  SensorCard,
  TimeCard,
  WeatherCard,
} from '@hakit/components';
import { Icon } from '@iconify/react';
import type { DashboardCardConfig, DashboardConfig, DashboardSectionConfig } from './dashboard-config';

const DynamicButton = ButtonCard as unknown as ComponentType<Record<string, unknown>>;
const DynamicClimate = ClimateCard as unknown as ComponentType<Record<string, unknown>>;
const DynamicMedia = MediaPlayerCard as unknown as ComponentType<Record<string, unknown>>;
const DynamicSensor = SensorCard as unknown as ComponentType<Record<string, unknown>>;
const DynamicWeather = WeatherCard as unknown as ComponentType<Record<string, unknown>>;
const DynamicEntitiesRow = EntitiesCardRow as unknown as ComponentType<Record<string, unknown>>;

function DashboardCard({ card }: { card: DashboardCardConfig }) {
  if (!card.entityId && card.kind !== 'entities') return null;
  const common = {
    key: card.id,
    entity: card.entityId,
    title: card.title,
    icon: card.icon,
    className: `configured-card configured-card--${card.kind}`,
  };
  switch (card.kind) {
    case 'button':
      return <DynamicButton {...common} service={card.options.service ?? 'toggle'} layoutType={card.options.layoutType ?? 'slim'} />;
    case 'sensor':
      return <DynamicSensor {...common} layoutType={card.options.layoutType ?? 'slim'} />;
    case 'climate':
      return <DynamicClimate {...common} layoutType={card.options.layoutType ?? 'slim-vertical'} />;
    case 'media':
      return <DynamicMedia {...common} layout={card.options.layout ?? 'slim'} />;
    case 'weather':
      return <DynamicWeather {...common} />;
    case 'entities': {
      const entities = Array.isArray(card.options.entities) ? card.options.entities.filter((entity): entity is string => typeof entity === 'string') : [];
      return <EntitiesCard className={common.className}>
        {entities.map((entity) => <DynamicEntitiesRow key={entity} entity={entity} />)}
      </EntitiesCard>;
    }
    default:
      return <DynamicButton {...common} layoutType="slim" />;
  }
}

function Navigation({ sections }: { sections: DashboardSectionConfig[] }) {
  return <nav className="dashboard-nav" aria-label="Ruimtes">
    <a className="brand" href="#top" aria-label="Naar boven"><span>H</span><strong>thuis</strong></a>
    <div className="nav-links">
      {sections.map((section) => <a key={section.id} href={`#${section.id}`}>
        <Icon icon={section.icon ?? 'mdi:circle-small'} />
        <span>{section.title}</span>
      </a>)}
    </div>
    <div className="connection-note"><i /> live via Home Assistant</div>
  </nav>;
}

export default function Dashboard({
  config,
  configError,
  onRefresh,
}: {
  config: DashboardConfig;
  configError?: string;
  onRefresh: () => Promise<void>;
}) {
  const title = String(config.settings.title ?? 'Thuis');
  const subtitle = String(config.settings.subtitle ?? 'Home Assistant');
  return <div className="dashboard-shell" id="top" style={{ '--accent': String(config.settings.accent ?? '#d97745') } as CSSProperties}>
    <Navigation sections={config.sections} />
    <main className="dashboard-main">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">{subtitle}</p>
          <h1>{title}</h1>
        </div>
        <div className="header-time"><TimeCard hideIcon hideDate center /></div>
      </header>
      {configError && <button className="config-warning" type="button" onClick={() => void onRefresh()}>{configError} · opnieuw proberen</button>}
      <div className="dashboard-sections">
        {config.sections.map((section) => <section key={section.id} id={section.id} className="dashboard-section">
          <div className="section-heading">
            <Icon icon={section.icon ?? 'mdi:circle-small'} />
            <div><h2>{section.title}</h2>{section.description && <p>{section.description}</p>}</div>
          </div>
          <Row className="section-grid" fullWidth justifyContent="flex-start" alignItems="stretch" gap="1rem">
            {section.cards.map((card) => <DashboardCard key={card.id} card={card} />)}
          </Row>
        </section>)}
      </div>
    </main>
  </div>;
}
