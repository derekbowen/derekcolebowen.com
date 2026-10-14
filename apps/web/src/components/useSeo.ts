import { useEffect } from 'react'
import { SITE } from '../data/site'

type Seo = {
  title: string
  description: string
  path: string
  jsonLd?: object | object[]
  noindex?: boolean
  type?: 'website' | 'article' | 'profile'
}

/**
 * Sets the per-page title, description, canonical, Open Graph tags and JSON-LD.
 */
export function useSeo({ title, description, path, jsonLd, noindex, type = 'website' }: Seo) {
  const ld = jsonLd ? JSON.stringify(jsonLd) : ''
  useEffect(() => {
    document.title = title
    const canonical = `${SITE.origin}${path === '/' ? '/' : path}`
    setMeta('name', 'description', description)
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:type', type)
    setMeta('name', 'twitter:card', 'summary_large_image')

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonical

    document.head.querySelectorAll('script[data-seo="ld"]').forEach((n) => n.remove())
    if (ld) {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.dataset.seo = 'ld'
      s.textContent = ld
      document.head.appendChild(s)
    }
  }, [title, description, path, noindex, type, ld])
}

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = value
}

export const PERSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE.origin}/#derek`,
  name: 'Derek Bowen',
  url: SITE.origin,
  image: SITE.portrait,
  jobTitle: 'Founder & CEO, Pool Rental Near Me; commercial driver',
  homeLocation: { '@type': 'Place', name: 'Riverside, California' },
  knowsAbout: ['Marketplaces', 'Programmatic SEO', 'Logistics', 'Carnival equipment transportation', 'AI-assisted software engineering'],
  sameAs: [SITE.linkedin],
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE.origin}${it.path}`,
    })),
  }
}
