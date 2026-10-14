import React, { useId, useState } from 'react'
import { SITE } from '../data/site'
import { useSeo } from '../components/useSeo'
import { PageIntro } from '../components/PageIntro'
import { NeedsMark } from '../components/AssetPlaceholder'

const REASONS = [
  {
    id: 'partnership',
    label: 'Founder partnership',
    fit: 'You’re building something adjacent to marketplaces, rentals or the carnival industry and think we should work together.',
  },
  {
    id: 'software',
    label: 'Software or automation project',
    fit: 'A real operation that needs a system built, like dispatch, inspections, waivers or growth tooling. Not a quick logo or a WordPress fix.',
  },
  {
    id: 'marketplace',
    label: 'Marketplace inquiry',
    fit: 'About Pool Rental Near Me, Carnival Ride Rental, founders.click, or building a marketplace of your own.',
  },
  {
    id: 'industry',
    label: 'Carnival & amusement collaboration',
    fit: 'Operators, manufacturers, inspectors and shows interested in safety or logistics tooling.',
  },
] as const

type Errors = Partial<Record<'reason' | 'name' | 'email' | 'message', string>>

export function ContactPage() {
  useSeo({
    title: 'Contact Derek Bowen — Partnerships, Software & Marketplace Inquiries',
    description:
      'Get in touch with Derek Bowen about founder partnerships, software and automation projects, marketplace inquiries, or carnival and amusement industry collaboration.',
    path: '/contact',
  })

  const [reason, setReason] = useState<string>('')
  const [fields, setFields] = useState({ name: '', email: '', org: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)
  const uid = useId()

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const next: Errors = {}
    if (!reason) next.reason = 'Pick what this is about.'
    if (!fields.name.trim()) next.name = 'Add your name.'
    if (!/^\S+@\S+\.\S+$/.test(fields.email)) next.email = 'Add an email I can reply to.'
    if (fields.message.trim().length < 20) next.message = 'Give me a little more to go on, at least a couple of sentences.'
    setErrors(next)
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0]
      document.getElementById(`${uid}-${first}`)?.focus()
      return
    }
    setSent(true)
  }

  const chosen = REASONS.find((r) => r.id === reason)

  return (
    <>
      <PageIntro
        title="Get in touch."
        lede="I read these myself, usually after a shift. I’m on the road most weeks, so a reply can take a few days, but it’ll come."
      />

      <div className="mx-auto grid max-w-[1200px] gap-14 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[1.4fr_1fr]">
        {sent ? (
          <div role="status" className="border border-line bg-ink-2 p-6 md:p-8">
            <p className="font-mono text-[12px] uppercase tracking-wider text-amber">Not sent yet: delivery isn’t connected</p>
            <h2 className="mt-3 text-[26px] font-bold tracking-[-0.02em]">Your message looks good, {fields.name.split(' ')[0]}.</h2>
            <p className="mt-3 max-w-[56ch] text-[16px] leading-[1.6] text-dim">
              This form’s delivery address is still being set up, so nothing was sent. Please send it through LinkedIn for now. Your message is
              below so you can copy it.
            </p>
            <pre className="mt-5 max-h-60 overflow-auto whitespace-pre-wrap border border-line bg-ink p-4 font-mono text-[13px] text-dim">
              {`${chosen?.label}\n${fields.name}${fields.org ? ` — ${fields.org}` : ''} <${fields.email}>\n\n${fields.message}`}
            </pre>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center rounded-[4px] bg-cyan px-5 text-[15px] font-semibold text-ink hover:bg-cyan-deep"
              >
                Message on LinkedIn ↗
              </a>
              <button type="button" onClick={() => setSent(false)} className="inline-flex h-12 items-center px-2 text-[15px] font-semibold text-dim hover:text-paper">
                Edit message
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} noValidate aria-describedby={`${uid}-note`}>
            <p id={`${uid}-note`} className="mb-8 flex flex-wrap items-center gap-3 text-[14px] text-dim">
              <NeedsMark>Delivery not connected</NeedsMark>
              Replace before launch with the real destination address.
            </p>

            <fieldset aria-describedby={errors.reason ? `${uid}-reason-err` : undefined}>
              <legend className="text-[18px] font-semibold">What’s this about?</legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {REASONS.map((r, i) => (
                  <label
                    key={r.id}
                    className={`flex cursor-pointer gap-3 border p-4 transition-colors duration-150 ${
                      reason === r.id ? 'border-cyan bg-ink-2' : 'border-line hover:border-line-strong'
                    }`}
                  >
                    <input
                      id={i === 0 ? `${uid}-reason` : undefined}
                      type="radio"
                      name="reason"
                      value={r.id}
                      checked={reason === r.id}
                      onChange={() => setReason(r.id)}
                      className="mt-1 h-4 w-4 shrink-0 accent-[#00D9FF]"
                    />
                    <span>
                      <span className="block text-[15px] font-semibold">{r.label}</span>
                      <span className="mt-1 block text-[13px] leading-snug text-dim">{r.fit}</span>
                    </span>
                  </label>
                ))}
              </div>
              {errors.reason && (
                <p id={`${uid}-reason-err`} className="mt-2 text-[14px] text-amber">
                  {errors.reason}
                </p>
              )}
            </fieldset>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Field id={`${uid}-name`} label="Name" error={errors.name}>
                <input
                  id={`${uid}-name`}
                  autoComplete="name"
                  value={fields.name}
                  onChange={(e) => setFields({ ...fields, name: e.target.value })}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? `${uid}-name-err` : undefined}
                  className={inputCls(!!errors.name)}
                />
              </Field>
              <Field id={`${uid}-email`} label="Email" error={errors.email}>
                <input
                  id={`${uid}-email`}
                  type="email"
                  autoComplete="email"
                  value={fields.email}
                  onChange={(e) => setFields({ ...fields, email: e.target.value })}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? `${uid}-email-err` : undefined}
                  className={inputCls(!!errors.email)}
                />
              </Field>
            </div>
            <div className="mt-6">
              <Field id={`${uid}-org`} label="Company or project (optional)">
                <input
                  id={`${uid}-org`}
                  autoComplete="organization"
                  value={fields.org}
                  onChange={(e) => setFields({ ...fields, org: e.target.value })}
                  className={inputCls(false)}
                />
              </Field>
            </div>
            <div className="mt-6">
              <Field id={`${uid}-message`} label="Message" error={errors.message}>
                <textarea
                  id={`${uid}-message`}
                  rows={6}
                  value={fields.message}
                  onChange={(e) => setFields({ ...fields, message: e.target.value })}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? `${uid}-message-err` : undefined}
                  className={`${inputCls(!!errors.message)} h-auto py-3`}
                />
              </Field>
            </div>
            <button
              type="submit"
              className="mt-8 inline-flex h-12 items-center rounded-[4px] bg-cyan px-6 text-[16px] font-semibold text-ink transition-colors duration-150 hover:bg-cyan-deep"
            >
              Send message
            </button>
          </form>
        )}

        <aside className="space-y-10">
          <div>
            <h2 className="font-mono text-[12px] uppercase tracking-wider text-faint">Prefer direct?</h2>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-11 items-center text-[18px] font-semibold text-cyan hover:underline"
            >
              LinkedIn: derekcbowen ↗
            </a>
            <p className="mt-3 flex flex-wrap items-center gap-2 text-[15px] text-dim">
              Email: <NeedsMark>Address needed</NeedsMark>
            </p>
          </div>
          <div>
            <h2 className="font-mono text-[12px] uppercase tracking-wider text-faint">Good to know</h2>
            <ul className="mt-3 space-y-3 text-[15px] leading-[1.55] text-dim">
              <li>I don’t take on work I can’t do well around the driving schedule. If it’s urgent, I’ll tell you straight whether I can help.</li>
              <li>For a Pool Rental Near Me booking or a host account question, reach out through poolrentalnearme.com so it lands with the right records.</li>
              <li>No phone number or address here, on purpose.</li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  )
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[15px] font-semibold">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-err`} className="mt-2 text-[14px] text-amber">
          {error}
        </p>
      )}
    </div>
  )
}

const inputCls = (bad: boolean) =>
  `block h-12 w-full rounded-[4px] border bg-ink-2 px-3.5 text-[16px] text-paper placeholder:text-faint focus:border-cyan focus:outline-none focus-visible:outline-2 focus-visible:outline-cyan ${
    bad ? 'border-amber' : 'border-line-strong'
  }`
