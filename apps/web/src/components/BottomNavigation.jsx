import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, User, BookOpen, FileText, HeartHandshake as Handshake } from 'lucide-react';

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Portfolio', path: '/portfolio', icon: Briefcase },
    { name: 'About', path: '/about', icon: User },
    { name: 'Books', path: '/books', icon: BookOpen },
    { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'Work', path: '/work-with-me', icon: Handshake },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0E27]/95 backdrop-blur-xl border-t border-white/10 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center gap-1 px-2 py-1 rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'text-[#00D9FF]' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Icon 
                className={`w-5 h-5 transition-all duration-300 ${
                  isActive ? 'drop-shadow-[0_0_8px_rgba(0,217,255,0.6)]' : ''
                }`} 
              />
              <span className={`text-[10px] font-medium transition-all duration-300 ${
                isActive ? 'font-bold' : ''
              }`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;