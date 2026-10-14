import { img } from './site'

export type Topic = 'Trucking' | 'Entrepreneurship' | 'Marketplaces' | 'AI tools' | 'Programmatic SEO'

export type Article = {
  slug: string
  title: string
  dek: string
  date: string
  iso: string
  readTime: string
  topics: Topic[]
  relatedProjects: string[]
}

// The eight articles actually published on the current site, newest first.
// Two list entries on the old blog had no page behind them and are not carried over.
export const ARTICLES: Article[] = [
  {
    slug: '1700-sitemap',
    title: 'The $1,700 Sitemap (And Why I Stopped Waiting on Developers)',
    dek: 'A developer tried to charge me $1,700 for a sitemap. That was the day I started building it myself.',
    date: 'May 10, 2026',
    iso: '2026-05-10',
    readTime: '6 min read',
    topics: ['AI tools', 'Marketplaces'],
    relatedProjects: ['founders-click', 'pool-rental-near-me'],
  },
  {
    slug: 'marketplace-graveyard',
    title: 'The Marketplace Graveyard: Why Most Founders Pack It In (And Why I Won’t)',
    dek: 'The cold-start problem, liquidity, and why the brutal part is also the moat.',
    date: 'May 10, 2026',
    iso: '2026-05-10',
    readTime: '7 min read',
    topics: ['Marketplaces', 'Entrepreneurship'],
    relatedProjects: ['pool-rental-near-me'],
  },
  {
    slug: 'digital-waiting-room',
    title: 'The Digital Waiting Room: My Life as a “Crawled, Currently Not Indexed” URL',
    dek: 'The five stages of indexing grief, and what actually gets a page out of limbo.',
    date: 'March 31, 2026',
    iso: '2026-03-31',
    readTime: '6 min read',
    topics: ['Programmatic SEO'],
    relatedProjects: ['carnival-ride-rental'],
  },
  {
    slug: 'trucking-truth',
    title: 'The Fucking Truth About Trucking: It’s a Shit Job With Massive Opportunities',
    dek: 'Why 560,000 CDL holders don’t drive, and how to use trucking as a vehicle to build your real business.',
    date: 'March 10, 2026',
    iso: '2026-03-10',
    readTime: '5 min read',
    topics: ['Trucking', 'Entrepreneurship'],
    relatedProjects: ['carnival-fleet-dispatch'],
  },
  {
    slug: 'game-boy-ai',
    title: 'I Had a Game Boy, These Kids Have AI: Why There’s No Fucking Excuse Anymore',
    dek: 'From 8-bit distractions to infinite leverage. The execution gap is close to zero now.',
    date: 'March 10, 2026',
    iso: '2026-03-10',
    readTime: '5 min read',
    topics: ['AI tools'],
    relatedProjects: ['founders-click'],
  },
  {
    slug: 'scaling-with-programmatic-seo',
    title: 'Scaling with Programmatic SEO: A Practical Guide',
    dek: 'Databases, templates, crawl budget and internal linking. What actually matters when you generate pages at scale.',
    date: 'March 6, 2026',
    iso: '2026-03-06',
    readTime: '8 min read',
    topics: ['Programmatic SEO'],
    relatedProjects: ['carnival-ride-rental', 'pool-rental-near-me'],
  },
  {
    slug: 'logistics-digital-innovation',
    title: 'The Intersection of Logistics and Digital Innovation',
    dek: 'How two decades on the road prepared me to build marketplaces, and the empathy gap most tech founders never close.',
    date: 'March 6, 2026',
    iso: '2026-03-06',
    readTime: '8 min read',
    topics: ['Trucking', 'Marketplaces'],
    relatedProjects: ['carnival-fleet-dispatch', 'carnival-safety-institute'],
  },
  {
    slug: 'entrepreneur-book-writing',
    title: 'Why Every Entrepreneur Should Write a Book',
    dek: 'What publishing on Amazon taught me about knowing what I actually know, and a five-step way to get one done.',
    date: 'Jan 5, 2024',
    iso: '2024-01-05',
    readTime: '4 min read',
    topics: ['Entrepreneurship'],
    relatedProjects: [],
  },
]

export const TOPICS: Topic[] = ['Trucking', 'Entrepreneurship', 'Marketplaces', 'AI tools', 'Programmatic SEO']

export const getArticle = (slug?: string) => ARTICLES.find((a) => a.slug === slug)

export type Book = {
  title: string
  subtitle?: string
  cover: string
  about: string
  /** Verified Amazon link, or null if still to be confirmed. */
  url: string | null
}

// Five titles shown, per the rule: five confirmed books unless the full catalog proves more.
// Only the first link is verified so far. The others say so, visibly.
export const BOOKS: Book[] = [
  {
    title: 'The Complete Guide to Renting Your Swimming Pool in the United States',
    subtitle: 'State-by-State Laws, Safety, Permits, and Best Practices',
    cover: img('df6368ea3d2e8bdbdbf1c46bc7113e1c.png'),
    about: 'The rules, safety requirements and permits a homeowner should understand before renting out a pool, state by state.',
    url: 'https://a.co/d/08L1TQZ0',
  },
  {
    title: 'Running a Smarter Carnival',
    cover: img('7b824083a76e2030c170f96771b6aa63.jpg'),
    about: 'Using technology and better logistics to run a carnival operation with less chaos.',
    url: null,
  },
  {
    title: 'Turn Your Swimming Pool Into a Goldmine',
    cover: img('d0c43979def7fc909b39004e26016c68.jpg'),
    about: 'A playbook for pool owners: attracting renters, pricing and running hosting as a side business.',
    url: null,
  },
  {
    title: 'The Pool Rental & Spa Playbook',
    cover: img('210c235599e99252f61be9a5fc6a9a97.webp'),
    about: 'Managing guests, maintenance and a listing once a pool rental is up and running.',
    url: null,
  },
  {
    title: 'Honey, Do the Dishes',
    cover: img('328ff7e0ac9a87b2c4f54499a96c787b.jpg'),
    about: 'A practical, funny look at balancing building businesses with family life and the house.',
    url: null,
  },
]
