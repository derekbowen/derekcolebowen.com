import type { StatusKey } from '../components/StatusStamp'
import type { CategoryId } from './site'
import { img } from './site'

export type Metric = {
  value: string
  label: string
  /** When the figure was measured. Missing = shown as "Date needed". */
  asOf?: string
  source?: string
  /** false = reported somewhere but not yet verified; the value is withheld. */
  verified?: boolean
}

export type Visual =
  | { kind: 'image'; src: string; alt: string; caption: string }
  | { kind: 'placeholder'; need: string; detail?: string }

export type Project = {
  slug: string
  name: string
  aka?: string
  category: CategoryId
  role: string
  years?: string
  status: StatusKey
  oneLiner: string
  summary: string
  link: { state: 'public'; url: string; label: string } | { state: 'internal' } | { state: 'needed'; label: string }
  hero: Visual
  gallery?: Visual[]
  problem: string[]
  built: { intro: string; items: string[] }
  flow?: { title: string; steps: string[]; caption: string }
  stack: { group: string; items: string }[]
  obstacles: string[]
  metrics: Metric[]
  resultsNote: string
  liveTable: { part: string; status: StatusKey; note?: string }[]
  now: string
  privacyNote?: string
  relatedArticles: string[]
  relatedProjects: string[]
  seoTitle: string
  seoDescription: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'pool-rental-near-me',
    name: 'Pool Rental Near Me',
    category: 'marketplaces',
    role: 'Founder & CEO, PRNM Corp',
    status: 'live-business',
    oneLiner: 'A marketplace where private pool owners rent out their pools by the hour for swims, parties and family days.',
    summary:
      'My flagship. Built on Sharetribe with a custom front end, payments, mobile apps, liability protection and a nationwide location-SEO system that I designed and run myself.',
    link: { state: 'public', url: 'https://poolrentalnearme.com', label: 'poolrentalnearme.com' },
    hero: {
      kind: 'placeholder',
      need: 'Pool Rental Near Me — search results or listing page screenshot',
      detail: 'Desktop capture, 16:10. Blur any host addresses or guest names.',
    },
    gallery: [
      { kind: 'placeholder', need: 'Host onboarding flow screenshot', detail: 'Listing setup or pricing step.' },
      { kind: 'placeholder', need: 'A programmatic city page screenshot', detail: 'Any live city page, captured with its date.' },
    ],
    problem: [
      'A lot of people own a pool they use a handful of weekends a year. A lot of other people want somewhere to swim, throw a kid’s birthday, or get out of 110-degree Inland Empire heat, and don’t have one. Nobody has to be convinced the demand is real.',
      'The hard parts are trust, liability and supply. A homeowner has to be comfortable letting strangers into the backyard. A renter has to believe the listing is real and the water is clean. And somebody has to answer the question every host asks first: what happens if someone gets hurt? That question kills most backyard-rental ideas before they launch.',
    ],
    built: {
      intro:
        'I built PRNM as a working business, not a demo. I directed the architecture, did most of the build with AI coding tools, and I still operate it day to day.',
      items: [
        'Marketplace core on Sharetribe: listings, availability, booking requests, messaging and reviews.',
        'A custom front end on top of Sharetribe for search, landing pages and conversion work.',
        'Payment integration through the marketplace checkout.',
        'iOS and Android apps. Store links are being re-checked before they go on this page.',
        'Platform liability protection and host-side waiver flows, which later became Rental Waivers.',
        'Host onboarding: listing setup, pricing guidance, house rules and learning material for new hosts.',
        'Operations automation: lifecycle email and SMS, follow-ups, and admin views that show me what’s broken.',
        'Nationwide location SEO: programmatic city pages, AI-assisted publishing, internal linking and structured data.',
      ],
    },
    flow: {
      title: 'How a booking moves through the platform',
      steps: ['City page or search', 'Listing', 'Booking request', 'Host accepts', 'Payment', 'Waiver & house rules', 'Swim', 'Review & follow-up'],
      caption: 'Every step after “Listing” is where hosts and guests drop off. Most of my conversion work happens in those gaps.',
    },
    stack: [
      { group: 'Marketplace', items: 'Sharetribe' },
      { group: 'Front end', items: 'Custom front end on Sharetribe' },
      { group: 'Payments', items: 'Stripe via the marketplace checkout' },
      { group: 'Mobile', items: 'iOS and Android apps' },
      { group: 'Growth', items: 'Programmatic location pages, AI-assisted publishing, lifecycle messaging' },
      { group: 'How it was built', items: 'Claude Code, Codex, OpenAI and Gemini APIs, GitHub' },
    ],
    obstacles: [
      'Supply is the whole game. Getting a homeowner to list is a sales job. Getting them to keep the calendar open on a July Saturday is a second sales job.',
      'Hosts quit when the first requests don’t come quickly, and requests don’t come quickly in a city with three hosts. That loop is the cold-start problem, and I live inside it.',
      'Liability comes up in every host conversation. Protection has to be explained in plain English, or the host never finishes the listing.',
      'Location SEO can bring visitors to cities where there’s nothing to book yet. I had to decide which cities actually deserve a page.',
      'Seasonality. Summer is busy. Most of the country goes quiet in winter.',
      'Early on I depended on outside developers for basic changes. A $1,700 quote for a sitemap is why I learned to build.',
    ],
    metrics: [
      { value: '1,100+', label: 'registered accounts', asOf: '2026 reporting', source: 'PRNM internal reporting (exact month to confirm)' },
      { value: '280+', label: 'providers (hosts) signed up', asOf: '2026 reporting', source: 'PRNM internal reporting (exact month to confirm)' },
      { value: 'Thousands', label: 'location SEO pages generated', asOf: '2026 reporting', source: 'PRNM page inventory' },
    ],
    resultsNote:
      'Accounts and providers are sign-ups, not transactions. I’m not publishing booking volume or revenue here. The number that really matters is how many of those hosts take bookings every week, and that’s the problem I’m still working on.',
    liveTable: [
      { part: 'Marketplace, search and booking', status: 'live-business' },
      { part: 'Location SEO pages', status: 'live-product', note: 'Indexed count to be published with a Search Console date.' },
      { part: 'iOS and Android apps', status: 'verify', note: 'Store links to be confirmed.' },
      { part: 'Rental Waivers integration', status: 'dev' },
      { part: 'Host learning material', status: 'verify' },
    ],
    now: 'The focus is host supply and conversion: fewer, better city pages where there are actually pools to book, and tighter follow-up with hosts who sign up but never publish.',
    relatedArticles: ['marketplace-graveyard', '1700-sitemap', 'scaling-with-programmatic-seo'],
    relatedProjects: ['rental-waivers', 'founders-click'],
    seoTitle: 'Pool Rental Near Me — Case Study | Derek Bowen',
    seoDescription:
      'How Derek Bowen built Pool Rental Near Me, a private-pool rental marketplace: Sharetribe, payments, mobile apps, liability protection and nationwide location SEO. Plus the supply problems that still need solving.',
  },
  {
    slug: 'carnival-ride-rental',
    name: 'Carnival Ride Rental',
    category: 'marketplaces',
    role: 'Founder, builder',
    status: 'live-product',
    oneLiner: 'National discovery for carnival rides: Ferris wheels, carousels, thrill rides and kiddie rides, with operator access for event organizers.',
    summary:
      'About 3,700 rides catalogued, with geographic search and an operator-contact model still in testing. More than 17,000 city pages are built and deliberately held out of Google until they’re good enough.',
    link: { state: 'public', url: 'https://carnivalriderental.us', label: 'carnivalriderental.us' },
    hero: {
      kind: 'placeholder',
      need: 'Carnival Ride Rental — ride search or category page screenshot',
      detail: 'Show ride inventory, not operator contact details.',
    },
    problem: [
      'If you’re planning a fair, a festival or a big corporate event and you need a Ferris wheel, there isn’t a good place to look. The operators are scattered across the country. Plenty of them don’t have a website. The real inventory, meaning who owns what and where it’ll be in August, lives in people’s heads and phone contacts.',
      'I know this from the brokering side. Running Ferris wheel rentals meant calling around for days to find the right ride, in the right region, on the right weekend. Carnival Ride Rental is the tool I wanted back then.',
    ],
    built: {
      intro: 'The work here is mostly data and structure: getting a messy industry into a shape people can search.',
      items: [
        'An inventory of roughly 3,700 rides, classified by type: Ferris wheels, carousels, thrill rides, family rides, kiddie rides and more.',
        'Geographic search so an organizer can start from where the event is.',
        'Category and geographic page-generation infrastructure.',
        'Privacy-aware presentation: operator contact details aren’t sprayed across public pages.',
        'An operator-contact model that organizers pay for. It’s still changing and still in testing.',
      ],
    },
    flow: {
      title: 'From messy source to a page worth indexing',
      steps: ['Collect ride records', 'De-duplicate & classify', 'Attach region', 'Generate category & city pages', 'Quality review', 'Release to index (or hold)'],
      caption: 'The last step is the one most programmatic projects skip. Here, 17,000+ city pages are sitting at “hold”.',
    },
    stack: [
      { group: 'Data', items: 'Ride inventory database, classification and de-duplication' },
      { group: 'Search', items: 'Geographic search, category structures' },
      { group: 'Publishing', items: 'Programmatic city and category pages, sitemaps, structured data' },
      { group: 'How it was built', items: 'Claude Code, Codex, OpenAI and Gemini APIs' },
    ],
    obstacles: [
      'Source data is inconsistent. The same ride shows up under three names with two different owners.',
      'Operators don’t want to be scraped and exposed. Presentation has to respect that, or the supply side turns on you.',
      '17,000 city pages is exactly the kind of thing that gets a site judged as thin. Holding them back costs traffic in the short term but protects the domain.',
      'Who pays? Organizers, operators, or both? The contact model is still being tested, and I’m not calling it solved.',
    ],
    metrics: [
      { value: '~3,700', label: 'rides in the inventory', source: 'CRR inventory' },
      { value: '17,000+', label: 'city-page variants built, held from indexing', source: 'CRR page generator' },
    ],
    resultsNote:
      'Built is not the same as live, and live is not the same as indexed. The city pages exist and are intentionally kept out of search until they pass quality review. I’m not claiming traffic from them.',
    liveTable: [
      { part: 'Ride discovery and geographic search', status: 'live-product' },
      { part: 'Inventory classification', status: 'live-product' },
      { part: '17,000+ city pages', status: 'held' },
      { part: 'Paid operator contact', status: 'testing' },
    ],
    now: 'Tightening inventory quality and deciding which city pages earn their way into the index first.',
    relatedArticles: ['digital-waiting-room', 'scaling-with-programmatic-seo'],
    relatedProjects: ['ferris-wheel-rental', 'carnival-safety-institute'],
    seoTitle: 'Carnival Ride Rental — Case Study | Derek Bowen',
    seoDescription:
      'Carnival Ride Rental: a national carnival-ride discovery marketplace with ~3,700 rides catalogued and 17,000+ city pages deliberately held from search pending quality review.',
  },
  {
    slug: 'uoutdoors',
    name: 'UOutdoors',
    category: 'marketplaces',
    role: 'Role being confirmed (listing architecture & programmatic SEO)',
    status: 'verify',
    oneLiner: 'An outdoor recreation and land-access marketplace for hunting, fishing and private property access.',
    summary:
      'A marketplace connecting landowners with hunters and anglers. My contribution was the listing structure and the programmatic SEO behind it. The listing count and my exact role are being re-verified before any number goes up here.',
    link: { state: 'needed', label: 'Product URL to confirm' },
    hero: { kind: 'placeholder', need: 'UOutdoors — listing or search screenshot', detail: 'Any public listing page.' },
    problem: [
      'Plenty of private land would make good hunting or fishing ground, and plenty of people would pay for access. Arranging it usually means knowing somebody. Landowners worry about liability and strangers. Hunters and anglers want to know what’s allowed, in what season, and whether the listing is real.',
    ],
    built: {
      intro: 'My work focused on how listings are structured and how they get found.',
      items: [
        'A listing structure built around property, activity (hunting, fishing, access), species or season, and location.',
        'Programmatic SEO across state and activity combinations, so the right listings show up for the right searches.',
        'Internal linking between regions, activities and individual listings.',
      ],
    },
    stack: [
      { group: 'Marketplace', items: 'Listing architecture and categories' },
      { group: 'Growth', items: 'Programmatic state and activity pages, internal linking' },
    ],
    obstacles: [
      'Land-access listings vary hugely: a pond for a day isn’t a 2,000-acre lease for a season. The structure has to hold both.',
      'Seasons and regulations change by state, so pages that say too much go stale.',
    ],
    metrics: [{ value: '', label: 'live listings (figure reported on the previous site)', verified: false, source: 'Pending verification' }],
    resultsNote: 'No transaction or revenue claims. The listing count stays off this page until it’s checked and dated.',
    liveTable: [
      { part: 'Marketplace', status: 'verify' },
      { part: 'Listing architecture & SEO pages', status: 'verify' },
    ],
    now: 'Confirming the current listing count and the scope of my role before this case study is expanded.',
    relatedArticles: ['scaling-with-programmatic-seo'],
    relatedProjects: ['pool-rental-near-me'],
    seoTitle: 'UOutdoors — Hunting, Fishing & Land Access Marketplace | Derek Bowen',
    seoDescription:
      'UOutdoors: an outdoor recreation and land-access marketplace. Derek Bowen’s work on listing architecture and programmatic SEO.',
  },
  {
    slug: 'ferris-wheel-rental',
    name: 'Ferris Wheel Rental US',
    category: 'marketplaces',
    role: 'Owner, broker',
    status: 'verify',
    oneLiner: 'A real-world rental business sourcing Ferris wheels and big attractions for events.',
    summary:
      'Before I built software for the rental market, I worked it by phone. Brokering Ferris wheels for events taught me how fragmented the operator side is, and that’s where Carnival Ride Rental came from.',
    link: { state: 'public', url: 'https://ferriswheelrental.us', label: 'ferriswheelrental.us' },
    hero: {
      kind: 'placeholder',
      need: 'A Ferris wheel you sourced or helped move, set up at an event',
      detail: 'Your own photo, not a stock image. Event name optional.',
    },
    problem: [
      'An event planner wants a Ferris wheel. Simple request. Then the real questions start: which operators have one free that weekend, within a reasonable haul, with the right footprint, power, permits and insurance? Who sets it up, who runs it, and who’s liable?',
    ],
    built: {
      intro: 'This one wasn’t software. It was a business, and what I learned running it shaped what I built later.',
      items: [
        'Sourcing rides from operators across the region.',
        'Coordinating equipment logistics: haul, setup footprint, timing.',
        'Brokering substantial event rentals between organizers and operators.',
        'A website for inquiries, with SEO aimed at the amusement-rental niche.',
      ],
    },
    stack: [{ group: 'Business', items: 'Sourcing, brokering, operator relationships, event logistics' }],
    obstacles: [
      'No central inventory. Every job started with phone calls.',
      'Operators get protective of their contacts and their calendars, and for good reason.',
      'Logistics make or break the deal. A ride that’s 900 miles away isn’t really available.',
    ],
    metrics: [],
    resultsNote:
      'I’ve brokered substantial event rentals. I’m not posting deal totals or revenue. What matters here is what it taught me.',
    liveTable: [{ part: 'Rental brokerage', status: 'verify', note: 'Current operating status to confirm.' }],
    now: 'The lessons live on in Carnival Ride Rental.',
    relatedArticles: ['logistics-digital-innovation'],
    relatedProjects: ['carnival-ride-rental'],
    seoTitle: 'Ferris Wheel Rental US — The Rental Business Behind the Software | Derek Bowen',
    seoDescription:
      'How brokering Ferris wheel rentals showed Derek Bowen how fragmented the amusement-ride operator market is, and led to Carnival Ride Rental.',
  },
  {
    slug: 'founders-click',
    name: 'founders.click',
    category: 'saas-safety',
    role: 'Founder, builder',
    status: 'beta',
    oneLiner: 'AI-powered growth infrastructure for marketplace founders, especially on Sharetribe.',
    summary:
      'The growth tooling I built for my own marketplaces, turned into a product: find what a marketplace site is missing, generate useful pages from real data, and publish them without a dev team. In private beta.',
    link: { state: 'public', url: 'https://founders.click', label: 'founders.click' },
    hero: {
      kind: 'image',
      src: img('87be2119cedef29c38f790d8fe8f09cd.png'),
      alt: 'founders.click dashboard showing ranked daily action items and marketplace KPIs',
      caption: 'Dashboard view, from the product page on the previous site. Capture date to confirm.',
    },
    gallery: [
      {
        kind: 'image',
        src: img('787d57654434be50d684f4be85d21eec.png'),
        alt: 'founders.click SEO view with competitor and ranking panels',
        caption: 'SEO view, from the product page on the previous site.',
      },
      {
        kind: 'image',
        src: img('63d0600096f3b5319d0a17229ae32034.png'),
        alt: 'founders.click page generation and bulk editing screen',
        caption: 'Page generation and bulk editing.',
      },
      {
        kind: 'image',
        src: img('2c5e2f32abc7de6f587d00b1a298d283.png'),
        alt: 'founders.click users and operations management screen',
        caption: 'Users and operations: lead inbox and moderation.',
      },
      {
        kind: 'image',
        src: img('76c88ce5e5e006b6746fb53a498e0918.png'),
        alt: 'founders.click full platform overview',
        caption: 'Platform overview.',
      },
    ],
    problem: [
      'Sharetribe gets you a working marketplace fast. What it doesn’t give you is growth: the city pages, the content, the lead lists, the morning view of what broke overnight. So founders either pay an agency they can’t afford, or they wait on a developer.',
      'I was that founder with Pool Rental Near Me. founders.click is the toolkit I built for myself, turned into a product other founders can use.',
    ],
    built: {
      intro: 'It ties together AI services, backend automation and website publishing.',
      items: [
        'Gap analysis: what pages, content and technical fixes a marketplace site is missing.',
        'Page generation: useful, data-backed landing pages, not city-name swaps.',
        'A connection to marketplace data, so pages reflect real listings and categories.',
        'SEO-ready publishing with structured data and internal links.',
        'A morning dashboard with ranked action items, KPIs and broken pages.',
        'Ops tooling: lead inbox, email verification, moderation.',
      ],
    },
    flow: {
      title: 'What the product is meant to do, end to end',
      steps: ['Connect marketplace data', 'Find gaps', 'Draft pages', 'Human review', 'Publish', 'Measure'],
      caption: 'A feature is called working on this page only after it passes end-to-end testing on a real marketplace.',
    },
    stack: [
      { group: 'AI', items: 'OpenAI and Gemini APIs' },
      { group: 'Backend & web', items: 'Backend automation jobs and website publishing' },
      { group: 'Marketplace', items: 'Sharetribe integration' },
      { group: 'How it was built', items: 'Claude Code, Codex, GitHub, CI/CD' },
    ],
    obstacles: [
      'Every marketplace’s data is shaped differently. A connector that works for one breaks on the next.',
      'AI pages are easy to make and hard to make worth indexing. The tool has to be willing to say “don’t publish this.”',
      'Connecting to someone else’s marketplace means handling their data and credentials carefully.',
      'I’m building it while running PRNM and driving full-time.',
    ],
    metrics: [],
    resultsNote: 'No adoption, customer or revenue numbers yet. It’s in private beta, and I’d rather show the product than invent traction.',
    liveTable: [
      { part: 'Dashboard & gap analysis', status: 'beta' },
      { part: 'Page generation', status: 'beta' },
      { part: 'Marketplace data connection', status: 'testing' },
      { part: 'One-click publishing', status: 'testing' },
    ],
    now: 'Running private-beta marketplaces through the full loop and only promoting features once they pass end to end.',
    relatedArticles: ['1700-sitemap', 'scaling-with-programmatic-seo'],
    relatedProjects: ['pool-rental-near-me', 'carnival-ride-rental'],
    seoTitle: 'founders.click — Growth Infrastructure for Marketplace Founders | Derek Bowen',
    seoDescription:
      'founders.click is Derek Bowen’s AI-powered growth tooling for Sharetribe marketplace founders: gap analysis, data-backed page generation and publishing. Currently in private beta.',
  },
  {
    slug: 'carnival-safety-institute',
    name: 'Carnival Safety Institute',
    aka: 'Carnival Guardian',
    category: 'saas-safety',
    role: 'Founder, builder',
    status: 'dev',
    oneLiner: 'A digital safety and inspection platform for the amusement and carnival industry.',
    summary:
      'Every ride gets an identity and a passport. Inspections, critical findings, safety holds, evidence and return-to-service live in one record. The hardest part, turning manufacturer manuals into model-specific inspection programs that a human reviews and approves, is in active development.',
    link: { state: 'needed', label: 'Public URL to confirm' },
    hero: {
      kind: 'placeholder',
      need: 'A ride on the lot mid-inspection, or a ride passport screen',
      detail: 'Your own photo or a product screenshot. No operator or inspector names.',
    },
    problem: [
      'I’ve set up and torn down rides. I’ve watched inspections done off a clipboard, from memory, against a manual that lives in a binder in a trailer, or in a PDF nobody has opened since the ride was bought. When something is wrong with a ride, the record of it is too often a conversation.',
      'The information exists. Manufacturers publish manuals, service bulletins and inspection intervals. It just isn’t attached to the specific ride standing on the midway this morning.',
    ],
    built: {
      intro:
        'This is the software I most want to get right, because the stakes are people on rides. I’m labelling what exists and what’s still being built as carefully as I can.',
      items: [
        'Ride identities and passports: one record per physical ride, following it from lot to lot.',
        'Manufacturer and model data, so a ride inherits the right requirements.',
        'Inspection workflows run on a phone, on the lot.',
        'Critical findings with severity, and safety holds that block operation until cleared.',
        'Evidence capture: photos, notes and sign-offs attached to the finding.',
        'Records and return-to-service with a documented sign-off.',
        'In development: turning manufacturer manuals into traceable, model-specific inspection programs.',
      ],
    },
    flow: {
      title: 'Manual to inspection program (in development)',
      steps: ['Manufacturer manual', 'Extract requirements', 'Trace to page & section', 'Qualified human review', 'Approved model program', 'Inspection on the lot', 'Finding → hold → return to service'],
      caption: 'AI suggests, a qualified person approves. Nothing generated becomes a checklist without review against approved standards.',
    },
    stack: [
      { group: 'Records', items: 'Ride passports, inspections, findings, holds' },
      { group: 'AI (in development)', items: 'Document extraction with source tracing, human review queue' },
      { group: 'How it’s built', items: 'Claude Code, Codex, OpenAI and Gemini APIs' },
    ],
    obstacles: [
      'Manuals are inconsistent: scans, decades-old PDFs, translations. Extraction has to point back to the exact page it came from.',
      'Human review isn’t optional. A missed step in a generated checklist is a safety problem, not a bug.',
      'Lots have bad signal. Inspections have to survive a dead connection.',
      'Operators have to trust the tool before they’ll let it into their routine.',
    ],
    metrics: [],
    resultsNote:
      'No inspection counts, customers or certifications are claimed. Generated checklists are not production-ready, and this page won’t say they are until they are.',
    liveTable: [
      { part: 'Ride identities & passports', status: 'verify' },
      { part: 'Inspection workflows, findings & holds', status: 'verify' },
      { part: 'Evidence capture & return-to-service', status: 'verify' },
      { part: 'Manual-to-checklist automation', status: 'dev' },
    ],
    now: 'Building the manual-to-program pipeline with source tracing and a review queue, one manufacturer model at a time.',
    relatedArticles: ['logistics-digital-innovation'],
    relatedProjects: ['carnival-fleet-dispatch', 'carnival-ride-rental'],
    seoTitle: 'Carnival Safety Institute (Carnival Guardian) — Case Study | Derek Bowen',
    seoDescription:
      'A ride-safety and inspection platform for the carnival industry: ride passports, inspections, safety holds and return-to-service, plus manual-to-checklist automation in active development.',
  },
  {
    slug: 'rental-waivers',
    name: 'Rental Waivers',
    category: 'saas-safety',
    role: 'Founder, builder',
    status: 'live-product',
    oneLiner: 'Digital waivers and consent forms for rental businesses and marketplaces.',
    summary:
      'Web-based signing, account management and a pay-per-credit model instead of a monthly subscription. It started as plumbing for Pool Rental Near Me. iOS and Android packaging is in development.',
    link: { state: 'public', url: 'https://rentalwaivers.com', label: 'rentalwaivers.com' },
    hero: { kind: 'placeholder', need: 'Rental Waivers — a waiver being signed on a phone', detail: 'Use a test waiver, no real signer names.' },
    problem: [
      'Every rental host, whether pools, bounce houses, boats or rides, needs a signed waiver before someone uses the thing. Paper gets lost. The big e-signature tools charge a monthly subscription for something a small host might use six times a summer.',
    ],
    built: {
      intro: 'Practical infrastructure. Nobody gets excited about waivers until the day they need one.',
      items: [
        'Web signing workflows that work on whatever phone the guest has.',
        'Account management for hosts and businesses.',
        'A credit-based model: pay for signatures used, not a monthly seat.',
        'Integration with Pool Rental Near Me hosts. Planned and in progress.',
        'iOS and Android packaging. In development, not yet distributed.',
      ],
    },
    stack: [
      { group: 'Product', items: 'Web signing, accounts, credits' },
      { group: 'Payments', items: 'Stripe' },
      { group: 'Mobile', items: 'iOS / Android packaging (in development)' },
    ],
    obstacles: [
      'A waiver is only as good as the wording and the record. The product stores proof of who signed what, and when.',
      'Small hosts hate subscriptions. Credit pricing had to be simple enough to explain in one sentence.',
    ],
    metrics: [],
    resultsNote: 'No signer or customer counts published yet. Pricing details stay off this page until they’re confirmed as current.',
    liveTable: [
      { part: 'Web signing & accounts', status: 'live-product' },
      { part: 'Credit-based purchasing', status: 'live-product' },
      { part: 'Pool Rental Near Me integration', status: 'dev' },
      { part: 'iOS & Android apps', status: 'dev', note: 'Not distributed yet.' },
    ],
    now: 'Finishing mobile packaging and wiring waivers into the PRNM booking flow.',
    relatedArticles: [],
    relatedProjects: ['pool-rental-near-me', 'carnival-safety-institute'],
    seoTitle: 'Rental Waivers — Digital Waivers for Rental Businesses | Derek Bowen',
    seoDescription:
      'Rental Waivers: web-based waiver and consent signing with credit-based pricing for rental businesses and marketplaces. Mobile apps in development.',
  },
  {
    slug: 'carnival-fleet-dispatch',
    name: 'Carnival Fleet Dispatch',
    category: 'logistics',
    role: 'Designer & builder; also one of the drivers',
    status: 'internal',
    oneLiner: 'Operational logistics software for moving a traveling carnival’s trucks, trailers and rides.',
    summary:
      'Dispatch boards, transport plans, truck and trailer assignments, doubles compatibility and driver workflows with SMS sign-in, built for a real western-US carnival operation. It’s an internal system, not a product, and it isn’t for sale.',
    link: { state: 'internal' },
    hero: {
      kind: 'placeholder',
      need: 'Dispatch board screenshot, fully redacted',
      detail: 'Blur driver names, unit numbers, plates and any documents before supplying.',
    },
    problem: [
      'A traveling carnival moves like a small army. Rides fold onto trailers, trailers hook to trucks, some trucks pull doubles, and all of it has to leave one lot and arrive at the next in the right order, legally, on time.',
      'Most of that has historically run on phone calls, paper and whoever remembers. I’m one of the drivers. When a trailer assignment changes at 5 a.m., the driver is usually the last to know.',
    ],
    built: {
      intro: 'I designed it from the driver’s seat out.',
      items: [
        'A dispatch board for every move: what goes, on what, with whom.',
        'Transport plans per move, with fleet visibility.',
        'Truck and trailer assignments, with doubles and trailer compatibility checks.',
        'Driver workflows on a phone, with SMS sign-in instead of passwords.',
        'Documents attached to units, private to the operation.',
        'Route-related exception handling when the plan meets the road.',
      ],
    },
    flow: {
      title: 'One move, start to finish',
      steps: ['Move plan', 'Assign trucks & trailers', 'Doubles / compatibility check', 'Driver notified by SMS', 'Live position', 'Route exception?', 'Arrived & set'],
      caption: 'The compatibility check sits before anyone gets a text. A bad pairing caught on the board costs nothing; caught in the yard, it costs the morning.',
    },
    stack: [
      { group: 'Data & auth', items: 'Supabase (PostgreSQL, auth, storage)' },
      { group: 'Messaging', items: 'Twilio (SMS sign-in and notifications)' },
      { group: 'Routing', items: 'HERE' },
      { group: 'Telematics', items: 'Motive integration' },
      { group: 'How it was built', items: 'Claude Code, Codex, GitHub' },
    ],
    obstacles: [
      'Drivers don’t want another app or another password. SMS sign-in was the only thing that would actually get used.',
      'Trailer compatibility isn’t obvious from a spreadsheet. Rules about doubles and equipment had to be encoded, not remembered.',
      'Plans change constantly. The system has to make the change visible to the people it affects, fast.',
      'It holds private operational data, so access is tight and nothing leaves the system.',
    ],
    metrics: [
      { value: '~27', label: 'trucks in the system', source: 'Historical operational snapshot' },
      { value: '43', label: 'assets tracked', source: 'Historical operational snapshot' },
      { value: '9', label: 'driver logins', source: 'Historical operational snapshot' },
    ],
    resultsNote:
      'These are a point-in-time snapshot of what the system was carrying, not a growth number. The snapshot date is still to be added.',
    liveTable: [
      { part: 'Dispatch board & assignments', status: 'internal' },
      { part: 'Driver SMS sign-in', status: 'internal' },
      { part: 'Routing & telematics integrations', status: 'internal' },
    ],
    now: 'In use internally. Improvements happen between moves.',
    privacyNote:
      'Screenshots, documents, driver names, unit numbers, plates and access details are deliberately not shown. The operation it serves isn’t named here.',
    relatedArticles: ['logistics-digital-innovation', 'trucking-truth'],
    relatedProjects: ['carnival-safety-institute', 'carnival-ride-rental'],
    seoTitle: 'Carnival Fleet Dispatch — Internal Logistics System | Derek Bowen',
    seoDescription:
      'An internal dispatch system for moving carnival trucks, trailers and rides: dispatch boards, doubles compatibility, SMS driver sign-in, and Supabase, Twilio, HERE and Motive integrations.',
  },
]

export const getProject = (slug?: string) => PROJECTS.find((p) => p.slug === slug)

export const EARLIER_VENTURES = [
  { name: 'bookmypool.com', line: 'An earlier pool-rental marketplace.' },
  { name: 'PoolHostPro.com', line: 'Calendar sync for pool hosts across rental platforms.' },
  { name: 'californiacasinorental.com', line: 'Casino equipment and party rentals.' },
  { name: '10000solutions.com', line: 'Programmatic SEO and web work.' },
  { name: 'Carnival Manager Pro', line: 'An early attempt at carnival operations software.' },
]
