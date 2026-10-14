import React from 'react'
import type { Metric } from '../data/projects'
import { NeedsMark } from './AssetPlaceholder'

/** A number is only ever shown with what it measures and when. */
export function MetricFigure({ m, size = 'md' }: { m: Metric; size?: 'lg' | 'md' | 'sm' }) {
  const valueSize = size === 'lg' ? 'text-[56px] md:text-[72px]' : size === 'md' ? 'text-[36px]' : 'text-[24px]'
  const pending = m.verified === false
  return (
    <div>
      {pending ? (
        <p className={`font-extrabold leading-none tracking-[-0.03em] text-faint ${valueSize}`} aria-label="Figure withheld">
          —
        </p>
      ) : (
        <p className={`font-extrabold leading-none tracking-[-0.03em] text-paper ${valueSize}`}>{m.value}</p>
      )}
      <p className="mt-2 text-[15px] leading-snug text-dim">{m.label}</p>
      <p className="mt-2 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-faint">
        {pending ? (
          <NeedsMark>Pending verification</NeedsMark>
        ) : m.asOf ? (
          <span>As of {m.asOf}</span>
        ) : (
          <NeedsMark>Date needed</NeedsMark>
        )}
        {m.source && !pending && <span className="normal-case tracking-normal">· {m.source}</span>}
      </p>
    </div>
  )
}
