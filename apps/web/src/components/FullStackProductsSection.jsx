import React from 'react';
import { motion } from 'framer-motion';
import { 
  Waves, 
  CalendarDays, 
  Shield, 
  Repeat2, 
  Wrench, 
  BookOpen, 
  Heart, 
  TrendingUp,
  Layers,
  Target
} from 'lucide-react';
import FullStackProductCard from './FullStackProductCard.jsx';

const FullStackProductsSection = () => {
  const products = [
    {
      icon: Target,
      badge: 'The Growth Engine',
      title: 'founders.click',
      description: 'The all-in-one growth engine built for Sharetribe marketplace founders. Custom-coded SEO, AI-powered content generation, lead management, and operational dashboards — everything you need to scale without hiring a dev team or paying agency retainers.',
      ctaText: 'Explore Platform',
      ctaLink: '/founders-click',
      accentColor: '#FF8C42'
    },
    {
      icon: Waves,
      badge: 'The Marketplace',
      title: 'PoolRentalNearMe.com',
      description: 'The largest independent pool rental marketplace. 33+ states, thousands of active guests, $2M liability coverage per booking. 10% fee vs Swimply\'s 20%+.',
      ctaText: 'List Your Pool',
      ctaLink: 'https://poolrentalnearme.com'
    },
    {
      icon: CalendarDays,
      badge: 'Direct Bookings',
      title: 'BookMyPool.com',
      description: 'Take direct bookings at zero commission. Flat $9/month — that\'s it. Swimply charges 10%. We charge $9. Keep 100% of every booking.',
      ctaText: 'Start Free Trial',
      ctaLink: 'https://bookmypool.com'
    },
    {
      icon: Shield,
      badge: 'Legal Protection',
      title: 'RentalWaivers.com',
      description: 'Digital liability waivers built for rental hosts. Pay only when waivers are signed — 6¢ to 10¢ each. No subscription, no monthly fees. First 250 waivers free for PRNM hosts.',
      ctaText: 'Get Protected',
      ctaLink: 'https://rentalwaivers.com'
    },
    {
      icon: Repeat2,
      badge: 'Calendar Sync',
      title: 'PoolHostPro.com',
      description: 'Sync your pool calendar across Airbnb, VRBO, Swimply, and 8+ platforms automatically. 500+ hosts, 10,000+ bookings synced. Never double-book again.',
      ctaText: 'Sync Calendars',
      ctaLink: 'https://poolhostpro.com'
    },
    {
      icon: Wrench,
      badge: '56 Free Tools',
      title: 'Host Tools Hub',
      description: 'Calculators, AI listing generators, marketing templates, seasonal campaigns, QR generators, pricing tools — all free. Everything you need to run a professional pool rental.',
      ctaText: 'Explore Tools',
      ctaLink: 'https://hostpro.poolrentalnearme.com'
    },
    {
      icon: BookOpen,
      badge: '142 Courses',
      title: 'Learning Academy',
      description: 'The most comprehensive pool hosting education library anywhere. 142 courses covering revenue, safety, legal compliance, marketing, and operations — including a Spanish-language track.',
      ctaText: 'Start Learning',
      ctaLink: 'https://poolrentalnearme.com/academy'
    },
    {
      icon: Heart,
      badge: 'Guest Experience',
      title: 'Pool Memories',
      description: 'Guests upload photos and videos via QR code after every session. You get a branded memory album they\'ll share forever. Your pool in their social feed = free marketing.',
      ctaText: 'See How It Works',
      ctaLink: 'https://memories.poolrentalnearme.com'
    },
    {
      icon: TrendingUp,
      badge: 'Free Resource',
      title: 'Marketing Playbook',
      description: 'Print-ready flyers, copy-paste social captions, seasonal campaign templates, neighborhood marketing scripts — everything to get booked without paying for ads.',
      ctaText: 'Get the Playbook',
      ctaLink: 'https://playbook.poolrentalnearme.com'
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#00D9FF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#FF8C42]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#00D9FF] mb-6 font-medium text-sm uppercase tracking-widest">
            <Layers className="w-4 h-4" /> Ecosystem
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            The <span className="text-[#00D9FF] neon-cyan">Full Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A complete, interconnected ecosystem of tools, marketplaces, and resources built specifically to empower independent founders and rental hosts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <FullStackProductCard
              key={product.title}
              index={index}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullStackProductsSection;