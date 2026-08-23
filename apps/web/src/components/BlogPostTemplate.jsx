import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight, Mail, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPostTemplate = ({ meta, header, intro, sections, relatedPosts }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#0A0E27] text-white relative">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {meta.image && <meta property="og:image" content={meta.image} />}
      </Helmet>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#00D9FF] origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <article className="w-full lg:w-2/3 xl:w-3/4">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00D9FF] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Journal
          </Link>

          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-[#00D9FF]/10 text-[#00D9FF] text-xs font-medium border border-[#00D9FF]/20">
                {header.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-400">
                <Calendar className="w-4 h-4" /> {header.date}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-400">
                <Clock className="w-4 h-4" /> {header.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              {header.title}
            </h1>
            
            {header.subtitle && (
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {header.subtitle}
              </p>
            )}

            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
              <img 
                src="/images/59b0610f463f778a6bc3df34cf4389fd.jpg" 
                alt={header.author.name} 
                className="w-16 h-16 rounded-full object-cover border-2 border-[#00D9FF]"
              />
              <div>
                <h3 className="font-bold text-white">{header.author.name}</h3>
                <p className="text-sm text-gray-400">{header.author.bio}</p>
              </div>
            </div>
          </motion.header>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-[#00D9FF] hover:prose-a:text-[#00b8e6] prose-img:rounded-xl"
          >
            {/* Intro */}
            <div className="mb-10 text-gray-300 leading-relaxed">
              {intro}
            </div>

            {/* Compact CTA */}
            <div className="my-10 p-6 rounded-xl bg-gradient-to-r from-[#00D9FF]/10 to-transparent border border-[#00D9FF]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-1 m-0">Enjoying this post?</h4>
                <p className="text-sm text-gray-400 m-0">Get strategies like this delivered to your inbox.</p>
              </div>
              <Link to="/subscribe" className="px-6 py-2.5 rounded-full bg-[#00D9FF] text-[#0A0E27] font-bold hover:bg-[#00b8e6] transition-colors whitespace-nowrap no-underline">
                Subscribe Now
              </Link>
            </div>

            {/* Sections */}
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24 mb-12">
                {section.level === 2 ? (
                  <h2 className="text-3xl font-bold mb-6 text-white">{section.title}</h2>
                ) : (
                  <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-200">{section.title}</h3>
                )}
                <div className="text-gray-300 leading-relaxed space-y-4">
                  {section.content}
                </div>
              </div>
            ))}
          </motion.div>

          {/* End of Article CTAs */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">What's Next?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link to="/subscribe" className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D9FF]/50 transition-all duration-300 group text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#00D9FF]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-[#00D9FF]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Subscribe</h4>
                <p className="text-sm text-gray-400">Join the newsletter for weekly insights on programmatic SEO and marketplaces.</p>
              </Link>
              <Link to="/work-with-me" className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00FF88]/50 transition-all duration-300 group text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#00FF88]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6 text-[#00FF88]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Work With Me</h4>
                <p className="text-sm text-gray-400">Need help scaling your marketplace or implementing pSEO? Let's talk.</p>
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts && relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8">Related Posts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((post) => (
                  <Link 
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#00D9FF]/50 transition-all duration-300 flex flex-col h-full"
                  >
                    <span className="text-[#00D9FF] text-xs font-medium mb-2 block">{post.category}</span>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#00D9FF] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="mt-auto flex items-center gap-2 text-sm text-gray-500">
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Sidebar (TOC) */}
        <aside className="hidden lg:block w-1/3 xl:w-1/4">
          <div className="sticky top-32 p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider text-sm">Table of Contents</h3>
            <nav className="space-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`block text-sm transition-colors ${
                    section.level === 3 ? 'ml-4' : ''
                  } ${
                    activeId === section.id 
                      ? 'text-[#00D9FF] font-medium' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPostTemplate;