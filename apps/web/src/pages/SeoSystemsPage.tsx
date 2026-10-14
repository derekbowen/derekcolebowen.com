import React from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '../data/site'
import { useSeo, breadcrumbLd } from '../components/useSeo'
import { PageIntro } from '../components/PageIntro'
import { SeoFunnel } from '../components/SeoFunnel'
import { FlowDiagram } from '../components/FlowDiagram'
import { NeedsMark } from '../components/AssetPlaceholder'
import { StatusStamp } from '../components/StatusStamp'

const PERFORMANCE = [
  { project: 'Pool Rental Near Me', to: '/work/pool-rental-near-me', generated: 'Thousands', deployed: null, indexed: null, earning: null },
  { project: 'Carnival Ride Rental', to: '/work/carnival-ride-rental', generated: '17,000+ city variants', deployed: 'Held from index', indexed: null, earning: null },
  { project: 'UOutdoors', to: '/work/uoutdoors', generated: null, deployed: null, indexed: null, earning: null },
  { project: 'founders.click (beta customers)', to: '/work/founders-click', generated: null, deployed: null, indexed: null, earning: null },
]

const TOOLKIT = [
  { group: 'AI-assisted engineering', tools: 'Claude Code, Codex', use: 'Writing and refactoring most of the code I direct, across every project' },
  { group: 'AI models & APIs', tools: 'OpenAI APIs, Gemini APIs', use: 'Content drafting, classification, extraction (CSI manuals, in development)' },
  { group: 'Data & backend', tools: 'Supabase / PostgreSQL, AWS', use: 'Inventories, page data, dispatch records, auth, storage' },
  { group: 'Web frameworks & hosting', tools: 'Next.js, TanStack Start, Vercel', use: 'Front ends, programmatic page rendering, deploys' },
  { group: 'Marketplace platform', tools: 'Sharetribe', use: 'Pool Rental Near Me core; founders.click integration' },
  { group: 'Payments', tools: 'Stripe', use: 'Marketplace checkout, credit purchases' },
  { group: 'Messaging', tools: 'Twilio', use: 'SMS sign-in and notifications (dispatch), lifecycle messaging' },
  { group: 'Logistics data', tools: 'HERE, Motive', use: 'Routing and telematics for fleet dispatch' },
  { group: 'Delivery', tools: 'GitHub, CI/CD, automation tooling', use: 'Version control, automated deploys, scheduled jobs' },
  { group: 'Search', tools: 'Google Search Console, sitemaps, structured data', use: 'Indexation analysis, crawl management, rich results' },
]

export function SeoSystemsPage() {
  useSeo({
    title: 'Technical SEO & Automation Systems — Case Study | Derek Bowen',
    description:
      'How Derek Bowen built AI-supported programmatic SEO systems across his marketplaces: 10,000+ pages generated, and an honest account of how many were deployed, indexed and actually earning search traffic.',
    path: '/seo-systems',
    type: 'article',
    jsonLd: [
      breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
        { name: 'Technical SEO & Automation', path: '/seo-systems' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Technical SEO & Automation Systems',
        author: { '@id': `${SITE.origin}/#derek`, '@type': 'Person', name: 'Derek Bowen' },
        mainEntityOfPage: `${SITE.origin}/seo-systems`,
      },
    ],
  })

  return (
    <>
      <PageIntro
        crumbs={[{ label: 'Work', to: '/work' }, { label: 'Logistics & Automation', to: '/work#logistics' }, { label: 'SEO & Automation' }]}
        title="10,000 pages, and what Google did with them."
        lede="I built programmatic SEO and publishing systems for my own marketplaces because I couldn’t afford an agency and got tired of waiting on developers. This is the full account: what the machine does, what got indexed, what didn’t, and the technical debt I made along the way."
      />

      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <section className="grid gap-10 border-b border-line py-14 md:grid-cols-[1fr_1fr] md:gap-14 md:py-20">
          <div className="max-w-[60ch] space-y-5 text-[17px] leading-[1.7] text-dim">
            <h2 className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-paper md:text-[34px]">Four numbers that aren’t the same number</h2>
            <p>
              People say “we generated 10,000 pages” like it’s a result. It isn’t. A page can be <span className="text-paper">generated</span>{' '}
              and never deployed. It can be <span className="text-paper">deployed</span> and never indexed. It can be{' '}
              <span className="text-paper">indexed</span> and never shown to anyone. The only pages that count are the ones{' '}
              <span className="text-paper">earning clicks</span>.
            </p>
            <p>
              My systems have generated more than 10,000 pages across projects. I’m not going to imply they were all indexed or successful.
              Most weren’t. The counts for each stage get published here with dates from Search Console, and until then they’re marked as
              missing rather than guessed.
            </p>
          </div>
          <SeoFunnel />
        </section>

        <Section title="Why I built it">
          <p>
            Pool Rental Near Me is a local business in thousands of places at once. Someone in Phoenix searches for a pool to rent in Phoenix,
            not a national brand. That means location pages, a lot of them, and each one needs to be worth landing on.
          </p>
          <p>
            Agencies quoted numbers I couldn’t pay. Developers quoted timelines I couldn’t wait for, including{' '}
            <Link to="/blog/1700-sitemap" className="font-medium text-cyan hover:underline">
              $1,700 for a sitemap
            </Link>
            . So I built the machinery myself, with AI coding tools doing much of the implementation under my direction.
          </p>
        </Section>

        <section className="border-b border-line py-14 md:py-20">
          <h2 className="text-[28px] font-bold leading-tight tracking-[-0.02em] md:text-[34px]">The machine</h2>
          <div className="mt-8">
            <FlowDiagram
              title="From inventory to an indexable page"
              steps={['Inventory & geo data', 'Validate: is there anything real here?', 'Template + structured data', 'AI draft + human checks', 'Internal links & sitemap', 'Release in batches', 'Search Console review']}
              caption="The second step does the most work. A city page with no real inventory behind it is a thin page, and thin pages drag down the whole domain."
            />
          </div>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {[
              ['City & category structures', 'Geographic and category hierarchies (state, city, ride type, activity) so every page has a parent, siblings and children.'],
              ['Inventory validation', 'A page has to have something behind it, like actual listings or rides. If the data isn’t there, the page doesn’t ship.'],
              ['AI content pipelines', 'Models draft the local and category copy from real data. Templates and checks keep it from turning into city-name swaps.'],
              ['Sitemaps', 'Segmented sitemaps by type and region, so crawl problems show up per section instead of across the whole site.'],
              ['Structured data', 'Schema on listings, organizations, breadcrumbs and articles where it actually describes the page.'],
              ['Internal linking', 'Programmatic links between neighbors and parents so no generated page is an orphan.'],
              ['Search Console analysis', 'Reading coverage reports by section: “Discovered”, “Crawled — currently not indexed”, and the pages that actually rank.'],
              ['Batch releases', 'Rolling pages out in waves instead of dumping thousands at once on a low-authority domain.'],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-line pt-4">
                <dt className="text-[17px] font-semibold">{k}</dt>
                <dd className="mt-2 text-[16px] leading-[1.6] text-dim">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Section title="What Google actually did">
          <p>
            A lot of pages landed in “Discovered — currently not indexed” or “Crawled — currently not indexed.” That’s Google telling you it
            doesn’t think the page is worth the storage yet. I wrote about living in that state in{' '}
            <Link to="/blog/digital-waiting-room" className="font-medium text-cyan hover:underline">
              The Digital Waiting Room
            </Link>
            , and about the mechanics in{' '}
            <Link to="/blog/scaling-with-programmatic-seo" className="font-medium text-cyan hover:underline">
              Scaling with Programmatic SEO
            </Link>
            .
          </p>
          <p>
            The lesson I paid for: crawl budget is finite on a young domain, and every weak page spends some of it. That’s why the 17,000+
            Carnival Ride Rental city pages are built but held. Publishing them all would be easy. Making them worth indexing is the actual job.
          </p>
        </Section>

        <Section title="The technical debt that comes with scale">
          <p>Generating pages is cheap. Keeping thousands of them correct is the expensive part. These are the kinds of debt this work creates, and how I handle them:</p>
          <ul className="space-y-4">
            {[
              'Generating faster than you can validate. The answer is to pull, merge or noindex what doesn’t hold up, and put validation before generation.',
              'One giant sitemap hides which section has the problem. Splitting sitemaps by type and region makes coverage issues visible.',
              'Templates evolve and older pages fall behind on structure and links. Regenerating in batches has to be part of the routine, not a cleanup project.',
              'AI copy that reads fine on one page reads as duplicate across a hundred. Checking for sameness across pages matters as much as quality on any one page.',
            ].map((t) => (
              <li key={t} className="border-l-2 border-line-strong pl-4">
                {t}
              </li>
            ))}
          </ul>
        </Section>

        <section className="border-b border-line py-14 md:py-20">
          <h2 className="text-[28px] font-bold leading-tight tracking-[-0.02em] md:text-[34px]">Real search performance</h2>
          <p className="mt-4 max-w-[64ch] text-[17px] leading-[1.65] text-dim">
            Per project, per stage. A blank isn’t zero. It means the count hasn’t been pulled and dated yet, and I won’t estimate it.
          </p>
          <div className="mt-8 overflow-x-auto border border-line">
            <table className="w-full min-w-[720px] text-left text-[15px]">
              <caption className="sr-only">Pages generated, deployed, indexed and earning traffic, by project</caption>
              <thead className="bg-ink-2 font-mono text-[11px] uppercase tracking-wider text-faint">
                <tr>
                  {['Project', 'Generated', 'Deployed', 'Indexed', 'Earning clicks'].map((h) => (
                    <th key={h} scope="col" className="px-4 py-3 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {PERFORMANCE.map((r) => (
                  <tr key={r.project}>
                    <th scope="row" className="px-4 py-3 font-medium">
                      <Link to={r.to} className="hover:text-cyan">
                        {r.project}
                      </Link>
                    </th>
                    {[r.generated, r.deployed, r.indexed, r.earning].map((v, i) => (
                      <td key={i} className="px-4 py-3 text-paper">
                        {v ?? <NeedsMark>Data needed</NeedsMark>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-faint">Source when filled: Google Search Console, date range stated per row</p>
        </section>

        <Section title="What became founders.click">
          <p>
            Every piece above, from validation and drafting to linking and the coverage review, is something every marketplace founder needs and
            most can’t build. founders.click is my attempt to package it. It’s in private beta, and the case study is clear about what’s tested
            and what isn’t.
          </p>
          <p>
            <Link to="/work/founders-click" className="inline-flex items-center gap-3 font-semibold text-cyan hover:underline">
              founders.click case study → <StatusStamp status="beta" />
            </Link>
          </p>
        </Section>

        <section id="toolkit" className="scroll-mt-24 py-14 md:py-20">
          <h2 className="text-[28px] font-bold leading-tight tracking-[-0.02em] md:text-[34px]">The toolkit</h2>
          <p className="mt-4 max-w-[66ch] text-[17px] leading-[1.65] text-dim">
            These are the tools I actually work with. To be clear about my part: I design the architecture, choose the tools, direct AI coding
            agents, review and test their output, and run the systems in production. I don’t claim to have hand-written every line.
          </p>
          <div className="mt-8 overflow-x-auto border border-line">
            <table className="w-full min-w-[720px] text-left text-[15px]">
              <thead className="bg-ink-2 font-mono text-[11px] uppercase tracking-wider text-faint">
                <tr>
                  <th scope="col" className="px-4 py-3 font-medium">
                    Area
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    Tools
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    Where I’ve used it
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {TOOLKIT.map((t) => (
                  <tr key={t.group}>
                    <th scope="row" className="px-4 py-3 align-top font-mono text-[12px] font-medium uppercase tracking-wider text-faint">
                      {t.group}
                    </th>
                    <td className="px-4 py-3 align-top font-medium text-paper">{t.tools}</td>
                    <td className="px-4 py-3 align-top text-dim">{t.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-6 border-b border-line py-14 md:grid-cols-[1fr_1.5fr] md:gap-14 md:py-20">
      <h2 className="text-[28px] font-bold leading-tight tracking-[-0.02em] md:text-[34px]">{title}</h2>
      <div className="max-w-[64ch] space-y-5 text-[17px] leading-[1.7] text-dim">{children}</div>
    </section>
  )
}
