import React from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import { BOOKS, ARTICLES } from '../data/writing'
import { NOW } from '../data/now'
import { SITE } from '../data/site'
import { useSeo } from '../components/useSeo'
import { PageIntro } from '../components/PageIntro'
import { NeedsMark } from '../components/AssetPlaceholder'

type Item = { what: string; where: string; to: string }

function collect() {
  const photos: Item[] = [
    { what: 'Confirm the portrait used site-wide is Derek', where: 'Home, About, articles', to: '/' },
    { what: 'Truck hauling carnival equipment (doubles)', where: 'Home', to: '/' },
    { what: 'Derek in or beside the cab', where: 'About', to: '/about' },
    { what: 'Early carnival lot photo', where: 'Journey', to: '/journey' },
  ]
  const data: Item[] = []
  const links: Item[] = []

  PROJECTS.forEach((p) => {
    const to = `/work/${p.slug}`
    ;[p.hero, ...(p.gallery ?? [])].forEach((v) => v.kind === 'placeholder' && photos.push({ what: v.need, where: p.name, to }))
    p.metrics.forEach((m) => {
      if (m.verified === false) data.push({ what: `Verify figure: ${m.label}`, where: p.name, to })
      else if (!m.asOf) data.push({ what: `Add measurement date: ${m.value} ${m.label}`, where: p.name, to })
    })
    if (p.status === 'verify') data.push({ what: 'Confirm overall status', where: p.name, to })
    p.liveTable.filter((r) => r.status === 'verify').forEach((r) => data.push({ what: `Confirm status: ${r.part}`, where: p.name, to }))
    if (!p.years) data.push({ what: 'Add years active', where: p.name, to })
    if (p.link.state === 'needed') links.push({ what: p.link.label, where: p.name, to })
  })

  BOOKS.filter((b) => !b.url).forEach((b) => links.push({ what: `Amazon link: ${b.title}`, where: 'Writing · Books', to: '/writing#books' }))
  links.push({ what: 'Confirm these five are the right five titles', where: 'Writing · Books', to: '/writing#books' })
  links.push({ what: 'Amazon author page URL', where: 'Writing, structured data', to: '/writing#books' })
  links.push({ what: 'Pool Rental Near Me App Store / Google Play links', where: 'Pool Rental Near Me', to: '/work/pool-rental-near-me' })
  links.push({ what: 'Learning-resource list and links', where: 'Writing · Resources', to: '/writing#resources' })
  links.push({ what: 'Contact email address and form delivery', where: 'Contact', to: '/contact' })

  data.push({ what: 'Search Console counts: deployed, indexed, earning clicks (with date range)', where: 'SEO Systems', to: '/seo-systems' })
  data.push({ what: 'Years for undated milestones', where: 'Journey', to: '/journey' })
  data.push({ what: 'Hazmat certification status', where: 'About', to: '/about' })
  data.push({ what: 'Role and status of each earlier venture', where: 'Work', to: '/work' })
  if (!NOW.lastUpdated) data.push({ what: 'Set the “last updated” date', where: 'Now', to: '/now' })

  return { photos, data, links }
}

const DECISIONS = [
  'The dispatch system doesn’t name the carnival operation it serves. Name it only with the company’s permission.',
  'No screenshots of the dispatch system until they’re redacted: names, unit numbers, plates, documents and access details removed.',
  'Rental Waivers pricing from the old site (6¢–10¢ per waiver, 250 free for PRNM hosts) is held back until confirmed as current.',
]

const CORRECTIONS = [
  'Books: the old site listed 7 (and 6 on About). This site shows 5, per the confirmed count. The Backyard Entrepreneur and Pool Host Riches are held back pending the catalog.',
  'Removed undated or unverified figures: “500+ Active Listings”, PoolHostPro “500+ hosts / 10,000+ bookings”, founders.click “$0.012 per page”.',
  'Removed all stock photography (Unsplash heroes and project images) and generic “team” photos.',
  'Removed the retro intro overlay and its randomly generated visitor counter.',
  'Removed two blog listings that had no published article behind them.',
  '“Why Every Entrepreneur Should Write a Book”: “six books” corrected to five.',
  'Removed the browser-only admin area from the public site.',
]

const SITEMAP = [
  '/',
  '/about',
  '/work',
  ...PROJECTS.map((p) => `/work/${p.slug}`),
  '/seo-systems',
  '/writing',
  ...ARTICLES.map((a) => `/blog/${a.slug}`),
  '/journey',
  '/now',
  '/contact',
]

const REDIRECTS = [
  ['/portfolio', '/work'],
  ['/pool-rental-near-me', '/work/pool-rental-near-me'],
  ['/founders-click', '/work/founders-click'],
  ['/books', '/writing#books'],
  ['/blog', '/writing'],
  ['/work-with-me', '/contact'],
  ['/subscribe', '/contact'],
  ['/services-for-developers', '/contact'],
]

export function SiteStatusPage() {
  useSeo({
    title: 'Site status & launch checklist | Derek Bowen',
    description: 'Every placeholder, missing link and unverified figure on this site, in one list.',
    path: '/site-status',
    noindex: true,
  })
  const { photos, data, links } = collect()

  return (
    <>
      <PageIntro
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Site status' }]}
        title="Launch checklist."
        lede="Everything on this site that’s still a placeholder or still needs to be verified. When it’s on this list, the page itself says so too. Not indexed."
      >
        <dl className="mt-10 grid max-w-[640px] grid-cols-3 gap-6 border-t border-line pt-6">
          {[
            ['Photos & screenshots', photos.length],
            ['Facts to verify', data.length],
            ['Links needed', links.length],
          ].map(([k, v]) => (
            <div key={k as string}>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-faint">{k}</dt>
              <dd className="mt-1 text-[36px] font-extrabold leading-none text-amber">{v}</dd>
            </div>
          ))}
        </dl>
      </PageIntro>

      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
        <Checklist title="Photos & screenshots to supply" items={photos} />
        <Checklist title="Facts, dates and statuses to verify" items={data} />
        <Checklist title="Links to supply or confirm" items={links} />

        <ListSection title="Privacy decisions in effect" items={DECISIONS} />
        <ListSection title="Corrections from the previous site" items={CORRECTIONS} />

        <section className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-2">
          <div>
            <h2 className="text-[22px] font-bold tracking-[-0.02em]">Sitemap ({SITEMAP.length} URLs)</h2>
            <p className="mt-2 text-[14px] text-dim">Public, indexable pages only. This page, 404s and redirects stay out.</p>
            <ul className="mt-4 space-y-1 font-mono text-[13px] text-dim">
              {SITEMAP.map((u) => (
                <li key={u}>
                  <Link to={u} className="hover:text-cyan">
                    {SITE.origin}
                    {u === '/' ? '/' : u}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[22px] font-bold tracking-[-0.02em]">Permanent redirects</h2>
            <p className="mt-2 text-[14px] text-dim">Old URLs from the previous site.</p>
            <ul className="mt-4 space-y-1 font-mono text-[13px] text-dim">
              {REDIRECTS.map(([a, b]) => (
                <li key={a}>
                  {a} <span className="text-faint">→</span> <span className="text-paper">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

function Checklist({ title, items }: { title: string; items: Item[] }) {
  return (
    <section className="mb-14">
      <h2 className="flex items-center gap-3 text-[22px] font-bold tracking-[-0.02em]">
        {title} <NeedsMark>{items.length} open</NeedsMark>
      </h2>
      <ul className="mt-4 border-b border-line">
        {items.map((it, i) => (
          <li key={i} className="grid gap-1 border-t border-line py-3 sm:grid-cols-[1fr_220px] sm:gap-6">
            <span className="text-[15px] text-paper">{it.what}</span>
            <Link to={it.to} className="font-mono text-[12px] text-dim hover:text-cyan sm:text-right">
              {it.where} →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mb-14">
      <h2 className="text-[22px] font-bold tracking-[-0.02em]">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((t) => (
          <li key={t} className="max-w-[80ch] border-l-2 border-line-strong pl-4 text-[15px] leading-[1.6] text-dim">
            {t}
          </li>
        ))}
      </ul>
    </section>
  )
}
