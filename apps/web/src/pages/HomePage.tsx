import React from 'react'
import { Link } from 'react-router-dom'
import { SITE, CATEGORIES } from '../data/site'
import { PROJECTS, getProject } from '../data/projects'
import { ARTICLES, BOOKS } from '../data/writing'
import { NOW } from '../data/now'
import { useSeo, PERSON_LD } from '../components/useSeo'
import { StatusStamp } from '../components/StatusStamp'
import { AssetPlaceholder } from '../components/AssetPlaceholder'
import { Visual } from '../components/Visual'
import { MetricFigure } from '../components/MetricFigure'
import { SeoFunnel } from '../components/SeoFunnel'

export function HomePage() {
  useSeo({
    title: 'Derek Bowen — Commercial Driver, Marketplace Founder, Software Builder',
    description:
      'I drive trucks hauling carnival rides across the western US, and I build marketplaces and operations software. Pool Rental Near Me, Carnival Ride Rental, founders.click and more, with honest status on every one.',
    path: '/',
    type: 'profile',
    jsonLd: [
      PERSON_LD,
      { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Derek Bowen', url: SITE.origin },
    ],
  })

  const prnm = getProject('pool-rental-near-me')!
  const others = PROJECTS.filter((p) => p.slug !== prnm.slug)
  const catLabel = (id: string) => CATEGORIES.find((c) => c.id === id)?.label

  return (
    <>
      {/* 1 — Who */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 pb-12 pt-8 md:grid-cols-[1.15fr_1fr] md:gap-14 md:px-8 md:pb-16 md:pt-16">
          <div className="order-2 flex flex-col justify-center md:order-1">
            <h1 className="text-[46px] font-extrabold leading-[0.98] tracking-[-0.035em] sm:text-[60px] lg:text-[84px]">
              I drive trucks.
              <br />
              I build companies.
              <br />
              <span className="text-cyan">Both are real.</span>
            </h1>
            <p className="mt-7 max-w-[56ch] text-[18px] leading-[1.6] text-dim md:text-[20px]">
              I’m Derek Bowen—a commercial driver, self-taught software builder, marketplace founder, and father of three. I turn hard-won
              experience in logistics and small business into software that solves problems I’ve actually lived.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                to="/work"
                className="inline-flex h-12 items-center rounded-[4px] bg-cyan px-6 text-[16px] font-semibold text-ink transition-colors duration-150 hover:bg-cyan-deep"
              >
                See the work
              </Link>
              <Link to="/about" className="inline-flex min-h-11 items-center text-[16px] font-semibold text-paper hover:text-cyan">
                Read my story →
              </Link>
            </div>
          </div>
          <figure className="order-1 md:order-2">
            <div className="aspect-[4/3] max-h-[560px] w-full overflow-hidden border border-line bg-ink-2 sm:aspect-[4/5] md:aspect-auto md:h-full">
              <img src={SITE.portrait} alt="Derek Bowen" className="h-full w-full object-cover" />
            </div>
            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-wider text-faint">Derek Bowen · Riverside, CA</figcaption>
          </figure>
        </div>
        <div className="border-t border-line">
          <dl className="mx-auto grid max-w-[1200px] grid-cols-2 px-5 font-mono text-[12px] uppercase tracking-wider md:grid-cols-4 md:px-8">
            {[
              ['Based in', 'Riverside, CA'],
              ['License', 'CDL-A · Doubles'],
              ['On the job', '20+ years in operations'],
              ['At home', 'Father of three'],
            ].map(([k, v], i) => (
              <div key={k} className={`py-4 ${i % 2 === 1 ? 'pl-4 md:pl-6' : ''} ${i > 0 ? 'md:border-l md:border-line md:pl-6' : ''} ${i < 2 ? 'border-b border-line md:border-b-0' : ''}`}>
                <dt className="text-faint">{k}</dt>
                <dd className="mt-1 text-paper">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 2 — Two shifts */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 md:grid-cols-[1fr_1fr] md:gap-14 md:px-8 md:py-24">
          <div>
            <h2 className="text-[30px] font-bold leading-tight tracking-[-0.02em] md:text-[40px]">Two shifts.</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[12px] uppercase tracking-wider text-cyan">On the road</p>
                <p className="mt-3 text-[16px] leading-[1.65] text-dim">
                  I haul carnival rides across the western United States: Ferris wheels, flat rides, the trailers that carry them. It means early
                  hookups, long hauls, tight lots and doubles. Twenty-plus years of carnival equipment, operations, safety and route planning are
                  baked into how I think.
                </p>
              </div>
              <div>
                <p className="font-mono text-[12px] uppercase tracking-wider text-cyan">At the keyboard</p>
                <p className="mt-3 text-[16px] leading-[1.65] text-dim">
                  I build on breaks and after long days. I’m self-taught, and I use AI coding tools and automation to do work that used to need a
                  team. I architect, direct, review and ship. I don’t pretend I hand-typed every line.
                </p>
              </div>
            </div>
            <p className="mt-10 max-w-[52ch] border-l-2 border-cyan pl-5 text-[20px] font-medium leading-snug text-paper">
              I didn’t quit my job to write pitch decks. Everything here got built around a real one.
            </p>
          </div>
          <AssetPlaceholder
            need="Your truck hauling carnival equipment, ideally a doubles setup"
            detail="Landscape photo from the road or the lot. Cover plates and unit numbers."
            ratio="aspect-[4/3]"
          />
        </div>
      </section>

      {/* 3 — What I've built */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[30px] font-bold leading-tight tracking-[-0.02em] md:text-[40px]">What I’ve built</h2>
            <Link to="/work" className="inline-flex min-h-11 items-center text-[15px] font-semibold text-cyan hover:underline">
              All work, by category →
            </Link>
          </div>

          <article className="mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-12">
            <Link to={`/work/${prnm.slug}`} tabIndex={-1} aria-hidden>
              <Visual v={prnm.hero} />
            </Link>
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-3">
                <StatusStamp status={prnm.status} />
                <span className="font-mono text-[12px] text-faint">Flagship · {prnm.role}</span>
              </div>
              <h3 className="mt-4 text-[36px] font-bold leading-[1.05] tracking-[-0.02em]">
                <Link to={`/work/${prnm.slug}`} className="hover:text-cyan">
                  {prnm.name}
                </Link>
              </h3>
              <p className="mt-4 text-[17px] leading-[1.6] text-dim">{prnm.summary}</p>
              <div className="mt-6 grid grid-cols-2 gap-6 border-t border-line pt-6">
                {prnm.metrics.slice(0, 2).map((m) => (
                  <React.Fragment key={m.label}>
                    <MetricFigure m={m} size="sm" />
                  </React.Fragment>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-x-6 pt-6">
                <Link to={`/work/${prnm.slug}`} className="inline-flex min-h-11 items-center text-[15px] font-semibold text-cyan hover:underline">
                  Read the case study →
                </Link>
                {prnm.link.state === 'public' && (
                  <a href={prnm.link.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-mono text-[12px] text-dim hover:text-paper">
                    {prnm.link.label} ↗
                  </a>
                )}
              </div>
            </div>
          </article>

          <ul className="mt-14 border-b border-line">
            {others.map((p) => (
              <li key={p.slug} className="border-t border-line">
                <Link
                  to={`/work/${p.slug}`}
                  className="group grid gap-2 py-5 transition-colors duration-150 md:grid-cols-[260px_190px_1fr_24px] md:items-center md:gap-6"
                >
                  <span className="text-[19px] font-semibold tracking-tight group-hover:text-cyan">{p.name}</span>
                  <span className="flex flex-wrap items-center gap-3 md:block">
                    <StatusStamp status={p.status} />
                  </span>
                  <span className="text-[15px] leading-snug text-dim">
                    <span className="mr-2 font-mono text-[11px] uppercase tracking-wider text-faint">{catLabel(p.category)}</span>
                    {p.oneLiner}
                  </span>
                  <span aria-hidden className="hidden text-cyan md:block">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 — Numbers with context */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
          <h2 className="text-[30px] font-bold leading-tight tracking-[-0.02em] md:text-[40px]">A few numbers, with the fine print</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-[1.3fr_1fr]">
            <div>
              <MetricFigure m={{ value: '10,000+', label: 'pages generated by my SEO systems across projects', source: 'Project page inventories' }} size="lg" />
              <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.65] text-dim">
                Generated. Not all deployed, not all indexed, and far fewer earning traffic. That gap is the most useful thing I’ve learned, and
                it’s written up in full.
              </p>
              <Link to="/seo-systems" className="mt-4 inline-flex min-h-11 items-center text-[15px] font-semibold text-cyan hover:underline">
                How the SEO systems actually performed →
              </Link>
            </div>
            <div className="grid gap-10">
              <MetricFigure m={{ value: '~3,700', label: 'carnival rides catalogued for Carnival Ride Rental', source: 'CRR inventory' }} />
              <MetricFigure m={{ value: '1,100+', label: 'Pool Rental Near Me accounts, with 280+ providers', asOf: '2026 reporting', source: 'PRNM internal' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 5 — SEO teaser */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-14 md:px-8 md:py-24">
          <div>
            <h2 className="text-[30px] font-bold leading-tight tracking-[-0.02em] md:text-[40px]">Most of what I generated never got indexed.</h2>
            <p className="mt-5 max-w-[52ch] text-[17px] leading-[1.65] text-dim">
              I built programmatic SEO systems for my own marketplaces because I couldn’t afford an agency: city and category structures,
              sitemaps, structured data, inventory checks, AI content pipelines. Here’s what Google did with them, and what I’d do differently.
            </p>
            <Link to="/seo-systems" className="mt-6 inline-flex min-h-11 items-center text-[15px] font-semibold text-cyan hover:underline">
              Read the SEO & automation case study →
            </Link>
          </div>
          <SeoFunnel compact />
        </div>
      </section>

      {/* 6 — Writing & books */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-16 md:grid-cols-[1fr_1fr] md:gap-14 md:px-8 md:py-24">
          <div>
            <h2 className="text-[30px] font-bold leading-tight tracking-[-0.02em] md:text-[40px]">Writing</h2>
            <ul className="mt-8 border-b border-line">
              {ARTICLES.slice(0, 3).map((a) => (
                <li key={a.slug} className="border-t border-line">
                  <Link to={`/blog/${a.slug}`} className="group block py-5">
                    <span className="block text-[18px] font-semibold leading-snug group-hover:text-cyan">{a.title}</span>
                    <span className="mt-2 block font-mono text-[12px] text-faint">
                      {a.date} · {a.readTime}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/writing" className="mt-5 inline-flex min-h-11 items-center text-[15px] font-semibold text-cyan hover:underline">
              All articles →
            </Link>
          </div>
          <div>
            <h2 className="text-[30px] font-bold leading-tight tracking-[-0.02em] md:text-[40px]">Five books on Amazon</h2>
            <p className="mt-3 text-[16px] leading-[1.6] text-dim">Pool hosting, carnival operations, and family life while building.</p>
            <ul className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-5">
              {BOOKS.map((b) => (
                <li key={b.title}>
                  <Link to="/writing#books" className="block">
                    <img src={b.cover} alt={`Cover of ${b.title}`} loading="lazy" className="aspect-[2/3] w-full border border-line object-cover" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/writing#books" className="mt-5 inline-flex min-h-11 items-center text-[15px] font-semibold text-cyan hover:underline">
              About the books →
            </Link>
          </div>
        </div>
      </section>

      {/* 7 — Now */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[30px] font-bold leading-tight tracking-[-0.02em] md:text-[40px]">Right now</h2>
            <Link to="/now" className="inline-flex min-h-11 items-center text-[15px] font-semibold text-cyan hover:underline">
              The full Now page →
            </Link>
          </div>
          <dl className="mt-8 grid gap-6 md:grid-cols-3 md:gap-10">
            {NOW.columns.map((c) => (
              <div key={c.title} className="border-t border-line pt-5">
                <dt className="font-mono text-[12px] uppercase tracking-wider text-faint">{c.title}</dt>
                <dd className="mt-2 text-[16px] leading-[1.55] text-paper">{c.headline}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 8 — Contact */}
      <section>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8 md:py-20">
          <div>
            <h2 className="text-[30px] font-bold leading-tight tracking-[-0.02em] md:text-[40px]">Founders, operators, partners.</h2>
            <p className="mt-3 max-w-[56ch] text-[17px] leading-[1.6] text-dim">
              If you’re building a marketplace, need software for a real operation, or work in the carnival and amusement world, I’d like to
              hear from you.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex h-12 shrink-0 items-center self-start rounded-[4px] bg-cyan px-6 text-[16px] font-semibold text-ink transition-colors duration-150 hover:bg-cyan-deep md:self-auto"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}
