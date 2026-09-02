import type { DashboardSeed } from './database.ts';

export const defaultDashboard: DashboardSeed = {
  settings: {
    title: 'Thuis',
    subtitle: 'Sander & Ebru',
    homeAssistantUrl: 'https://homeassistant.roes.ink',
    accent: '#d97745',
    defaultDarkMode: true,
  },
  sections: [
    { id: 'living', title: 'Woonkamer', description: 'Licht, temperatuur en entertainment.', icon: 'mdi:sofa', position: 20 },
    { id: 'upstairs', title: 'Boven', description: 'Slaapkamer, kantoor en zolder.', icon: 'mdi:stairs-up', position: 30 },
    { id: 'outside', title: 'Buiten', description: 'Veranda en buitentemperatuur.', icon: 'mdi:tree-outline', position: 40 },
    { id: 'system', title: 'Huisstatus', description: 'Back-up, netwerk en batterijstatus.', icon: 'mdi:shield-check-outline', position: 50 },
  ],
  cards: [
    { id: 'living-light', sectionId: 'living', kind: 'button', entityId: 'light.woonkamer', title: 'Woonkamer', icon: 'mdi:floor-lamp', position: 10, options: { service: 'toggle', layoutType: 'slim' } },
    { id: 'dining-light', sectionId: 'living', kind: 'button', entityId: 'light.eettafel', title: 'Eettafel', icon: 'mdi:ceiling-light', position: 20, options: { service: 'toggle', layoutType: 'slim' } },
    { id: 'hall-light', sectionId: 'living', kind: 'button', entityId: 'light.hal', title: 'Hal', icon: 'mdi:wall-sconce-flat', position: 30, options: { service: 'toggle', layoutType: 'slim' } },
    { id: 'living-climate', sectionId: 'living', kind: 'climate', entityId: 'climate.woonkamer', title: 'Verwarming', position: 40, options: { layoutType: 'slim-vertical' } },
    { id: 'living-humidity', sectionId: 'living', kind: 'sensor', entityId: 'sensor.woonkamer_luchtvochtigheid', title: 'Luchtvochtigheid', position: 50 },
    { id: 'television', sectionId: 'living', kind: 'media', entityId: 'media_player.shield_2', title: 'Televisie', position: 60, options: { layout: 'slim' } },
    { id: 'jbl-now-playing', sectionId: 'living', kind: 'media', entityId: 'media_player.jbl_bar_3', title: 'Nu afgespeeld', position: 70, options: { layout: 'slim' } },
    { id: 'spotify-feestje', sectionId: 'living', kind: 'button', entityId: 'media_player.jbl_bar_3', title: 'Feestje', icon: 'mdi:party-popper', position: 80, options: { service: 'playMedia', serviceData: { media_content_id: 'spotify://playlist/7nmueJ837vq0jL4ZtAnkCM', media_content_type: 'playlist' }, layoutType: 'slim' } },
    { id: 'bedroom-light', sectionId: 'upstairs', kind: 'button', entityId: 'light.slaapkamer_2', title: 'Slaapkamer', icon: 'mdi:bed-king-outline', position: 10, options: { service: 'toggle', layoutType: 'slim' } },
    { id: 'office-light', sectionId: 'upstairs', kind: 'button', entityId: 'light.kantoor', title: 'Kantoor', icon: 'mdi:desk', position: 20, options: { service: 'toggle', layoutType: 'slim' } },
    { id: 'attic-left', sectionId: 'upstairs', kind: 'button', entityId: 'light.zolder_verlichting_links', title: 'Zolder links', position: 30, options: { service: 'toggle', layoutType: 'slim' } },
    { id: 'attic-right', sectionId: 'upstairs', kind: 'button', entityId: 'light.zolder_verlichting_rechts', title: 'Zolder rechts', position: 40, options: { service: 'toggle', layoutType: 'slim' } },
    { id: 'attic-climate', sectionId: 'upstairs', kind: 'climate', entityId: 'climate.airco', title: 'Airco', position: 50, options: { layoutType: 'slim-vertical' } },
    { id: 'veranda-light', sectionId: 'outside', kind: 'button', entityId: 'light.veranda_2', title: 'Veranda', icon: 'mdi:string-lights', position: 10, options: { service: 'toggle', layoutType: 'slim' } },
    { id: 'veranda-temperature', sectionId: 'outside', kind: 'sensor', entityId: 'sensor.veranda_sensor_temperatuur', title: 'Temperatuur', position: 20 },
    { id: 'veranda-motion', sectionId: 'outside', kind: 'button', entityId: 'binary_sensor.veranda_beweging', title: 'Beweging', position: 30, options: { layoutType: 'slim' } },
    { id: 'backup-status', sectionId: 'system', kind: 'button', entityId: 'sensor.backup_backup_manager_state', title: 'Back-up', icon: 'mdi:backup-restore', position: 10, options: { layoutType: 'slim' } },
    { id: 'zigbee-status', sectionId: 'system', kind: 'button', entityId: 'binary_sensor.zigbee2mqtt_bridge_connection_state', title: 'Zigbee', icon: 'mdi:zigbee', position: 20, options: { layoutType: 'slim' } },
    { id: 'phone-battery', sectionId: 'system', kind: 'sensor', entityId: 'sensor.pixel_9_pro_battery_level', title: 'Telefoon', position: 30 },
  ],
};
