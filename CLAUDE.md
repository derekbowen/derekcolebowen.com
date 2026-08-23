# CLAUDE.md

Guidance for Claude Code when working in this repo.

## What this is

`derekcolebowen.com` — Derek Bowen's personal site (portfolio, blog, books,
work pages). A Vite + React single-page app, migrated off Hostinger Horizons.
See `README.md` for the full layout and deploy settings.

## Commands

```bash
npm install
npm run dev      # dev server on :3000
npm run build    # static output to dist/apps/web
npm run lint     # eslint
```

Node 22 (`.nvmrc`).

## Where things live

- Routes: `apps/web/src/App.jsx`
- Pages: `apps/web/src/pages/*.jsx` (one component per page; blog posts too)
- Header/Footer/shared UI: `apps/web/src/components/`
- Reusable primitives: `apps/web/src/components/ui/` (Radix-based — usually leave alone)
- Theme tokens & global CSS: `apps/web/src/index.css` and `apps/web/tailwind.config.js`
- Document `<title>`/meta/favicon: `apps/web/index.html`
- Per-page `<title>`/description: the `<Helmet>` block inside each page component

## Conventions

- JavaScript + JSX (not TypeScript). Import alias `@/` → `apps/web/src/`.
- Brand palette: navy `#0A0E27`, cyan `#00D9FF`, accent green `#00FF88`.
- Content lives in the components; there is no CMS or data layer to edit.
- After changing anything, run `npm run build` and confirm it succeeds before pushing.

## Do not

- Do not reintroduce Hostinger Horizons plugins or the parent-frame
  (`window.parent.postMessage`) error-reporting scripts — they were removed on purpose.
- Do not treat `/admin` as real auth. It is browser-only (hard-coded hash +
  `localStorage`) with no backend. See the note in `README.md`.
