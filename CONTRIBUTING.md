# Contributing to the LAN+ Website

Thanks for considering a contribution.

---

>New to this? The usual flow is:
>1. Open an issue with a template and describe what you want to build or fix.
>2. For a larger change, wait for a maintainer to confirm.
>3. Fork the repository and work on a focused branch.
>4. Open a pull request that links the issue with `Closes #123`.
>5. After review, the issue closes and its card moves to Done.

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
Contributors are not expected to run the backend.

Before submitting a change, run `npm run lint` and `npm run build`.

## Issues

- Open an issue with a template (bug or feature) describing what you want to do, search first to avoid duplicates, and keep one topic per issue.
- You can also pick up an existing issue marked Ready.
- Label meanings: `good first issue` is small and self-contained, `help wanted` is where help is most useful, and `needs-assets` is waiting on an asset.

## Pull requests

- Keep each pull request focused on one task.
- Link the issue it resolves with `Closes #123`, so it moves to Done on merge.
- Open as a draft while you work, mark it ready when done.
- Describe what changed and attach before/after screenshots for visible UI.
- Test desktop widths.
- Respond to review comments and keep your branch up to date.
- Do not add a dependency, a simple component or CSS rule is enough but if you want, discuss this with a maintainer.

---

## Using AI tools

AI assistants are welcome for writing or reviewing code and you stay responsible for everything you submit:

- Please understand your change, if you cannot explain why and how it works, then do not open a PR.
- It must meet the requirements, pass `npm run lint` and `npm run build`, follow `docs/design.md`.
- Do **NOT** submit AI-generated assets (icons, illustrations, banners, etc), assets are made by humans so use a placeholder if needed and leave a comment/note.
- Please mention if any AI was used in your pull request so the maintainer knows what to check.
- Make sure AI output does not pull in copyrighted code.

Low effort and unreviewed AI output will be closed and you may not be able to submit any contributions.

## Design guardrails

Follow [the design document](docs/design.md).