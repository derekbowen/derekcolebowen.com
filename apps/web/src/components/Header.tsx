import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV, SITE } from '../data/site'

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-8">
        <Link to="/" className="group flex items-baseline gap-3" aria-label="Derek Bowen, home">
          <span className="text-[17px] font-bold tracking-tight text-paper">Derek Bowen</span>
          <span className="hidden font-mono text-[11px] uppercase tracking-wider text-faint sm:inline">
            Riverside, CA
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `whitespace-nowrap py-1 text-[14px] font-medium underline-offset-[6px] transition-colors duration-150 hover:text-paper ${
                  isActive ? 'text-paper underline decoration-cyan decoration-2' : 'text-dim'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="whitespace-nowrap rounded-[4px] bg-cyan px-4 py-2 text-[14px] font-semibold text-ink transition-colors duration-150 hover:bg-cyan-deep"
          >
            Contact
          </Link>
        </nav>

        <button
          ref={menuButton}
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 items-center gap-2 rounded-[4px] border border-line-strong px-4 font-mono text-[12px] uppercase tracking-wider text-paper lg:hidden"
        >
          Menu
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <MobileMenu
            onClose={() => {
              setOpen(false)
              menuButton.current?.focus()
            }}
          />
        )}
      </AnimatePresence>
    </header>
  )
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const panel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panel.current?.querySelector<HTMLElement>('a,button')?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key !== 'Tab' || !panel.current) return
      const items = panel.current.querySelectorAll<HTMLElement>('a,button')
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div
      id="mobile-menu"
      ref={panel}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
      className="fixed inset-0 z-50 flex flex-col bg-ink lg:hidden"
    >
      <div className="flex h-16 items-center justify-between border-b border-line px-5 md:px-8">
        <Link to="/" className="text-[17px] font-bold tracking-tight">
          Derek Bowen
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="flex h-11 items-center rounded-[4px] border border-line-strong px-4 font-mono text-[12px] uppercase tracking-wider"
        >
          Close
        </button>
      </div>
      <nav aria-label="Primary" className="flex-1 overflow-y-auto px-5 py-6 md:px-8">
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex min-h-14 items-center border-b border-line text-[28px] font-semibold tracking-tight ${
                  isActive ? 'text-cyan' : 'text-paper'
                }`
              }
            >
              Home
            </NavLink>
          </li>
          {NAV.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex min-h-14 items-center border-b border-line text-[28px] font-semibold tracking-tight ${
                    isActive ? 'text-cyan' : 'text-paper'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t border-line px-5 py-5 md:px-8">
        <Link
          to="/contact"
          className="flex h-12 w-full items-center justify-center rounded-[4px] bg-cyan text-[16px] font-semibold text-ink"
        >
          Contact Derek
        </Link>
        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex h-11 items-center justify-center font-mono text-[12px] uppercase tracking-wider text-dim"
        >
          LinkedIn ↗
        </a>
      </div>
    </motion.div>
  )
}
