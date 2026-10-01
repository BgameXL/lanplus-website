# LAN+ Website

The home for **LAN+**: a minecraft multiplayer mod for playing with
friends, hosting worlds, sharing a profile, and discovering community worlds.

This repository uses the Next.js framework. It is deliberately separate from the LAN+ mod, the java backend, and TCP/TLS relay.

## What the website is for

- Explain what LAN+ is and provide downloads.
- Show public, opt-in community worlds.
- Render public player profiles using a friend code.

## Planned routes

| Route        | Status  | Purpose                               |
|--------------|---------|---------------------------------------|
| `/`          | Initial | Landing page and product overview     |
| `/downloads` | Planned | Supported versions and download links |
| `/worlds`    | Initial | Public LAN+ world directory           |
| `/profile`   | Initial | Public, opt-in player profile         |
| `/cosmetics` | Future  | Cosmetics gallery or information      |
| `/art`       | Initial | Community art gallery                 |

## Local development

Requirements:

- Node.js 20.9 or newer.
- npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Use `http://test.lanplus.dev`.

> If you want you can open a backend from https://github.com/BgameXL/lanplus-backend-relay.

Before opening a pull request, run:

```bash
npm run lint
npm run build
```

## Documentation

- [Design direction](docs/design.md)
- [Pages and content](docs/pages.md)
- [Architecture and API boundary](docs/architecture.md)
- [Backend integration contract](docs/backend-integration.md)
- [Contribution guide](CONTRIBUTING.md)

## Values

LAN+ should feel friendly, game-adjacent, and personal not like a generic website.
A contributor should be able to improve a component or page without needing to understand the mod ecosystem.