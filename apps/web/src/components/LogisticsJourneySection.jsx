import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Award, MapPin, Shield } from 'lucide-react';
import InteractiveCard from '@/components/InteractiveCard.jsx';

const LogisticsJourneySection = () => {
  const roles = [
    {
      title: 'Lead Driver/Trainer',
      company: 'Coremark International',
      period: '2019 - Present',
      description: 'Leading driver training programs and ensuring DOT compliance across operations.',
      icon: Award,
      color: 'cyan'
    },
    {
      title: 'Commercial Driver',
      company: 'Multiple Organizations',
      period: '2007 - 2019',
      description: 'Extensive experience across Walmart, Bhau Trucking, Paul Maurer Shows, and Sara Lee Baking Group.',
      icon: Truck,
      color: 'blue'
    }
  ];

  const certifications = [
    { name: 'CDL Class A', status: 'Active', icon: Shield },
    { name: 'HAZMAT', status: 'In Progress', icon: Shield },
    { name: 'DOT Compliance', status: 'Certified', icon: Shield }
  ];

  return (
    <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 mb-6"
          >
            <span className="text-[#00ff88] font-semibold">Plot Twist</span>
          </motion.div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-4">
            <span className="text-white">20+ Years</span>{' '}
            <span className="neon-cyan text-[#00ff88]">On The Road</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Before the code and ventures, there was the open road. Two decades of logistics mastery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <InteractiveCard
                key={role.title}
                glowColor={role.color}
                delay={index * 0.15}
                className="p-8 lg:col-span-1"
              >
                <div className="relative z-10">
                  <Icon className={`w-10 h-10 mb-6 ${role.color === 'cyan' ? 'text-[#00ff88]' : 'text-[#00d4ff]'}`} />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {role.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{role.company}</p>
                  <p className="text-sm text-gray-500 mb-4">{role.period}</p>
                  <p className="text-gray-300 leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </InteractiveCard>
            );
          })}

          <InteractiveCard
            glowColor="magenta"
            delay={0.3}
            className="p-8 lg:col-span-1"
          >
            <div className="relative z-10">
              <MapPin className="w-10 h-10 text-[#ff00ff] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-6">
                Certifications & Expertise
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => {
                  const CertIcon = cert.icon;
                  return (
                    <div key={cert.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CertIcon className="w-5 h-5 text-[#ff00ff]" />
                        <span className="text-white font-medium">{cert.name}</span>
                      </div>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        cert.status === 'Active' || cert.status === 'Certified'
                          ? 'bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30'
                          : 'bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </InteractiveCard>
        </div>
      </div>
    </section>
  );
};

export default LogisticsJourneySection;