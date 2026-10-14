// Real assets already published on the current derekcolebowen.com, served from
// this repo's own apps/web/public/images/ directory.
export const img = (file: string) => `/images/${file}`

export const SITE = {
  name: 'Derek Bowen',
  origin: 'https://derekcolebowen.com',
  location: 'Riverside, California',
  linkedin: 'https://www.linkedin.com/in/derekcbowen/',
  portrait: img('59b0610f463f778a6bc3df34cf4389fd.jpg'),
}

export const NAV = [
  { label: 'Work', to: '/work' },
  { label: 'SEO Systems', to: '/seo-systems' },
  { label: 'Writing', to: '/writing' },
  { label: 'About', to: '/about' },
  { label: 'Journey', to: '/journey' },
  { label: 'Now', to: '/now' },
]

export const CATEGORIES = [
  {
    id: 'marketplaces',
    label: 'Marketplaces',
    intro:
      'Two-sided businesses where I own the whole problem: getting supply, earning trust from buyers, and building the search plumbing so either side can find the other.',
  },
  {
    id: 'saas-safety',
    label: 'SaaS & Safety',
    intro:
      'Software other businesses run on. Waivers, inspections, growth tooling. Each one started as something I needed and couldn’t buy at a price that made sense.',
  },
  {
    id: 'logistics',
    label: 'Logistics & Automation',
    intro:
      'Systems for moving real equipment and for publishing at a scale one person shouldn’t be able to handle. Some are internal tools. They don’t have a sign-up page and aren’t supposed to.',
  },
  {
    id: 'publishing',
    label: 'Publishing',
    intro:
      'Books on Amazon, articles written from the cab, and learning material for the people who use my marketplaces.',
  },
] as const

export type CategoryId = (typeof CATEGORIES)[number]['id']
