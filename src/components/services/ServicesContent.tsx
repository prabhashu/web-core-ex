"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Check, Code, Palette, TrendingUp, LayoutTemplate, Store, Receipt, Zap, Globe, Smartphone, Star, FileText, Database, BarChart, Target, ShoppingCart } from 'lucide-react';

import { 
  categories, 
  webDevFeatures, 
  designFeatures, 
  marketingFeatures, 
  wordpressFeatures, 
  posFeatures, 
  addOns 
} from './servicesData';

export default function ServicesContent() {
  const [activeTab, setActiveTab] = useState('All');

  // --- Animation Variants ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardHover = {
    y: -10,
    transition: { type: "spring", stiffness: 300 }
  };

  return (
    <>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center mb-12 sm:mb-16"
      >
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === cat 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 scale-105' 
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-8 sm:mt-10"></div>
      </motion.div>

      {/* Content Wrapper */}
      <AnimatePresence mode='wait'>
        
        {/* --- WEB DEVELOPMENT SECTION --- */}
        {(activeTab === 'All' || activeTab === 'Web Development') && (
          <motion.section 
            key="web-dev"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-16 sm:mb-32"
          >
            <div className="glass-card p-6 sm:p-12 md:p-16 rounded-3xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Code size={32} className="sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">Web Development</h2>
                  <p className="text-cyan-400 text-base sm:text-lg">Build a Digital Platform, Not Just a Website</p>
                </div>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-white/80 mb-8 sm:mb-12 leading-relaxed text-center sm:text-left">
                We craft secure, mobile-responsive, and high-performance Minimum Viable Products (MVPs), e-commerce stores, and custom web applications.
              </p>

              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                {webDevFeatures.map((feature, index) => (
                  <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.05 }} className="glass-card p-5 sm:p-6 rounded-xl">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-3 sm:mb-4">
                      <feature.icon size={20} className="sm:w-6 sm:h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/60 text-xs sm:text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {/* Web Development Packages */}
                <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                      <Smartphone className="text-cyan-400" size={24} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Starter Presence</h3>
                    <p className="text-white/60 text-sm">Perfect for establishing your initial digital footprint.</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {['Custom designed landing page', 'Mobile responsive layout', 'Fast loading performance', 'Contact form integration', 'Basic SEO setup'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <Check size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-auto"><div className="w-full px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all text-sm sm:text-base text-center cursor-pointer">Get Started</div></Link>
                </motion.div>

                <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl border border-cyan-500/50 relative flex flex-col h-full bg-gradient-to-b from-cyan-900/10 to-transparent">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-500 text-white text-xs font-bold tracking-wider">POPULAR</div>
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/20">
                      <Zap className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Growth Platform</h3>
                    <p className="text-white/60 text-sm">Scalable solution for growing businesses.</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {['Multi-page custom website', 'CMS for easy content updates', 'Advanced animations & interactions', 'Analytics & conversion tracking', 'Speed optimization'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <Check size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-auto"><div className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-sm sm:text-base text-center cursor-pointer">Get Started</div></Link>
                </motion.div>

                <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4">
                      <Globe className="text-purple-400" size={24} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Enterprise Suite</h3>
                    <p className="text-white/60 text-sm">Complex applications with custom functionality.</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {['Custom web application development', 'Database design & API integration', 'User authentication systems', 'Advanced security features', 'Priority support & maintenance'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <Check size={16} className="text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-auto"><div className="w-full px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all text-sm sm:text-base text-center cursor-pointer">Contact for Quote</div></Link>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}

        {/* --- DESIGN SECTION --- */}
        {(activeTab === 'All' || activeTab === 'Design') && (
          <motion.section 
            key="design"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-16 sm:mb-32"
          >
            <div className="glass-card p-6 sm:p-12 md:p-16 rounded-3xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Palette size={32} className="sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">Web & Graphic Design</h2>
                  <p className="text-purple-400 text-base sm:text-lg">UI/UX that Converts. Design that Captivates.</p>
                </div>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-white/80 mb-8 sm:mb-12 leading-relaxed text-center sm:text-left">
                From stunning brand identities and pitch deck design to intuitive user interfaces (UI) and frictionless user experiences (UX).
              </p>

              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                {designFeatures.map((feature, index) => (
                  <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.05 }} className="glass-card p-5 sm:p-6 rounded-xl">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-3 sm:mb-4">
                      <feature.icon size={20} className="sm:w-6 sm:h-6 text-purple-400" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/60 text-xs sm:text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {/* Design Packages */}
                <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4">
                      <Palette className="text-purple-400" size={24} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Brand Essential</h3>
                    <p className="text-white/60 text-sm">Fundamental identity for startups.</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {['Professional logo design (3 concepts)', 'Color palette selection', 'Typography pairing', 'Business card design', 'Basic brand usage guide'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <Check size={16} className="text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-auto"><div className="w-full px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all text-sm sm:text-base text-center cursor-pointer">Get Started</div></Link>
                </motion.div>

                <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl border border-purple-500/50 relative flex flex-col h-full bg-gradient-to-b from-purple-900/10 to-transparent">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-purple-500 text-white text-xs font-bold tracking-wider">POPULAR</div>
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
                      <Star className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Complete Identity</h3>
                    <p className="text-white/60 text-sm">Cohesive brand experience across all touchpoints.</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {['Everything in Brand Essential', 'Comprehensive brand guidelines', 'Social media kit (templates & covers)', 'Email signature design', 'Letterhead & stationery'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <Check size={16} className="text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-auto"><div className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm sm:text-base text-center cursor-pointer">Get Started</div></Link>
                </motion.div>

                <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-red-500/20 flex items-center justify-center mb-4">
                      <FileText className="text-pink-400" size={24} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Product Design</h3>
                    <p className="text-white/60 text-sm">UI/UX for products and applications.</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {['User research & persona development', 'Wireframing & user flow mapping', 'High-fidelity UI prototyping', 'Component library creation', 'Developer handoff documentation'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <Check size={16} className="text-pink-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-auto"><div className="w-full px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all text-sm sm:text-base text-center cursor-pointer">Contact for Quote</div></Link>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}

        {/* --- MARKETING SECTION --- */}
        {(activeTab === 'All' || activeTab === 'Marketing') && (
          <motion.section 
            key="marketing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-16 sm:mb-32"
          >
            <div className="glass-card p-6 sm:p-12 md:p-16 rounded-3xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={32} className="sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">Social Media Marketing</h2>
                  <p className="text-blue-400 text-base sm:text-lg">Targeted Marketing. Real Acquisition.</p>
                </div>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-white/80 mb-8 sm:mb-12 leading-relaxed text-center sm:text-left">
                We manage your social presence with data-driven strategy. Our focus is on turning followers into customers through targeted content creation, paid ad management, and dedicated community engagement.
              </p>

              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                {marketingFeatures.map((feature, index) => (
                  <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.05 }} className="glass-card p-5 sm:p-6 rounded-xl">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-3 sm:mb-4">
                      <feature.icon size={20} className="sm:w-6 sm:h-6 text-blue-400" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/60 text-xs sm:text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {/* Marketing Packages */}
                <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                      <TrendingUp className="text-blue-400" size={24} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Social Kickstart</h3>
                    <p className="text-white/60 text-sm">Consistent presence on key platforms.</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {['10-15 posts per month', '2 platform management (e.g. IG, FB)', 'Basic community management', 'Monthly content calendar', 'Performance analytics report'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <Check size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-auto"><div className="w-full px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all text-sm sm:text-base text-center cursor-pointer">Get Started</div></Link>
                </motion.div>

                <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl border border-blue-500/50 relative flex flex-col h-full bg-gradient-to-b from-blue-900/10 to-transparent">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-blue-500 text-white text-xs font-bold tracking-wider">POPULAR</div>
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                      <BarChart className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Growth & Acquisition</h3>
                    <p className="text-white/60 text-sm">Drive leads and scale your audience.</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {['20-30 posts per month', 'Paid ad campaign management', 'Advanced audience targeting', 'Influencer outreach', 'Bi-weekly strategy calls'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <Check size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-auto"><div className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all text-sm sm:text-base text-center cursor-pointer">Get Started</div></Link>
                </motion.div>

                <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center mb-4">
                      <Target className="text-cyan-400" size={24} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Market Dominance</h3>
                    <p className="text-white/60 text-sm">Full-scale marketing department.</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {['Daily content & stories', 'Cross-platform dominance (4+ platforms)', 'Video content production', 'Dedicated account manager', 'Weekly strategy & optimization'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <Check size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-auto"><div className="w-full px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all text-sm sm:text-base text-center cursor-pointer">Contact for Quote</div></Link>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}

        {/* --- WORDPRESS SECTION --- */}
        {(activeTab === 'All' || activeTab === 'WordPress') && (
          <motion.section 
            key="wordpress"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-16 sm:mb-32"
          >
            <div className="glass-card p-6 sm:p-12 md:p-16 rounded-3xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <LayoutTemplate size={32} className="sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">WordPress Solutions</h2>
                  <p className="text-indigo-400 text-base sm:text-lg">Power Your Content. Scale with Ease.</p>
                </div>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-white/80 mb-8 sm:mb-12 leading-relaxed text-center sm:text-left">
                We specialize in high-performance WordPress development, offering custom themes, secure setups, and powerful e-commerce integrations using WooCommerce.
              </p>

              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                {wordpressFeatures.map((feature, index) => (
                  <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.05 }} className="glass-card p-5 sm:p-6 rounded-xl">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 flex items-center justify-center mb-3 sm:mb-4">
                      <feature.icon size={20} className="sm:w-6 sm:h-6 text-indigo-400" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/60 text-xs sm:text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {/* WordPress Packages */}
                <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center mb-4">
                      <LayoutTemplate className="text-indigo-400" size={24} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Essential Setup</h3>
                    <p className="text-white/60 text-sm">Professional blog or portfolio launch.</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {['Premium theme installation & setup', 'Essential plugins configuration', 'Security hardening & backups', 'Contact form & spam protection', 'Mobile responsive assurance'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <Check size={16} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-auto"><div className="w-full px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all text-sm sm:text-base text-center cursor-pointer">Get Started</div></Link>
                </motion.div>

                <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl border border-indigo-500/50 relative flex flex-col h-full bg-gradient-to-b from-indigo-900/10 to-transparent">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-500 text-white text-xs font-bold tracking-wider">POPULAR</div>
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/20">
                      <Code className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Custom Theme</h3>
                    <p className="text-white/60 text-sm">Unique design tailored to your brand.</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {['Custom WordPress theme development', 'ACF (Advanced Custom Fields) setup', 'Performance optimization (Core Web Vitals)', 'SEO framework integration', 'Easy-to-manage admin panel'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <Check size={16} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-auto"><div className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all text-sm sm:text-base text-center cursor-pointer">Get Started</div></Link>
                </motion.div>

                <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                      <ShoppingCart className="text-purple-400" size={24} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">WooCommerce</h3>
                    <p className="text-white/60 text-sm">Full-featured online store.</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {['Complete WooCommerce setup', 'Payment gateway integration', 'Product schema & inventory setup', 'Shopping cart & checkout optimization', 'Sales analytics dashboard'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <Check size={16} className="text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-auto"><div className="w-full px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all text-sm sm:text-base text-center cursor-pointer">Contact for Quote</div></Link>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}

        {/* --- POS SYSTEMS SECTION --- */}
        {(activeTab === 'All' || activeTab === 'POS Systems') && (
          <motion.section 
            key="pos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-16 sm:mb-32"
          >
            <div className="glass-card p-6 sm:p-12 md:p-16 rounded-3xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <Store size={32} className="sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">POS & Retail Solutions</h2>
                  <p className="text-emerald-400 text-base sm:text-lg">Streamline Operations. Boost Sales.</p>
                </div>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-white/80 mb-8 sm:mb-12 leading-relaxed text-center sm:text-left">
                Custom Point of Sale (POS) software tailored to your business workflow. From inventory management to seamlessly integrated payment processing and real-time analytics.
              </p>

              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                {posFeatures.map((feature, index) => (
                  <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.05 }} className="glass-card p-5 sm:p-6 rounded-xl">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-3 sm:mb-4">
                      <feature.icon size={20} className="sm:w-6 sm:h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/60 text-xs sm:text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {/* POS Packages */}
                <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-4">
                      <Store className="text-emerald-400" size={24} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Retail Standard</h3>
                    <p className="text-white/60 text-sm">Perfect for single-location shops.</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {['Cloud-based inventory management', 'Barcode scanning integration', 'Daily sales & profit reports', 'Customer loyalty program (Basic)', 'Email receipt capabilities'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <Check size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-auto"><div className="w-full px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all text-sm sm:text-base text-center cursor-pointer">Get Started</div></Link>
                </motion.div>

                <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl border border-emerald-500/50 relative flex flex-col h-full bg-gradient-to-b from-emerald-900/10 to-transparent">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold tracking-wider">POPULAR</div>
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20">
                      <Receipt className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Restaurant & Bar</h3>
                    <p className="text-white/60 text-sm">Fast-paced service management.</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {['Table & order management', 'Kitchen Display System (KDS) integration', 'Split bill & tab functionality', 'Ingredient-level inventory tracking', 'Employee shift & tip management'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <Check size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-auto"><div className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all text-sm sm:text-base text-center cursor-pointer">Get Started</div></Link>
                </motion.div>

                <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                      <Database className="text-teal-400" size={24} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Enterprise Chain</h3>
                    <p className="text-white/60 text-sm">Multi-location centralized control.</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {['Centralized multi-store dashboard', 'Real-time global inventory sync', 'Advanced API integrations (ERP/CRM)', 'Custom hardware integration support', 'White-label mobile ordering app'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <Check size={16} className="text-teal-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-auto"><div className="w-full px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all text-sm sm:text-base text-center cursor-pointer">Contact for Quote</div></Link>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}

        {/* --- ADD-ONS SECTION --- */}
        {(activeTab === 'All' || activeTab === 'Add-ons') && (
          <motion.section 
            key="addons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-20"
          >
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Additional Services</h2>
              <p className="text-base sm:text-xl text-white/70">Enhance your package with these add-ons</p>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 sm:mt-6"></div>
            </div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {addOns.map((addon, index) => (
                <motion.div key={index} variants={fadeInUp} whileHover={{ y: -5 }} className="glass-card p-6 sm:p-8 rounded-2xl hover:bg-white/5 transition-all">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{addon.name}</h3>
                  <div className="mb-3"></div>
                  <p className="text-white/70 text-xs sm:text-sm">{addon.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
