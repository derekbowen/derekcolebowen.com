import type { StatusKey } from '../components/StatusStamp'

export const NOW = {
  /** Set this on every update. Left empty, the page shows a visible "date needed" marker. */
  lastUpdated: '',
  onTheRoad:
    'Still driving: hauling carnival rides across the western US with a doubles endorsement. Building happens on breaks and after the day’s haul.',
  columns: [
    {
      title: 'Live',
      headline: 'Pool Rental Near Me, Rental Waivers on the web, and Carnival Ride Rental discovery.',
      items: [
        { slug: 'pool-rental-near-me', name: 'Pool Rental Near Me', status: 'live-business' as StatusKey, line: 'Working the supply side: host sign-ups that turn into published, bookable listings.' },
        { slug: 'rental-waivers', name: 'Rental Waivers (web)', status: 'live-product' as StatusKey, line: 'Web signing and credit purchases live.' },
        { slug: 'carnival-ride-rental', name: 'Carnival Ride Rental', status: 'live-product' as StatusKey, line: 'Ride discovery and geographic search live. City pages still held from the index.' },
      ],
    },
    {
      title: 'In beta',
      headline: 'founders.click, running real marketplaces through the full loop.',
      items: [
        { slug: 'founders-click', name: 'founders.click', status: 'beta' as StatusKey, line: 'Private beta. Features get promoted only after passing end to end.' },
        { slug: 'carnival-ride-rental', name: 'CRR paid operator contact', status: 'testing' as StatusKey, line: 'Testing who pays and how much.' },
      ],
    },
    {
      title: 'Building',
      headline: 'Manual-to-inspection automation for Carnival Safety Institute, and the waiver mobile apps.',
      items: [
        { slug: 'carnival-safety-institute', name: 'CSI manual-to-checklist', status: 'dev' as StatusKey, line: 'Source-traced extraction plus a human review queue.' },
        { slug: 'rental-waivers', name: 'Rental Waivers iOS & Android', status: 'dev' as StatusKey, line: 'Packaging in progress. Not distributed yet.' },
        { slug: 'pool-rental-near-me', name: 'Waivers inside PRNM bookings', status: 'dev' as StatusKey, line: 'Wiring the two together.' },
      ],
    },
  ],
}
