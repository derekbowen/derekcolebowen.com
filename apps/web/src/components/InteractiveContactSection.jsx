import React from 'react';
import { motion } from 'framer-motion';
import { Target, Linkedin } from 'lucide-react';

const InteractiveContactSection = () => {
  return (
    <section className="py-24 px-6 relative z-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-12 p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#00d4ff]/10 to-transparent border border-[#00d4ff]/20 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00d4ff]/10 rounded-full blur-3xl -z-10" />
          
          <div className="w-full lg:w-1/3 relative z-10">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00d4ff]/40 to-[#ff00ff]/40 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="https://horizons-cdn.hostinger.com/d0673265-adb7-4362-8cbb-bb439167c2b5/59b0610f463f778a6bc3df34cf4389fd.jpg" 
                alt="Derek Bowen" 
                className="relative z-10 w-full h-64 lg:h-80 object-cover rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,212,255,0.2)]"
              />
            </div>
          </div>

          <div className="w-full lg:w-2/3 text-center lg:text-left relative z-10">
            <Target className="w-12 h-12 text-[#00d4ff] mx-auto lg:mx-0 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Collaborate?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Whether it's a digital venture, a logistics challenge, website troubleshooting, or a new opportunity, I bring a unique perspective and a personal touch to the table. Let's build something great together.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="mailto:derekcbowen@outlook.com" className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#00d4ff] text-black font-bold hover:bg-[#00b8e6] transition-colors shadow-[0_0_20px_rgba(0,212,255,0.4)] text-center">
                Email Me
              </a>
              <a href="https://tidycal.com/meetderek" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-[#ff00ff] text-[#ff00ff] font-bold hover:bg-[#ff00ff]/10 transition-colors shadow-[0_0_20px_rgba(255,0,255,0.2)] text-center">
                Book a Meeting
              </a>
              <a href="https://www.linkedin.com/in/derekcbowen?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-[#00d4ff] text-[#00d4ff] font-bold hover:bg-[#00d4ff]/10 transition-colors shadow-[0_0_20px_rgba(0,212,255,0.2)] text-center flex items-center justify-center gap-2">
                <Linkedin className="w-5 h-5" /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveContactSection;