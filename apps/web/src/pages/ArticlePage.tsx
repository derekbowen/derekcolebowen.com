import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ARTICLES, getArticle } from '../data/writing'
import { articleBodies, type Block } from '../data/articleBodies'
import { getProject } from '../data/projects'
import { SITE } from '../data/site'
import { useSeo, breadcrumbLd } from '../components/useSeo'
import { Breadcrumbs } from '../components/PageIntro'
import { NotFoundPage } from './NotFoundPage'

export function ArticlePage() {
  const { slug } = useParams()
  const a = getArticle(slug)
  if (!a) return <NotFoundPage />
  return (
    <React.Fragment key={a.slug}>
      <ArticleBody slug={a.slug} />
    </React.Fragment>
  )
}

function ArticleBody({ slug }: { slug: string }) {
  const a = getArticle(slug)!
  const blocks = articleBodies[slug] ?? []
  const path = `/blog/${slug}`
  const more = ARTICLES.filter((x) => x.slug !== slug && x.topics.some((t) => a.topics.includes(t))).slice(0, 2)

  useSeo({
    title: `${a.title} | Derek Bowen`,
    description: a.dek,
    path,
    type: 'article',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: a.title,
        description: a.dek,
        datePublished: a.iso,
        author: { '@type': 'Person', '@id': `${SITE.origin}/#derek`, name: 'Derek Bowen', url: SITE.origin },
        mainEntityOfPage: `${SITE.origin}${path}`,
        keywords: a.topics.join(', '),
      },
      breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Writing', path: '/writing' },
        { name: a.title, path },
      ]),
    ],
  })

  return (
    <article>
      <header className="border-b border-line">
        <div className="mx-auto max-w-[760px] px-5 pb-10 pt-10 md:px-8 md:pt-16">
          <Breadcrumbs crumbs={[{ label: 'Writing', to: '/writing' }, { label: a.topics[0] }]} />
          <h1 className="text-[34px] font-extrabold leading-[1.08] tracking-[-0.025em] md:text-[48px]">{a.title}</h1>
          <p className="mt-5 text-[19px] leading-[1.55] text-dim">{a.dek}</p>
          <div className="mt-7 flex items-center gap-4">
            <img src={SITE.portrait} alt="" className="h-11 w-11 border border-line object-cover" />
            <p className="font-mono text-[12px] text-faint">
              <span className="text-paper">Derek Bowen</span>
              <span className="mx-2">·</span>
              <time dateTime={a.iso}>{a.date}</time>
              <span className="mx-2">·</span>
              {a.readTime}
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[760px] px-5 py-12 md:px-8 md:py-16">
        <Body blocks={blocks} />

        <footer className="mt-16 border-t border-line pt-8">
          <p className="font-mono text-[11px] uppercase tracking-wider text-faint">About the author</p>
          <p className="mt-3 text-[16px] leading-[1.6] text-dim">
            Derek Bowen drives commercial trucks hauling carnival rides across the western US, and builds marketplaces and operations software in
            the time around it. He’s the founder of Pool Rental Near Me.{' '}
            <Link to="/about" className="font-medium text-cyan hover:underline">
              More about Derek →
            </Link>
          </p>

          {a.relatedProjects.length > 0 && (
            <div className="mt-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-faint">The work behind this</p>
              <ul className="mt-3 space-y-1">
                {a.relatedProjects.map((s) => {
                  const p = getProject(s)
                  return p ? (
                    <li key={s}>
                      <Link to={`/work/${s}`} className="inline-flex min-h-10 items-center text-[16px] font-semibold hover:text-cyan">
                        {p.name} →
                      </Link>
                    </li>
                  ) : null
                })}
              </ul>
            </div>
          )}

          {more.length > 0 && (
            <div className="mt-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-faint">Keep reading</p>
              <ul className="mt-3 border-b border-line">
                {more.map((m) => (
                  <li key={m.slug} className="border-t border-line">
                    <Link to={`/blog/${m.slug}`} className="block py-4 text-[17px] font-semibold leading-snug hover:text-cyan">
                      {m.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </footer>
      </div>
    </article>
  )
}

/** Renders the carried-over article blocks, grouping consecutive list items into one list. */
function Body({ blocks }: { blocks: Block[] }) {
  const out: React.ReactNode[] = []
  let list: string[] = []
  const flush = (k: number) => {
    if (!list.length) return
    out.push(
      <ul key={`ul-${k}`} className="my-6 space-y-3">
        {list.map((t) => (
          <li key={t} className="grid grid-cols-[18px_1fr] gap-2">
            <span aria-hidden className="mt-[13px] h-px w-3 bg-cyan" />
            <span>
              <LeadIn text={t} />
            </span>
          </li>
        ))}
      </ul>,
    )
    list = []
  }
  blocks.forEach(([type, text], i) => {
    if (type === 'li') {
      list.push(text)
      return
    }
    flush(i)
    if (type === 'h')
      out.push(
        <h2 key={i} className="mb-4 mt-12 text-[26px] font-bold leading-tight tracking-[-0.02em] text-paper">
          {text}
        </h2>,
      )
    else if (type === 'q')
      out.push(
        <blockquote key={i} className="my-8 border-l-2 border-cyan pl-5 text-[22px] font-semibold leading-snug text-paper">
          {text}
        </blockquote>,
      )
    else
      out.push(
        <p key={i} className="mb-5">
          {text}
        </p>,
      )
  })
  flush(blocks.length)
  return <div className="text-[18px] leading-[1.75] text-dim">{out}</div>
}

/** "Thin Content: Just swapping…" → bold lead-in before the colon. */
function LeadIn({ text }: { text: string }) {
  const m = text.match(/^([^:]{2,48}):\s(.+)$/)
  if (!m) return <>{text}</>
  return (
    <>
      <strong className="font-semibold text-paper">{m[1]}:</strong> {m[2]}
    </>
  )
}
