import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Search, 
  Cpu, 
  Sparkles, 
  Palette, 
  TrendingUp, 
  BarChart,
  ArrowRight,
  Wrench,
  TerminalSquare
} from 'lucide-react';

const servicesData = [
  {
    category: "Email & Communication",
    icon: Mail,
    color: "#00D9FF",
    services: [
      {
        title: "Email Marketing Setup & Campaigns",
        description: "Configure and launch high-deliverability marketing campaigns tailored for targeted outreach.",
        tools: ["Emailit", "MailBluster"]
      },
      {
        title: "Email Verification & Validation",
        description: "Clean and verify bulk email lists to protect sender reputation and improve open rates.",
        tools: ["Emailverify.io"]
      },
      {
        title: "Email Template Design",
        description: "Craft responsive, high-converting HTML templates for transactional and marketing emails.",
        tools: ["Million Dollar Email Templates 2.0"]
      },
      {
        title: "Automated Reply Systems",
        description: "Set up intelligent auto-responders that handle initial customer inquiries and routing.",
        tools: ["BizReply"]
      }
    ]
  },
  {
    category: "SEO & Content",
    icon: Search,
    color: "#00FF88",
    services: [
      {
        title: "SEO Audits & Optimization",
        description: "Deep technical audits, competitor analysis, and on-page optimization for better SERP ranking.",
        tools: ["SEO Checker for Windows"]
      },
      {
        title: "Content Research & Strategy",
        description: "Identify content gaps and keyword opportunities to build a scalable organic traffic strategy.",
        tools: ["SocLeads"]
      },
      {
        title: "Social Media Lead Generation",
        description: "Extract and structure targeted leads from social platforms based on niche keywords.",
        tools: ["SocLeads"]
      }
    ]
  },
  {
    category: "No-Code & Automation",
    icon: Cpu,
    color: "#FF00FF",
    services: [
      {
        title: "No-Code App Building & Setup",
        description: "Rapidly prototype and deploy internal tools, learning hubs, and operational dashboards.",
        tools: ["Open eLMS Learning Generator", "FormRobin"]
      },
      {
        title: "Form Building & Data Collection",
        description: "Design complex, multi-step forms with webhook integrations and secure data storage.",
        tools: ["FormRobin"]
      },
      {
        title: "Calendar & Scheduling Setup",
        description: "Implement brandable, automated booking pages synced with your team's availability.",
        tools: ["TidyCal - Agency Plan"]
      },
      {
        title: "Knowledge Base Creation",
        description: "Deploy robust, searchable documentation portals and internal company wikis.",
        tools: ["UNA CMS", "eniston Knowledge Bases"]
      },
      {
        title: "QR Code & File Sharing Solutions",
        description: "Generate trackable QR codes and set up encrypted file sharing protocols for clients.",
        tools: ["QRClip"]
      }
    ]
  },
  {
    category: "AI & Content Generation",
    icon: Sparkles,
    color: "#00D9FF",
    services: [
      {
        title: "AI Text-to-Speech & Audio Dubbing",
        description: "Generate lifelike voiceovers for product demos, tutorials, and marketing videos.",
        tools: ["Unmixr AI"]
      },
      {
        title: "AI-Powered Email Copywriting",
        description: "Draft highly personalized cold outreach sequences using contextual AI models.",
        tools: ["CapitalConnector.ai"]
      },
      {
        title: "AI Content Tools",
        description: "Leverage AI to generate optimized marketing copy, meta descriptions, and newsletters.",
        tools: ["Screpy", "MailBluster"]
      }
    ]
  },
  {
    category: "Design & Creative",
    icon: Palette,
    color: "#00FF88",
    services: [
      {
        title: "Vector Graphics & Design Assets",
        description: "Source and customize premium vector graphics for web applications and branding.",
        tools: ["VectorGrove"]
      },
      {
        title: "Social Media Content Creation",
        description: "Design and schedule visually cohesive social media posts across multiple networks.",
        tools: ["Sociamonials"]
      },
      {
        title: "Email Template Design",
        description: "Build conversion-focused email layouts ready for direct integration into your app.",
        tools: ["Million Dollar Email Templates 2.0"]
      }
    ]
  },
  {
    category: "Business & Growth",
    icon: TrendingUp,
    color: "#FF00FF",
    services: [
      {
        title: "Contract Templates & Legal Documents",
        description: "Deploy battle-tested freelance agreements, NDAs, and operational contracts.",
        tools: ["ApproveMe's Ultimate Contract Template Library"]
      },
      {
        title: "Business Strategy Guides",
        description: "Actionable playbooks for launching side projects and validating no-code business models.",
        tools: ["AppSumo's 75 No-Code Business Ideas", "Take The Leap guide"]
      },
      {
        title: "Google Sheets Automation & Templates",
        description: "Build complex financial models, CRM trackers, and operational dashboards in Sheets.",
        tools: ["AppSumo's Google Sheets Template Pack"]
      },
      {
        title: "Influencer Outreach & PR",
        description: "Identify and manage campaigns with micro-influencers and secure media placements.",
        tools: ["Intellifluence", "Press Ranger"]
      }
    ]
  },
  {
    category: "Analytics & Monitoring",
    icon: BarChart,
    color: "#00D9FF",
    services: [
      {
        title: "Website Monitoring & Uptime",
        description: "Configure real-time alerts, SSL monitoring, and performance tracking for critical apps.",
        tools: ["Screpy"]
      },
      {
        title: "Social Proof & Reviews",
        description: "Automate the collection and display of verified customer testimonials and reviews.",
        tools: ["Sociamonials"]
      }
    ]
  }
];

const ServicesForDevelopersPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0E27] text-white pt-20">
      <Helmet>
        <title>Services for Developers | Derek Bowen</title>
        <meta name="description" content="I help fellow developers solve real problems using my AppSumo toolkit and licenses. Email, SEO, No-Code, AI, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden border-b border-white/5">
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center bg-no-repeat mix-blend-luminosity"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1698919585695-546e4a31fc8f")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27]/80 via-[#0A0E27]/90 to-[#0A0E27] z-0" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#00D9FF] mb-6 font-medium text-sm uppercase tracking-widest">
              <TerminalSquare className="w-4 h-4" /> Peer-to-Peer Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white text-balance leading-tight">
              I've Got Tools.<br />
              You Need <span className="text-[#00D9FF] neon-cyan">Solutions</span>.<br />
              Let's Build.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I help fellow developers solve real problems using my curated AppSumo toolkit and lifetime licenses. No enterprise bloat—just fast, effective execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium"
          >
            My approach is simple: peer-to-peer, collaborative, and completely transparent. Over the years, I've amassed a massive library of premium lifetime deals, automation tools, and software licenses. Instead of letting them sit idle, I use them to help other builders execute faster without taking on expensive monthly subscriptions. If you need a problem solved, I probably have the tool for it.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#00D9FF]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#FF00FF]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-24">
          {servicesData.map((category, idx) => (
            <div key={category.category} className="scroll-mt-32">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10" style={{ borderColor: `${category.color}40` }}>
                  <category.icon className="w-6 h-6" style={{ color: category.color }} />
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  {category.category}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, sIdx) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.1 }}
                    className="group relative flex flex-col h-full bg-[#0d1236]/50 rounded-2xl border border-white/10 p-8 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
                    style={{ '--hover-color': category.color }}
                  >
                    <div 
                      className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: category.color, boxShadow: `0 0 15px ${category.color}` }}
                    />
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--hover-color)] transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-white/5">
                      <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        <Wrench className="w-3 h-3" /> Tools / Licenses Used
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.tools.map(tool => (
                          <span 
                            key={tool} 
                            className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-gray-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-[#00D9FF]/5 border-t border-white/5 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-[#00D9FF]/10 rounded-full flex items-center justify-center mb-8 border border-[#00D9FF]/30"
          >
            <TerminalSquare className="w-10 h-10 text-[#00D9FF]" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-balance">
            Need help with any of these?<br />Let's talk.
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
            Stop paying monthly for tools you only need for one project. Let's look at your stack, figure out the bottlenecks, and deploy a solution today.
          </p>
          
          <Link
            to="/work-with-me"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00D9FF] text-[#0A0E27] font-bold text-lg hover:bg-[#00b8e6] hover:shadow-[0_0_30px_rgba(0,217,255,0.6)] transition-all duration-300 uppercase tracking-wider group"
          >
            Hire Me To Build It
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesForDevelopersPage;