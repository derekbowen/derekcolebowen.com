import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, ShoppingCart, Star } from 'lucide-react';

const BooksPage = () => {
  const books = [
    {
      title: "The Complete Guide to Renting Your Swimming Pool in the United States",
      subtitle: "State-by-State Laws, Safety, Permits, and Best Practices",
      author: "Derek Bowen",
      description: "A comprehensive guide covering everything you need to know about renting your swimming pool, including state-by-state regulations, safety requirements, permits, and industry best practices.",
      image: "https://horizons-cdn.hostinger.com/d0673265-adb7-4362-8cbb-bb439167c2b5/df6368ea3d2e8bdbdbf1c46bc7113e1c.png",
      link: "https://a.co/d/08L1TQZ0",
      color: "cyan",
      published: "2024"
    },
    {
      title: "Running a Smarter Carnival",
      author: "Derek Bowen",
      description: "A comprehensive guide to modernizing and optimizing carnival operations using technology, smart logistics, and efficient management systems. Learn how to streamline your amusement business for maximum profitability.",
      image: "https://horizons-cdn.hostinger.com/d0673265-adb7-4362-8cbb-bb439167c2b5/7b824083a76e2030c170f96771b6aa63.jpg",
      link: "#",
      color: "cyan",
      published: "2023"
    },
    {
      title: "Turn Your Swimming Pool Into a Goldmine",
      author: "Derek Bowen",
      description: "The ultimate playbook for monetizing your private pool. Discover how to attract renters, set competitive pricing, and create a profitable side hustle right in your backyard.",
      image: "https://horizons-cdn.hostinger.com/d0673265-adb7-4362-8cbb-bb439167c2b5/d0c43979def7fc909b39004e26016c68.jpg",
      link: "#",
      color: "blue",
      published: "2023"
    },
    {
      title: "The Pool Rental & Spa Playbook",
      author: "Derek Bowen",
      description: "Advanced strategies for scaling your pool rental business. Learn how to manage guests effectively, handle maintenance, and optimize your listing for top performance on rental platforms.",
      image: "https://horizons-cdn.hostinger.com/d0673265-adb7-4362-8cbb-bb439167c2b5/210c235599e99252f61be9a5fc6a9a97.webp",
      link: "#",
      color: "magenta",
      published: "2024"
    },
    {
      title: "The Backyard Entrepreneur",
      author: "Derek Bowen",
      description: "Transform your unused outdoor space into a thriving business. This book covers various ways to monetize your backyard, from event hosting to specialized rentals.",
      image: "https://horizons-cdn.hostinger.com/d0673265-adb7-4362-8cbb-bb439167c2b5/6c079eb3863471e238629a7b6ae430c0.webp",
      link: "#",
      color: "cyan",
      published: "2024"
    },
    {
      title: "Pool Host Riches",
      author: "Derek Bowen",
      description: "A deep dive into the financial aspects of pool hosting. Master the art of upselling, managing expenses, and maximizing your return on investment as a pool host.",
      image: "https://horizons-cdn.hostinger.com/d0673265-adb7-4362-8cbb-bb439167c2b5/e6e3ce1f9a2feea4c11e0fe646787a86.webp",
      link: "#",
      color: "blue",
      published: "2024"
    },
    {
      title: "Honey, Do the Dishes",
      author: "Derek Bowen",
      description: "A practical and humorous look at balancing entrepreneurial ambitions with family life and household responsibilities. Strategies for maintaining harmony while building your empire.",
      image: "https://horizons-cdn.hostinger.com/d0673265-adb7-4362-8cbb-bb439167c2b5/328ff7e0ac9a87b2c4f54499a96c787b.jpg",
      link: "#",
      color: "magenta",
      published: "2022"
    }
  ];

  const colorMap = {
    blue: { text: 'text-[#00d4ff]', border: 'border-[#00d4ff]/30', hover: 'hover:border-[#00d4ff]/60', shadow: 'shadow-[0_0_20px_rgba(0,212,255,0.2)]', btn: 'bg-[#00d4ff]/10 hover:bg-[#00d4ff]/20 border-[#00d4ff]/50 text-[#00d4ff]' },
    magenta: { text: 'text-[#ff00ff]', border: 'border-[#ff00ff]/30', hover: 'hover:border-[#ff00ff]/60', shadow: 'shadow-[0_0_20px_rgba(255,0,255,0.2)]', btn: 'bg-[#ff00ff]/10 hover:bg-[#ff00ff]/20 border-[#ff00ff]/50 text-[#ff00ff]' },
    cyan: { text: 'text-[#00ff88]', border: 'border-[#00ff88]/30', hover: 'hover:border-[#00ff88]/60', shadow: 'shadow-[0_0_20px_rgba(0,255,136,0.2)]', btn: 'bg-[#00ff88]/10 hover:bg-[#00ff88]/20 border-[#00ff88]/50 text-[#00ff88]' }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#0a0a0a]">
      <Helmet>
        <title>Books & Publications | Derek Bowen</title>
        <meta name="description" content="Explore the complete collection of books authored by Derek Bowen, covering topics from pool rental businesses to carnival operations and entrepreneurship." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 mb-6">
            <BookOpen className="w-4 h-4" /> Library
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Published <span className="neon-magenta text-[#ff00ff]">Works</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of books sharing insights, strategies, and practical guides on entrepreneurship, niche rentals, and business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => {
            const theme = colorMap[book.color];
            return (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group flex flex-col bg-white/5 rounded-2xl border ${theme.border} ${theme.hover} transition-all duration-300 overflow-hidden hover:${theme.shadow}`}
              >
                <div className="relative h-80 overflow-hidden bg-black/40 flex items-center justify-center p-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="h-full w-auto object-contain relative z-0 group-hover:scale-105 transition-transform duration-500 shadow-2xl rounded-md"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow bg-[#0a0a0a] relative z-20">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Published {book.published}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className={`w-3 h-3 ${theme.text} fill-current`} />)}
                    </div>
                  </div>
                  
                  <h2 className={`text-2xl font-bold mb-1 ${theme.text}`}>
                    {book.title}
                  </h2>
                  {book.subtitle && (
                    <h3 className="text-sm font-medium text-gray-300 mb-2 italic">
                      {book.subtitle}
                    </h3>
                  )}
                  <p className="text-sm text-gray-400 mb-4">By {book.author}</p>
                  
                  <p className="text-gray-300 text-sm mb-8 flex-grow leading-relaxed">
                    {book.description}
                  </p>
                  
                  <a 
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg border transition-all duration-300 font-bold ${theme.btn} hover:shadow-[0_0_15px_currentColor]`}
                  >
                    <ShoppingCart className="w-5 h-5" /> Buy on Amazon
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;