import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Users, Linkedin } from 'lucide-react';

const PortfolioPage = () => {
  const projects = [
    {
      title: 'Rental Waivers',
      description: 'Digital contract and waiver management platform designed specifically for the rental industry. Streamlines the signing process, securely stores documents, and protects businesses from liability with automated workflows.',
      image: 'https://images.unsplash.com/photo-1589859793010-6fe9e1fe29ea',
      tech: ['Digital Contracts', 'Legal Tech', 'Web Development'],
      link: 'https://rentalwaivers.com',
      color: 'cyan'
    },
    {
      title: 'ferriswheelrental.us',
      description: 'Specialized rental platform for ferris wheels and large event attractions. Features streamlined booking inquiries, event logistics management, and targeted SEO optimization for the amusement rental niche.',
      image: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9',
      tech: ['Web Development', 'SEO Optimization', 'Event Logistics'],
      link: 'https://ferriswheelrental.us',
      color: 'blue'
    },
    {
      title: 'bookmypool.com',
      description: 'A comprehensive pool rental marketplace connecting pool owners with renters. Features advanced booking systems, secure payments, and user management.',
      image: 'https://images.unsplash.com/photo-1445251810503-252a41ddbb39',
      tech: ['React Native', 'Programmatic SEO', 'Digital Marketing'],
      link: 'https://bookmypool.com',
      color: 'magenta'
    },
    {
      title: 'californiacasinorental.com',
      description: 'Premier event rental platform specializing in casino equipment and party supplies. Streamlined booking process and inventory management.',
      image: 'https://images.unsplash.com/photo-1649190800807-6f1d42a4bc05',
      tech: ['WordPress', 'Business Development', 'B2B Client Management'],
      link: 'https://californiacasinorental.com',
      color: 'cyan'
    },
    {
      title: 'Carnival Manager Pro',
      description: 'Robust management software designed for carnival and event operators. Handles logistics, staff scheduling, and equipment tracking.',
      image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b',
      tech: ['AI & Automation Tools', 'Webflow', 'Cloudflare'],
      link: '#',
      color: 'blue'
    },
    {
      title: '10000solutions.com',
      description: 'Web development and digital marketing agency focusing on scalable solutions, programmatic SEO, and automated workflows.',
      image: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c',
      tech: ['Programmatic SEO', 'Digital Marketing', 'Domain Administration'],
      link: 'https://10000solutions.com',
      color: 'magenta'
    },
    {
      title: 'poolhostpro.com',
      description: 'Dedicated platform for pool hosts to manage their listings, track earnings, and optimize their rental business operations.',
      image: 'https://images.unsplash.com/photo-1539348648513-e460ea576ad3',
      tech: ['Brilliant Directories', 'Website Management', 'B2B Client Management'],
      link: 'https://poolhostpro.com',
      color: 'cyan'
    }
  ];

  const colorMap = {
    blue: 'text-[#00d4ff] border-[#00d4ff]/30 shadow-[#00d4ff]/20',
    magenta: 'text-[#ff00ff] border-[#ff00ff]/30 shadow-[#ff00ff]/20',
    cyan: 'text-[#00ff88] border-[#00ff88]/30 shadow-[#00ff88]/20'
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <Helmet>
        <title>Portfolio | Derek Bowen</title>
        <meta name="description" content="Explore Derek Bowen's portfolio of digital ventures, web development projects, and entrepreneurial successes." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-2/3"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Digital <span className="neon-blue text-[#00d4ff]">Ventures</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mb-6">
              A showcase of platforms, marketplaces, and digital solutions built with modern tech, strategic vision, and a hands-on approach.
            </p>
            <a 
              href="https://www.linkedin.com/in/derekcbowen/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] font-medium hover:bg-[#00d4ff]/20 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" /> Connect on LinkedIn
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/3 flex justify-center md:justify-end"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00d4ff]/40 to-[#ff00ff]/40 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="/images/59b0610f463f778a6bc3df34cf4389fd.jpg" 
                alt="Derek Bowen" 
                className="relative z-10 w-40 h-40 object-cover rounded-full border-2 border-[#00d4ff] shadow-[0_0_20px_rgba(0,212,255,0.3)]"
              />
            </div>
          </motion.div>
        </div>

        {/* Projects List */}
        <div className="space-y-24 mb-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <div className={`absolute inset-0 bg-gradient-to-tr from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl shadow-2xl ${colorMap[project.color].split(' ')[2]}`} />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-[400px] object-cover rounded-2xl border border-white/10 relative z-10"
                />
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className={`text-4xl font-bold ${colorMap[project.color].split(' ')[0]}`}>
                  {project.title}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 pt-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                      <Code2 className="w-4 h-4" /> {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-6">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 hover:bg-white/5 ${colorMap[project.color].split(' ')[0]} ${colorMap[project.color].split(' ')[1]}`}
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collaborative Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 border-t border-white/10"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              A <span className="neon-magenta text-[#ff00ff]">Collaborative</span> Approach
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Great projects aren't built in isolation. They are the result of strong partnerships, shared vision, and a dedicated team effort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img 
                src="/images/6e71c7f400ffa28dd0705bf9c4008141.jpg" 
                alt="Team Collaboration" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="flex items-center gap-2 text-[#ff00ff] mb-2">
                  <Users className="w-5 h-5" />
                  <span className="font-bold tracking-wider uppercase text-sm">Partnerships</span>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img 
                src="/images/7621f4f481bc03a5ab5eca9ec90ac78c.jpg" 
                alt="Community Building" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="flex items-center gap-2 text-[#00d4ff] mb-2">
                  <Users className="w-5 h-5" />
                  <span className="font-bold tracking-wider uppercase text-sm">Community</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;