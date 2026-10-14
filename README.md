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

Live on **Vercel**, deployed automatically from this repo.

| Setting | Value |
| --- | --- |
| Project | `derekcolebowen` |
| Build command | `npm run build` |
| Output directory | `dist/apps/web` |
| Node version | `22.x` |

`vercel.json` holds these settings plus the SPA rewrite, so pushes to `main`
build and deploy without any dashboard configuration. Every push to `main`
ships to production.

Other hosts are pre-configured too, if this ever needs to move:
`netlify.toml` (Netlify), `apps/web/public/_redirects` (Netlify/Cloudflare
Pages) and `apps/web/public/.htaccess` (Apache/Hostinger) all carry the same
build and SPA-routing settings.

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
