"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Blog() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Workforce Management",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way companies handle workforce transitions and risk assessment.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "AI & Technology",
      featured: true
    },
    {
      id: 2,
      title: "Reducing Legal Risk in Corporate Restructuring",
      excerpt: "Best practices for minimizing legal exposure during workforce transitions and organizational changes.",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Legal & Compliance"
    },
    {
      id: 3,
      title: "The Hidden Costs of Poor Severance Planning",
      excerpt: "Understanding the true financial impact of inadequate severance strategies on your organization.",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Finance"
    },
    {
      id: 4,
      title: "Building a Resilient Workforce Strategy",
      excerpt: "How to create adaptive workforce plans that protect both employees and organizational interests.",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Strategy"
    },
    {
      id: 5,
      title: "Private Equity&apos;s New Playbook",
      excerpt: "How PE firms are leveraging AI to make smarter workforce decisions during portfolio company transformations.",
      date: "February 20, 2024",
      readTime: "8 min read",
      category: "Private Equity"
    },
    {
      id: 6,
      title: "The Ethics of AI in HR Decision Making",
      excerpt: "Balancing technological efficiency with human compassion in workforce management.",
      date: "February 15, 2024",
      readTime: "5 min read",
      category: "Ethics"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#2C3E50] z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="group">
              <h1 className="text-3xl font-bold">
                <span className="text-white">Aponi</span>
                <span className="text-[#F39C12]">.ai</span>
              </h1>
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-[#F39C12] transition-colors duration-200 font-medium">
                Home
              </Link>
              <Link href="/blog" className="text-[#F39C12] font-medium">
                Blog
              </Link>
              <Link href="/more" className="text-white hover:text-[#F39C12] transition-colors duration-200 font-medium">
                More
              </Link>
              <button className="px-8 py-3 bg-[#F39C12] text-white font-bold hover:bg-[#E67E22] transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section className="relative pt-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-black"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        {/* Geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#F39C12] opacity-10 transform rotate-45"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white opacity-5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#F39C12] opacity-5 transform -translate-x-1/2 -translate-y-1/2 rotate-12"></div>
        </div>

        <div className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-7xl md:text-9xl font-black text-white mb-6 tracking-tighter">
              INSIGHTS
            </h2>
            <div className="h-1 w-32 bg-[#F39C12] mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Deep perspectives on AI, workforce transformation, and the future of enterprise
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="relative z-10 -mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow-2xl p-12 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-[#F39C12] text-white font-bold text-sm">
                FEATURED
              </span>
              <span className="text-[#7F8C8D] font-medium">
                {blogPosts[0].date} • {blogPosts[0].readTime}
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-[#2C3E50] mb-4 leading-tight">
              {blogPosts[0].title}
            </h3>
            <p className="text-xl text-[#7F8C8D] mb-8 leading-relaxed">
              {blogPosts[0].excerpt}
            </p>
            <button className="text-[#F39C12] font-bold text-lg hover:text-[#E67E22] transition-colors duration-200 flex items-center gap-2">
              READ MORE
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article
                key={post.id}
                className="bg-white border-l-4 border-[#F39C12] shadow-lg hover:shadow-2xl transition-all duration-300 group"
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-[#F39C12] uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#2C3E50] mb-3 group-hover:text-[#F39C12] transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-[#7F8C8D] mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#7F8C8D]">
                      {post.date}
                    </span>
                    <span className="text-sm text-[#7F8C8D]">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Hover effect bar */}
                  <div className={`mt-6 h-1 bg-[#F39C12] transform origin-left transition-transform duration-300 ${
                    hoveredPost === post.id ? 'scale-x-100' : 'scale-x-0'
                  }`}></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-5xl font-black text-white mb-2">
            STAY <span className="text-[#F39C12]">INFORMED</span>
          </h3>
          <div className="h-1 w-24 bg-[#F39C12] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-12">
            Get cutting-edge insights delivered directly to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-[#E0E0E0] text-[#2C3E50] placeholder-[#7F8C8D] focus:outline-none focus:bg-white transition-colors duration-300"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#F39C12] text-white font-bold hover:bg-[#E67E22] transition-colors duration-300"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-white">Aponi</span>
            <span className="text-[#F39C12]">.ai</span>
          </h2>
          <p className="text-gray-300 mb-8">Transforming workforce transitions with AI-powered intelligence</p>
          <p className="text-sm text-gray-400">&copy; 2024 Aponi.ai. All rights reserved.</p>
        </div>
      </footer>

      {/* Custom styles */}
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}