import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Truck, Code, BookOpen, Target, CheckCircle2, Wrench, ShoppingCart, ArrowRight, Heart, Users, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const skills = [
    "Programmatic SEO", "AI & Automation Tools", "React Native", 
    "Website Management (Webflow, WordPress, Brilliant Directories)", 
    "Domain Administration (Cloudflare)", "Digital Marketing", 
    "Business Development", "B2B Client Management", 
    "Logistics Management", "DOT Compliance", "CDL Class A", "HAZMAT (In Progress)",
    "eBay & Amazon Optimization", "Website Troubleshooting & Fixes", "Google Search Console Optimization"
  ];

  const books = [
    "Running a Smarter Carnival",
    "Turn Your Swimming Pool Into a Goldmine",
    "The Pool Rental & Spa Playbook",
    "The Backyard Entrepreneur",
    "Pool Host Riches",
    "Honey, Do the Dishes"
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <Helmet>
        <title>About | Derek Bowen</title>
        <meta name="description" content="Learn about Derek Bowen's unique journey from 20+ years in logistics to digital entrepreneurship, tech innovation, and published author of 6 books." />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              The <span className="neon-magenta text-[#ff00ff]">Journey</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              I am a versatile professional blending over two decades of logistics and transportation expertise with a relentless drive for entrepreneurial success in digital marketing, AI, e-commerce optimization, and web development.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              My path isn't traditional. It's built on the foundation of hard work on the road, translated into building scalable digital solutions, troubleshooting complex technical issues, and writing books that share these experiences.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff00ff]/10 border border-[#ff00ff]/30 text-[#ff00ff] font-medium">
                <BookOpen className="w-4 h-4" /> Published author of 6 books
              </div>
              <a 
                href="https://www.linkedin.com/in/derekcbowen/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] font-medium hover:bg-[#00d4ff]/20 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" /> Connect on LinkedIn
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff00ff]/30 to-[#00d4ff]/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src="/images/59b0610f463f778a6bc3df34cf4389fd.jpg" 
              alt="Derek Bowen Portrait" 
              className="relative z-10 w-full h-[500px] object-cover rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(255,0,255,0.2)]"
            />
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { icon: Truck, title: "Logistics", desc: "20+ years in transportation, DOT compliance, and operational leadership.", color: "text-[#00ff88]" },
            { icon: Code, title: "Tech & Digital", desc: "Founder of PRNM Corp and 10000solutions.com, leveraging AI and programmatic SEO.", color: "text-[#00d4ff]" },
            { icon: Wrench, title: "Technical Fixes", desc: "Expert in website troubleshooting, resolving technical issues, and platform optimization.", color: "text-[#ff00ff]" },
            { icon: ShoppingCart, title: "E-Commerce", desc: "Deep experience in eBay and Amazon selling, resolving technical hurdles and optimizing listings.", color: "text-[#00d4ff]" }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300"
            >
              <item.icon className={`w-10 h-10 mb-4 ${item.color}`} />
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Life Beyond Work / Community Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Life Beyond <span className="neon-cyan text-[#00ff88]">Work</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Success isn't just built in the office or on the road. It's forged through community, relationships, and shared experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-2xl border border-white/10 lg:col-span-2 lg:row-span-2">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img 
                src="/images/9c3773f620ee0711b3a8be35b39cfd6c.jpg" 
                alt="Dodgers Stadium" 
                className="w-full h-full min-h-[300px] lg:min-h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="flex items-center gap-2 text-[#00d4ff] mb-2">
                  <Heart className="w-5 h-5 fill-current" />
                  <span className="font-bold tracking-wider uppercase text-sm">Passions</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Dodgers Baseball</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img 
                src="/images/6e71c7f400ffa28dd0705bf9c4008141.jpg" 
                alt="Community" 
                className="w-full h-full min-h-[240px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="flex items-center gap-2 text-[#ff00ff] mb-2">
                  <Users className="w-5 h-5" />
                  <span className="font-bold tracking-wider uppercase text-sm">Community</span>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img 
                src="/images/1bd7ee8b379b2084f0bb4f167a431e8d.jpg" 
                alt="Relationships" 
                className="w-full h-full min-h-[240px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="flex items-center gap-2 text-[#00ff88] mb-2">
                  <Users className="w-5 h-5" />
                  <span className="font-bold tracking-wider uppercase text-sm">Connections</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Published Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Published <span className="text-[#ff00ff]">Works</span>
              </h2>
              <p className="text-gray-400">Author of 6 books on business, rentals, and entrepreneurship.</p>
            </div>
            <Link to="/books" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff00ff]/10 text-[#ff00ff] border border-[#ff00ff]/30 hover:bg-[#ff00ff]/20 transition-colors whitespace-nowrap">
              View Full Library <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {books.map((book, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-black/20 border border-white/5">
                <BookOpen className="w-5 h-5 text-[#ff00ff] shrink-0 mt-0.5" />
                <span className="text-gray-300 font-medium">{book}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Arsenal of Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Arsenal of <span className="neon-cyan text-[#00ff88]">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-[#00ff88]/30 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[#00ff88] shrink-0" />
                <span className="text-gray-200 text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto p-12 rounded-3xl bg-gradient-to-b from-[#00d4ff]/10 to-transparent border border-[#00d4ff]/20"
        >
          <Target className="w-16 h-16 text-[#00d4ff] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Collaborate?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Whether it's a digital venture, a logistics challenge, website troubleshooting, or a new opportunity, I bring a unique perspective to the table.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <a href="mailto:derekcbowen@outlook.com" className="px-8 py-4 rounded-full bg-[#00d4ff] text-black font-bold hover:bg-[#00b8e6] transition-colors shadow-[0_0_20px_rgba(0,212,255,0.4)] w-full sm:w-auto">
              Email Me
            </a>
            <a href="https://tidycal.com/meetderek" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-transparent border border-[#ff00ff] text-[#ff00ff] font-bold hover:bg-[#ff00ff]/10 transition-colors shadow-[0_0_20px_rgba(255,0,255,0.2)] w-full sm:w-auto">
              Book a Meeting
            </a>
            <a href="https://www.linkedin.com/in/derekcbowen/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-transparent border border-[#00d4ff] text-[#00d4ff] font-bold hover:bg-[#00d4ff]/10 transition-colors shadow-[0_0_20px_rgba(0,212,255,0.2)] w-full sm:w-auto flex items-center justify-center gap-2">
              <Linkedin className="w-5 h-5" /> Connect
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;