import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES, type CategoryId } from '../data/site'
import { PROJECTS, EARLIER_VENTURES } from '../data/projects'
import { BOOKS, ARTICLES } from '../data/writing'
import { useSeo, breadcrumbLd } from '../components/useSeo'
import { PageIntro } from '../components/PageIntro'
import { ProjectRow } from '../components/ProjectRow'
import { StatusStamp, STATUS, type StatusKey } from '../components/StatusStamp'
import { WorkMap } from '../components/WorkMap'

const LEGEND: StatusKey[] = ['live-business', 'live-product', 'beta', 'dev', 'testing', 'held', 'internal', 'verify']
const FLAGSHIPS = ['pool-rental-near-me', 'carnival-safety-institute']

export function WorkPage() {
  useSeo({
    title: 'Work — Marketplaces, SaaS, Safety & Logistics Systems | Derek Bowen',
    description:
      'Everything Derek Bowen has built, by category: marketplaces, SaaS and safety software, logistics and automation systems, and publishing. Each one labelled live, beta, in development or internal.',
    path: '/work',
    jsonLd: breadcrumbLd([
      { name: 'Home', path: '/' },
      { name: 'Work', path: '/work' },
    ]),
  })

  const [active, setActive] = useState<CategoryId | 'all'>('all')

  // Highlight the category whose section is on screen.
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (hit) setActive(hit.target.id as CategoryId)
      },
      { rootMargin: '-120px 0px -60% 0px' },
    )
    CATEGORIES.forEach((c) => {
      const el = document.getElementById(c.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const jump = (e: React.MouseEvent, id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    e.preventDefault()
    el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
    setActive(id as CategoryId)
  }

  return (
    <>
      <PageIntro
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Work' }]}
        title="Everything I’ve built, and where it stands."
        lede="Eight ventures and systems, plus the publishing. They aren’t separate bets. Most of them grew out of the one before, and out of the job I still do."
      >
        <div className="mt-12">
          <WorkMap />
        </div>
      </PageIntro>

      {/* Category switcher + legend */}
      <div className="sticky top-16 z-30 border-b border-line bg-ink">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <nav aria-label="Work categories" className="-mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
            <ul className="flex min-w-max gap-1 py-3">
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <a
                    href={`/work#${c.id}`}
                    onClick={(e) => jump(e, c.id)}
                    aria-current={active === c.id ? 'true' : undefined}
                    className={`inline-flex h-10 items-center whitespace-nowrap rounded-[4px] px-3.5 text-[14px] font-medium transition-colors duration-150 ${
                      active === c.id ? 'bg-paper text-ink' : 'text-dim hover:bg-ink-3 hover:text-paper'
                    }`}
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <details className="group border-b border-line py-4">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3 font-mono text-[12px] uppercase tracking-wider text-dim hover:text-paper">
            <span aria-hidden className="text-cyan transition-transform duration-150 group-open:rotate-90">›</span>
            What the status labels mean
          </summary>
          <dl className="grid gap-x-10 gap-y-4 pb-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
            {LEGEND.map((k) => (
              <div key={k}>
                <dt>
                  <StatusStamp status={k} />
                </dt>
                <dd className="mt-2 text-[14px] leading-snug text-dim">{STATUS[k].meaning}</dd>
              </div>
            ))}
          </dl>
        </details>

        {CATEGORIES.map((c) => {
          const items = PROJECTS.filter((p) => p.category === c.id)
          return (
            <section key={c.id} id={c.id} aria-labelledby={`${c.id}-h`} className="scroll-mt-32 py-16 md:py-20">
              <div className="grid gap-4 md:grid-cols-[1fr_1.4fr] md:gap-12">
                <h2 id={`${c.id}-h`} className="text-[32px] font-bold leading-tight tracking-[-0.02em] md:text-[44px]">
                  {c.label}
                </h2>
                <p className="max-w-[60ch] text-[17px] leading-[1.65] text-dim md:pt-3">{c.intro}</p>
              </div>
              <div className="mt-10">
                {items.map((p) => (
                  <React.Fragment key={p.slug}>
                    <ProjectRow p={p} large={FLAGSHIPS.includes(p.slug)} />
                  </React.Fragment>
                ))}
                {c.id === 'logistics' && <SeoSystemsRow />}
                {c.id === 'publishing' && <PublishingRows />}
              </div>
            </section>
          )
        })}

        <section aria-labelledby="earlier-h" className="border-t border-line py-16">
          <div className="grid gap-4 md:grid-cols-[1fr_1.4fr] md:gap-12">
            <h2 id="earlier-h" className="text-[24px] font-bold tracking-[-0.02em]">
              Earlier ventures
            </h2>
            <div>
              <p className="max-w-[60ch] text-[16px] leading-[1.6] text-dim">
                These were listed on the previous version of this site. I’m confirming my role and current status for each before saying more,
                so there are no case studies and no numbers here.
              </p>
              <ul className="mt-6 border-b border-line">
                {EARLIER_VENTURES.map((v) => (
                  <li key={v.name} className="grid gap-1 border-t border-line py-4 sm:grid-cols-[240px_1fr_auto] sm:items-center sm:gap-6">
                    <span className="font-semibold">{v.name}</span>
                    <span className="text-[15px] text-dim">{v.line}</span>
                    <StatusStamp status="verify" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

function SeoSystemsRow() {
  return (
    <article className="grid gap-6 border-t border-line py-8 md:grid-cols-[320px_1fr] md:gap-10">
      <div className="flex aspect-[16/10] flex-col justify-between border border-line bg-ink-2 p-5">
        <p className="font-mono text-[11px] uppercase tracking-wider text-faint">Across projects</p>
        <div>
          <p className="text-[44px] font-extrabold leading-none tracking-[-0.03em]">10,000+</p>
          <p className="mt-2 text-[14px] text-dim">pages generated, not all indexed</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-wrap items-center gap-3">
          <StatusStamp status="live-product" />
          <span className="font-mono text-[12px] text-faint">Architect & operator</span>
        </div>
        <h3 className="mt-4 text-[26px] font-bold leading-tight tracking-[-0.02em]">
          <Link to="/seo-systems" className="hover:text-cyan">
            Technical SEO & automation systems
          </Link>
        </h3>
        <p className="mt-3 max-w-[60ch] text-[16px] leading-[1.6] text-dim">
          The publishing machinery behind my marketplaces: city and category page structures, inventory validation, AI content pipelines,
          sitemaps, structured data and internal linking. It’s a capability in its own right, with an honest account of what got indexed.
        </p>
        <div className="mt-auto pt-6">
          <Link to="/seo-systems" className="inline-flex min-h-11 items-center text-[15px] font-semibold text-cyan hover:underline">
            Read the case study →
          </Link>
        </div>
      </div>
    </article>
  )
}

function PublishingRows() {
  return (
    <>
      <article className="grid gap-6 border-t border-line py-8 md:grid-cols-[320px_1fr] md:gap-10">
        <ul className="grid grid-cols-5 gap-2" aria-label="Book covers">
          {BOOKS.map((b) => (
            <li key={b.title}>
              <img src={b.cover} alt={`Cover of ${b.title}`} loading="lazy" className="aspect-[2/3] w-full border border-line object-cover" />
            </li>
          ))}
        </ul>
        <div className="flex flex-col">
          <StatusStamp status="published" className="self-start" />
          <h3 className="mt-4 text-[26px] font-bold leading-tight tracking-[-0.02em]">
            <Link to="/writing#books" className="hover:text-cyan">
              Five books on Amazon
            </Link>
          </h3>
          <p className="mt-3 max-w-[60ch] text-[16px] leading-[1.6] text-dim">
            Practical guides for pool hosts and carnival operators, and one about family life while building. Amazon links are being verified one
            by one.
          </p>
          <div className="mt-auto pt-6">
            <Link to="/writing#books" className="inline-flex min-h-11 items-center text-[15px] font-semibold text-cyan hover:underline">
              See the books →
            </Link>
          </div>
        </div>
      </article>
      <article className="grid gap-6 border-t border-line py-8 md:grid-cols-[320px_1fr] md:gap-10">
        <div className="flex aspect-[16/10] flex-col justify-between border border-line bg-ink-2 p-5">
          <p className="font-mono text-[11px] uppercase tracking-wider text-faint">Articles</p>
          <p className="text-[44px] font-extrabold leading-none tracking-[-0.03em]">{ARTICLES.length}</p>
        </div>
        <div className="flex flex-col">
          <StatusStamp status="published" className="self-start" />
          <h3 className="mt-4 text-[26px] font-bold leading-tight tracking-[-0.02em]">
            <Link to="/writing" className="hover:text-cyan">
              Articles from the cab
            </Link>
          </h3>
          <p className="mt-3 max-w-[60ch] text-[16px] leading-[1.6] text-dim">
            Trucking, marketplaces, AI tools and programmatic SEO, written plainly and sometimes profanely.
          </p>
          <div className="mt-auto pt-6">
            <Link to="/writing" className="inline-flex min-h-11 items-center text-[15px] font-semibold text-cyan hover:underline">
              Read the writing →
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
