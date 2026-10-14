import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSeo } from '../components/useSeo'

export function NotFoundPage() {
  const { pathname } = useLocation()
  useSeo({ title: 'Wrong exit — Derek Bowen', description: 'That page doesn’t exist.', path: pathname, noindex: true })

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-8 md:py-32">
      <p className="font-mono text-[12px] uppercase tracking-wider text-faint">404 · {pathname}</p>
      <h1 className="mt-4 text-[48px] font-extrabold leading-none tracking-[-0.03em] md:text-[72px]">Wrong exit.</h1>
      <p className="mt-6 max-w-[48ch] text-[18px] leading-[1.6] text-dim">
        That page doesn’t exist, or it moved when the site was rebuilt. Here’s how to get back on the route.
      </p>
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        {[
          ['Home', '/'],
          ['Work', '/work'],
          ['Writing', '/writing'],
          ['Contact', '/contact'],
        ].map(([l, to]) => (
          <li key={to}>
            <Link to={to} className="inline-flex min-h-11 items-center text-[17px] font-semibold text-cyan hover:underline">
              {l} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
