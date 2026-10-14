import React from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { StatusStamp } from './StatusStamp'
import { Visual } from './Visual'

/** A wide ruled row for the Work index. Flagships get more room. */
export function ProjectRow({ p, large = false }: { p: Project; large?: boolean }) {
  return (
    <article className={`grid gap-6 border-t border-line py-8 md:gap-10 ${large ? 'md:grid-cols-[1.25fr_1fr]' : 'md:grid-cols-[320px_1fr]'}`}>
      <Link to={`/work/${p.slug}`} tabIndex={-1} aria-hidden className="block">
        <Visual v={p.hero} compact={!large} />
      </Link>
      <div className="flex flex-col">
        <div className="flex flex-wrap items-center gap-3">
          <StatusStamp status={p.status} />
          <span className="font-mono text-[12px] text-faint">{p.role}</span>
        </div>
        <h3 className={`mt-4 font-bold tracking-[-0.02em] ${large ? 'text-[34px] leading-[1.05]' : 'text-[26px] leading-tight'}`}>
          <Link to={`/work/${p.slug}`} className="transition-colors duration-150 hover:text-cyan">
            {p.name}
          </Link>
          {p.aka && <span className="ml-2 text-[16px] font-medium text-faint">/ {p.aka}</span>}
        </h3>
        <p className="mt-3 max-w-[60ch] text-[16px] leading-[1.6] text-dim">{large ? p.summary : p.oneLiner}</p>
        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-6">
          <Link to={`/work/${p.slug}`} className="inline-flex min-h-11 items-center text-[15px] font-semibold text-cyan hover:underline">
            Read the case study →
          </Link>
          {p.link.state === 'public' && (
            <a
              href={p.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center font-mono text-[12px] text-dim transition-colors duration-150 hover:text-paper"
            >
              {p.link.label} ↗
            </a>
          )}
          {p.link.state === 'internal' && <span className="font-mono text-[12px] text-faint">Internal. No public access</span>}
        </div>
      </div>
    </article>
  )
}
