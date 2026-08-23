import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';

const WorkWithMePage = () => {
  const [form, setForm] = useState({ name: '', email: '', projectType: 'Marketplace Strategy', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Work inquiry: ${form.projectType}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}\nProject type: ${form.projectType}`
    );
    // No backend: open the visitor's email client prefilled. Nothing is sent by us.
    window.location.href = `mailto:derekcbowen@outlook.com?subject=${subject}&body=${body}`;
  };

  const packages = [
    {
      title: "Marketplace Strategy Session",
      price: "One-off Consultation",
      description: "A deep dive into your marketplace idea, cold start problem, or scaling bottlenecks.",
      outcomes: [
        "Review of your current supply/demand acquisition strategy",
        "Actionable roadmap for overcoming the cold start problem",
        "Technical stack recommendations for lean operations",
        "1-hour recorded video call + written summary"
      ],
      color: "cyan"
    },
    {
      title: "Programmatic SEO Architecture",
      price: "Project Based",
      description: "End-to-end design of a programmatic SEO strategy to scale your organic traffic.",
      outcomes: [
        "Database schema design for your specific niche",
        "Keyword modifier research and mapping",
        "Template wireframing for maximum conversion",
        "Automation workflow design (Make/Zapier)"
      ],
      color: "green"
    },
    {
      title: "Advisory & Fractional Leadership",
      price: "Monthly Retainer",
      description: "Ongoing strategic support for founders building complex operational or marketplace businesses.",
      outcomes: [
        "Bi-weekly strategic alignment calls",
        "Direct access via Slack/Email for urgent roadblocks",
        "Review of product roadmaps and marketing campaigns",
        "Introductions to relevant network connections"
      ],
      color: "magenta"
    }
  ];

  const faqs = [
    {
      q: "Do you build the software for me?",
      a: "I focus on architecture, strategy, and systems design. While I have deep technical knowledge and build my own platforms, for client work I act as an advisor/architect to guide your existing development team or help you hire the right one."
    },
    {
      q: "What industries do you specialize in?",
      a: "My deepest expertise lies in two-sided marketplaces, niche rentals (like pools or event equipment), and logistics/transportation tech. However, the principles of programmatic SEO and systems thinking apply across many B2B and B2C sectors."
    },
    {
      q: "How do we get started?",
      a: "Fill out the contact form below with details about your current challenges. If it sounds like a good fit, we'll schedule a brief 15-minute intro call to ensure our working styles align before committing to a package."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#0A0E27]">
      <Helmet>
        <title>Work With Me | Derek Bowen</title>
        <meta name="description" content="Partner with Derek Bowen for marketplace strategy, programmatic SEO architecture, and fractional leadership." />
      </Helmet>

      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] mb-6">
            <Briefcase className="w-4 h-4" /> Available for select projects
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Let's Build Something <span className="neon-cyan text-[#00D9FF]">Together</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I help marketplace founders, agencies, and entrepreneurs scale their operations through programmatic SEO and systems thinking.
          </p>
        </motion.div>

        {/* Who it's for */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3">Marketplace Founders</h3>
            <p className="text-gray-400 text-sm">Struggling with the cold start problem or balancing supply and demand acquisition.</p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3">Digital Agencies</h3>
            <p className="text-gray-400 text-sm">Looking to implement programmatic SEO as a scalable service offering for clients.</p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3">Operators</h3>
            <p className="text-gray-400 text-sm">Traditional business owners needing to digitize complex physical operations.</p>
          </div>
        </motion.div>

        {/* Services */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Ways We Can Collaborate</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div 
                key={pkg.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-2xl bg-white/5 border transition-all duration-300 flex flex-col h-full ${
                  pkg.color === 'cyan' ? 'border-[#00D9FF]/30 hover:border-[#00D9FF]' :
                  pkg.color === 'green' ? 'border-[#00FF88]/30 hover:border-[#00FF88]' :
                  'border-[#FF00FF]/30 hover:border-[#FF00FF]'
                }`}
              >
                <span className={`text-xs font-bold uppercase tracking-wider mb-4 block ${
                  pkg.color === 'cyan' ? 'text-[#00D9FF]' :
                  pkg.color === 'green' ? 'text-[#00FF88]' :
                  'text-[#FF00FF]'
                }`}>{pkg.price}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{pkg.title}</h3>
                <p className="text-gray-400 mb-8 flex-grow">{pkg.description}</p>
                
                <div className="space-y-3 mb-8">
                  {pkg.outcomes.map((outcome, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${
                        pkg.color === 'cyan' ? 'text-[#00D9FF]' :
                        pkg.color === 'green' ? 'text-[#00FF88]' :
                        'text-[#FF00FF]'
                      }`} />
                      <span className="text-sm text-gray-300">{outcome}</span>
                    </div>
                  ))}
                </div>
                
                <a href="#contact" className={`w-full py-3 rounded-lg font-bold text-center transition-colors ${
                  pkg.color === 'cyan' ? 'bg-[#00D9FF]/10 text-[#00D9FF] hover:bg-[#00D9FF] hover:text-[#0A0E27]' :
                  pkg.color === 'green' ? 'bg-[#00FF88]/10 text-[#00FF88] hover:bg-[#00FF88] hover:text-[#0A0E27]' :
                  'bg-[#FF00FF]/10 text-[#FF00FF] hover:bg-[#FF00FF] hover:text-[#0A0E27]'
                }`}>
                  Inquire Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-lg font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div id="contact" className="max-w-2xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10">
          <div className="text-center mb-8">
            <MessageSquare className="w-10 h-10 text-[#00D9FF] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">Start the Conversation</h2>
            <p className="text-gray-400">Tell me a bit about your project and what you're looking to achieve.</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Name</label>
                <input type="text" required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="w-full bg-[#0A0E27] border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#00D9FF] transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className="w-full bg-[#0A0E27] border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#00D9FF] transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Project Type</label>
              <select value={form.projectType} onChange={(e) => setForm((f) => ({ ...f, projectType: e.target.value }))} className="w-full bg-[#0A0E27] border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#00D9FF] transition-colors appearance-none">
                <option>Marketplace Strategy</option>
                <option>Programmatic SEO</option>
                <option>Advisory / Retainer</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Message</label>
              <textarea rows="4" required value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} className="w-full bg-[#0A0E27] border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#00D9FF] transition-colors" placeholder="Briefly describe your current challenges..."></textarea>
            </div>
            <button type="submit" className="w-full py-4 rounded-lg bg-[#00D9FF] text-[#0A0E27] font-bold text-lg hover:bg-[#00b8e6] transition-colors flex items-center justify-center gap-2">
              Compose Email <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkWithMePage;