import React from 'react';
import { Target, Globe, Clock, Award, Heart, Lightbulb, TrendingUp, Shield, Zap, CheckCircle, Star, Code, Linkedin } from 'lucide-react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

export default function About() {
  // --- Animation Variants ---
  const fadeInUp: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Timeline Data
  const timeline = [
    { year: '2019', title: 'The Beginning', description: 'Founded in Colombo with a vision to bridge the gap between global quality and affordable pricing for startups.' },
    { year: '2020', title: 'First 50 Clients', description: 'Reached our first milestone of 50 happy clients across USA, UK, and Canada during a challenging year.' },
    { year: '2021', title: 'Team Expansion', description: 'Grew our team to 25+ talented designers, developers, and marketers to serve growing demand.' },
    { year: '2022', title: 'Global Recognition', description: 'Featured in top startup publications and won multiple awards for excellence in digital services.' },
    { year: '2023', title: '150+ Success Stories', description: 'Helped over 150 startups launch, scale, and secure funding with our comprehensive digital solutions.' },
    { year: '2024', title: 'Innovation & Growth', description: 'Expanding services with AI integration, advanced analytics, and enterprise-level solutions.' }
  ];

  // Values Data
  const values = [
    { icon: Target, title: 'Excellence First', description: 'We never compromise on quality. Every project receives the same attention to detail and commitment to excellence.', color: 'from-cyan-500 to-blue-500' },
    { icon: Heart, title: 'Client Success', description: 'Your success is our success. We measure our achievements by the growth and satisfaction of our clients.', color: 'from-purple-500 to-pink-500' },
    { icon: Lightbulb, title: 'Innovation', description: 'We stay ahead of trends and continuously adopt cutting-edge technologies to give you a competitive edge.', color: 'from-blue-500 to-cyan-500' },
    { icon: Shield, title: 'Transparency', description: 'Clear communication, honest timelines, and transparent pricing. No hidden costs or surprises.', color: 'from-green-500 to-emerald-500' },
    { icon: Zap, title: 'Speed & Agility', description: 'Fast turnarounds without sacrificing quality. We move at startup speed because we understand urgency.', color: 'from-yellow-500 to-orange-500' },
    { icon: Globe, title: 'Global Mindset', description: 'Local roots, global perspective. We understand diverse markets and cultural nuances across continents.', color: 'from-indigo-500 to-purple-500' }
  ];

  // Team Data
  const team = [
    { 
      name: 'Tharindu Nawodha', 
      role: 'Co-Founder & Managing Director', 
      specialty: 'Cyber Security Engineer', 
      description: "As Co-Founder and Managing Director of WebCoreEx, I manage the company's operations, client relations, and strategic growth. I am committed to delivering innovative web development, digital marketing, and design solutions that drive success for our clients.", 
      image: 'Tharindu-Nawodha.jpg',
      linkedin: 'http://linkedin.com/in/nawodha-weerasooriya-ab482718a/' 
    }, 
    { 
      name: 'Prabhashu Samarakkodi', 
      role: 'Co-Founder & Technical Director', 
      specialty: 'Full-Stack Developer', 
      description: 'As Co-Founder and Technical Director, Prabashu leads all development and design projects, ensuring top- quality digital solutions for our clients. Visionary tech lead with 5+ years of experience building scalable platforms for startups. Expert in React, Node.js, and cloud infrastructure.', 
      image: 'Prabhashu.JPG',
      linkedin: 'https://www.linkedin.com/in/prabhashu-samarakkodi/' 
    }
  ];

  // --- RESTORED: Why Choose Us Data (With all bullet points) ---
  const whyChooseUs = [
    {
      icon: Globe,
      title: 'Global Quality, Local Agility',
      desc: 'We deliver Silicon Valley-level quality with the agility and cost-effectiveness of a Sri Lankan powerhouse. Best of both worlds.',
      features: ['40-60% cost savings', 'Same quality standards', 'Faster turnaround times'],
      color: 'from-cyan-500 to-blue-500',
      checkColor: 'text-cyan-400'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      desc: 'We operate around the clock to align with US, UK, and European time zones, ensuring seamless communication and rapid delivery.',
      features: ['Real-time collaboration', 'Dedicated account managers', 'Quick response times'],
      color: 'from-purple-500 to-pink-500',
      checkColor: 'text-purple-400'
    },
    {
      icon: Star,
      title: 'Proven Track Record',
      desc: '150+ successful projects, 98% client satisfaction, and countless startups funded thanks to our work.',
      features: ['Portfolio of success stories', 'Industry recognition', 'Long-term partnerships'],
      color: 'from-blue-500 to-cyan-500',
      checkColor: 'text-blue-400'
    },
    {
      icon: Shield,
      title: 'Transparent & Trustworthy',
      desc: 'No hidden fees, clear communication, and honest timelines. We build relationships based on trust and transparency.',
      features: ['Fixed monthly pricing', 'Regular progress updates', 'Money-back guarantee'],
      color: 'from-green-500 to-emerald-500',
      checkColor: 'text-green-400'
    }
  ];

  return (
    <>
      <SEO 
        title="About Web Core EX | Trusted Tech Partner for US, UK & Global Startups"
        description="Meet the team behind Web Core EX. We provide Silicon Valley-grade web development and marketing to startups in the USA, UK, Canada, and Australia at smart prices."
      />

      <div className="min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* --- HERO SECTION --- */}
          <section className="mb-12 sm:mb-20">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="glass-card p-8 sm:p-12 md:p-16 rounded-3xl text-center"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
              >
                 Our Story
              </motion.div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
                From Colombo to the World Stage
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6 sm:mb-8"></div>
              <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Web Core EX was founded on the principle that world-class digital
                services shouldn't break a startup's budget. Based in Colombo, Sri
                Lanka, we harness a deep pool of technical talent and an inherent
                culture of hard work to deliver projects that compete globally.
              </p>
            </motion.div>
          </section>

          {/* --- TIMELINE SECTION --- */}
          <section className="mb-12 sm:mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Our Journey</h2>
              <p className="text-base sm:text-xl text-white/70">5 years of growth, innovation, and success</p>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 sm:mt-6"></div>
            </motion.div>

            {/* Mobile Timeline */}
            <div className="md:hidden relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[1.875rem] top-2 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-gray-900"></div>
                    <div className="glass-card p-6 rounded-2xl">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 origin-top"
              ></motion.div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <motion.div 
                        whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
                        className="glass-card p-8 rounded-2xl"
                      >
                        <div className="text-3xl font-bold text-cyan-400 mb-2">{item.year}</div>
                        <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-white/70 leading-relaxed">{item.description}</p>
                      </motion.div>
                    </div>
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-gray-900 z-10 flex-shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                    ></motion.div>
                    <div className="flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* --- MISSION SECTION --- */}
          <section className="mb-12 sm:mb-20">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="glass-card p-8 sm:p-12 md:p-16 rounded-3xl"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  className="flex-shrink-0"
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <Target size={48} className="sm:w-16 sm:h-16 text-white" />
                  </div>
                </motion.div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 text-center md:text-left">Our Mission</h2>
                  <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-4 sm:mb-6 text-center md:text-left">
                    To be the essential growth partner for startups worldwide. We focus on delivering high ROI through scalable technology and data-driven marketing.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    {['Empower Startups', 'Drive Innovation', 'Build Partnerships'].map((item, i) => (
                      <motion.div key={i} whileHover={{ x: 5 }} className="flex items-start gap-3">
                        <CheckCircle size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
                        <div>
                          <div className="text-white font-semibold mb-1 text-sm sm:text-base">{item}</div>
                          <div className="text-white/60 text-xs sm:text-sm">Committed to excellence</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* --- VALUES SECTION --- */}
          <section className="mb-12 sm:mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Our Core Values</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 sm:mt-6"></div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
                  className="glass-card p-6 sm:p-8 rounded-2xl"
                >
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}>
                    <value.icon size={28} className="sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{value.title}</h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* --- TEAM SECTION (ORIGINAL SIZE PRESERVED) --- */}
          <section className="mb-12 sm:mb-20">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Meet Our Leadership</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 sm:mt-6"></div>
              <p className="text-lg text-white/70 mt-4">Visionaries driving the future of Web Core EX</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12 max-w-5x2 mx-auto">
              {team.map((member, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }} 
                  className="group relative glass-card p-6 sm:p-8 rounded-2xl text-center"
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  {/* Profile Image with Rotating Tech Ring */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 group-hover:border-cyan-400 transition-colors"
                    ></motion.div>
                    <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-2 text-sm sm:text-base">{member.role}</p>
                    <p className="text-white/60 text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 sm:mb-4">{member.specialty}</p>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">{member.description}</p>

                    {/* Connect Button */}
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={member.linkedin}
                      className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm transition-colors shadow-lg shadow-blue-900/20"
                    >
                      <Linkedin size={14} /> Connect
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="glass-card p-8 sm:p-12 rounded-2xl text-center hover:bg-white/5 transition-colors"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Plus 20+ Talented Team Members</h3>
              <p className="text-sm sm:text-base text-white/70 max-w-3xl mx-auto">
                Our extended team includes expert developers, creative designers, strategic marketers, and dedicated project managers—all working together to bring your vision to life.
              </p>
            </motion.div>
          </section>

          {/* --- WHY CHOOSE US (RESTORED ALL BULLET POINTS) --- */}
          <section>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Why Choose Web Core EX?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 sm:mt-6"></div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            >
              {whyChooseUs.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 sm:p-8 rounded-2xl"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4 sm:mb-6">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <item.icon size={28} className="sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white text-center sm:text-left">{item.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-3 sm:mb-4 text-center sm:text-left">{item.desc}</p>
                  
                  {/* --- RESTORED BULLET POINTS --- */}
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm sm:text-base text-white/80">
                        <CheckCircle size={16} className={`sm:w-[18px] sm:h-[18px] ${item.checkColor} flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </section>

        </div>
      </div>
    </>
  );
}