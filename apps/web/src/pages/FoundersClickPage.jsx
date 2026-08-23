import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Target, CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: "SEO Intelligence Suite",
    description: "Stop guessing what your competitors are doing. Our suite provides a complete competitor radar, daily rank tracking, and an AI-powered page auditor. Identify link auditing opportunities and uncover high-value keywords before your competition does.",
    image: "https://horizons-cdn.hostinger.com/d0673265-adb7-4362-8cbb-bb439167c2b5/787d57654434be50d684f4be85d21eec.png",
    highlights: ["Competitor radar & rank tracking", "AI page auditor", "Link auditing & keyword opportunities"],
    reverse: false
  },
  {
    title: "Dashboard & Command Center",
    description: "Your morning command center. Start every day with AI-ranked action items and live KPIs. Six organized tabs give you a bird's-eye view of your marketplace's health, ensuring you always know exactly what to focus on next.",
    image: "https://horizons-cdn.hostinger.com/d0673265-adb7-4362-8cbb-bb439167c2b5/87be2119cedef29c38f790d8fe8f09cd.png",
    highlights: ["AI-ranked daily action items", "Live marketplace KPIs", "6 organized operational tabs"],
    reverse: true
  },
  {
    title: "AI-Powered Content Factory",
    description: "Scale your programmatic SEO effortlessly. Generate highly optimized pages at just $0.012 per page. Utilize bulk editing tools and auto-generate blog content that drives organic traffic without the massive agency retainer.",
    image: "https://horizons-cdn.hostinger.com/d0673265-adb7-4362-8cbb-bb439167c2b5/63d0600096f3b5319d0a17229ae32034.png",
    highlights: ["Generate pages at $0.012/page", "Bulk editing capabilities", "Auto-generated blog content"],
    reverse: false
  },
  {
    title: "Users & Ops Management",
    description: "Streamline your marketplace operations. Manage your lead inbox, verify emails automatically, and hunt for social leads. Keep your directory clean with robust moderation and admin tools built specifically for Sharetribe.",
    image: "https://horizons-cdn.hostinger.com/d0673265-adb7-4362-8cbb-bb439167c2b5/2c5e2f32abc7de6f587d00b1a298d283.png",
    highlights: ["Centralized lead inbox", "Automated email verification", "Directory moderation tools"],
    reverse: true
  },
  {
    title: "Built for Founders",
    description: "Get the power of a full development and marketing team at a fraction of the cost. Move at AI speed, maintain absolute clarity on your growth metrics, and scale your marketplace without the traditional overhead.",
    image: "https://horizons-cdn.hostinger.com/d0673265-adb7-4362-8cbb-bb439167c2b5/312862cc17e7827ce523f94617af8d7f.png",
    highlights: ["Fraction of agency costs", "Move at AI speed", "Always know what to do next"],
    reverse: false
  },
  {
    title: "Full Platform Overview",
    description: "Everything you need, integrated into one seamless platform. From initial lead generation to final conversion, founders.click provides the end-to-end infrastructure required to build a dominant Sharetribe marketplace.",
    image: "https://horizons-cdn.hostinger.com/d0673265-adb7-4362-8cbb-bb439167c2b5/76c88ce5e5e006b6746fb53a498e0918.png",
    highlights: ["End-to-end infrastructure", "Seamless integration", "Built specifically for Sharetribe"],
    reverse: true
  }
];

const FoundersClickPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0E27] text-white pt-20">
      <Helmet>
        <title>founders.click - Growth Engine for Sharetribe Founders</title>
        <meta name="description" content="The all-in-one growth engine built for Sharetribe marketplace founders. Custom-coded SEO, AI-powered content generation, and operational dashboards." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FF8C42]/10 via-[#0A0E27] to-[#0A0E27] z-0" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF8C42]/10 border border-[#FF8C42]/20 text-[#FF8C42] mb-8 font-medium text-sm uppercase tracking-widest">
              <Target className="w-4 h-4" /> The Growth Engine
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white text-balance leading-tight">
              The All-In-One Growth Engine for <span className="text-[#FF8C42]">Sharetribe</span> Founders
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
              Custom-coded SEO, AI-powered content, lead management, and operational dashboards — everything you need to scale without hiring a dev team.
            </p>
            
            <a
              href="https://founders.click"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FF8C42] text-[#0A0E27] font-bold text-lg hover:bg-[#ff9d5c] hover:shadow-[0_0_30px_rgba(255,140,66,0.4)] transition-all duration-300 uppercase tracking-wider group"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Sections */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto space-y-32">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              <motion.div 
                initial={{ opacity: 0, x: feature.reverse ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`space-y-8 ${feature.reverse ? 'lg:order-last' : ''}`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
                  {feature.title}
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-4">
                  {feature.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="w-6 h-6 text-[#FF8C42] flex-shrink-0" />
                      <span className="text-lg">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-[#FF8C42]/5"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8C42]/10 to-transparent opacity-50 mix-blend-overlay" />
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent to-[#FF8C42]/10 border-t border-white/5 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-balance">
            Ready to Scale Your Marketplace?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
            Join the founders who are moving faster, ranking higher, and operating smarter with founders.click.
          </p>
          
          <a
            href="https://founders.click"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[#FF8C42] text-[#0A0E27] font-bold text-xl hover:bg-[#ff9d5c] hover:shadow-[0_0_40px_rgba(255,140,66,0.5)] transition-all duration-300 uppercase tracking-wider group"
          >
            Start Free Trial
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default FoundersClickPage;