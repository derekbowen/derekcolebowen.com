import React from 'react'
import { Link } from 'react-router-dom'
import { useSeo } from '../components/useSeo'
import { PageIntro } from '../components/PageIntro'
import { NeedsMark, AssetPlaceholder } from '../components/AssetPlaceholder'

type Tag = 'Road' | 'Business' | 'Software' | 'Writing'

type Milestone = {
  when: string
  /** false = era or year still to be confirmed; shown with a marker. */
  confirmed: boolean
  tag: Tag
  title: string
  body: string
  to?: string
  photo?: string
}

const MILESTONES: Milestone[] = [
  {
    when: 'Early years',
    confirmed: false,
    tag: 'Road',
    title: 'Hands-on carnival operations',
    body: 'Setup, teardown, safety and moving equipment from lot to lot. This is where I learned how rides, trailers and people actually move, and where things go wrong.',
    photo: 'An early photo on a carnival lot',
  },
  {
    when: '2007',
    confirmed: true,
    tag: 'Road',
    title: 'Class A CDL',
    body: 'Driver training and my commercial license. Then years behind the wheel, adding the doubles endorsement and hauling carnival rides across the western US.',
  },
  {
    when: 'Before software',
    confirmed: false,
    tag: 'Business',
    title: 'Ferris wheel rentals and other small businesses',
    body: 'Sourcing rides and brokering event rentals between organizers and operators. I learned first-hand how fragmented the operator market is.',
    to: '/work/ferris-wheel-rental',
  },
  {
    when: 'PRNM founded',
    confirmed: false,
    tag: 'Business',
    title: 'Pool Rental Near Me',
    body: 'A marketplace for private pool rentals, and the first time I had to own a two-sided business end to end: supply, trust, liability, payments.',
    to: '/work/pool-rental-near-me',
  },
  {
    when: 'The breaking point',
    confirmed: false,
    tag: 'Software',
    title: 'A $1,700 sitemap',
    body: 'Waiting on developers for every change, at prices I couldn’t justify. I decided to learn to build it myself.',
    to: '/blog/1700-sitemap',
  },
  {
    when: 'By Jan 2024',
    confirmed: true,
    tag: 'Writing',
    title: 'Publishing on Amazon',
    body: 'Practical books for pool hosts and carnival operators, plus one about family life while building. Five books published.',
    to: '/writing#books',
  },
  {
    when: 'AI-assisted era',
    confirmed: false,
    tag: 'Software',
    title: 'AI coding tools and programmatic SEO at scale',
    body: 'Claude Code, Codex and model APIs turned one person into something closer to a team. My SEO systems went on to generate 10,000+ pages across projects, and taught me how few of them get indexed.',
    to: '/seo-systems',
  },
  {
    when: 'Infrastructure',
    confirmed: false,
    tag: 'Software',
    title: 'Rental Waivers',
    body: 'My pool hosts needed signed waivers without a subscription. It became a product of its own.',
    to: '/work/rental-waivers',
  },
  {
    when: 'Back to carnivals',
    confirmed: false,
    tag: 'Software',
    title: 'Carnival Ride Rental',
    body: 'The tool I wanted back when I was calling around for Ferris wheels. About 3,700 rides catalogued.',
    to: '/work/carnival-ride-rental',
  },
  {
    when: 'Safety',
    confirmed: false,
    tag: 'Software',
    title: 'Carnival Safety Institute',
    body: 'Ride passports, inspections, safety holds, and the long work of turning manufacturer manuals into reviewed inspection programs.',
    to: '/work/carnival-safety-institute',
  },
  {
    when: 'From the driver’s seat',
    confirmed: false,
    tag: 'Software',
    title: 'Carnival fleet dispatch',
    body: 'An internal system for the moves I drive in: dispatch boards, trailer compatibility, SMS sign-in.',
    to: '/work/carnival-fleet-dispatch',
  },
  {
    when: '2026',
    confirmed: true,
    tag: 'Software',
    title: 'founders.click, and writing it all down',
    body: 'Packaging my growth tooling for other marketplace founders, now in private beta. And publishing articles about trucking, marketplaces, AI and SEO.',
    to: '/work/founders-click',
  },
]

const TAG_TONE: Record<Tag, string> = {
  Road: 'text-live',
  Business: 'text-paper',
  Software: 'text-cyan',
  Writing: 'text-slate',
}

export function JourneyPage() {
  useSeo({
    title: 'Journey — From Carnival Lots to Software | Derek Bowen',
    description:
      'A timeline of Derek Bowen’s path: hands-on carnival operations, a Class A CDL, rental businesses, Pool Rental Near Me, AI-assisted engineering, Carnival Safety Institute and the products that followed.',
    path: '/journey',
  })

  return (
    <>
      <PageIntro
        title="How a carnival driver ended up building software."
        lede="This isn’t a pivot story. I never stopped driving. Each thing I built came out of the one before it, and out of the job."
      >
        <p className="mt-6 flex flex-wrap items-center gap-3 text-[14px] text-dim">
          <NeedsMark>Year to confirm</NeedsMark>
          <span>marks milestones whose exact dates are still being checked. The order is right; some years aren’t pinned yet.</span>
        </p>
      </PageIntro>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-8 md:py-20">
        <ol className="relative">
          {MILESTONES.map((m) => (
            <li key={m.title} className="grid gap-3 border-l border-line pb-12 pl-6 md:grid-cols-[180px_1fr] md:gap-10 md:border-l-0 md:pl-0">
              <div className="relative md:border-r md:border-line md:pr-8 md:text-right">
                <span aria-hidden className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-cyan bg-ink md:-right-[6px] md:left-auto" />
                <p className="font-mono text-[13px] font-medium text-paper">{m.when}</p>
                {!m.confirmed && (
                  <div className="mt-1.5">
                    <NeedsMark>Year to confirm</NeedsMark>
                  </div>
                )}
              </div>
              <div>
                <p className={`font-mono text-[11px] uppercase tracking-wider ${TAG_TONE[m.tag]}`}>{m.tag}</p>
                <h2 className="mt-1 text-[22px] font-bold leading-snug tracking-[-0.01em] md:text-[26px]">
                  {m.to ? (
                    <Link to={m.to} className="hover:text-cyan">
                      {m.title}
                    </Link>
                  ) : (
                    m.title
                  )}
                </h2>
                <p className="mt-2 max-w-[60ch] text-[16px] leading-[1.65] text-dim">{m.body}</p>
                {m.photo && (
                  <div className="mt-5 max-w-[420px]">
                    <AssetPlaceholder need={m.photo} ratio="aspect-[3/2]" />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
        <div className="border-t border-line pt-8">
          <p className="text-[17px] text-dim">
            What’s happening this month is on the{' '}
            <Link to="/now" className="font-semibold text-cyan hover:underline">
              Now page →
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
