import React from 'react'
import { Link } from 'react-router-dom'

const ROOTS = [
  { id: 'ops', name: 'Carnival operations & hauling', note: '20+ years, hands-on' },
  { id: 'fwr', name: 'Ferris wheel rentals', note: 'Brokering events', to: '/work/ferris-wheel-rental' },
  { id: 'prnm', name: 'Pool Rental Near Me', note: 'Flagship marketplace', to: '/work/pool-rental-near-me' },
]

const BRANCHES = [
  { name: 'Carnival Safety Institute', from: 'ops', why: 'Inspections I’ve watched done from memory', to: '/work/carnival-safety-institute' },
  { name: 'Carnival Fleet Dispatch', from: 'ops', why: 'The moves I drive in', to: '/work/carnival-fleet-dispatch' },
  { name: 'Carnival Ride Rental', from: 'fwr', why: 'Days of calling around for rides', to: '/work/carnival-ride-rental' },
  { name: 'Rental Waivers', from: 'prnm', why: 'Hosts needed signed waivers', to: '/work/rental-waivers' },
  { name: 'SEO & automation systems', from: 'prnm', why: 'No budget for an agency', to: '/seo-systems' },
]

/** How the ventures relate. Read left to right: where it started, what it led to, what that became. */
export function WorkMap() {
  const rootName = (id: string) => ROOTS.find((r) => r.id === id)?.name
  return (
    <figure className="border border-line bg-ink-2 p-5 md:p-7">
      <p className="font-mono text-[11px] uppercase tracking-wider text-faint">How it connects</p>
      <div className="mt-5 grid gap-8 md:grid-cols-[1fr_1.5fr_1fr] md:gap-6">
        <Column title="Where it started">
          {ROOTS.map((r) => (
            <React.Fragment key={r.id}>
              <Node name={r.name} note={r.note} to={r.to} />
            </React.Fragment>
          ))}
        </Column>
        <Column title="What it led to">
          {BRANCHES.map((b) => (
            <React.Fragment key={b.name}>
              <Node name={b.name} note={`From ${rootName(b.from)}: ${b.why.toLowerCase()}`} to={b.to} accent />
            </React.Fragment>
          ))}
        </Column>
        <Column title="What that became">
          <Node
            name="founders.click"
            note="The SEO and growth tooling from my own marketplaces, packaged for other founders"
            to="/work/founders-click"
            accent
          />
          <Node name="Five books & the articles" note="Writing down what each of these taught me" to="/writing" />
        </Column>
      </div>
    </figure>
  )
}

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="border-b border-line pb-2 font-mono text-[11px] uppercase tracking-wider text-cyan">{title}</p>
      <ul className="mt-3 space-y-2">{children}</ul>
    </div>
  )
}

function Node({ name, note, to, accent }: { name: string; note: string; to?: string; accent?: boolean }) {
  const body = (
    <>
      <span className="block text-[15px] font-semibold text-paper">{name}</span>
      <span className="mt-0.5 block text-[13px] leading-snug text-dim">{note}</span>
    </>
  )
  return (
    <li className={`border-l-2 pl-3 ${accent ? 'border-cyan/70' : 'border-line-strong'}`}>
      {to ? (
        <Link to={to} className="block py-1 transition-colors duration-150 hover:[&>span:first-child]:text-cyan">
          {body}
        </Link>
      ) : (
        <div className="py-1">{body}</div>
      )}
    </li>
  )
}
