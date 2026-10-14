import React from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '../data/site'
import { useSeo, PERSON_LD } from '../components/useSeo'
import { PageIntro } from '../components/PageIntro'
import { AssetPlaceholder, NeedsMark } from '../components/AssetPlaceholder'

export function AboutPage() {
  useSeo({
    title: 'About Derek Bowen — Driver, Builder, Founder, Author, Dad',
    description:
      'A first-person biography: 20+ years in commercial transportation and carnival operations, a CDL with doubles, self-taught software and AI-assisted engineering, five books, and three kids.',
    path: '/about',
    type: 'profile',
    jsonLd: PERSON_LD,
  })

  return (
    <>
      <PageIntro
        title="The longer version."
        lede="I’m a working operator who learned to build software because the problems in front of me weren’t going to fix themselves, and nobody was going to fix them for a price I could pay."
      />

      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-14 md:grid-cols-[1fr_300px] md:gap-16 md:px-8 md:py-20">
        <article className="max-w-[68ch] text-[18px] leading-[1.7] text-dim [&_h2]:mb-4 [&_h2]:mt-14 [&_h2]:text-[26px] [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:tracking-[-0.02em] [&_h2]:text-paper [&_p]:mb-5 first:[&_h2]:mt-0">
          <h2>Where I come from</h2>
          <p>
            I’m Derek Bowen. I live in Riverside, California, and I’ve spent more than twenty years around commercial transportation, carnival
            equipment, operations, logistics and small business. Not as a consultant. As the guy who has to make it work on the day.
          </p>
          <p>
            Carnival work teaches you things nobody puts in a business book. A ride is a machine that hundreds of people trust with their kids,
            and it has to come down, fold up, travel hundreds of miles and go back up safely, on schedule, on a lot you may have never seen. I’ve
            done the hands-on side of that: setup and teardown, safety, moving equipment, planning routes, and dealing with whatever broke
            overnight.
          </p>

          <h2>The job</h2>
          <p>
            I drive commercial trucks hauling carnival rides throughout the western United States. I hold a Class A CDL with a doubles
            endorsement. I got my license in 2007 after driver training, and I’ve been behind the wheel in one form or another ever since.
          </p>
          <p>
            Driving is a logistics education you get paid for. You learn dependencies, because the ride doesn’t go up until the trailer arrives,
            and the trailer doesn’t arrive if the truck it’s hooked to is stuck behind a closure. You learn that plans change at 5 a.m. and the
            person who needs to know is usually the last to find out. Almost every piece of software I’ve built since has that lesson somewhere in
            it.
          </p>
          <p>
            It’s also a hard job. I’ve written about that bluntly, because the recruiting version of trucking is mostly bullshit. But it gave me
            steady income and long hours to think, and I used both.
          </p>

          <figure className="my-10">
            <AssetPlaceholder need="You in or beside the cab" detail="A candid, unposed photo. No plates or company paperwork in frame." ratio="aspect-[16/9]" />
          </figure>

          <h2>Small businesses before software</h2>
          <p>
            Before I wrote any code, I ran things. The one that mattered most was Ferris wheel rentals: sourcing big rides for events and
            brokering rentals between organizers and operators. It taught me how fragmented that market is. Finding the right ride meant days of
            phone calls, because the inventory lives in operators’ heads and contact lists, not on a website.
          </p>
          <p>
            I’ve tried other small businesses too, some of which worked and some of which didn’t. Every one of them taught me what small
            operators deal with: no budget, no staff, contracts and liability you have to figure out yourself, and software built for companies a
            hundred times your size.
          </p>

          <h2>Teaching myself to build</h2>
          <p>
            Pool Rental Near Me is where I stopped being a customer of software and started building it. Early on I depended on outside
            developers for almost everything. Everything was slow, and everything was expensive. The breaking point was a $1,700 quote for a
            sitemap. A sitemap.
          </p>
          <p>
            So I learned. First no-code and automation tools, then real codebases with AI coding agents doing a lot of the typing. Today I work
            with tools like Claude Code and Codex, the OpenAI and Gemini APIs, Supabase and PostgreSQL, Sharetribe, Next.js, TanStack Start,
            Vercel, AWS, Stripe, Twilio and GitHub. With them I can do work that would traditionally take a small team.
          </p>
          <p>
            I want to be straight about what that means. <span className="text-paper">I design the architecture, decide what gets built, direct
            the AI tools, review and test what they produce, and operate the result.</span> I don’t claim to have hand-typed every line of code,
            and I don’t think that’s the point anymore. The point is that it works, it’s maintained, and I understand it well enough to fix it
            from a truck stop.
          </p>

          <blockquote className="my-10 border-l-2 border-cyan pl-6 text-[24px] font-semibold leading-snug tracking-[-0.01em] text-paper">
            I didn’t stop working to write pitch decks. I build around a demanding job, on breaks and after long days.
          </blockquote>

          <h2>Where the two worlds overlap</h2>
          <p>
            The thread through all of it is simple: I build tools for problems I’ve personally run into. Carnival Safety Institute exists because
            I’ve seen inspections done from memory. The fleet dispatch system exists because I’m one of the drivers it dispatches. Carnival Ride
            Rental exists because I spent days calling around for Ferris wheels. Rental Waivers exists because my pool hosts needed one, and
            founders.click exists because I needed growth tooling I couldn’t afford.
          </p>
          <p>
            Not everything has launched, and not everything that launched worked. I’ve generated thousands of pages Google never indexed, and
            I’ve built things that didn’t land. This site tries to be honest about which is which. Every project is labelled live, in beta, in
            development, or internal.
          </p>

          <h2>Writing</h2>
          <p>
            I’ve published five books on Amazon, mostly practical guides for pool hosts and carnival operators, plus one about keeping a family
            running while you build. I also write articles about trucking, marketplaces, AI tools and programmatic SEO, usually in the voice you’re
            reading now. Writing is how I find out whether I actually understand something.
          </p>

          <h2>Being a dad</h2>
          <p>
            I’m a father of three. That’s the part of my life I keep mostly private, and it’s also the reason for most of the rest. Building
            businesses on the margins of a full-time job is a trade-off you make with time you’ll never get back, and I try to make it count.
          </p>

          <h2>How I work with people</h2>
          <p>
            I’m most useful to marketplace founders who need to move without a dev team, operators who need software that respects how the work
            actually happens, and people in the carnival and amusement industry who want better safety and logistics tooling. I’m on the road
            most weeks, so I’m not always fast to reply, but I do reply.
          </p>
          <p>
            <Link to="/journey" className="font-semibold text-cyan hover:underline">
              See the timeline →
            </Link>
            <span className="mx-3 text-faint">·</span>
            <Link to="/work" className="font-semibold text-cyan hover:underline">
              See the work →
            </Link>
          </p>
        </article>

        <aside className="md:sticky md:top-24 md:self-start">
          <img src={SITE.portrait} alt="Derek Bowen" className="aspect-[4/5] w-full border border-line object-cover" />
          <dl className="mt-6 divide-y divide-line border-y border-line font-mono text-[12px]">
            {[
              ['Based in', 'Riverside, California'],
              ['Drives', 'Commercial trucks, carnival rides, western US'],
              ['License', 'CDL Class A, doubles endorsement'],
              ['Since', 'CDL 2007, Southwest Truck Driver Training'],
              ['Founder', 'PRNM Corp (Pool Rental Near Me)'],
              ['Author', '5 books on Amazon'],
              ['Family', 'Father of three'],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[88px_1fr] gap-3 py-3">
                <dt className="uppercase tracking-wider text-faint">{k}</dt>
                <dd className="text-paper">{v}</dd>
              </div>
            ))}
            <div className="grid grid-cols-[88px_1fr] gap-3 py-3">
              <dt className="uppercase tracking-wider text-faint">Hazmat</dt>
              <dd>
                <NeedsMark>Status to confirm</NeedsMark>
              </dd>
            </div>
          </dl>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center font-mono text-[12px] uppercase tracking-wider text-cyan hover:underline"
          >
            LinkedIn ↗
          </a>
        </aside>
      </div>
    </>
  )
}
