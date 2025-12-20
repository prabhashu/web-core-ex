import React, { useEffect, useRef } from 'react';
import { ArrowRight, Palette, TrendingUp, Globe, Users, Award, CheckCircle, Clock, DollarSign, Target, Rocket, MessageSquare, Star, Code as CodeIcon, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { TypeAnimation } from 'react-type-animation';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
// --- Import Technology Icons ---
import { FaReact, FaNodeJs, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb } from 'react-icons/si';

// --- Helper Component: Animates numbers counting up ---
const NumberCounter = ({ value, suffix = '' }: { value: number, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const roundedValue = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: 2.5, ease: "easeOut" });
    }
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{roundedValue}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

export default function Home() {
  const stats = [
    { icon: Users, number: 150, suffix: '+', label: 'Happy Clients Worldwide' },
    { icon: Award, number: 250, suffix: '+', label: 'Projects Completed' },
    { icon: TrendingUp, number: 98, suffix: '%', label: 'Client Satisfaction' },
    { icon: Globe, number: 25, suffix: '+', label: 'Countries Served' }
  ];

  const process = [
    { step: '01', title: 'Discovery & Strategy', description: 'We dive deep into your business goals, target audience, and competitive landscape to craft a winning strategy.', icon: Target },
    { step: '02', title: 'Design & Prototype', description: 'Our designers create stunning, user-centric interfaces with interactive prototypes for your feedback.', icon: Palette },
    { step: '03', title: 'Development & Testing', description: 'Expert developers build scalable solutions with rigorous testing to ensure flawless performance.', icon: CodeIcon },
    { step: '04', title: 'Launch & Growth', description: 'We launch your product and provide ongoing optimization to drive continuous growth and success.', icon: Rocket }
  ];

  // --- Technologies with Official Logos & Colors ---
  const technologies = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'AWS', icon: FaAws, color: '#FF9900' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  ];

  // Duplicate array for seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies];

  const testimonials = [
    { name: 'Sarah Johnson', role: 'CEO, TechStart Inc.', country: 'USA', text: 'Web Core EX transformed our vision into reality. Their team delivered a stunning website that increased our conversions by 300%. The quality rivals top Silicon Valley agencies at a fraction of the cost.', rating: 5 },
    { name: 'James Mitchell', role: 'Founder, FinanceFlow', country: 'UK', text: 'Working with Web Core EX was seamless. Despite the time difference, communication was excellent. They delivered our MVP in just 6 weeks, helping us secure seed funding.', rating: 5 },
    { name: 'Emma Rodriguez', role: 'Marketing Director, GrowthLab', country: 'Canada', text: 'The social media marketing campaign they ran exceeded all expectations. We saw a 400% increase in qualified leads within 3 months. Highly recommended!', rating: 5 }
  ];

  const faqs = [
    { question: 'Why choose a Sri Lankan agency over local options?', answer: 'We offer the same quality as top-tier agencies in the US, UK, or Europe, but at 40-60% lower costs. Our team works in your timezone, ensuring seamless communication and rapid delivery.' },
    { question: 'How do you handle time zone differences?', answer: "We operate 24/7 with team members aligned to US, UK, and European time zones. You'll have dedicated points of contact available during your business hours for real-time collaboration." },
    { question: 'What makes your retainer model beneficial for startups?', answer: 'Our retainer model provides predictable monthly costs, continuous support, and the flexibility to scale services as your startup grows. No surprise bills or project delays.' },
    { question: 'Can you work with our existing team?', answer: "Absolutely! We integrate seamlessly with your in-house team, using your preferred tools and workflows. We're here to augment your capabilities, not replace them." }
  ];

  // --- Animation Variants ---
  const fadeInUp: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: any = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  // Floating animation for icons
  const floatingIcon = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <SEO
        title="Web Core EX | Custom Web Design & Marketing for Startups"
        description="Launch your startup with Web Core EX. We provide Silicon Valley quality web design and digital marketing at smart prices. Trusted by 150+ startups."
      />

      <div className="min-h-screen overflow-x-hidden">

        {/* HERO SECTION - REVISED FOR BETTER SPACING */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 px-4 overflow-hidden">
          
          {/* 1. BACKGROUND GRID (Fills empty space with texture) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

          {/* 2. GLOWING ORBS (Fills empty space with color) */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse delay-1000"></div>

          {/* 3. FLOATING ICONS (Fills empty space with motion) */}
          <motion.div variants={floatingIcon} animate="animate" className="absolute top-1/3 left-[10%] text-cyan-400/20 hidden lg:block">
            <FaReact size={120} />
          </motion.div>
          <motion.div variants={floatingIcon} animate="animate" transition={{ delay: 1 }} className="absolute bottom-1/3 right-[10%] text-green-400/20 hidden lg:block">
            <FaNodeJs size={120} />
          </motion.div>

          {/* BACKGROUND IMAGE & OVERLAY */}
          <div className="absolute inset-0 -z-10">
            <picture>
              <source media="(max-width: 768px)" srcSet="/hero-mobile.jpg" />
              <img 
                src="/hero.jpg" 
                alt="Web Core EX Digital Agency Background" 
                className="w-full h-full object-cover"
                // @ts-ignore
                fetchPriority="high" 
                width="1920"
                height="1080"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-purple-900/95"></div>
          </div>

          <div className="max-w-7xl mx-auto w-full text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="glass-card p-8 sm:p-12 md:p-16 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle sheen effect inside card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>

              <div className="relative z-10">
                <div className="inline-block px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-6">
                  Trusted by 150+ Startups Worldwide
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white leading-tight tracking-tight">
                  Launch Your <br className="md:hidden" />
                  <TypeAnimation
                    sequence={[
                      'Vision.', 3000,
                      'Startup.', 3000,
                      'Future.', 3000,
                      'Brand.', 3000,
                    ]}
                    wrapper="span"
                    speed={20}
                    repeat={Infinity}
                    className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                  />
                  <br />
                  Scale Globally.
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 max-w-3xl mx-auto leading-relaxed">
                  World-class Web Design & Digital Marketing solutions crafted by a
                  Sri Lankan powerhouse, built for global growth.
                </p>

                <p className="text-lg sm:text-xl md:text-2xl text-cyan-400 font-bold mb-8">
                  Silicon Valley Quality. Smart Pricing. 24/7 Support.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <Link to="/contact" className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
                    >
                      Start Your Project <ArrowRight size={20} />
                    </motion.button>
                  </Link>
                  <Link to="/portfolio" className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto px-10 py-5 rounded-full glass-card text-white font-semibold text-lg transition-all flex items-center justify-center gap-2 border border-white/20"
                    >
                      View Our Work <Award size={20} />
                    </motion.button>
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 text-white/60 text-sm font-medium">
                  <div className="flex items-center justify-center gap-2"><CheckCircle size={18} className="text-green-400" /><span>No Hidden Fees</span></div>
                  <div className="flex items-center justify-center gap-2"><CheckCircle size={18} className="text-green-400" /><span>Money-Back Guarantee</span></div>
                  <div className="flex items-center justify-center gap-2"><CheckCircle size={18} className="text-green-400" /><span>24/7 Support</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="glass-card p-4 sm:p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <stat.icon size={24} className="sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">
                    <NumberCounter value={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* INTRODUCTION SECTION */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="glass-card p-8 sm:p-12 md:p-16 rounded-3xl"
            >
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">More Than a Website.<br />A Digital Partner.</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6 sm:mb-8"></div>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-white/80 text-center max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
                Your startup needs more than a website—it needs a digital partner. At Web Core EX, we combine the high standards of Silicon Valley with the agile, cost-effective talent of Sri Lanka.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4"><Globe size={32} className="sm:w-10 sm:h-10 text-white" /></div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Global Reach</h3>
                  <p className="text-sm sm:text-base text-white/70">Serving startups across 25+ countries with localized expertise.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4"><DollarSign size={32} className="sm:w-10 sm:h-10 text-white" /></div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Smart Pricing</h3>
                  <p className="text-sm sm:text-base text-white/70">40-60% cost savings compared to US/UK agencies.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4"><Clock size={32} className="sm:w-10 sm:h-10 text-white" /></div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Rapid Delivery</h3>
                  <p className="text-sm sm:text-base text-white/70">Average MVP delivery in 6-8 weeks.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Your Digital Foundation Starts Here</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 sm:mt-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="glass-card p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4 sm:mb-6"><CodeIcon size={28} className="sm:w-8 sm:h-8 text-white" /></div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Web Development</h3>
                <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6">Scalable, secure, and lightning-fast digital solutions.</p>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <li className="flex items-start gap-2 text-white/80"><CheckCircle size={18} className="text-cyan-400 mt-1" /> Custom MVP Development</li>
                  <li className="flex items-start gap-2 text-white/80"><CheckCircle size={18} className="text-cyan-400 mt-1" /> E-commerce Platforms</li>
                  <li className="flex items-start gap-2 text-white/80"><CheckCircle size={18} className="text-cyan-400 mt-1" /> SaaS Applications</li>
                </ul>
                <Link to="/services"><button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 font-semibold hover:bg-cyan-500/30 transition-all">Learn More</button></Link>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }} className="glass-card p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 sm:mb-6"><Palette size={28} className="sm:w-8 sm:h-8 text-white" /></div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Web & Graphic Design</h3>
                <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6">Stunning visuals and intuitive user experiences.</p>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <li className="flex items-start gap-2 text-white/80"><CheckCircle size={18} className="text-purple-400 mt-1" /> UI/UX Design</li>
                  <li className="flex items-start gap-2 text-white/80"><CheckCircle size={18} className="text-purple-400 mt-1" /> Brand Identity</li>
                  <li className="flex items-start gap-2 text-white/80"><CheckCircle size={18} className="text-purple-400 mt-1" /> Pitch Decks</li>
                </ul>
                <Link to="/services"><button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 font-semibold hover:bg-purple-500/30 transition-all">Learn More</button></Link>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }} className="glass-card p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 md:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 sm:mb-6"><TrendingUp size={28} className="sm:w-8 sm:h-8 text-white" /></div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Social Media Marketing</h3>
                <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6">Targeted campaigns that drive real customer acquisition.</p>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <li className="flex items-start gap-2 text-white/80"><CheckCircle size={18} className="text-blue-400 mt-1" /> Strategy & Content</li>
                  <li className="flex items-start gap-2 text-white/80"><CheckCircle size={18} className="text-blue-400 mt-1" /> Paid Ads</li>
                  <li className="flex items-start gap-2 text-white/80"><CheckCircle size={18} className="text-blue-400 mt-1" /> Analytics</li>
                </ul>
                <Link to="/services"><button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 font-semibold hover:bg-blue-500/30 transition-all">Learn More</button></Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Our Proven Process</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 sm:mt-6"></div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {process.map((phase, index) => (
                <motion.div key={index} variants={fadeInUp} className="glass-card p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300 relative">
                  <div className="text-5xl sm:text-6xl font-bold text-white/10 absolute top-4 right-4">{phase.step}</div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4 sm:mb-6"><phase.icon size={28} className="sm:w-8 sm:h-8 text-white" /></div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{phase.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{phase.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- TECHNOLOGIES SECTION (Infinite Scroll) --- */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Cutting-Edge Technologies</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 sm:mt-6"></div>
              <p className="text-lg sm:text-xl text-white/70 mt-4">
                We use the modern, battle-tested stack that powers the world's best startups.
              </p>
            </motion.div>

            {/* Infinite Scroll Container */}
            <div className="relative w-full overflow-hidden mask-linear-fade py-4">
              <motion.div
                className="flex gap-6 sm:gap-8 w-max"
                animate={{
                  x: ["0%", "-50%"], // Move exactly half the width (seamless loop)
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedTechnologies.map((tech, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col items-center justify-center gap-4 w-32 sm:w-40 h-32 sm:h-40 hover:scale-110 transition-all duration-300 hover:bg-white/10"
                  >
                    <tech.icon size={48} color={tech.color} className="sm:w-14 sm:h-14 filter drop-shadow-lg" />
                    <span className="text-white font-semibold text-sm sm:text-base whitespace-nowrap">{tech.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- UPDATED TESTIMONIALS SECTION --- */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">What Our Clients Say</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="relative glass-card p-8 rounded-2xl border border-white/5 overflow-hidden group hover:border-cyan-500/30 transition-all duration-300"
                >
                  {/* Decorative Background Quote */}
                  <div className="absolute top-2 right-4 text-white/5 group-hover:text-cyan-500/10 transition-colors transform rotate-12">
                    <Quote size={100} fill="currentColor" />
                  </div>

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} size={18} className="text-yellow-400 fill-yellow-400 drop-shadow-sm" />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <p className="text-white/80 mb-8 italic leading-relaxed text-lg">"{t.text}"</p>

                    {/* Author Profile */}
                    <div className="flex items-center gap-4">
                      {/* Gradient Ring around avatar */}
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-[2px] flex-shrink-0">
                        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                          <Users size={24} className="text-white" />
                        </div>
                      </div>

                      <div>
                        <div className="text-white font-bold text-lg">{t.name}</div>
                        <div className="text-cyan-400 text-sm font-medium">{t.role}</div>
                        <div className="text-white/40 text-xs mt-0.5">{t.country}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12"><h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2></div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl hover:scale-[1.01] transition-all">
                  <h3 className="text-lg font-bold text-white mb-2 flex gap-2"><MessageSquare className="text-cyan-400" /> {faq.question}</h3>
                  <p className="text-white/70 pl-8">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto glass-card p-12 rounded-3xl text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Scale Your Startup?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link to="/contact">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg shadow-lg shadow-cyan-500/30">Get Started Today</motion.button>
                </Link>
                <Link to="/services">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-10 py-5 rounded-full glass-card text-white font-semibold text-lg">View Pricing</motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}