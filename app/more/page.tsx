"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function More() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const features = [
    {
      icon: "📊",
      title: "Risk Analytics",
      description: "AI-powered insights into workforce transition risks",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: "💰",
      title: "Cost Reduction",
      description: "Minimize severance costs with predictive modeling",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: "⚖️",
      title: "Legal Protection",
      description: "Reduce legal exposure through intelligent risk assessment",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: "🛡️",
      title: "Reputation Safety",
      description: "Protect your brand during sensitive transitions",
      color: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 opacity-50"></div>
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="group">
              <h1 className="text-3xl font-black tracking-tighter">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-cyan-400 transition-all duration-500">
                  APONI.AI
                </span>
              </h1>
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">
                Page 1
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">
                Page 2
              </Link>
              <Link href="/more" className="text-white font-medium">
                Page 3
              </Link>
              <button className="px-6 py-3 bg-white text-black font-bold rounded-none hover:bg-gradient-to-r hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 hover:text-white transition-all duration-300 border-2 border-white hover:border-transparent">
                GET ACCESS
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-8">
                <span className="text-sm font-bold tracking-wider">STEALTH MODE ACTIVE</span>
              </div>
              
              <h2 className="text-6xl lg:text-8xl font-black leading-none mb-8">
                <span className="block">TALENT</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  IN MOTION
                </span>
                <span className="block">RISK IN</span>
                <span className="block">FOCUS</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Revolutionary AI that transforms how CFOs, HR leaders, and PE firms 
                navigate workforce transitions. Zero blind spots. Maximum protection.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  REQUEST DEMO →
                </button>
                <button className="px-8 py-4 border-2 border-white hover:bg-white hover:text-black font-bold text-lg transition-all duration-300">
                  LEARN MORE
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square relative">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`absolute w-48 h-48 rounded-lg bg-gradient-to-br ${feature.color} p-6 transform transition-all duration-500 ${
                      activeSection === index ? 'scale-110 z-20' : 'scale-90 z-10'
                    }`}
                    style={{
                      top: `${index < 2 ? '0' : '50'}%`,
                      left: `${index % 2 === 0 ? '0' : '50'}%`,
                      opacity: activeSection === index ? 1 : 0.3
                    }}
                  >
                    <div className="text-4xl mb-2">{feature.icon}</div>
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-black text-center mb-16">
            INTELLIGENT RISK <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">MITIGATION</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="border border-white/20 p-8 hover:border-white/60 transition-all duration-300 group hover:bg-white/5"
              >
                <div className={`text-6xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 uppercase tracking-wider">{feature.title}</h4>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="text-7xl font-black bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                70%
              </div>
              <p className="text-xl uppercase tracking-wider text-gray-300">Cost Reduction</p>
            </div>
            <div className="text-center group">
              <div className="text-7xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                95%
              </div>
              <p className="text-xl uppercase tracking-wider text-gray-300">Compliance Rate</p>
            </div>
            <div className="text-center group">
              <div className="text-7xl font-black bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <p className="text-xl uppercase tracking-wider text-gray-300">Risk Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-white/20 p-12 hover:border-white/40 transition-colors duration-300">
            <h3 className="text-4xl font-black text-center mb-12 uppercase tracking-wider">
              Initialize <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Contact</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="group">
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Email Protocol</h4>
                  <a href="mailto:info@aponi.ai" className="text-2xl font-bold hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-300">
                    info@aponi.ai
                  </a>
                </div>
                
                <div className="group">
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Operating Hours</h4>
                  <p className="text-xl">MON-FRI // 08:00-18:30</p>
                </div>

                <div className="p-6 border border-purple-500/50 bg-purple-500/10">
                  <p className="text-sm uppercase tracking-wider">
                    🔐 Stealth Mode: Select Partners Only
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="NAME"
                    className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder-gray-500 focus:border-white/60 transition-colors duration-300 uppercase tracking-wider"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="EMAIL"
                    className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder-gray-500 focus:border-white/60 transition-colors duration-300 uppercase tracking-wider"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="MESSAGE"
                    className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder-gray-500 focus:border-white/60 transition-colors duration-300 uppercase tracking-wider resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-lg uppercase tracking-wider hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Transmit Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              APONI.AI
            </span>
          </h2>
          <p className="text-gray-400 mb-8 uppercase tracking-wider">
            Next-Gen Workforce Intelligence
          </p>
          <p className="text-sm text-gray-600">&copy; 2024 APONI.AI // ALL SYSTEMS OPERATIONAL</p>
        </div>
      </footer>
    </div>
  );
}