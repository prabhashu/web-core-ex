import React, { useState } from 'react';
import { Code, Palette, TrendingUp, Check, ArrowRight, Zap, Shield, Globe, Users, BarChart, Smartphone, Search, Mail, Video, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';

// --- 1. CURRENCY DATA ---
const currencies = {
  USD: { symbol: '$', rate: 1, flag: '🇺🇸' },
  GBP: { symbol: '£', rate: 0.79, flag: '🇬🇧' },
  CAD: { symbol: 'CA$', rate: 1.36, flag: '🇨🇦' },
  AUD: { symbol: 'AU$', rate: 1.52, flag: '🇦🇺' },
  LKR: { symbol: 'LKR ', rate: 305, flag: '🇱🇰' },
};

type CurrencyKey = keyof typeof currencies;

export default function Services() {
  const [activeTab, setActiveTab] = useState('All');
  const [currency, setCurrency] = useState<CurrencyKey>('USD');

  // --- 2. HELPER: PRICE CONVERTER ---
  const getPrice = (usdAmount: number) => {
    const converted = Math.round(usdAmount * currencies[currency].rate);
    return `${currencies[currency].symbol}${converted.toLocaleString()}`;
  };

  // --- Animation Variants ---
  const fadeInUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardHover: any = {
    y: -10,
    transition: { type: "spring", stiffness: 300 }
  };

  // --- Data ---
  const webDevFeatures = [
    { icon: Code, title: 'Custom MVP Development', desc: 'Launch your minimum viable product in 6-8 weeks' },
    { icon: Smartphone, title: 'Mobile-First Design', desc: 'Responsive across all devices and screen sizes' },
    { icon: Shield, title: 'Security & Compliance', desc: 'GDPR, CCPA compliant with enterprise-grade security' },
    { icon: Zap, title: 'Performance Optimization', desc: '95+ PageSpeed scores and lightning-fast load times' },
    { icon: Globe, title: 'API Integration', desc: 'Seamless third-party service integrations' },
    { icon: BarChart, title: 'Analytics Setup', desc: 'Track user behavior and conversion metrics' }
  ];

  const designFeatures = [
    { icon: Palette, title: 'UI/UX Research', desc: 'User-centered design backed by research and testing' },
    { icon: FileText, title: 'Wireframing & Prototyping', desc: 'Interactive prototypes before development' },
    { icon: Users, title: 'User Testing', desc: 'Validate designs with real user feedback' },
    { icon: Smartphone, title: 'Responsive Design', desc: 'Perfect experience on every device' },
    { icon: FileText, title: 'Design Systems', desc: 'Scalable component libraries and style guides' },
    { icon: Video, title: 'Brand Guidelines', desc: 'Comprehensive brand identity documentation' }
  ];

  const marketingFeatures = [
    { icon: TrendingUp, title: 'Strategy Development', desc: 'Data-driven marketing strategies tailored to your goals' },
    { icon: FileText, title: 'Content Creation', desc: 'Engaging posts, graphics, and video content' },
    { icon: Search, title: 'Paid Advertising', desc: 'Facebook, Instagram, LinkedIn, Google Ads management' },
    { icon: Users, title: 'Community Management', desc: 'Engage with your audience and build loyalty' },
    { icon: BarChart, title: 'Analytics & Reporting', desc: 'Monthly reports with actionable insights' },
    { icon: Mail, title: 'Email Marketing', desc: 'Nurture leads with targeted email campaigns' }
  ];

  // Updated Add-ons to use Numbers for dynamic conversion
  const addOns = [
    { name: 'SEO Optimization', min: 500, max: 1500, desc: 'Improve search rankings and organic traffic' },
    { name: 'Content Writing', min: 300, max: 1000, desc: 'Blog posts, articles, and website copy' },
    { name: 'Video Production', min: 1000, max: 3000, desc: 'Professional video content for marketing' },
    { name: 'Maintenance & Support', min: 200, max: 800, desc: 'Ongoing updates and technical support' },
    { name: 'Hosting & Infrastructure', min: 100, max: 500, desc: 'Managed hosting and server management' },
    { name: 'Training & Consultation', min: 150, max: 300, desc: 'Team training and strategic consultation (per hr)' }
  ];

  const categories = ['All', 'Web Development', 'Design', 'Marketing', 'Add-ons'];

  return (
    <>
      <SEO 
        title="Web Development & Marketing Services | Transparent Pricing"
        description="View our pricing for MVP Development, UI/UX Design, and Social Media Marketing. View costs in USD, GBP, CAD, AUD, or LKR."
      />

      <div className="min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-block px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
               Our Services
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-base sm:text-xl text-white/80 max-w-3xl mx-auto px-4 mb-8">
              Everything your startup needs to launch, grow, and scale in one place
            </p>

            {/* --- CURRENCY SWITCHER --- */}
            <div className="flex justify-center mb-8">
              <div className="glass-card p-1.5 rounded-xl flex items-center gap-1 border border-white/10 bg-gray-900/50 inline-flex">
                <span className="text-white/60 text-xs font-medium pl-2 pr-2 hidden sm:block">Price in:</span>
                {(Object.keys(currencies) as CurrencyKey[]).map((cur) => (
                  <button
                    key={cur}
                    onClick={() => setCurrency(cur)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      currency === cur 
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25' 
                        : 'text-white/50 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {cur} {currencies[cur].flag}
                  </button>
                ))}
              </div>
            </div>
            
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
                  {/* ... Header Content ... */}
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
                    {/* Web Pricing Cards - UPDATED WITH DYNAMIC CURRENCY */}
                    <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl">
                      <div className="text-xs sm:text-sm font-semibold text-gray-400 mb-2">SILVER</div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">3 Page Website</h3>
                      <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-3 sm:mb-4">
                        {getPrice(400)} <span className="text-base sm:text-lg text-white/60">- {getPrice(1500)}</span>
                      </div>
                      <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-6">Entry-Level: Build Initial Presence</p>
                      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                        {['Up to 3 custom pages', 'Mobile responsive design', 'Basic SEO setup', 'Contact form integration', '2 rounds of revisions'].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/80 text-xs sm:text-sm"><Check size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" /> <span>{item}</span></li>
                        ))}
                      </ul>
                      <Link to="/contact"><button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 font-semibold hover:bg-cyan-500/30 transition-all text-sm sm:text-base">Get Started</button></Link>
                    </motion.div>

                    <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl border-2 border-cyan-500 relative">
                      <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 px-3 sm:px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold whitespace-nowrap">MOST POPULAR</div>
                      <div className="text-xs sm:text-sm font-semibold text-yellow-400 mb-2">GOLD</div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">5 Page Website</h3>
                      <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-3 sm:mb-4">
                         {getPrice(800)} <span className="text-base sm:text-lg text-white/60">- {getPrice(3500)}</span>
                      </div>
                      <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-6">Mid-Level: Active Growth & Scaling</p>
                      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                        {['Up to 5 custom pages', 'Advanced animations', 'CMS integration', 'Advanced SEO optimization', 'Analytics & tracking setup', '4 rounds of revisions'].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/80 text-xs sm:text-sm"><Check size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" /> <span>{item}</span></li>
                        ))}
                      </ul>
                      <Link to="/contact"><button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-sm sm:text-base">Get Started</button></Link>
                    </motion.div>

                    <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl">
                      <div className="text-xs sm:text-sm font-semibold text-purple-400 mb-2">PLATINUM</div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Unlimited Pages</h3>
                      <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-3 sm:mb-4">
                        {getPrice(1800)} <span className="text-base sm:text-lg text-white/60">- {getPrice(7000)}+</span>
                      </div>
                      <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-6">Enterprise-Level: Accelerated Scaling</p>
                      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                        {['Unlimited custom pages', 'Custom features & integrations', 'Advanced security features', 'Performance optimization', 'Priority support', 'Unlimited revisions'].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/80 text-xs sm:text-sm"><Check size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" /> <span>{item}</span></li>
                        ))}
                      </ul>
                      <Link to="/contact"><button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 font-semibold hover:bg-purple-500/30 transition-all text-sm sm:text-base">Get Started</button></Link>
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
                    {/* Design Pricing Cards - DYNAMIC CURRENCY */}
                    <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl">
                      <div className="text-xs sm:text-sm font-semibold text-gray-400 mb-2">SILVER</div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Brand Essentials</h3>
                      <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-3 sm:mb-4">
                        {getPrice(400)} <span className="text-base sm:text-lg text-white/60">- {getPrice(1500)}</span>
                      </div>
                      <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-6">Logo & Basic Brand Identity</p>
                      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                        {['Logo design (3 concepts)', 'Color palette & typography', 'Business card design'].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/80 text-xs sm:text-sm"><Check size={16} className="text-purple-400 flex-shrink-0 mt-0.5" /> <span>{item}</span></li>
                        ))}
                      </ul>
                      <Link to="/contact"><button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 font-semibold hover:bg-purple-500/30 transition-all text-sm sm:text-base">Get Started</button></Link>
                    </motion.div>

                    <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl border-2 border-purple-500 relative">
                      <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 px-3 sm:px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold whitespace-nowrap">MOST POPULAR</div>
                      <div className="text-xs sm:text-sm font-semibold text-yellow-400 mb-2">GOLD</div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Complete Brand</h3>
                      <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-3 sm:mb-4">
                        {getPrice(800)} <span className="text-base sm:text-lg text-white/60">- {getPrice(3500)}</span>
                      </div>
                      <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-6">Full Brand Identity Package</p>
                      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                        {['Everything in Silver', 'Brand guidelines document', 'Social media templates', 'Marketing materials'].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/80 text-xs sm:text-sm"><Check size={16} className="text-purple-400 flex-shrink-0 mt-0.5" /> <span>{item}</span></li>
                        ))}
                      </ul>
                      <Link to="/contact"><button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm sm:text-base">Get Started</button></Link>
                    </motion.div>

                    <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl">
                      <div className="text-xs sm:text-sm font-semibold text-purple-400 mb-2">PLATINUM</div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Enterprise Design</h3>
                      <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-3 sm:mb-4">
                         {getPrice(1800)} <span className="text-base sm:text-lg text-white/60">- {getPrice(7000)}+</span>
                      </div>
                      <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-6">Complete Design System</p>
                      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                        {['Everything in Gold', 'Complete design system', 'UI component library', 'Pitch deck design'].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/80 text-xs sm:text-sm"><Check size={16} className="text-purple-400 flex-shrink-0 mt-0.5" /> <span>{item}</span></li>
                        ))}
                      </ul>
                      <Link to="/contact"><button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 font-semibold hover:bg-purple-500/30 transition-all text-sm sm:text-base">Get Started</button></Link>
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
                    {/* Marketing Pricing Cards - DYNAMIC CURRENCY */}
                    <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl">
                      <div className="text-xs sm:text-sm font-semibold text-gray-400 mb-2">SILVER</div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Brand Awareness</h3>
                      <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-3 sm:mb-4">
                        {getPrice(400)} <span className="text-base sm:text-lg text-white/60">- {getPrice(1500)}</span>
                      </div>
                      <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-6">10-15 Posts per Month</p>
                      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                        {['2-3 platforms managed', 'Content creation & scheduling', 'Basic community management', 'Monthly analytics report'].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/80 text-xs sm:text-sm"><Check size={16} className="text-blue-400 flex-shrink-0 mt-0.5" /> <span>{item}</span></li>
                        ))}
                      </ul>
                      <Link to="/contact"><button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 font-semibold hover:bg-blue-500/30 transition-all text-sm sm:text-base">Get Started</button></Link>
                    </motion.div>

                    <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl border-2 border-blue-500 relative">
                      <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 px-3 sm:px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold whitespace-nowrap">MOST POPULAR</div>
                      <div className="text-xs sm:text-sm font-semibold text-yellow-400 mb-2">GOLD</div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Acquisition Focus</h3>
                      <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-3 sm:mb-4">
                        {getPrice(800)} <span className="text-base sm:text-lg text-white/60">- {getPrice(3500)}</span>
                      </div>
                      <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-6">20-30 Posts per Month</p>
                      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                        {['Everything in Silver', 'Paid advertising campaigns', 'Advanced targeting', 'Influencer outreach', 'Bi-weekly strategy calls'].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/80 text-xs sm:text-sm"><Check size={16} className="text-blue-400 flex-shrink-0 mt-0.5" /> <span>{item}</span></li>
                        ))}
                      </ul>
                      <Link to="/contact"><button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-sm sm:text-base">Get Started</button></Link>
                    </motion.div>

                    <motion.div whileHover={cardHover} className="glass-card p-6 sm:p-8 rounded-2xl">
                      <div className="text-xs sm:text-sm font-semibold text-purple-400 mb-2">PLATINUM</div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Full-Funnel Strategy</h3>
                      <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-3 sm:mb-4">
                        {getPrice(1800)} <span className="text-base sm:text-lg text-white/60">- {getPrice(7000)}+</span>
                      </div>
                      <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-6">Daily Content & Management</p>
                      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                        {['Everything in Gold', 'All platforms managed', 'Video content production', 'Dedicated account manager', 'Weekly strategy sessions'].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/80 text-xs sm:text-sm"><Check size={16} className="text-blue-400 flex-shrink-0 mt-0.5" /> <span>{item}</span></li>
                        ))}
                      </ul>
                      <Link to="/contact"><button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 font-semibold hover:bg-blue-500/30 transition-all text-sm sm:text-base">Get Started</button></Link>
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
                      {/* Dynamic Price for Add-ons */}
                      <div className="text-xl sm:text-2xl font-bold text-cyan-400 mb-2 sm:mb-3">
                         {getPrice(addon.min)} - {getPrice(addon.max)}
                         <span className="text-sm text-white/50 font-normal">
                           {addon.name.includes("Training") ? "/hr" : "/mo"}
                         </span>
                      </div>
                      <p className="text-white/70 text-xs sm:text-sm">{addon.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Retainer Model (Always Visible) */}
          <section className="mb-12 sm:mb-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="glass-card p-8 sm:p-12 md:p-16 rounded-3xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">The Retainer Model</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
                Our services are structured on a flexible monthly retainer basis, perfect for startups who need predictable costs and continuous, adaptive support. Scale up or down as your needs change.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                {['Flexible', 'Predictable', 'Continuous'].map((item, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.1 }} className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">{item}</div>
                    <p className="text-sm sm:text-base text-white/70">{i === 0 ? 'Adjust services monthly' : i === 1 ? 'Fixed monthly costs' : 'Ongoing support & updates'}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* CTA (Always Visible) */}
          <section>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="glass-card p-8 sm:p-12 md:p-16 rounded-3xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to Get Started?</h2>
              <p className="text-base sm:text-xl text-white/80 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
                Schedule a free consultation to discuss your project and get a custom quote
              </p>
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 inline-flex items-center gap-2"
                >
                  Schedule Consultation <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
}