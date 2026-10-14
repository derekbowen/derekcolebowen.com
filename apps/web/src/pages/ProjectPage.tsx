import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { PROJECTS, getProject, type Project } from '../data/projects'
import { CATEGORIES, SITE } from '../data/site'
import { getArticle } from '../data/writing'
import { useSeo, breadcrumbLd } from '../components/useSeo'
import { Breadcrumbs } from '../components/PageIntro'
import { StatusStamp } from '../components/StatusStamp'
import { NeedsMark } from '../components/AssetPlaceholder'
import { Visual } from '../components/Visual'
import { MetricFigure } from '../components/MetricFigure'
import { FlowDiagram } from '../components/FlowDiagram'
import { NotFoundPage } from './NotFoundPage'

export function ProjectPage() {
  const { slug } = useParams()
  const p = getProject(slug)
  if (!p) return <NotFoundPage />
  return (
    <React.Fragment key={p.slug}>
      <ProjectBody p={p} />
    </React.Fragment>
  )
}

function ProjectBody({ p }: { p: Project }) {
  const cat = CATEGORIES.find((c) => c.id === p.category)!
  const idx = PROJECTS.findIndex((x) => x.slug === p.slug)
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length]
  const next = PROJECTS[(idx + 1) % PROJECTS.length]
  const path = `/work/${p.slug}`

  useSeo({
    title: p.seoTitle,
    description: p.seoDescription,
    path,
    type: 'article',
    jsonLd: [
      breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
        { name: cat.label, path: `/work#${cat.id}` },
        { name: p.name, path },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: p.seoTitle.replace(' | Derek Bowen', ''),
        description: p.seoDescription,
        author: { '@id': `${SITE.origin}/#derek`, '@type': 'Person', name: 'Derek Bowen' },
        mainEntityOfPage: `${SITE.origin}${path}`,
        ...(p.link.state === 'public' ? { about: { '@type': 'Thing', name: p.name, url: p.link.url } } : {}),
      },
    ],
  })

  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-10 md:px-8 md:pb-14 md:pt-16">
          <Breadcrumbs crumbs={[{ label: 'Work', to: '/work' }, { label: cat.label, to: `/work#${cat.id}` }, { label: p.name }]} />
          <div className="flex flex-wrap items-center gap-3">
            <StatusStamp status={p.status} />
            {p.aka && <span className="font-mono text-[12px] text-faint">Also: {p.aka}</span>}
          </div>
          <h1 className="mt-4 max-w-[20ch] text-[42px] font-extrabold leading-[1.02] tracking-[-0.03em] md:text-[64px]">{p.name}</h1>
          <p className="mt-5 max-w-[60ch] text-[19px] leading-[1.55] text-dim md:text-[21px]">{p.oneLiner}</p>
          <div className="mt-7">
            <ProductLink p={p} />
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-12 md:px-8 lg:grid-cols-[1fr_320px] lg:gap-16 lg:py-16">
        {/* Spec sheet: first on mobile so status and links come before the story */}
        <aside className="lg:order-2 lg:sticky lg:top-24 lg:self-start">
          <SpecSheet p={p} cat={cat.label} />
        </aside>

        <article className="min-w-0 lg:order-1">
          <Visual v={p.hero} showCaption />

          <Block title="The problem">
            {p.problem.map((t) => (
              <p key={t.slice(0, 24)}>{t}</p>
            ))}
          </Block>

          <Block title="What I actually built">
            <p>{p.built.intro}</p>
            <ul className="mt-2 space-y-3">
              {p.built.items.map((t) => (
                <li key={t} className="grid grid-cols-[18px_1fr] gap-2">
                  <span aria-hidden className="mt-[11px] h-px w-3 bg-cyan" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Block>

          {p.flow && (
            <div className="mt-10">
              <FlowDiagram title={p.flow.title} steps={p.flow.steps} caption={p.flow.caption} />
            </div>
          )}

          {p.gallery && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {p.gallery.map((g, i) => (
                <React.Fragment key={i}>
                  <Visual v={g} showCaption />
                </React.Fragment>
              ))}
            </div>
          )}

          <Block title="Technology">
            <dl className="divide-y divide-line border-y border-line text-[16px]">
              {p.stack.map((s) => (
                <div key={s.group} className="grid gap-1 py-3 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <dt className="font-mono text-[12px] uppercase tracking-wider text-faint sm:pt-1">{s.group}</dt>
                  <dd className="text-paper">{s.items}</dd>
                </div>
              ))}
            </dl>
          </Block>

          <Block title="What got in the way">
            <ul className="space-y-4">
              {p.obstacles.map((t) => (
                <li key={t} className="border-l-2 border-line-strong pl-4">
                  {t}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Results">
            {p.metrics.length > 0 && (
              <div className="mb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {p.metrics.map((m) => (
                  <React.Fragment key={m.label}>
                    <MetricFigure m={m} />
                  </React.Fragment>
                ))}
              </div>
            )}
            <p>{p.resultsNote}</p>
          </Block>

          <Block title="What’s live and what isn’t">
            <div className="overflow-x-auto border border-line">
              <table className="w-full min-w-[480px] text-left text-[15px]">
                <thead className="bg-ink-2 font-mono text-[11px] uppercase tracking-wider text-faint">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-medium">
                      Part
                    </th>
                    <th scope="col" className="px-4 py-3 font-medium">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {p.liveTable.map((r) => (
                    <tr key={r.part}>
                      <th scope="row" className="px-4 py-3 align-top font-medium text-paper">
                        {r.part}
                        {r.note && <span className="mt-1 block text-[13px] font-normal text-dim">{r.note}</span>}
                      </th>
                      <td className="px-4 py-3 align-top">
                        <StatusStamp status={r.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Block>

          <Block title="Where it stands now">
            <p>{p.now}</p>
            {p.privacyNote && (
              <p className="mt-4 border border-line bg-ink-2 p-4 text-[15px]">
                <span className="mr-2 font-mono text-[11px] uppercase tracking-wider text-slate">Privacy</span>
                {p.privacyNote}
              </p>
            )}
          </Block>

          {(p.relatedArticles.length > 0 || p.relatedProjects.length > 0) && (
            <section className="mt-14 border-t border-line pt-8">
              <h2 className="font-mono text-[12px] uppercase tracking-wider text-faint">Related</h2>
              <ul className="mt-4 space-y-1">
                {p.relatedProjects.map((s) => {
                  const r = getProject(s)
                  return r ? (
                    <li key={s}>
                      <Link to={`/work/${s}`} className="inline-flex min-h-10 items-center gap-3 text-[16px] font-medium hover:text-cyan">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-faint">Project</span>
                        {r.name}
                      </Link>
                    </li>
                  ) : null
                })}
                {p.relatedArticles.map((s) => {
                  const a = getArticle(s)
                  return a ? (
                    <li key={s}>
                      <Link to={`/blog/${s}`} className="inline-flex min-h-10 items-center gap-3 text-[16px] font-medium hover:text-cyan">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-faint">Article</span>
                        {a.title}
                      </Link>
                    </li>
                  ) : null
                })}
                {(p.category === 'marketplaces' || p.slug === 'founders-click') && (
                  <li>
                    <Link to="/seo-systems" className="inline-flex min-h-10 items-center gap-3 text-[16px] font-medium hover:text-cyan">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-faint">Case study</span>
                      Technical SEO & automation systems
                    </Link>
                  </li>
                )}
              </ul>
            </section>
          )}
        </article>
      </div>

      <nav aria-label="More projects" className="border-t border-line">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 px-5 md:px-8">
          <Link to={`/work/${prev.slug}`} className="group border-r border-line py-8 pr-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-faint">← Previous</span>
            <span className="mt-2 block text-[18px] font-semibold group-hover:text-cyan md:text-[22px]">{prev.name}</span>
          </Link>
          <Link to={`/work/${next.slug}`} className="group py-8 pl-4 text-right">
            <span className="font-mono text-[11px] uppercase tracking-wider text-faint">Next →</span>
            <span className="mt-2 block text-[18px] font-semibold group-hover:text-cyan md:text-[22px]">{next.name}</span>
          </Link>
        </div>
      </nav>
    </>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="text-[26px] font-bold leading-tight tracking-[-0.02em] md:text-[30px]">{title}</h2>
      <div className="mt-5 max-w-[68ch] space-y-4 text-[17px] leading-[1.7] text-dim">{children}</div>
    </section>
  )
}

function ProductLink({ p }: { p: Project }) {
  if (p.link.state === 'public')
    return (
      <a
        href={p.link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 items-center gap-2 rounded-[4px] border border-cyan px-5 text-[15px] font-semibold text-cyan transition-colors duration-150 hover:bg-cyan hover:text-ink"
      >
        Visit {p.link.label} <span aria-hidden>↗</span>
      </a>
    )
  if (p.link.state === 'internal')
    return (
      <span className="inline-flex h-12 items-center rounded-[4px] border border-line-strong px-5 font-mono text-[12px] uppercase tracking-wider text-slate">
        Internal tool · no public access
      </span>
    )
  return (
    <span
      aria-disabled="true"
      className="inline-flex h-12 items-center rounded-[4px] border border-dashed border-amber/60 px-5 font-mono text-[12px] uppercase tracking-wider text-amber"
    >
      Link needed · {p.link.label}
    </span>
  )
}

function SpecSheet({ p, cat }: { p: Project; cat: string }) {
  return (
    <div className="border border-line bg-ink-2">
      <p className="border-b border-line px-5 py-3 font-mono text-[11px] uppercase tracking-wider text-faint">Spec sheet</p>
      <dl className="divide-y divide-line px-5 font-mono text-[12.5px]">
        <Row k="Role">{p.role}</Row>
        <Row k="Category">{cat}</Row>
        <Row k="Years">{p.years ?? <NeedsMark>Dates to confirm</NeedsMark>}</Row>
        <Row k="Status">
          <StatusStamp status={p.status} />
        </Row>
        <Row k="Stack">{p.stack.map((s) => s.items).slice(0, 3).join(' · ')}</Row>
        {p.metrics.slice(0, 3).map((m) => (
          <React.Fragment key={m.label}>
          <Row k="Measured">
            {m.verified === false ? (
              <NeedsMark>Pending verification</NeedsMark>
            ) : (
              <>
                <span className="text-paper">{m.value}</span> <span className="text-dim">{m.label}</span>
                <span className="mt-1 block">{m.asOf ? <span className="text-faint">as of {m.asOf}</span> : <NeedsMark>Date needed</NeedsMark>}</span>
              </>
            )}
          </Row>
          </React.Fragment>
        ))}
        <Row k="Link">
          {p.link.state === 'public' ? (
            <a href={p.link.url} target="_blank" rel="noopener noreferrer" className="break-all text-cyan hover:underline">
              {p.link.label} ↗
            </a>
          ) : p.link.state === 'internal' ? (
            <span className="text-slate">None. Internal system</span>
          ) : (
            <NeedsMark>Link needed</NeedsMark>
          )}
        </Row>
      </dl>
    </div>
  )
}

function Row({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[84px_1fr] gap-3 py-3">
      <dt className="uppercase tracking-wider text-faint">{k}</dt>
      <dd className="leading-snug text-paper">{children}</dd>
    </div>
  )
}
