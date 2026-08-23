import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Globe, Zap } from 'lucide-react';
import InteractiveCard from '@/components/InteractiveCard.jsx';

const VenturesSection = () => {
  const ventures = [
    {
      name: 'PRNM Corp',
      tagline: 'Pool Rental Near Me',
      description: 'Digital marketplace revolutionizing pool rental services. Connecting pool owners with renters through an innovative platform.',
      impact: '500+ Active Listings',
      tech: ['React Native', 'Digital Marketing', 'SEO'],
      icon: Globe,
      color: 'blue',
      position: 'lg:col-span-2 lg:row-span-2'
    },
    {
      name: '10000solutions.com',
      tagline: 'Programmatic SEO & Digital Marketing',
      description: 'Cutting-edge digital marketing solutions leveraging AI and automation for scalable SEO strategies.',
      impact: '10,000+ Pages Generated',
      tech: ['AI & Automation', 'Programmatic SEO', 'Web Development'],
      icon: Zap,
      color: 'magenta',
      position: 'lg:col-span-2 lg:row-span-2'
    }
  ];

  return (
    <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3"
          >
            <h2 className="text-5xl lg:text-7xl font-bold mb-4">
              <span className="text-white">Entrepreneurial</span>{' '}
              <span className="neon-blue text-[#00d4ff]">Ventures</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl">
              Where innovation meets execution. Building digital solutions that scale, backed by real-world experience and a collaborative team approach.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00d4ff]/30 to-[#ff00ff]/30 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src="https://horizons-cdn.hostinger.com/d0673265-adb7-4362-8cbb-bb439167c2b5/7621f4f481bc03a5ab5eca9ec90ac78c.jpg" 
              alt="Team Collaboration" 
              className="relative z-10 w-full h-48 object-cover rounded-xl border border-white/10 shadow-[0_0_20px_rgba(0,212,255,0.2)]"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {ventures.map((venture, index) => {
            const Icon = venture.icon;
            return (
              <InteractiveCard
                key={venture.name}
                glowColor={venture.color}
                delay={index * 0.2}
                className={`p-8 ${venture.position}`}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <Icon className={`w-12 h-12 ${venture.color === 'blue' ? 'text-[#00d4ff]' : 'text-[#ff00ff]'}`} />
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Rocket className="w-8 h-8 text-gray-600" />
                    </motion.div>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {venture.name}
                  </h3>
                  <p className={`text-lg mb-6 ${venture.color === 'blue' ? 'text-[#00d4ff]' : 'text-[#ff00ff]'}`}>
                    {venture.tagline}
                  </p>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {venture.description}
                  </p>

                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="w-5 h-5 text-[#00ff88]" />
                    <span className="text-[#00ff88] font-semibold">{venture.impact}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {venture.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </InteractiveCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;