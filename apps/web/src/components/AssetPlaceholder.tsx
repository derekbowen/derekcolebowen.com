import React from 'react'

/** A visibly-marked frame for a genuine photo or screenshot that hasn't been supplied yet. */
export function AssetPlaceholder({
  need,
  detail,
  ratio = 'aspect-[3/2]',
  className = '',
}: {
  need: string
  detail?: string
  ratio?: string
  className?: string
}) {
  return (
    <figure
      role="img"
      aria-label={`Image needed: ${need}`}
      className={`hatch relative flex ${ratio} w-full flex-col justify-end border border-line-strong ${className}`}
    >
      <span className="absolute right-3 top-3 rounded-[3px] border border-amber/60 bg-ink px-2 py-[3px] font-mono text-[10px] font-medium uppercase tracking-wider text-amber">
        Replace before launch
      </span>
      <figcaption className="m-3 max-w-[40ch] bg-ink/90 p-3">
        <span className="block font-mono text-[11px] uppercase tracking-wider text-amber">Photo needed</span>
        <span className="mt-1 block text-[14px] font-medium leading-snug text-paper">{need}</span>
        {detail && <span className="mt-1 block text-[13px] leading-snug text-dim">{detail}</span>}
      </figcaption>
    </figure>
  )
}

/** Inline amber marker for a link, date or number that needs verification. */
export function NeedsMark({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-[3px] border border-amber/50 px-1.5 py-[1px] font-mono text-[10.5px] uppercase tracking-wider text-amber">
      {children}
    </span>
  )
}
