import React from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPostDetailTrucking = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#0A0E27] text-white relative">
      <Helmet>
        <title>The Fucking Truth About Trucking | Derek Bowen</title>
        <meta name="description" content="Why 560,000 CDL holders don't drive, and how to use trucking as a vehicle to build your real business." />
        <meta property="og:title" content="The Fucking Truth About Trucking | Derek Bowen" />
        <meta property="og:description" content="Why 560,000 CDL holders don't drive, and how to use trucking as a vehicle to build your real business." />
      </Helmet>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#00D9FF] origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-3xl mx-auto">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00D9FF] transition-colors mb-12"
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
              Logistics
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-400">
              <Calendar className="w-4 h-4" /> March 10, 2026
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-400">
              <Clock className="w-4 h-4" /> 5 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white">
            The Fucking Truth About Trucking: It's a Shit Job With Massive Opportunities
          </h1>

          <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 mb-12">
            <img 
              src="https://horizons-cdn.hostinger.com/d0673265-adb7-4362-8cbb-bb439167c2b5/59b0610f463f778a6bc3df34cf4389fd.jpg" 
              alt="Derek Bowen" 
              className="w-16 h-16 rounded-full object-cover border-2 border-[#00D9FF]"
            />
            <div>
              <h3 className="font-bold text-white">Derek Bowen</h3>
              <p className="text-sm text-gray-400">Programmatic SEO + Logistics Operator</p>
            </div>
          </div>
        </motion.header>

        <motion.article 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-300 leading-[1.9] space-y-8"
        >
          <p>
            Let's get one thing straight right out of the gate: driving a truck for a living is a shit job. It's grueling, it's lonely, and it will break your body down if you let it. The industry churns through people like cheap diesel.
          </p>
          <p>
            But here's the other side of the coin, the part that the recruiters won't tell you and the complainers at the truck stop don't understand: it is also one of the greatest vehicles for building capital and launching a real business that exists in the modern economy.
          </p>

          <div className="py-8">
            <h2 className="text-3xl font-bold text-white mb-6">The 560,000 Ghost Drivers</h2>
            <p className="mb-6">
              There are currently over 560,000 people in the United States who hold a valid Commercial Driver's License (CDL) but choose not to drive. Why? Because the reality of the job didn't match the brochure. They got burned out by the long hours, the disrespect from dispatchers, and the sheer physical toll of living in a 6x8 box.
            </p>
            <p>
              The industry has a retention problem, not a shortage problem. But within that massive turnover lies the opportunity for those who approach it not as a career, but as a stepping stone.
            </p>
          </div>

          <div className="py-8">
            <h2 className="text-3xl font-bold text-white mb-6">Trucking as a Capital Engine</h2>
            <p className="mb-6">
              If you treat trucking as a lifestyle, you will end up broke, divorced, and unhealthy. But if you treat it as a high-yield savings account with a steering wheel, everything changes.
            </p>
            <p className="mb-6">
              Where else can you make $80,000 to $100,000 a year with virtually zero living expenses? If you're an over-the-road driver, you don't need an apartment. You don't need a car payment. Your overhead is food and a cell phone bill.
            </p>
            <p>
              The smart operators use this period to stack cash. They live lean, they bank their miles, and they use that capital to fund their actual ambitions—whether that's buying real estate, starting a digital agency, or building a marketplace.
            </p>
          </div>

          <div className="py-8">
            <h2 className="text-3xl font-bold text-white mb-6">The Ultimate Mobile Office</h2>
            <p className="mb-6">
              Beyond the capital, trucking offers something even more valuable: uninterrupted time. When you're holding the wheel for 11 hours a day, you have a captive audience of one.
            </p>
            <p className="mb-6">
              You can listen to every audiobook on business strategy. You can consume podcasts on programmatic SEO. You can mentally map out the architecture of your next venture. And when you shut down for your 10-hour break, you have a mobile office ready to execute.
            </p>
            <p>
              I built the foundation of my digital businesses from the sleeper berth of a Freightliner. It wasn't glamorous, but it was effective. The truck was just the funding mechanism; the laptop was the future.
            </p>
          </div>

          <div className="py-8">
            <h2 className="text-3xl font-bold text-white mb-6">The Exit Strategy</h2>
            <p className="mb-6">
              The key to surviving trucking is knowing exactly when you're going to quit. You need an exit strategy before you ever sign the lease on a truck or take a company job.
            </p>
            <p>
              Set a financial target. Set a timeline. Execute the plan, stack the capital, build the side hustle, and then get the fuck out. Use the industry; don't let it use you.
            </p>
          </div>
        </motion.article>

        {/* Navigation Links */}
        <div className="mt-16 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link 
            to="/blog/game-boy-ai" 
            className="group flex flex-col items-start w-full sm:w-1/2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D9FF]/50 transition-all duration-300"
          >
            <span className="text-sm text-gray-500 mb-2 flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Previous Post
            </span>
            <span className="text-lg font-bold text-white group-hover:text-[#00D9FF] transition-colors line-clamp-2">
              I Had a Game Boy, These Kids Have AI
            </span>
          </Link>
          
          <Link 
            to="/blog/logistics-digital-innovation" 
            className="group flex flex-col items-end text-right w-full sm:w-1/2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D9FF]/50 transition-all duration-300"
          >
            <span className="text-sm text-gray-500 mb-2 flex items-center gap-2">
              Next Post <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="text-lg font-bold text-white group-hover:text-[#00D9FF] transition-colors line-clamp-2">
              The Intersection of Logistics and Digital Innovation
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetailTrucking;