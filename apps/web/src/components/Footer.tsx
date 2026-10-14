import React from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES, NAV, SITE } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-8">
        <div>
          <p className="text-[20px] font-bold tracking-tight">Derek Bowen</p>
          <p className="mt-3 max-w-[30ch] text-[15px] leading-relaxed text-dim">
            Built between shifts in Riverside, California. Commercial driver, marketplace founder, author, dad.
          </p>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center font-mono text-[12px] uppercase tracking-wider text-cyan hover:underline"
          >
            LinkedIn ↗
          </a>
        </div>

        <FooterColumn title="Site">
          <FooterLink to="/">Home</FooterLink>
          {NAV.map((n) => (
            <React.Fragment key={n.to}>
              <FooterLink to={n.to}>{n.label}</FooterLink>
            </React.Fragment>
          ))}
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterColumn>

        <FooterColumn title="Work">
          {CATEGORIES.map((c) => (
            <React.Fragment key={c.id}>
              <FooterLink to={`/work#${c.id}`}>{c.label}</FooterLink>
            </React.Fragment>
          ))}
          <FooterLink to="/writing#books">Books</FooterLink>
        </FooterColumn>

        <FooterColumn title="Fine print">
          <FooterLink to="/site-status">Site status &amp; launch checklist</FooterLink>
          <li>
            <span className="text-[14px] text-faint">Privacy · Terms (carried over at launch)</span>
          </li>
        </FooterColumn>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-[1200px] px-5 py-5 font-mono text-[11px] uppercase tracking-wider text-faint md:px-8">
          © Derek Bowen · No stock photos of me on this site. If a photo is missing, it says so.
        </p>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-wider text-faint">{title}</p>
      <ul className="mt-3 space-y-1">{children}</ul>
    </div>
  )
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="inline-flex min-h-9 items-center text-[15px] text-dim transition-colors duration-150 hover:text-paper">
        {children}
      </Link>
    </li>
  )
}
