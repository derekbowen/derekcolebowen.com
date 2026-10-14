import React from 'react'
import { Link } from 'react-router-dom'

export function PageIntro({
  title,
  lede,
  crumbs,
  children,
}: {
  title: React.ReactNode
  lede?: React.ReactNode
  crumbs?: { label: string; to?: string }[]
  children?: React.ReactNode
}) {
  return (
    <div className="border-b border-line">
      <div className="mx-auto max-w-[1200px] px-5 pb-12 pt-12 md:px-8 md:pb-16 md:pt-20">
        {crumbs && <Breadcrumbs crumbs={crumbs} />}
        <h1 className="max-w-[18ch] text-[40px] font-extrabold leading-[1.02] tracking-[-0.03em] md:text-[64px]">{title}</h1>
        {lede && <div className="mt-6 max-w-[62ch] text-[18px] leading-[1.6] text-dim md:text-[20px]">{lede}</div>}
        {children}
      </div>
    </div>
  )
}

export function Breadcrumbs({ crumbs }: { crumbs: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[12px] uppercase tracking-wider text-faint">
        {crumbs.map((c, i) => (
          <li key={c.label} className="flex items-center gap-2">
            {c.to ? (
              <Link to={c.to} className="transition-colors duration-150 hover:text-cyan">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-dim">
                {c.label}
              </span>
            )}
            {i < crumbs.length - 1 && <span aria-hidden>›</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function SectionHead({ id, title, kicker, children }: { id?: string; title: string; kicker?: string; children?: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24">
      {kicker && <p className="font-mono text-[12px] uppercase tracking-wider text-cyan">{kicker}</p>}
      <h2 className="mt-2 text-[28px] font-bold leading-tight tracking-[-0.02em] md:text-[36px]">{title}</h2>
      {children && <div className="mt-4 max-w-[64ch] text-[17px] leading-[1.65] text-dim">{children}</div>}
    </div>
  )
}
