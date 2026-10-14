import React from 'react'

/** Hairline step diagram. Wraps into rows on desktop, stacks vertically on phones. */
export function FlowDiagram({ title, steps, caption }: { title: string; steps: string[]; caption: string }) {
  return (
    <figure className="border border-line bg-ink-2 p-5 md:p-7">
      <p className="font-mono text-[11px] uppercase tracking-wider text-faint">Diagram</p>
      <p className="mt-1 text-[17px] font-semibold">{title}</p>
      <ol className="mt-6 flex flex-col gap-0 md:flex-row md:flex-wrap md:items-stretch md:gap-y-4">
        {steps.map((s, i) => (
          <li key={s} className="flex flex-col md:flex-row md:items-center">
            <div className="flex items-center gap-3 border border-cyan/60 px-3 py-2.5 md:min-h-[52px]">
              <span className="font-mono text-[11px] text-cyan">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[14px] font-medium leading-snug text-paper">{s}</span>
            </div>
            {i < steps.length - 1 && (
              <span aria-hidden className="ml-6 h-5 w-px bg-cyan/50 md:ml-0 md:h-px md:w-6" />
            )}
          </li>
        ))}
      </ol>
      <figcaption className="mt-6 max-w-[70ch] text-[14px] leading-relaxed text-dim">{caption}</figcaption>
    </figure>
  )
}
