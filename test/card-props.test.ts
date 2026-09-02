import assert from 'node:assert/strict';
import test from 'node:test';
import { buttonCardProps } from '../src/card-props.ts';
import type { DashboardCardConfig } from '../src/dashboard-config.ts';

test('playlist button forwards playMedia service data to HAKit', () => {
  const card: DashboardCardConfig = {
    id: 'party-playlist',
    sectionId: 'living',
    kind: 'button',
    entityId: 'media_player.jbl_bar_3',
    title: 'Feestje',
    icon: 'mdi:party-popper',
    position: 80,
    enabled: true,
    options: {
      service: 'playMedia',
      serviceData: {
        media_content_id: 'spotify://playlist/7nmueJ837vq0jL4ZtAnkCM',
        media_content_type: 'playlist',
      },
      layoutType: 'slim',
    },
  };

  assert.deepEqual(buttonCardProps(card), {
    entity: 'media_player.jbl_bar_3',
    title: 'Feestje',
    icon: 'mdi:party-popper',
    className: 'configured-card configured-card--button',
    service: 'playMedia',
    serviceData: {
      media_content_id: 'spotify://playlist/7nmueJ837vq0jL4ZtAnkCM',
      media_content_type: 'playlist',
    },
    layoutType: 'slim',
  });
});
