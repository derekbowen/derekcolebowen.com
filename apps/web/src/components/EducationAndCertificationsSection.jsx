import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle, Clock } from 'lucide-react';
import InteractiveCard from '@/components/InteractiveCard.jsx';

const EducationAndCertificationsSection = () => {
  const credentials = [
    {
      title: 'CDL Class A',
      institution: 'Professional Certification',
      year: '2007',
      status: 'Active',
      icon: Award,
      color: 'blue',
      size: 'lg:col-span-2'
    },
    {
      title: 'HAZMAT Certification',
      institution: 'In Progress',
      year: '2026',
      status: 'In Progress',
      icon: Clock,
      color: 'cyan',
      size: 'lg:col-span-1'
    },
    {
      title: 'Southwest Truck Driver Training',
      institution: 'Commercial Driver Training',
      year: '2007',
      status: 'Completed',
      icon: GraduationCap,
      color: 'magenta',
      size: 'lg:col-span-1'
    },
    {
      title: 'High School Diploma',
      institution: 'Secondary Education',
      year: '2003',
      status: 'Completed',
      icon: GraduationCap,
      color: 'blue',
      size: 'lg:col-span-2'
    }
  ];

  return (
    <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl lg:text-7xl font-bold mb-4">
            <span className="text-white">Credentials &</span>{' '}
            <span className="neon-blue text-[#00d4ff]">Certifications</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl">
            Formal training and continuous professional development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            const colorMap = {
              blue: 'text-[#00d4ff]',
              magenta: 'text-[#ff00ff]',
              cyan: 'text-[#00ff88]'
            };

            const statusColors = {
              'Active': 'bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30',
              'In Progress': 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/30',
              'Completed': 'bg-[#ff00ff]/10 text-[#ff00ff] border-[#ff00ff]/30'
            };

            return (
              <InteractiveCard
                key={credential.title}
                glowColor={credential.color}
                delay={index * 0.1}
                className={`p-6 ${credential.size}`}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <Icon className={`w-10 h-10 ${colorMap[credential.color]}`} />
                    <span className={`px-3 py-1 rounded-full border text-xs font-medium ${statusColors[credential.status]}`}>
                      {credential.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {credential.title}
                  </h3>
                  <p className="text-gray-400 mb-2">{credential.institution}</p>
                  <p className="text-sm text-gray-500">{credential.year}</p>

                  {credential.status === 'Active' && (
                    <div className="mt-4 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#00ff88]" />
                      <span className="text-sm text-[#00ff88]">Currently Valid</span>
                    </div>
                  )}
                </div>
              </InteractiveCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationAndCertificationsSection;