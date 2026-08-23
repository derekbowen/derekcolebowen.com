import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Code, Truck } from 'lucide-react';

const ProfessionalSummarySection = () => {
  const highlights = [
    { icon: Truck, text: '20+ Years Logistics', color: 'text-[#00ff88]' },
    { icon: Code, text: 'Digital Innovation', color: 'text-[#00d4ff]' },
    { icon: TrendingUp, text: 'Entrepreneurial Success', color: 'text-[#ff00ff]' }
  ];

  return (
    <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00d4ff]/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <Sparkles className="w-12 h-12 text-[#00d4ff] mx-auto lg:mx-0 mb-6" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
            >
              Versatile professional blending{' '}
              <span className="neon-cyan text-[#00ff88]">20+ years logistics</span> expertise with{' '}
              <span className="neon-magenta text-[#ff00ff]">entrepreneurial success</span> in{' '}
              <span className="neon-blue text-[#00d4ff]">digital marketing, AI, and web development</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8"
            >
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10"
                  >
                    <Icon className={`w-5 h-5 ${highlight.color}`} />
                    <span className="text-white text-sm font-medium">{highlight.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00ff88]/30 to-[#00d4ff]/30 rounded-2xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="https://horizons-cdn.hostinger.com/d0673265-adb7-4362-8cbb-bb439167c2b5/6e71c7f400ffa28dd0705bf9c4008141.jpg" 
                alt="Derek Bowen Professional" 
                className="relative z-10 w-full h-[400px] object-cover rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(0,255,136,0.2)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummarySection;