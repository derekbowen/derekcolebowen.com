#!/usr/bin/env node
// Generates public/sitemap.xml and public/llms.txt from the site's real page
// inventory: the static routes declared here, plus every project and article
// slug read out of src/data/. Keeping both files on one generator means they
// can't drift apart, and reading the slugs from the data means a new project
// or article can't be left out.
//
// Excluded on purpose: /site-status (noindex), the catch-all, and the
// old-URL redirect routes in App.tsx.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const SITE_URL = 'https://derekcolebowen.com';
const __dirname = dirname(fileURLToPath(import.meta.url));
const src = (f) => readFileSync(resolve(__dirname, '../src', f), 'utf8');

/** Pulls `slug: 'x'` / `title: 'y'` pairs out of a data file, in file order. */
function records(file, titleKey) {
	const text = src(file);
	const out = [];
	for (const m of text.matchAll(/\n\s{4}slug: '([a-z0-9-]+)',/g)) {
		const after = text.slice(m.index);
		const t = after.match(new RegExp(`\\n\\s{4}${titleKey}:\\s*'((?:[^'\\\\]|\\\\.)*)'`));
		out.push({ slug: m[1], title: t ? t[1].replace(/\\'/g, "'") : m[1] });
	}
	return out;
}

const projects = records('data/projects.ts', 'name');
const articles = records('data/writing.ts', 'title');

if (!projects.length || !articles.length) {
	console.error('✗ No projects or articles found in src/data — refusing to write an empty sitemap.');
	process.exit(1);
}

const PAGES = [
	{ path: '/', title: 'Derek Bowen', description: 'Commercial driver, marketplace founder and software builder. The work, the writing, and honest status on every project.' },
	{ path: '/about', title: 'About Derek Bowen', description: '20+ years in commercial transportation and carnival operations, self-taught software, five books, three kids.' },
	{ path: '/work', title: 'Work', description: 'Every project by category: marketplaces, SaaS & safety, logistics & automation, publishing.' },
	...projects.map((p) => ({ path: `/work/${p.slug}`, title: p.title, description: `Case study: what was built, what shipped, and what is still unverified.` })),
	{ path: '/seo-systems', title: 'Technical SEO & Automation Systems', description: '10,000+ pages generated, and an honest account of how many were deployed, indexed and earning clicks.' },
	{ path: '/writing', title: 'Writing & Books', description: 'Articles on trucking, marketplaces, AI tools and programmatic SEO, plus five books on Amazon.' },
	...articles.map((a) => ({ path: `/blog/${a.slug}`, title: a.title, description: 'Article by Derek Bowen.' })),
	{ path: '/journey', title: 'Journey', description: 'A timeline from carnival lots and a Class A CDL to marketplaces and operations software.' },
	{ path: '/now', title: 'Now', description: 'What Derek is working on, driving and writing this month.' },
	{ path: '/contact', title: 'Contact', description: 'How to reach Derek Bowen.' },
];

const lastmod = new Date().toISOString().slice(0, 10);
const urls = PAGES.map((p) => {
	const loc = `${SITE_URL}${p.path === '/' ? '' : p.path}`;
	return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
}).join('\n');

writeFileSync(
	resolve(__dirname, '../public/sitemap.xml'),
	`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

writeFileSync(
	resolve(__dirname, '../public/llms.txt'),
	`# Derek Bowen\n\n> Commercial driver, marketplace founder and software builder in Riverside, California.\n\n## Pages\n` +
		PAGES.map((p) => `- [${p.title}](${SITE_URL}${p.path === '/' ? '/' : p.path}): ${p.description}`).join('\n') +
		'\n',
);

console.log(`✓ sitemap.xml + llms.txt: ${PAGES.length} URLs (${projects.length} projects, ${articles.length} articles)`);
