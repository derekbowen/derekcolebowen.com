import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const BlogIndexPage = () => {
  const blogPosts = [
    {
      id: "1700-sitemap",
      title: "The $1,700 Sitemap (And Why I Stopped Waiting on Developers)",
      excerpt: "I got tired of hearing the word 'no.' When you're trying to build a marketplace from the ground up, momentum is everything. But for the longest time, my momentum was held hostage.",
      date: "May 10, 2026",
      slug: "1700-sitemap",
      color: "cyan"
    },
    {
      id: "marketplace-graveyard",
      title: "The Marketplace Graveyard: Why Most Founders Pack It In (And Why I Won't)",
      excerpt: "Before you start building a two-sided marketplace, you need to ask yourself one question: Are you willing to lose it all?",
      date: "May 10, 2026",
      slug: "marketplace-graveyard",
      color: "red"
    },
    {
      id: "digital-waiting-room",
      title: "The Digital Waiting Room: My Life as a \"Crawled, Currently Not Indexed\" URL",
      excerpt: "You spend six hours hyper-fixating on a blog post about medieval spoon-carving. Then Google Search Console delivers the four words that feel like a polite slap in the face...",
      date: "March 31, 2026",
      slug: "digital-waiting-room",
      color: "pink"
    },
    {
      id: "trucking-truth",
      title: "The Fucking Truth About Trucking: It's a Shit Job With Massive Opportunities",
      excerpt: "Why 560,000 CDL holders don't drive, and how to use trucking as a vehicle to build your real business.",
      date: "March 10, 2026",
      slug: "trucking-truth",
      color: "coral"
    },
    {
      id: "game-boy-ai",
      title: "I Had a Game Boy, These Kids Have AI: Why There's No Fucking Excuse Anymore",
      excerpt: "A reflection on the generational shift from 8-bit distractions to infinite leverage, and why the next generation has zero excuses for not building something great.",
      date: "March 10, 2026",
      slug: "game-boy-ai",
      color: "blue"
    },
    {
      id: "scaling-with-programmatic-seo",
      title: "Scaling with Programmatic SEO: A Practical Guide",
      excerpt: "Lessons learned from generating 10,000+ pages and automating digital marketing workflows for modern agencies.",
      date: "March 6, 2026",
      slug: "scaling-with-programmatic-seo",
      color: "green"
    },
    {
      id: "logistics-digital-innovation",
      title: "The Intersection of Logistics and Digital Innovation",
      excerpt: "How 20 years on the road prepared me for building scalable digital marketplaces and understanding supply chain dynamics in tech.",
      date: "March 6, 2026",
      slug: "logistics-digital-innovation",
      color: "purple"
    },
    {
      id: "why-write-a-book",
      title: "Why Every Entrepreneur Should Write a Book",
      excerpt: "Reflections on publishing 6 books on Amazon and how the process of writing clarifies business strategy and thought leadership.",
      date: "Jan 05, 2024",
      slug: "entrepreneur-book-writing",
      color: "orange"
    },
    {
      id: "building-prnm-corp",
      title: "Building PRNM Corp: From Concept to Marketplace",
      excerpt: "The journey of creating a dedicated pool rental platform, overcoming technical hurdles, and acquiring the first 100 users.",
      date: "Dec 10, 2023",
      slug: "#",
      color: "pink"
    },
    {
      id: "cold-start-problem",
      title: "Solving the Cold Start Problem in Niche Rentals",
      excerpt: "Strategies for acquiring supply and demand simultaneously when launching a new marketplace platform.",
      date: "Nov 15, 2023",
      slug: "#",
      color: "coral"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#0A0E27]">
      <Helmet>
        <title>Blog | Derek Bowen</title>
        <meta name="description" content="Read articles by Derek Bowen on programmatic SEO, marketplaces, logistics, and entrepreneurship." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights on programmatic SEO, marketplaces, logistics, and entrepreneurship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={post.slug !== "#" ? `/blog/${post.slug}` : "#"}
              className={`blog-card blog-card-${post.color} rounded-2xl p-8 flex flex-col justify-between min-h-[320px]`}
            >
              <div>
                <h2 className={`text-2xl font-bold ${post.color === 'cyan' ? 'text-black' : 'text-white'} mb-4 leading-tight`}>
                  {post.title}
                </h2>
                <p className={`${post.color === 'cyan' ? 'text-black/85' : 'text-white/90'} text-base leading-relaxed mb-6`}>
                  {post.excerpt}
                </p>
              </div>
              <div className={`${post.color === 'cyan' ? 'text-black/70' : 'text-white/80'} text-sm font-medium`}>
                {post.date}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogIndexPage;