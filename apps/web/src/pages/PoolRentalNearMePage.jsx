import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Droplets, ShieldCheck, Users, MapPin, ArrowRight, CalendarCheck, CreditCard, Star } from 'lucide-react';

const PoolRentalNearMePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Helmet>
        <title>PRNM Corp | Pool Rental Near Me</title>
        <meta name="description" content="Discover PRNM Corp, the premier digital marketplace for pool rental services connecting owners and renters." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1573047330191-fb342b1be381" 
            alt="Luxury Pool" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] mb-6">
              <Droplets className="w-4 h-4" /> PRNM Corp Venture
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Pool Rental <br/>
              <span className="neon-blue text-[#00d4ff]">Near Me</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl">
              The premier digital marketplace revolutionizing how people discover, book, and host private pools. Dive into luxury, locally.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://bookmypool.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#00d4ff] text-black font-bold text-lg hover:bg-[#00b8e6] transition-all shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_50px_rgba(0,212,255,0.6)]"
              >
                Visit bookmypool.com <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-24 px-6 relative z-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Platform <span className="text-[#ff00ff]">Overview</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              PRNM Corp bridges the gap between pool owners looking to monetize their unused assets and individuals seeking private, clean, and accessible swimming experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: CalendarCheck, title: "Instant Booking", desc: "Real-time availability checking and instant booking confirmation for seamless planning." },
              { icon: CreditCard, title: "Secure Payments", desc: "Integrated, encrypted payment gateways ensuring safe transactions for both hosts and guests." },
              { icon: ShieldCheck, title: "Verified Listings", desc: "Comprehensive verification process for pools to guarantee quality and safety standards." }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff00ff]/50 hover:shadow-[0_0_20px_rgba(255,0,255,0.1)] transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-[#ff00ff] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#00d4ff]/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Users className="text-[#00d4ff]" /> For Pool Owners
              </h3>
              <ul className="space-y-6">
                {[
                  "Monetize your unused pool space effortlessly",
                  "Full control over pricing, availability, and rules",
                  "Host protection and secure payment processing",
                  "Dedicated dashboard for managing bookings"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#00d4ff] shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Droplets className="text-[#00ff88]" /> For Renters
              </h3>
              <ul className="space-y-6">
                {[
                  "Access to private, clean pools in your neighborhood",
                  "Perfect for parties, exercise, or family relaxation",
                  "Transparent pricing with no hidden fees",
                  "Easy search and instant booking capabilities"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#00ff88] shadow-[0_0_8px_rgba(0,255,136,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            How It <span className="text-[#00d4ff]">Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Search Location', 'Check Availability', 'Book Securely', 'Enjoy the Swim'].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center text-2xl font-bold text-[#00d4ff] mb-6 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-white">{step}</h3>
                {i < 3 && <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#00d4ff]/50 to-transparent" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-24 px-6 bg-white/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            What Users <span className="text-[#00ff88]">Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Sarah M.", role: "Pool Host", text: "Listing my pool on PRNM has been a game-changer. The platform handles everything, and I've made great side income this summer." },
              { name: "James T.", role: "Guest", text: "Found the perfect private pool for my daughter's birthday party. The booking process was incredibly smooth and the host was fantastic." }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-[#00ff88] fill-[#00ff88]" />)}
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoolRentalNearMePage;