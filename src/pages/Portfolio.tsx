import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, TrendingUp, Users, DollarSign, Award, CheckCircle, BarChart, Globe, Zap, UtensilsCrossed, Layout, Smartphone, ArrowRight, Home, Scissors } from 'lucide-react';
import SEO from '../components/SEO';
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

// --- Helper Component: Number Counter ---
const NumberCounter = ({ value, suffix = '', prefix = '' }: { value: number, suffix?: string, prefix?: string }) => {
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
      <span>{prefix}</span>
      <motion.span>{roundedValue}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const fadeInUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // --- Real Project Data ---
  const projects = [
    {
      title: 'Marina Buy House',
      client: 'Marina Real Estate',
      url: 'https://marina-buy-house.netlify.app/',
      image: '/portfolio/marina-house.webp', // <--- Save image as this name
      category: 'Real Estate',
      service: 'Lead Generation Web',
      description: 'A high-converting landing page designed for real estate investors. Focuses on building trust and capturing seller leads efficiently.',
      results: 'High Lead Volume',
      technologies: ['React', 'Forms', 'Tailwind'],
      gradient: 'from-teal-500 to-green-600',
      icon: Home
    },
    {
      title: 'Carrollwood Barbershop',
      client: 'Carrollwood Barbershop',
      url: 'https://carrollwood-barbershop.netlify.app/',
      image: '/portfolio/carrollwood.webp', // <--- Save image as this name
      category: 'Service Business',
      service: 'Business Website',
      description: 'A modern, masculine design for a local barbershop featuring service menus, gallery showcases, and location integration.',
      results: 'Increased Walk-ins',
      technologies: ['React', 'Framer Motion', 'SEO'],
      gradient: 'from-slate-600 to-gray-700',
      icon: Scissors
    },
    {
      title: 'Brooklyn Pizza Pasta Grill',
      client: 'Brooklyn Pizza',
      url: 'https://brooklynpizzapastagrill.com/',
      image: '/portfolio/brooklyn.webp', 
      category: 'Food & Beverage',
      service: 'Web Development & SEO',
      description: 'A full-stack restaurant platform featuring an interactive digital menu, online ordering integration, and local SEO optimization to drive foot traffic.',
      results: 'Increased online orders by 40%',
      technologies: ['React', 'Next.js', 'Tailwind', 'SEO'],
      gradient: 'from-orange-500 to-red-500',
      icon: UtensilsCrossed
    },
    {
      title: 'Colom Brothers',
      client: 'Colom Brothers',
      url: 'https://colombrothers.netlify.app/',
      image: '/portfolio/colombrothers.webp', 
      category: 'Web Design',
      service: 'Corporate Website',
      description: 'A sleek, professional corporate website designed to showcase business services and portfolio items with a focus on user experience and brand identity.',
      results: 'Improved Brand Visibility',
      technologies: ['React', 'Tailwind', 'Responsive Design'],
      gradient: 'from-indigo-500 to-purple-500',
      icon: Layout
    },
    {
      title: 'Brooklyn Pizza (App Version)',
      client: 'Brooklyn Pizza',
      url: 'https://brooklynpizza.netlify.app/',
      image: '/portfolio/brooklyn-app.webp',
      category: 'Web App',
      service: 'Progressive Web App',
      description: 'The app-like version of the main restaurant site, optimized for app-store-like performance on mobile browsers without installation.',
      results: 'Native-App Performance',
      technologies: ['PWA', 'React', 'Service Workers'],
      gradient: 'from-orange-400 to-amber-500',
      icon: Zap
    },
    {
      title: 'Big Plate',
      client: 'Big Plate Concept',
      url: 'https://big-plate.netlify.app/',
      image: '/portfolio/big-plate.webp',
      category: 'Food & Beverage',
      service: 'UI/UX Concept',
      description: 'A modern, minimalist food delivery concept focused on large-scale imagery and intuitive navigation for rapid ordering.',
      results: 'High-Conversion UI',
      technologies: ['React', 'Framer Motion', 'Styled Components'],
      gradient: 'from-red-500 to-rose-500',
      icon: Smartphone
    },
    {
      title: 'Lumire Web',
      client: 'Lumire Agency',
      url: 'https://lumire-web.netlify.app/',
      image: '/portfolio/lumire.webp',
      category: 'Web Design',
      service: 'Portfolio Development',
      description: 'A high-performance modern agency portfolio template featuring dark mode aesthetics, smooth scrolling animations, and glassmorphism UI.',
      results: 'Cutting-edge UX Design',
      technologies: ['React', 'Three.js', 'Tailwind'],
      gradient: 'from-purple-500 to-pink-500',
      icon: Layout
    },
    {
      title: "Joe's New York Diner",
      client: "Joe's Diner",
      url: 'https://joesnewyorkdiner.com/',
      image: '/portfolio/joes-diner.png.webp',
      category: 'Food & Beverage',
      service: 'Website Redesign',
      description: 'A classic American diner website redesigned for the modern era. Features mobile-responsive menus, gallery showcases, and fast load times.',
      results: 'Reduced bounce rate by 60%',
      technologies: ['React', 'Framer Motion', 'Google Maps API'],
      gradient: 'from-blue-600 to-indigo-600',
      icon: UtensilsCrossed
    },
    {
      title: 'House of Curry',
      client: 'House of Curry MN',
      url: 'https://houseofcurrymn.com/',
      image: '/portfolio/house-of-curry.webp',
      category: 'Food & Beverage',
      service: 'Digital Branding & Web',
      description: 'Authentic Indian cuisine showcased through a vibrant, colorful web interface. Focuses on visual storytelling and simplified table reservations.',
      results: '2x Reservation Inquiries',
      technologies: ['Next.js', 'Tailwind CSS', 'Analytics'],
      gradient: 'from-yellow-500 to-orange-600',
      icon: UtensilsCrossed
    },
    {
      title: "Double Bogey's Tavern",
      client: "Double Bogey's",
      url: 'https://doublebogeystavernandgrille.com/',
      image: '/portfolio/double-bogey.webp',
      category: 'Food & Beverage',
      service: 'Web Development',
      description: 'A sports bar and grille website built to highlight events, specials, and their extensive menu. Optimized for local search visibility.',
      results: 'Top 3 Local Ranking',
      technologies: ['React', 'SEO', 'Performance Optimization'],
      gradient: 'from-green-600 to-emerald-600',
      icon: UtensilsCrossed
    },
  ];

  // --- Categories List (Updated) ---
  const categories = ['All', 'Food & Beverage', 'Real Estate', 'Service Business', 'Web Design', 'Web App'];
  
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  // --- Industries Data ---
  const industries = [
    { name: 'Fintech', count: 25, icon: DollarSign, color: 'from-cyan-500 to-blue-500' },
    { name: 'E-commerce', count: 35, icon: ExternalLink, color: 'from-purple-500 to-pink-500' },
    { name: 'SaaS', count: 40, icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { name: 'Healthcare', count: 15, icon: Award, color: 'from-green-500 to-emerald-500' },
    { name: 'Education', count: 20, icon: Users, color: 'from-yellow-500 to-orange-500' },
    { name: 'Food & Beverage', count: 15, icon: TrendingUp, color: 'from-red-500 to-pink-500' }
  ];
  // Duplicate for infinite scroll
  const duplicatedIndustries = [...industries, ...industries];

  return (
    <>
      <SEO 
        title="Our Portfolio | Web Core EX - Real Results for Real Businesses"
        description="Browse our latest work. From bustling restaurants like Brooklyn Pizza to modern web apps, we build digital experiences that drive growth."
      />

      <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-6">
               Selected Works
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Built for <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Growth</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We don't just build websites; we build digital engines that drive revenue. Check out our latest deployments.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  filter === cat 
                    ? 'bg-white text-gray-900 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105' 
                    : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Real Projects Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={index}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative"
                >
                  {/* Glass Card */}
                  <div className="h-full glass-card p-1 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col">
                    
                    {/* --- PROJECT IMAGE HEADER --- */}
                    <div className={`h-48 rounded-2xl bg-gradient-to-br ${project.gradient} relative overflow-hidden flex flex-col justify-between group-hover:shadow-lg transition-all`}>
                        
                        {/* 1. The Mockup Image */}
                        <img 
                          src={project.image} 
                          alt={`${project.title} Website Mockup`}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          // Fallback to gradient if image missing
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />

                        {/* 2. Dark Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>

                        {/* 3. Overlay Content */}
                        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white">
                                    <project.icon size={24} />
                                </div>
                                <a 
                                    href={project.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors"
                                    title="Visit Live Site"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                            
                            <div>
                                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                                    {project.category}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/50 text-sm mb-4">Client: {project.client}</p>
                      
                      <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, i) => (
                           <span key={i} className="text-[10px] px-2 py-1 rounded bg-white/5 text-white/40 border border-white/5 uppercase tracking-wider">
                              {tech}
                           </span>
                        ))}
                      </div>

                      {/* Footer / CTA */}
                      <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                         <div className="flex items-center gap-2 text-green-400 text-xs font-bold">
                            <Zap size={14} />
                            <span>{project.results}</span>
                         </div>
                         
                         <a 
                           href={project.url}
                           target="_blank"
                           rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all"
                         >
                            Visit Site <ArrowRight size={16} className="text-cyan-400" />
                         </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* --- RESTORED: Industries We Serve --- */}
          <section className="mb-24 overflow-hidden">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-base sm:text-xl text-white/70">
                Expertise across diverse sectors
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6"></div>
            </motion.div>

            {/* Infinite Sliding Carousel */}
            <div className="relative w-full overflow-hidden mask-linear-fade py-4">
              <motion.div
                className="flex gap-6 w-max"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30, // Speed of the slide
                    ease: "linear",
                  },
                }}
              >
                {duplicatedIndustries.map((industry, index) => (
                  <div key={index} className="glass-card p-6 rounded-2xl w-48 sm:w-64 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${industry.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <industry.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {industry.name}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {industry.count}+ Projects
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* --- RESTORED: Our Impact in Numbers --- */}
          <section className="mb-24">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="glass-card p-8 md:p-16 rounded-3xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Our Impact in Numbers
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                    <Users size={32} className="text-white sm:w-10 sm:h-10" />
                  </div>
                  <div className="text-3xl sm:text-5xl font-bold text-white mb-2">
                    <NumberCounter value={150} suffix="+" />
                  </div>
                  <div className="text-white/60 text-sm">Happy Clients</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                    <ExternalLink size={32} className="text-white sm:w-10 sm:h-10" />
                  </div>
                  <div className="text-3xl sm:text-5xl font-bold text-white mb-2">
                    <NumberCounter value={250} suffix="+" />
                  </div>
                  <div className="text-white/60 text-sm">Projects Delivered</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp size={32} className="text-white sm:w-10 sm:h-10" />
                  </div>
                  <div className="text-3xl sm:text-5xl font-bold text-white mb-2">
                    <NumberCounter value={300} suffix="%" />
                  </div>
                  <div className="text-white/60 text-sm">Avg Growth Rate</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                    <DollarSign size={32} className="text-white sm:w-10 sm:h-10" />
                  </div>
                  <div className="text-3xl sm:text-5xl font-bold text-white mb-2">
                    <NumberCounter value={10} prefix="$" suffix="M+" />
                  </div>
                  <div className="text-white/60 text-sm">Funding Raised</div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* --- RESTORED: Success Story CTA --- */}
          <section>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="glass-card p-12 md:p-16 rounded-3xl text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Be Our Next Success Story?
              </h2>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Let's discuss how we can help you achieve similar results for your startup
              </p>
              <a href="/contact" className="inline-block">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
                >
                  Start Your Project
                </motion.button>
              </a>
            </motion.div>
          </section>

        </div>
      </div>
    </>
  );
}