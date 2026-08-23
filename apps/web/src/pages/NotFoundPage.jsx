import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Hexagon, ArrowLeft } from 'lucide-react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Books', path: '/books' },
  { name: 'Blog', path: '/blog' },
  { name: 'Work With Me', path: '/work-with-me' },
];

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0E27] text-white flex items-center justify-center px-6 py-24">
      <Helmet>
        <title>Page Not Found — Derek Bowen</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="max-w-xl w-full text-center">
        <div className="flex justify-center mb-8">
          <Hexagon className="w-16 h-16 text-[#00D9FF]" />
        </div>

        <p className="text-7xl md:text-8xl font-black tracking-widest text-[#00D9FF] mb-4">
          404
        </p>
        <h1 className="text-2xl md:text-3xl font-bold mb-3">This page wandered off the trail</h1>
        <p className="text-gray-400 mb-10">
          The page you're looking for doesn't exist or has moved. Try one of these instead:
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-200 hover:text-[#00D9FF] hover:border-[#00D9FF]/60 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00D9FF] text-[#0A0E27] font-bold hover:bg-[#00b8e6] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
