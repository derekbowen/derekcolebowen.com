import React from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPostDetailAI = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#0A0E27] text-white relative">
      <Helmet>
        <title>I Had a Game Boy, These Kids Have AI | Derek Bowen</title>
        <meta name="description" content="Why there's no excuse anymore. A reflection on the generational shift from 8-bit distractions to infinite leverage." />
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
              Entrepreneurship
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-400">
              <Calendar className="w-4 h-4" /> March 10, 2026
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-400">
              <Clock className="w-4 h-4" /> 5 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white">
            I Had a Game Boy, These Kids Have AI: Why There's No Fucking Excuse Anymore
          </h1>

          <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 mb-12">
            <img 
              src="/images/59b0610f463f778a6bc3df34cf4389fd.jpg" 
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
            When I was a kid, the pinnacle of technological leverage was figuring out how to use the Missingno glitch in Pokémon Red to duplicate Rare Candies. I had a Game Boy. It was a distraction box. It didn't build equity, it didn't write code, and it certainly didn't help me scale a business.
          </p>
          <p>
            Today's kids? They have Artificial Intelligence. They have access to the sum total of human knowledge, capable of being synthesized, remixed, and deployed at the speed of thought. They have an infinite army of junior developers, copywriters, and strategists living inside a browser tab.
          </p>

          <div className="py-8">
            <h2 className="text-3xl font-bold text-white mb-6">The Way It Used to Be</h2>
            <p className="mb-6">
              Let's rewind. If you wanted to build a software company or a digital marketplace twenty years ago, you needed capital. You needed to hire engineers, rent server space, and spend months just getting a minimum viable product off the ground. The barrier to entry was a massive, unscalable wall.
            </p>
            <p>
              Even ten years ago, the "no-code" movement started lowering that wall, but you still had to wire everything together manually. You had to understand the logic, the API endpoints, the database structures. It took grit, and more importantly, it took time. Time that most people didn't have.
            </p>
          </div>

          <div className="py-8">
            <h2 className="text-3xl font-bold text-white mb-6">No More Excuses</h2>
            <p className="mb-6">
              Look at the landscape now. You can describe a complex web application in plain English, and an AI will spit out the React components, the backend logic, and the deployment scripts in seconds. You can generate programmatic SEO campaigns that would have taken a team of writers a decade to produce, all before your morning coffee gets cold.
            </p>
            <p className="mb-6">
              There is literally no fucking excuse anymore.
            </p>
            <p>
              If you have an idea, the execution gap has been reduced to near zero. The only thing separating you from a launched product is your willingness to sit down, prompt the machine, and iterate. The bottleneck is no longer capital or technical skill; the bottleneck is your imagination and your drive.
            </p>
          </div>

          <div className="py-8">
            <h2 className="text-3xl font-bold text-white mb-6">The Tiger Woods Effect of AI</h2>
            <p className="mb-6">
              When Tiger Woods entered golf, he didn't just win; he forced every other player to elevate their game. He raised the baseline of what was required to compete. AI is doing the exact same thing to the digital economy.
            </p>
            <p className="mb-6">
              The baseline has shifted. Being "good at coding" or "good at writing" is no longer a moat. The new moat is taste, curation, and the ability to orchestrate these AI tools to solve actual, painful problems in the real world—like logistics, supply chain management, or niche marketplaces.
            </p>
            <p>
              The kids growing up with ChatGPT and Claude as their default search engines are going to build things we can't even fathom. But for those of us who grew up with Game Boys, we have a choice: we can either complain about how fast things are moving, or we can pick up the new tools and start building. I know which one I'm choosing.
            </p>
          </div>
        </motion.article>

        {/* Navigation Links */}
        <div className="mt-16 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link 
            to="/blog/entrepreneur-book-writing" 
            className="group flex flex-col items-start w-full sm:w-1/2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D9FF]/50 transition-all duration-300"
          >
            <span className="text-sm text-gray-500 mb-2 flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Previous Post
            </span>
            <span className="text-lg font-bold text-white group-hover:text-[#00D9FF] transition-colors line-clamp-2">
              Why Every Entrepreneur Should Write a Book
            </span>
          </Link>
          
          <Link 
            to="/blog/scaling-with-programmatic-seo" 
            className="group flex flex-col items-end text-right w-full sm:w-1/2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D9FF]/50 transition-all duration-300"
          >
            <span className="text-sm text-gray-500 mb-2 flex items-center gap-2">
              Next Post <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="text-lg font-bold text-white group-hover:text-[#00D9FF] transition-colors line-clamp-2">
              Scaling with Programmatic SEO: A Practical Guide
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetailAI;