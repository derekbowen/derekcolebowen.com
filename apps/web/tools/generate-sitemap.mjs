#!/usr/bin/env node
// Generates public/sitemap.xml from the actual <Route> inventory in src/App.jsx,
// so the sitemap can't silently drift from the real routes. Excludes the
// catch-all, admin routes, and any dynamic (:param) route. Always emits the
// production domain — never staging.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const SITE_URL = 'https://derekcolebowen.com';
const __dirname = dirname(fileURLToPath(import.meta.url));
const appPath = resolve(__dirname, '../src/App.jsx');
const outPath = resolve(__dirname, '../public/sitemap.xml');

const src = readFileSync(appPath, 'utf8');
const paths = [...src.matchAll(/<Route\s+path=["']([^"']+)["']/g)].map((m) => m[1]);

const isPublic = (p) => p !== '*' && !p.startsWith('/admin') && !p.includes(':');
const routes = [...new Set(paths.filter(isPublic))].sort();

const lastmod = new Date().toISOString().slice(0, 10);
const body = routes
  .map((p) => {
    const loc = `${SITE_URL}${p === '/' ? '' : p.replace(/\/+$/, '')}`;
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

writeFileSync(outPath, xml);
console.log(`✓ sitemap.xml: ${routes.length} public URLs`);
