"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Blog() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Workforce Management",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way companies handle workforce transitions and risk assessment.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "AI & Technology",
      featured: true,
      emoji: "🚀"
    },
    {
      id: 2,
      title: "Reducing Legal Risk in Corporate Restructuring",
      excerpt: "Best practices for minimizing legal exposure during workforce transitions and organizational changes.",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Legal & Compliance",
      emoji: "⚖️"
    },
    {
      id: 3,
      title: "The Hidden Costs of Poor Severance Planning",
      excerpt: "Understanding the true financial impact of inadequate severance strategies on your organization.",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Finance",
      emoji: "💸"
    },
    {
      id: 4,
      title: "Building a Resilient Workforce Strategy",
      excerpt: "How to create adaptive workforce plans that protect both employees and organizational interests.",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Strategy",
      emoji: "🎯"
    },
    {
      id: 5,
      title: "Private Equity's New Playbook",
      excerpt: "How PE firms are leveraging AI to make smarter workforce decisions during portfolio company transformations.",
      date: "February 20, 2024",
      readTime: "8 min read",
      category: "Private Equity",
      emoji: "📈"
    },
    {
      id: 6,
      title: "The Ethics of AI in HR Decision Making",
      excerpt: "Balancing technological efficiency with human compassion in workforce management.",
      date: "February 15, 2024",
      readTime: "5 min read",
      category: "Ethics",
      emoji: "🤝"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Animated cursor follower */}
      <div 
        className="fixed w-96 h-96 rounded-full bg-[#F39C12] opacity-5 blur-3xl pointer-events-none z-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x - 192}px, ${mousePos.y - 192}px)`
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="group flex items-center gap-2">
              <div className="w-10 h-10 bg-[#F39C12] rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-black text-xl">A</span>
              </div>
              <h1 className="text-2xl font-black">
                <span className="text-[#2C3E50]">Aponi</span>
                <span className="text-[#F39C12]">.ai</span>
              </h1>
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/" className="px-4 py-2 text-[#2C3E50] hover:bg-gray-100 rounded-xl transition-all duration-200 font-medium">
                Home
              </Link>
              <Link href="/blog" className="px-4 py-2 bg-[#F39C12]/10 text-[#F39C12] rounded-xl font-medium">
                Blog
              </Link>
              <Link href="/more" className="px-4 py-2 text-[#2C3E50] hover:bg-gray-100 rounded-xl transition-all duration-200 font-medium">
                More
              </Link>
              <button className="ml-4 px-6 py-3 bg-[#2C3E50] text-white font-medium rounded-xl hover:bg-[#1a252f] transition-all duration-200 flex items-center gap-2 group">
                Get Started
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Modern gradient mesh background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F39C12] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2C3E50] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F39C12]/10 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#F39C12] rounded-full animate-pulse"></span>
                <span className="text-[#F39C12] font-medium text-sm">Latest Insights</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-[#2C3E50] mb-6">
                Blog<span className="text-[#F39C12]">.</span>
              </h1>
              <p className="text-xl text-[#7F8C8D] max-w-2xl mx-auto">
                Discover the latest trends in AI, workforce management, and enterprise transformation
              </p>
            </div>

            {/* Featured Post - Modern Card */}
            <div className="relative group cursor-pointer mb-20">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F39C12] to-[#E67E22] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="text-6xl">{blogPosts[0].emoji}</span>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-[#F39C12]/10 text-[#F39C12] rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-[#7F8C8D] text-sm">
                      {blogPosts[0].date} • {blogPosts[0].readTime}
                    </span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-[#2C3E50] mb-4 group-hover:text-[#F39C12] transition-colors duration-300">
                  {blogPosts[0].title}
                </h2>
                <p className="text-lg text-[#7F8C8D] mb-8 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-[#F39C12] rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-[#E67E22] rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-[#2C3E50] rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-[#F39C12] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read Article
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid - Bento Style */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-100"
              >
                {/* Emoji icon */}
                <div className="text-4xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {post.emoji}
                </div>
                
                {/* Category tag */}
                <span className="inline-block px-3 py-1 bg-[#2C3E50]/5 text-[#2C3E50] rounded-lg text-xs font-semibold uppercase tracking-wide mb-4">
                  {post.category}
                </span>
                
                <h3 className="text-xl font-bold text-[#2C3E50] mb-3 group-hover:text-[#F39C12] transition-colors duration-300 overflow-hidden line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-[#7F8C8D] mb-6 text-sm overflow-hidden line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-[#7F8C8D]">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime}
                  </span>
                </div>

                {/* Animated arrow on hover */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className="w-10 h-10 bg-[#F39C12] rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Modern Design */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C3E50] to-[#1a252f]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <span className="w-2 h-2 bg-[#F39C12] rounded-full animate-pulse"></span>
            <span className="text-white/80 font-medium text-sm">Newsletter</span>
          </div>
          
          <h3 className="text-5xl md:text-6xl font-black text-white mb-4">
            Stay in the <span className="text-[#F39C12]">loop</span>
          </h3>
          <p className="text-xl text-white/80 mb-12">
            Get weekly insights on AI and workforce transformation
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:bg-white/20 focus:border-[#F39C12] transition-all duration-300"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#F39C12] text-white font-bold rounded-xl hover:bg-[#E67E22] transition-all duration-300 group flex items-center justify-center gap-2"
            >
              Subscribe
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#F39C12] rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-xl">A</span>
              </div>
              <h2 className="text-2xl font-black">
                <span className="text-[#2C3E50]">Aponi</span>
                <span className="text-[#F39C12]">.ai</span>
              </h2>
            </div>
            <p className="text-[#7F8C8D] mb-8 max-w-md">
              Transforming workforce transitions with AI-powered intelligence
            </p>
            <div className="flex gap-4 mb-8">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-[#F39C12] hover:text-white transition-all duration-300 cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-[#F39C12] hover:text-white transition-all duration-300 cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-[#F39C12] hover:text-white transition-all duration-300 cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
            </div>
            <p className="text-sm text-[#7F8C8D]">&copy; 2024 Aponi.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}