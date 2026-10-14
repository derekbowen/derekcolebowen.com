import React from 'react'
import { NeedsMark } from './AssetPlaceholder'

const STAGES = [
  { stage: 'Generated', value: '10,000+', note: 'Across PRNM, Carnival Ride Rental and other projects', width: 'w-full' },
  { stage: 'Deployed', value: null, note: 'Pages actually live on a public URL', width: 'w-[78%]' },
  { stage: 'Indexed', value: null, note: 'Per Google Search Console, with a date', width: 'w-[46%]' },
  { stage: 'Earning clicks', value: null, note: 'Pages with real search traffic in a stated period', width: 'w-[22%]' },
]

/**
 * The honest version of "I generated 10,000 pages."
 * Bar widths are illustrative only and the diagram says so. Real counts replace the markers.
 */
export function SeoFunnel({ compact = false }: { compact?: boolean }) {
  return (
    <figure className="border border-line bg-ink-2 p-5 md:p-7">
      <p className="font-mono text-[11px] uppercase tracking-wider text-faint">Generated is not indexed is not traffic</p>
      <ol className="mt-5 space-y-4">
        {STAGES.map((s) => (
          <li key={s.stage}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <span className="text-[15px] font-semibold">{s.stage}</span>
              {s.value ? (
                <span className="font-mono text-[15px] text-paper">{s.value}</span>
              ) : (
                <NeedsMark>Count needed</NeedsMark>
              )}
            </div>
            <div className="mt-2 h-2 bg-ink-3">
              <div className={`h-2 ${s.width} ${s.value ? 'bg-cyan' : 'bg-cyan/35'}`} />
            </div>
            {!compact && <p className="mt-1.5 text-[13px] text-dim">{s.note}</p>}
          </li>
        ))}
      </ol>
      <div className="mt-6 border-t border-line pt-4">
        <p className="text-[14px] text-dim">
          <span className="font-semibold text-slate">Held back on purpose:</span> 17,000+ Carnival Ride Rental city pages, built and kept out of
          the index until they pass review.
        </p>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-faint">
          Bar lengths show the shape, not measured values
        </p>
      </div>
    </figure>
  )
}
