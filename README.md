# derekcolebowen.com

Personal site of **Derek Bowen** — portfolio, blog, books, and work pages.

Originally built on **Hostinger Horizons** and migrated to a standard
[Vite](https://vitejs.dev) + React build so it can be hosted anywhere and
edited with Claude Code. The Horizons builder plugins and the parent-frame
error-reporting scripts have been removed; nothing here depends on Horizons.

## Stack

- Vite + React 18 (JavaScript, JSX)
- React Router (client-side routing, single-page app)
- Tailwind CSS + Radix UI primitives
- Framer Motion

## Repository layout

```
apps/web/            the site (a workspace of the root monorepo)
  index.html         document shell (title, meta, favicon)
  src/
    App.jsx          all routes
    pages/           one component per page (Home, Blog, About, Books, …)
    components/      Header, Footer, shared UI, and ui/ (Radix primitives)
    index.css        Tailwind layers + theme tokens (navy #0A0E27 / cyan #00D9FF)
  public/            static assets copied verbatim into the build
    favicon.svg      brand hexagon
    _redirects       SPA fallback for Netlify / Cloudflare Pages
    .htaccess        SPA fallback for Apache / Hostinger
  tools/generate-llms.js   generates public/llms.txt from page <Helmet> tags at build
```

## Local development

Requires Node 22 (see `.nvmrc`).

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build

```bash
npm run build        # outputs static files to dist/apps/web
npm run start        # preview the production build locally
```

The output in `dist/apps/web/` is fully static — deploy it to any static host.

## Deploy

Any static host works. The site is a single-page app, so the host must serve
`index.html` for unknown paths (deep links like `/blog/...`); the config for
that is already included per host.

**Cloudflare Pages / Netlify** (recommended — connect the repo, auto-deploy on push):

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist/apps/web` |
| Node version | `22` |

`public/_redirects` handles the SPA fallback on both.

**Hostinger / any Apache host:** upload the contents of `dist/apps/web/`.
`public/.htaccess` (copied into the build) handles the SPA fallback.

## Notes

- **`/admin` is a demo, not a real CMS.** The login (`src/contexts/AdminAuthContext.jsx`)
  runs entirely in the browser against a hard-coded password hash, and posts
  from the editor are written to the visitor's own `localStorage` — they are
  not saved to a server and are not shared between visitors. There is no backend
  and no protected data, but the routes are publicly reachable. Before relying
  on it, either remove the `/admin` routes from `src/App.jsx` or wire it to a
  real auth provider and database.
- Blog post pages are hand-authored React components under `src/pages/`, one
  per post, registered as routes in `src/App.jsx`.
- **Images still load from Hostinger's Horizons CDN**
  (`https://horizons-cdn.hostinger.com/d0673265-…/…`). They are public URLs and
  keep working after migrating hosting, but they are an external dependency on
  the old Horizons project. To fully cut ties, download those images into
  `apps/web/public/` and swap the `src` URLs to local paths.
