import React from 'react'

export type StatusKey =
  | 'live-business'
  | 'live-product'
  | 'beta'
  | 'dev'
  | 'testing'
  | 'held'
  | 'internal'
  | 'published'
  | 'past'
  | 'verify'

export const STATUS: Record<StatusKey, { label: string; meaning: string; tone: string; dot: string }> = {
  'live-business': {
    label: 'Live business',
    meaning: 'Operating and serving real customers.',
    tone: 'border-live/50 text-live',
    dot: 'bg-live',
  },
  'live-product': {
    label: 'Live product',
    meaning: 'Public and usable today.',
    tone: 'border-live/50 text-live',
    dot: 'bg-live',
  },
  beta: {
    label: 'Private beta',
    meaning: 'Works for a limited set of users. Not generally available.',
    tone: 'border-cyan/50 text-cyan',
    dot: 'bg-cyan',
  },
  dev: {
    label: 'In development',
    meaning: 'Being built. Parts may work; not offered as complete.',
    tone: 'border-cyan/40 text-cyan',
    dot: 'border border-cyan bg-transparent',
  },
  testing: {
    label: 'In testing',
    meaning: 'Built and being tested before it’s offered.',
    tone: 'border-cyan/40 text-cyan',
    dot: 'border border-cyan bg-transparent',
  },
  held: {
    label: 'Built · held from index',
    meaning: 'Exists, deliberately kept out of search until it passes quality review.',
    tone: 'border-slate/50 text-slate',
    dot: 'border border-slate bg-transparent',
  },
  internal: {
    label: 'Internal system',
    meaning: 'Operational software. Not for sale, no public access.',
    tone: 'border-slate/50 text-slate',
    dot: 'bg-slate',
  },
  published: {
    label: 'Published',
    meaning: 'Actually out in the world.',
    tone: 'border-live/50 text-live',
    dot: 'bg-live',
  },
  past: {
    label: 'Past',
    meaning: 'Earlier venture, no longer active.',
    tone: 'border-line-strong text-faint',
    dot: 'bg-faint',
  },
  verify: {
    label: 'Status to verify',
    meaning: 'Not confirmed yet, so nothing here is claimed.',
    tone: 'border-amber/50 text-amber',
    dot: 'border border-amber bg-transparent',
  },
}

export function StatusStamp({ status, className = '' }: { status: StatusKey; className?: string }) {
  const s = STATUS[status]
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-[3px] border px-2 py-[3px] font-mono text-[11px] font-medium uppercase tracking-wider ${s.tone} ${className}`}
    >
      <span aria-hidden className={`h-[7px] w-[7px] rounded-full ${s.dot}`} />
      {s.label}
    </span>
  )
}
