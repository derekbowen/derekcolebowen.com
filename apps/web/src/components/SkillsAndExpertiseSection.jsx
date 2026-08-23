import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Truck, Sparkles } from 'lucide-react';
import InteractiveCard from '@/components/InteractiveCard.jsx';

const SkillsAndExpertiseSection = () => {
  const skillClusters = [
    {
      category: 'Digital & Tech',
      icon: Code,
      color: 'blue',
      skills: [
        'Programmatic SEO',
        'AI & Automation',
        'React Native',
        'Website Management',
        'Digital Marketing'
      ],
      size: 'lg:col-span-2 lg:row-span-2'
    },
    {
      category: 'Business & Operations',
      icon: Briefcase,
      color: 'magenta',
      skills: [
        'Business Development',
        'Entrepreneurship',
        'Strategic Planning',
        'Market Analysis'
      ],
      size: 'lg:col-span-1 lg:row-span-1'
    },
    {
      category: 'Logistics & Transportation',
      icon: Truck,
      color: 'cyan',
      skills: [
        'Logistics Management',
        'DOT Compliance',
        'CDL Class A',
        'Transportation',
        'Driver Training'
      ],
      size: 'lg:col-span-1 lg:row-span-1'
    }
  ];

  return (
    <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <Sparkles className="w-8 h-8 text-[#00d4ff]" />
            <h2 className="text-5xl lg:text-7xl font-bold">
              <span className="text-white">Diverse</span>{' '}
              <span className="neon-blue text-[#00d4ff]">Expertise</span>
            </h2>
          </div>
          <p className="text-gray-400 text-xl max-w-2xl">
            A unique blend of technical prowess, business acumen, and operational excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {skillClusters.map((cluster, index) => {
            const Icon = cluster.icon;
            const colorMap = {
              blue: 'text-[#00d4ff]',
              magenta: 'text-[#ff00ff]',
              cyan: 'text-[#00ff88]'
            };

            return (
              <InteractiveCard
                key={cluster.category}
                glowColor={cluster.color}
                delay={index * 0.15}
                className={`p-8 ${cluster.size}`}
              >
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <Icon className={`w-10 h-10 ${colorMap[cluster.color]}`} />
                    <h3 className="text-3xl font-bold text-white">
                      {cluster.category}
                    </h3>
                  </div>

                  <div className="flex-1 grid grid-cols-1 gap-3">
                    {cluster.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + skillIndex * 0.05 }}
                        whileHover={{ x: 10, scale: 1.05 }}
                        className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        <span className="text-gray-200 font-medium">{skill}</span>
                      </motion.div>
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

export default SkillsAndExpertiseSection;