import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search, BookOpen, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const posts = [
    {
      id: "scaling-with-programmatic-seo",
      title: "Scaling with Programmatic SEO: A Practical Guide",
      excerpt: "Lessons learned from generating 10,000+ pages and automating digital marketing workflows for modern agencies.",
      date: "March 6, 2026",
      readTime: "8 min read",
      category: "Digital Marketing",
      slug: "scaling-with-programmatic-seo"
    },
    {
      id: "logistics-digital-innovation",
      title: "The Intersection of Logistics and Digital Innovation",
      excerpt: "How 20 years on the road prepared me for building scalable digital marketplaces and understanding supply chain dynamics in tech.",
      date: "March 6, 2026",
      readTime: "8 min read",
      category: "Business & Strategy",
      slug: "logistics-digital-innovation"
    },
    {
      id: "why-write-a-book",
      title: "Why Every Entrepreneur Should Write a Book",
      excerpt: "Reflections on publishing 6 books on Amazon and how the process of writing clarifies business strategy and thought leadership.",
      date: "Jan 05, 2024",
      readTime: "4 min read",
      category: "Writing",
      slug: "entrepreneur-book-writing"
    },
    {
      id: "building-prnm-corp",
      title: "Building PRNM Corp: From Concept to Marketplace",
      excerpt: "The journey of creating a dedicated pool rental platform, overcoming technical hurdles, and acquiring the first 100 users.",
      date: "Dec 10, 2023",
      readTime: "6 min read",
      category: "Entrepreneurship",
      slug: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <Helmet>
        <title>Blog & Journal | Derek Bowen</title>
        <meta name="description" content="Read articles by Derek Bowen on logistics, digital marketing, programmatic SEO, and entrepreneurship." />
      </Helmet>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              The <span className="neon-cyan text-[#00ff88]">Journal</span>
            </h1>
            <p className="text-xl text-gray-400">Thoughts on tech, logistics, and building businesses.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative w-full md:w-72"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00ff88] transition-colors"
            />
          </motion.div>
        </div>

        {/* Author Bio Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center gap-6"
        >
          <img 
            src="/images/59b0610f463f778a6bc3df34cf4389fd.jpg" 
            alt="Derek Bowen" 
            className="w-24 h-24 rounded-full object-cover border-2 border-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.3)] shrink-0"
          />
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Written by Derek Bowen</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Entrepreneur, developer, and author of 6 books. Sharing insights from over 20 years in logistics and building scalable digital ventures like PRNM Corp and 10000solutions.com.
            </p>
            <a 
              href="https://www.linkedin.com/in/derekcbowen/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#00b8e6] transition-colors text-sm font-medium hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
            >
              <Linkedin className="w-4 h-4" /> Connect on LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Featured Books Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-[#ff00ff]/10 to-transparent border border-[#ff00ff]/20 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ff00ff]/20 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-[#ff00ff]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Looking for deeper insights?</h3>
              <p className="text-gray-400">Check out my collection of 6 published books on Amazon.</p>
            </div>
          </div>
          <Link 
            to="/books"
            className="px-6 py-3 rounded-full bg-[#ff00ff] text-white font-bold hover:bg-[#cc00cc] transition-colors shadow-[0_0_15px_rgba(255,0,255,0.4)] whitespace-nowrap"
          >
            View Library
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="h-full"
            >
              <Link 
                to={post.slug !== "#" ? `/blog/${post.slug}` : "#"}
                className="group block p-8 rounded-xl bg-white/5 border border-white/10 hover:border-[#00ff88]/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#00ff88]/10 hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-xs font-medium border border-[#00ff88]/20">
                    {post.category}
                  </span>
                  <img 
                    src="/images/59b0610f463f778a6bc3df34cf4389fd.jpg" 
                    alt="Author" 
                    className="w-8 h-8 rounded-full object-cover border border-white/20"
                  />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00ff88] transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-400 mb-8 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
                  </div>
                  <div className="text-[#00ff88] group-hover:translate-x-2 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;