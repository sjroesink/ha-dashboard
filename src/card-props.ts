import type { DashboardCardConfig } from './dashboard-config';

interface CommonCardProps {
  entity: string | undefined;
  title: string | undefined;
  icon: string | undefined;
  className: string;
}

export function commonCardProps(card: DashboardCardConfig): CommonCardProps {
  return {
    entity: card.entityId,
    title: card.title,
    icon: card.icon,
    className: `configured-card configured-card--${card.kind}`,
  };
}

export function buttonCardProps(card: DashboardCardConfig): Record<string, unknown> {
  return {
    ...commonCardProps(card),
    service: card.options.service ?? 'toggle',
    ...(card.options.serviceData === undefined ? {} : { serviceData: card.options.serviceData }),
    layoutType: card.options.layoutType ?? 'slim',
  };
}
