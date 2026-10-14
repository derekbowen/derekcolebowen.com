import React from 'react'
import { Link } from 'react-router-dom'
import { NOW } from '../data/now'
import { useSeo } from '../components/useSeo'
import { PageIntro } from '../components/PageIntro'
import { StatusStamp } from '../components/StatusStamp'
import { NeedsMark } from '../components/AssetPlaceholder'

export function NowPage() {
  useSeo({
    title: 'Now — What’s Live, in Beta and Being Built | Derek Bowen',
    description: 'What Derek Bowen is working on right now: which products are live, which are in private beta, and what’s still being built.',
    path: '/now',
  })

  return (
    <>
      <PageIntro title="Now." lede="What’s live, what’s in beta, and what I’m building. Updated by hand, so the date matters.">
        <p className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[13px] uppercase tracking-wider text-faint">
          Last updated
          {NOW.lastUpdated ? <span className="text-paper">{NOW.lastUpdated}</span> : <NeedsMark>Set date before publishing</NeedsMark>}
        </p>
      </PageIntro>

      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {NOW.columns.map((c) => (
            <section key={c.title} aria-labelledby={`now-${c.title}`}>
              <h2 id={`now-${c.title}`} className="border-b border-line pb-3 text-[24px] font-bold tracking-[-0.02em]">
                {c.title}
              </h2>
              <ul className="divide-y divide-line">
                {c.items.map((it) => (
                  <li key={it.name} className="py-5">
                    <StatusStamp status={it.status} />
                    <Link to={`/work/${it.slug}`} className="mt-3 block text-[18px] font-semibold leading-snug hover:text-cyan">
                      {it.name}
                    </Link>
                    <p className="mt-1.5 text-[15px] leading-[1.55] text-dim">{it.line}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-16 grid gap-6 border-t border-line pt-10 md:grid-cols-[1fr_2fr] md:gap-12">
          <h2 className="text-[24px] font-bold tracking-[-0.02em]">On the road</h2>
          <p className="max-w-[60ch] text-[17px] leading-[1.65] text-dim">{NOW.onTheRoad}</p>
        </section>
      </div>
    </>
  )
}
