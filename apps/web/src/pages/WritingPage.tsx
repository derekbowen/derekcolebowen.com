import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ARTICLES, BOOKS, TOPICS, type Topic } from '../data/writing'
import { SITE } from '../data/site'
import { useSeo } from '../components/useSeo'
import { PageIntro } from '../components/PageIntro'
import { NeedsMark } from '../components/AssetPlaceholder'

const IDEAS = [
  {
    title: 'Your day job can fund the real one',
    body: 'Trucking is hard on you, and it can also be a capital engine and a mobile office if you treat it like one.',
    links: ['trucking-truth', 'logistics-digital-innovation'],
  },
  {
    title: 'Marketplaces are trust exercises, not software',
    body: 'The cold start is brutal, and the brutality is the moat. Supply first, always.',
    links: ['marketplace-graveyard'],
  },
  {
    title: 'Generated is not indexed',
    body: 'Programmatic SEO is a multiplier on real data, and a liability on top of thin pages.',
    links: ['scaling-with-programmatic-seo', 'digital-waiting-room'],
  },
]

export function WritingPage() {
  const [params, setParams] = useSearchParams()
  const topic = params.get('topic') as Topic | null
  const list = topic ? ARTICLES.filter((a) => a.topics.includes(topic)) : ARTICLES

  useSeo({
    title: 'Writing & Books — Trucking, Marketplaces, AI & SEO | Derek Bowen',
    description:
      'Articles by Derek Bowen on trucking, entrepreneurship, marketplaces, AI tools and programmatic SEO, plus five published books on pool hosting, carnival operations and family life.',
    path: '/writing',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Writing & Books — Derek Bowen',
      url: `${SITE.origin}/writing`,
      hasPart: [
        ...ARTICLES.map((a) => ({ '@type': 'Article', headline: a.title, datePublished: a.iso, url: `${SITE.origin}/blog/${a.slug}` })),
        ...BOOKS.filter((b) => b.url).map((b) => ({ '@type': 'Book', name: b.title, author: { '@type': 'Person', name: 'Derek Bowen' }, url: b.url })),
      ],
    },
  })

  return (
    <>
      <PageIntro
        title="Writing & books."
        lede="I write to find out whether I actually understand something. Mostly about trucking, marketplaces, AI tools and SEO, in the same voice I use everywhere else."
      >
        <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] uppercase tracking-wider">
          <a href="#articles" onClick={(e) => scrollTo(e, 'articles')} className="inline-flex min-h-11 items-center text-cyan hover:underline">
            Articles ({ARTICLES.length})
          </a>
          <a href="#books" onClick={(e) => scrollTo(e, 'books')} className="inline-flex min-h-11 items-center text-cyan hover:underline">
            Books (5)
          </a>
          <a href="#ideas" onClick={(e) => scrollTo(e, 'ideas')} className="inline-flex min-h-11 items-center text-cyan hover:underline">
            Recurring ideas
          </a>
          <a href="#resources" onClick={(e) => scrollTo(e, 'resources')} className="inline-flex min-h-11 items-center text-cyan hover:underline">
            Learning resources
          </a>
        </nav>
      </PageIntro>

      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        {/* Articles */}
        <section id="articles" aria-labelledby="articles-h" className="scroll-mt-24 py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="articles-h" className="text-[30px] font-bold tracking-[-0.02em] md:text-[40px]">
              Articles
            </h2>
            <div role="group" aria-label="Filter by topic" className="-mx-5 flex gap-1 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:px-0">
              <TopicButton active={!topic} onClick={() => setParams({}, { replace: true })}>
                All
              </TopicButton>
              {TOPICS.map((t) => (
                <React.Fragment key={t}>
                  <TopicButton active={topic === t} onClick={() => setParams({ topic: t }, { replace: true })}>
                    {t}
                  </TopicButton>
                </React.Fragment>
              ))}
            </div>
          </div>
          <ul className="mt-8 border-b border-line">
            {list.map((a) => (
              <li key={a.slug} className="border-t border-line">
                <Link to={`/blog/${a.slug}`} className="group grid gap-2 py-6 md:grid-cols-[140px_1fr_160px] md:gap-8">
                  <span className="font-mono text-[12px] text-faint md:pt-1.5">{a.date}</span>
                  <span>
                    <span className="block text-[20px] font-semibold leading-snug tracking-[-0.01em] group-hover:text-cyan md:text-[22px]">{a.title}</span>
                    <span className="mt-2 block max-w-[64ch] text-[16px] leading-[1.55] text-dim">{a.dek}</span>
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-faint md:pt-2 md:text-right">
                    {a.topics.join(' · ')}
                    <span className="mt-1 block normal-case tracking-normal">{a.readTime}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p aria-live="polite" className="sr-only">
            {list.length} articles shown
          </p>
        </section>

        {/* Books */}
        <section id="books" aria-labelledby="books-h" className="scroll-mt-24 border-t border-line py-14 md:py-20">
          <div className="grid gap-4 md:grid-cols-[1fr_1.4fr] md:gap-12">
            <h2 id="books-h" className="text-[30px] font-bold tracking-[-0.02em] md:text-[40px]">
              Five books
            </h2>
            <p className="max-w-[60ch] text-[17px] leading-[1.65] text-dim md:pt-3">
              Published on Amazon. Practical guides, mostly for people running the kinds of businesses I run. Where a purchase link hasn’t been
              verified yet, the button says so instead of pointing somewhere wrong.
            </p>
          </div>
          <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {BOOKS.map((b) => (
              <li key={b.title} className="flex flex-col">
                <img src={b.cover} alt={`Cover of ${b.title} by Derek Bowen`} loading="lazy" className="aspect-[2/3] w-full max-w-[260px] border border-line object-cover" />
                <h3 className="mt-5 text-[17px] font-semibold leading-snug">{b.title}</h3>
                {b.subtitle && <p className="mt-1 text-[14px] italic leading-snug text-dim">{b.subtitle}</p>}
                <p className="mt-3 text-[15px] leading-[1.55] text-dim">{b.about}</p>
                <div className="mt-auto pt-5">
                  {b.url ? (
                    <a
                      href={b.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center rounded-[4px] border border-cyan px-4 text-[14px] font-semibold text-cyan transition-colors duration-150 hover:bg-cyan hover:text-ink"
                    >
                      Buy on Amazon ↗
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="inline-flex h-11 items-center rounded-[4px] border border-dashed border-amber/60 px-4 font-mono text-[11px] uppercase tracking-wider text-amber"
                    >
                      Amazon link needed
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Ideas */}
        <section id="ideas" aria-labelledby="ideas-h" className="scroll-mt-24 border-t border-line py-14 md:py-20">
          <h2 id="ideas-h" className="text-[30px] font-bold tracking-[-0.02em] md:text-[40px]">
            Ideas I keep coming back to
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {IDEAS.map((i) => (
              <div key={i.title} className="flex flex-col border-t border-cyan/60 pt-5">
                <h3 className="text-[20px] font-semibold leading-snug">{i.title}</h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-dim">{i.body}</p>
                <ul className="mt-auto space-y-1 pt-5">
                  {i.links.map((s) => {
                    const a = ARTICLES.find((x) => x.slug === s)!
                    return (
                      <li key={s}>
                        <Link to={`/blog/${s}`} className="text-[14px] font-medium text-cyan hover:underline">
                          {a.title} →
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section id="resources" aria-labelledby="resources-h" className="scroll-mt-24 border-t border-line py-14 md:py-20">
          <div className="grid gap-4 md:grid-cols-[1fr_1.4fr] md:gap-12">
            <h2 id="resources-h" className="text-[30px] font-bold tracking-[-0.02em] md:text-[40px]">
              Learning resources
            </h2>
            <div className="max-w-[60ch] space-y-4 text-[17px] leading-[1.65] text-dim md:pt-3">
              <p>
                Pool hosts on Pool Rental Near Me get onboarding and learning material: setting up a listing, pricing, house rules, and safety.
                The pool-hosting books go deeper on the same topics.
              </p>
              <p className="flex flex-wrap items-center gap-3">
                <NeedsMark>Resource list & links needed</NeedsMark>
                <span className="text-[14px]">Guides, checklists or courses will be listed here by type once their public links are confirmed.</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

function TopicButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`h-10 shrink-0 whitespace-nowrap rounded-[4px] px-3.5 text-[14px] font-medium transition-colors duration-150 ${
        active ? 'bg-paper text-ink' : 'text-dim hover:bg-ink-3 hover:text-paper'
      }`}
    >
      {children}
    </button>
  )
}

function scrollTo(e: React.MouseEvent, id: string) {
  const el = document.getElementById(id)
  if (!el) return
  e.preventDefault()
  el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
}
