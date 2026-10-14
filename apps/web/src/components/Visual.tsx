import React from 'react'
import type { Visual as V } from '../data/projects'
import { AssetPlaceholder } from './AssetPlaceholder'

/** Either a real screenshot/photo with an honest caption, or a marked placeholder. */
export function Visual({ v, compact = false, showCaption = false }: { v: V; compact?: boolean; showCaption?: boolean }) {
  if (v.kind === 'placeholder') {
    return <AssetPlaceholder need={v.need} detail={compact ? undefined : v.detail} ratio="aspect-[16/10]" />
  }
  return (
    <figure>
      <div className="aspect-[16/10] w-full overflow-hidden border border-line bg-ink-2">
        <img src={v.src} alt={v.alt} loading="lazy" className="h-full w-full object-cover object-top" />
      </div>
      {showCaption && <figcaption className="mt-2 text-[13px] leading-snug text-faint">{v.caption}</figcaption>}
    </figure>
  )
}
