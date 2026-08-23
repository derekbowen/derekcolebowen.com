import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Linkedin, CheckCircle2, Users, MessageSquare } from 'lucide-react';

const SubscribePage = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6 bg-[#0A0E27] flex items-center justify-center">
      <Helmet>
        <title>Connect | Derek Bowen</title>
        <meta name="description" content="Connect with Derek Bowen on LinkedIn for insights on programmatic SEO, marketplace strategy, and logistics innovation." />
      </Helmet>

      <div className="max-w-4xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[#00D9FF] mb-6 text-sm font-bold uppercase tracking-wider">
            <Linkedin className="w-4 h-4" /> Let's Connect
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Join My Network on <span className="neon-cyan text-[#00D9FF]">LinkedIn</span>
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            I share actionable insights on building scalable digital systems, programmatic SEO architecture, and applying logistics principles to tech. Let's grow together.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#00FF88] shrink-0" />
              <p className="text-gray-300">Deep dives into pSEO architecture and execution.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#00FF88] shrink-0" />
              <p className="text-gray-300">Tactics for solving the marketplace cold start problem.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#00FF88] shrink-0" />
              <p className="text-gray-300">Lessons on applying logistics principles to tech.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Form / Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden flex flex-col items-center text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D9FF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10 w-full">
            <div className="w-24 h-24 rounded-full bg-[#00D9FF]/20 flex items-center justify-center mx-auto mb-6 border border-[#00D9FF]/30 shadow-[0_0_30px_rgba(0,217,255,0.3)]">
              <Linkedin className="w-12 h-12 text-[#00D9FF]" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Derek Bowen</h3>
            <p className="text-gray-400 mb-8">Programmatic SEO + Logistics Operator</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl border border-white/10 bg-[#0A0E27] flex flex-col items-center justify-center">
                <Users className="w-6 h-6 text-[#00D9FF] mb-2" />
                <span className="text-sm text-gray-400">Network</span>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-[#0A0E27] flex flex-col items-center justify-center">
                <MessageSquare className="w-6 h-6 text-[#00D9FF] mb-2" />
                <span className="text-sm text-gray-400">Engage</span>
              </div>
            </div>

            <a 
              href="https://www.linkedin.com/in/derekcbowen?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-[#00D9FF] text-[#0A0E27] font-bold text-lg hover:bg-[#00b8e6] hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Linkedin className="w-5 h-5" /> Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SubscribePage;