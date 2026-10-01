# Contributing to the LAN+ Website

Thanks for considering a contribution.

## Good first contributions

- Improve a responsive layout or accessibility issue.
- Build a small reusable component.
- Polish a landing-page section.
- Improve copy, documentation, or translations.
- Implement one planned page from `docs/pages.md`.

Before beginning a larger visual change, open an issue or discuss in the discord server regarding any idea or change.
This prevents someone from spending time on something that doesn't fit LAN+.

## Setup

1. Fork the repository and create a focused branch.
2. Install Node.js 20.9 and npm.
3. Install `npm install`.
4. Run the site `npm run dev`.

Backend access is not required for normal frontend work. Without it, pages that depend on public data display their unavailable state.
If a contribution needs live test data, ask the maintainer for the test setup, contributors are not expected to run the backend.

Before submitting a change, run `npm run lint` and `npm run build`.

## Pull requests

- Keep each pull request focused on one task.
- Describe what changed and attach before/after screenshots for visible UI.
- Test desktop widths.
- Do not add a dependency, a simple component or CSS rule is enough but if you want, discuss this with a maintainer.

## Design guardrails

Follow [the design document](docs/design.md).