import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Feather, Star } from 'lucide-react';
import InteractiveCard from '@/components/InteractiveCard.jsx';

const AuthorAndThoughtLeadershipSection = () => {
  const books = [
    {
      title: 'Running a Smarter Carnival',
      description: 'Modernizing carnival operations using technology and smart logistics.',
      category: 'Business'
    },
    {
      title: 'Turn Your Swimming Pool Into a Goldmine',
      description: 'The ultimate playbook for monetizing your private pool.',
      category: 'Entrepreneurship'
    },
    {
      title: 'The Pool Rental & Spa Playbook',
      description: 'Advanced strategies for scaling your pool rental business.',
      category: 'Operations'
    },
    {
      title: 'The Backyard Entrepreneur',
      description: 'Transform your unused outdoor space into a thriving business.',
      category: 'Business'
    },
    {
      title: 'Pool Host Riches',
      description: 'Master the art of upselling and maximizing ROI as a pool host.',
      category: 'Finance'
    },
    {
      title: 'Honey, Do the Dishes',
      description: 'Balancing entrepreneurial ambitions with family life.',
      category: 'Lifestyle'
    }
  ];

  return (
    <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ff00ff]/40 to-[#00d4ff]/40 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="https://horizons-cdn.hostinger.com/d0673265-adb7-4362-8cbb-bb439167c2b5/59b0610f463f778a6bc3df34cf4389fd.jpg" 
                alt="Derek Bowen - Author" 
                className="relative z-10 w-full h-80 object-cover rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,0,255,0.2)]"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#0a0a0a] p-4 rounded-xl border border-white/10 shadow-xl z-20">
                <Feather className="w-8 h-8 text-[#ff00ff]" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3 text-center lg:text-left"
          >
            <h2 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="neon-magenta text-[#ff00ff]">Published Author</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mb-8">
              Six books on Amazon, weaving together decades of experience in logistics, entrepreneurship, and technology. Sharing practical insights to help others build scalable ventures.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#00ff88] fill-[#00ff88]" />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <InteractiveCard
              key={book.title}
              glowColor={index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'magenta' : 'cyan'}
              delay={index * 0.1}
              className="p-6"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <BookOpen className={`w-8 h-8 ${
                    index % 3 === 0 ? 'text-[#00d4ff]' : 
                    index % 3 === 1 ? 'text-[#ff00ff]' : 
                    'text-[#00ff88]'
                  }`} />
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                    {book.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {book.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {book.description}
                </p>
              </div>
            </InteractiveCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 italic">
            "Bridging the gap between traditional logistics and modern digital innovation through storytelling."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorAndThoughtLeadershipSection;