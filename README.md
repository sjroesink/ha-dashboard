# HA Dashboard

Custom, database-driven Home Assistant dashboard for `dashboard.roes.ink`, built
with React 19 and [HAKit](https://github.com/shannonhochkins/ha-component-kit).

## Architecture

- **Frontend:** Vite + React + `@hakit/core` / `@hakit/components`
- **Home Assistant:** browser-side OAuth via `HassConnect`; no HA token is built
  into JavaScript, Docker images or SQLite
- **Backend:** Node 24 HTTP server for static assets, `/healthz` and `/api/config`
- **Configuration:** SQLite at `/app/data/dashboard.sqlite`
- **Runtime:** Docker on Unraid, exposed internally through Traefik

The initial database is seeded once. Later edits are retained across container
rebuilds and are reflected in the browser within 15 seconds without rebuilding
the frontend.

## Development

```sh
npm ci
npm test
npm run build
npm run lint
PORT=3000 DASHBOARD_DB=./data/dashboard.sqlite npm start
```

## Configuration CLI

The CLI edits the same SQLite database used by the server:

```sh
npm run config -- export
npm run config -- set-setting title '"Mijn huis"'
npm run config -- upsert-section '{"id":"kitchen","title":"Keuken","position":25}'
npm run config -- upsert-card '{"id":"kitchen-light","sectionId":"kitchen","kind":"button","entityId":"light.keuken","position":10,"options":{"service":"toggle","layoutType":"slim"}}'
npm run config -- delete-card kitchen-light
```

On Unraid, Hermes can apply the same commands directly:

```sh
docker exec ha-dashboard node server/cli.ts export
docker exec ha-dashboard node server/cli.ts set-setting title '"Mijn huis"'
```

Supported card kinds: `button`, `sensor`, `climate`, `media`, `entities`,
`weather`, and `camera`. Sections and cards are sorted by `position`.

## Security

`dashboard.roes.ink` and `homeassistant.roes.ink` use private DNS records and
are only reachable on LAN/VPN. Home Assistant remains responsible for user
authentication. The dashboard database contains layout configuration and entity
IDs, never Home Assistant credentials.
