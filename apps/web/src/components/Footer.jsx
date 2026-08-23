import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Calendar, Hexagon, BookOpen, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <Hexagon className="w-8 h-8 text-[#00d4ff] group-hover:text-[#ff00ff] transition-colors duration-300" />
              <span className="text-xl font-bold tracking-wider text-white group-hover:neon-blue transition-all duration-300">
                DBOWEN
              </span>
            </Link>
            <p className="text-gray-400 max-w-md mb-6">
              Versatile professional blending 20+ years logistics expertise with entrepreneurial success in digital marketing, AI, and web development. Published author of 6 books.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/derekcbowen?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/50 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/standardplans" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/50 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://tidycal.com/meetderek" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#ff00ff] hover:border-[#ff00ff]/50 hover:shadow-[0_0_15px_rgba(255,0,255,0.3)] transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-[#00d4ff] transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-[#00d4ff] transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#00d4ff] transition-colors">About</Link></li>
              <li><Link to="/books" className="text-gray-400 hover:text-[#ff00ff] transition-colors flex items-center gap-2"><BookOpen className="w-3 h-3" /> Books</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-[#00d4ff] transition-colors">Blog</Link></li>
              <li><Link to="/pool-rental-near-me" className="text-gray-400 hover:text-[#00d4ff] transition-colors">PRNM Corp</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-[#00ff88] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-[#00ff88] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Derek Bowen. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Built with <span className="text-[#00ff88]">innovation</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;