import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedBooksSection = () => {
  const featuredBooks = [
    {
      title: "Running a Smarter Carnival",
      description: "A comprehensive guide to modernizing and optimizing carnival operations using technology and smart logistics.",
      image: "/images/7b824083a76e2030c170f96771b6aa63.jpg",
      link: "#",
      color: "cyan"
    },
    {
      title: "Turn Your Swimming Pool Into a Goldmine",
      description: "The ultimate playbook for monetizing your private pool, maximizing bookings, and creating a profitable side hustle.",
      image: "/images/d0c43979def7fc909b39004e26016c68.jpg",
      link: "#",
      color: "blue"
    },
    {
      title: "The Pool Rental & Spa Playbook",
      description: "Advanced strategies for scaling your pool rental business, managing guests, and optimizing your listing for top performance.",
      image: "/images/210c235599e99252f61be9a5fc6a9a97.webp",
      link: "#",
      color: "magenta"
    }
  ];

  const colorMap = {
    blue: 'text-[#00d4ff] border-[#00d4ff]/30 shadow-[#00d4ff]/20 hover:border-[#00d4ff]/60',
    magenta: 'text-[#ff00ff] border-[#ff00ff]/30 shadow-[#ff00ff]/20 hover:border-[#ff00ff]/60',
    cyan: 'text-[#00ff88] border-[#00ff88]/30 shadow-[#00ff88]/20 hover:border-[#00ff88]/60'
  };

  return (
    <section className="py-24 px-6 relative z-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff00ff]/10 border border-[#ff00ff]/30 text-[#ff00ff] mb-6">
              <BookOpen className="w-4 h-4" /> Published Author
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured <span className="neon-magenta text-[#ff00ff]">Publications</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/books"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ff00ff] transition-colors group"
            >
              View All Books <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBooks.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`group flex flex-col bg-white/5 rounded-2xl border transition-all duration-300 overflow-hidden ${colorMap[book.color].split(' ').slice(1).join(' ')}`}
            >
              <div className="relative h-64 overflow-hidden bg-black/50 flex items-center justify-center p-6">
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10`} />
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="h-full w-auto object-contain relative z-0 group-hover:scale-105 transition-transform duration-500 shadow-2xl"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className={`text-xl font-bold mb-3 ${colorMap[book.color].split(' ')[0]}`}>
                  {book.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {book.description}
                </p>
                
                <a 
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 text-white font-medium group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
                >
                  <ShoppingCart className="w-4 h-4" /> Get on Amazon
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooksSection;