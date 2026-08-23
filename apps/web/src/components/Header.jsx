import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Hexagon } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Books', path: '/books' },
    { name: 'Work With Me', path: '/work-with-me' },
  ];

  // Hide header on admin routes
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <header
      className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0E27]/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Hexagon className="w-8 h-8 text-[#00D9FF] group-hover:text-[#00FF88] transition-colors duration-300" />
          <span className="text-xl font-bold tracking-wider text-white group-hover:neon-cyan transition-all duration-300">
            DBOWEN
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-all duration-300 hover:text-[#00D9FF] hover:neon-cyan ${
                location.pathname === link.path ? 'text-[#00D9FF] neon-cyan' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
            <Link 
              to="/subscribe"
              className="px-6 py-2.5 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF] text-[#00D9FF] font-bold hover:bg-[#00D9FF] hover:text-[#0A0E27] hover:shadow-[0_0_20px_rgba(0,217,255,0.6)] transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Subscribe
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white hover:text-[#00D9FF] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0A0E27]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-medium transition-colors ${
                    location.pathname === link.path ? 'text-[#00D9FF]' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="h-px bg-white/10 my-4" />
              
              <Link 
                to="/subscribe"
                className="w-full text-center py-3 rounded-lg bg-[#00D9FF]/10 border border-[#00D9FF]/50 text-[#00D9FF] font-bold uppercase tracking-wider"
              >
                Subscribe
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;