import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, TrendingUp, Users, DollarSign, Award, CheckCircle, BarChart, Globe, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
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
  const fadeInUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // --- Data ---
  const projects = [
    {
      title: 'FinTech Pro - US Banking Platform',
      client: 'US-based Fintech Startup',
      category: 'Fintech',
      industry: 'Financial Technology',
      service: 'Platinum Web Development & Gold SMM',
      description: 'Built a secure, scalable banking platform with real-time transaction processing and advanced security features. Launched MVP in 8 weeks, enabling the client to secure seed funding.',
      challenge: 'Create a secure, compliant banking platform that could handle high transaction volumes while maintaining sub-second response times.',
      solution: 'Implemented microservices architecture with AWS, integrated Plaid for banking APIs, and built a React-based dashboard with real-time updates.',
      results: [
        { label: 'Time to Launch', value: '8 weeks', icon: Zap },
        { label: 'Funding Raised', value: '$500K+', icon: DollarSign },
        { label: 'User Growth', value: '300%', icon: TrendingUp },
        { label: 'Transaction Volume', value: '$2M+', icon: BarChart }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Plaid API'],
      gradient: 'from-cyan-500 to-blue-500',
      testimonial: 'Web Core EX delivered beyond our expectations. Their technical expertise and understanding of fintech compliance was impressive.'
    },
    {
      title: 'ShopHub - UK E-commerce Platform',
      client: 'UK E-commerce Startup',
      category: 'E-commerce',
      industry: 'Retail & E-commerce',
      service: 'Gold Web Development & Silver SMM',
      description: 'Developed a feature-rich e-commerce platform with integrated payment processing, inventory management, and customer analytics.',
      challenge: 'Build a scalable e-commerce solution that could handle thousands of products and concurrent users during peak shopping seasons.',
      solution: 'Created a headless commerce architecture with Shopify backend and custom React frontend, optimized for performance and SEO.',
      results: [
        { label: 'Monthly Revenue', value: '$50K+', icon: DollarSign },
        { label: 'Conversion Rate', value: '4.2%', icon: TrendingUp },
        { label: 'Page Speed', value: '95/100', icon: Zap },
        { label: 'Active Users', value: '10K+', icon: Users }
      ],
      technologies: ['React', 'Next.js', 'Shopify', 'Stripe', 'Tailwind CSS'],
      gradient: 'from-purple-500 to-pink-500',
      testimonial: 'The platform they built is fast, beautiful, and converts. Our sales have tripled since launch.'
    },
    {
      title: 'CloudSync - Canadian SaaS Platform',
      client: 'Canadian SaaS Startup',
      category: 'SaaS',
      industry: 'Software as a Service',
      service: 'Platinum Web Development & Platinum SMM',
      description: 'Complete digital transformation with custom SaaS platform, full-funnel marketing strategy, and brand identity redesign.',
      challenge: 'Pivot from legacy system to modern SaaS platform while maintaining existing customer base and growing new user acquisition.',
      solution: 'Built cloud-native SaaS platform with subscription management, built comprehensive marketing funnel, and executed multi-channel campaigns.',
      results: [
        { label: 'Lead Generation', value: '500%', icon: TrendingUp },
        { label: 'Customer Acquisition', value: '250%', icon: Users },
        { label: 'ROI', value: '3.5x', icon: DollarSign },
        { label: 'Churn Reduction', value: '60%', icon: BarChart }
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe'],
      gradient: 'from-blue-500 to-cyan-500',
      testimonial: 'Web Core EX was instrumental in our successful pivot. They understood our vision and executed flawlessly.'
    },
    {
      title: 'HealthTrack - Medical Appointment System',
      client: 'European Healthcare Startup',
      category: 'Healthcare',
      industry: 'Healthcare Technology',
      service: 'Platinum Web Development',
      description: 'HIPAA-compliant telemedicine platform with video consultations, appointment scheduling, and electronic health records.',
      challenge: 'Build a secure, compliant healthcare platform that provides seamless video consultations and maintains patient privacy.',
      solution: 'Implemented end-to-end encryption, integrated Twilio for video, built custom EHR system, and ensured HIPAA compliance.',
      results: [
        { label: 'Appointments', value: '5K+/mo', icon: BarChart },
        { label: 'Patient Satisfaction', value: '98%', icon: Star },
        { label: 'Avg. Wait Time', value: '2 min', icon: Zap },
        { label: 'Doctors Onboarded', value: '200+', icon: Users }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Twilio', 'AWS'],
      gradient: 'from-green-500 to-emerald-500',
      testimonial: 'The platform is rock-solid and our patients love it. Web Core EX understood healthcare compliance perfectly.'
    },
    {
      title: 'EduLearn - Online Learning Platform',
      client: 'US EdTech Startup',
      category: 'Education',
      industry: 'Education Technology',
      service: 'Gold Web Development & Gold SMM',
      description: 'Interactive online learning platform with video courses, live classes, assessments, and student progress tracking.',
      challenge: 'Create an engaging learning experience that works across devices and can scale to thousands of concurrent students.',
      solution: 'Built video streaming infrastructure, interactive quiz system, real-time collaboration tools, and comprehensive analytics.',
      results: [
        { label: 'Students Enrolled', value: '15K+', icon: Users },
        { label: 'Course Completion', value: '85%', icon: TrendingUp },
        { label: 'Revenue Growth', value: '400%', icon: DollarSign },
        { label: 'Platform Uptime', value: '99.9%', icon: Zap }
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'WebRTC'],
      gradient: 'from-yellow-500 to-orange-500',
      testimonial: 'Web Core EX built us a world-class learning platform. Our students engagement has never been higher.'
    },
    {
      title: 'FoodHub - Restaurant Delivery App',
      client: 'UK Food Delivery Startup',
      category: 'Food & Beverage',
      industry: 'Food & Beverage',
      service: 'Platinum Web Development & Platinum SMM',
      description: 'Complete food delivery ecosystem with customer app, restaurant dashboard, driver app, and admin panel.',
      challenge: 'Build a real-time delivery platform that coordinates customers, restaurants, and drivers efficiently.',
      solution: 'Developed real-time order tracking, route optimization for drivers, integrated payment processing, and push notifications.',
      results: [
        { label: 'Daily Orders', value: '2K+', icon: BarChart },
        { label: 'Restaurant Partners', value: '500+', icon: Users },
        { label: 'Avg. Delivery Time', value: '28 min', icon: Zap },
        { label: 'Customer Rating', value: '4.8/5', icon: Star }
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps', 'Stripe'],
      gradient: 'from-red-500 to-pink-500',
      testimonial: 'They delivered a complex multi-sided platform on time and on budget. Impressive work!'
    }
  ];

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

  const categories = ['All', 'Fintech', 'E-commerce', 'SaaS', 'Healthcare', 'Education', 'Food & Beverage'];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      <SEO 
        title="Portfolio | Web Core EX - Fintech, SaaS & E-commerce Success Stories"
        description="Explore how Web Core EX helps startups in the USA, UK, and Canada raise funding and scale. View our case studies in Fintech, Healthcare, and E-commerce."
      />

      <div className="min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-20"
          >
            <div className="inline-block px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
               Our Work
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              Our Work Speaks for Itself
            </h1>
            <p className="text-base sm:text-xl text-white/80 max-w-3xl mx-auto mb-8 px-4">
              Digital Success Stories from Around the Globe
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    filter === cat 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 scale-105' 
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-8"></div>
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div 
            layout
            className="space-y-20 mb-20"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div 
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-8 md:p-12 rounded-3xl hover:border-cyan-500/30 transition-all duration-500"
                >
                  {/* Project Header */}
                  <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                    <div>
                      <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs sm:text-sm font-bold mb-4 shadow-lg`}>
                        {project.service}
                      </div>
                      <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
                        {project.title}
                      </h2>
                      <p className="text-cyan-400 font-semibold mb-1 text-sm sm:text-base">
                        {project.client}
                      </p>
                      <p className="text-white/50 text-xs uppercase tracking-wider">{project.industry}</p>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="mb-8">
                    <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="glass-card p-6 rounded-2xl bg-white/5 border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                          <CheckCircle size={20} className="text-cyan-400" />
                          Challenge
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>

                      <div className="glass-card p-6 rounded-2xl bg-white/5 border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                          <Zap size={20} className="text-cyan-400" />
                          Solution
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {project.results.map((metric, idx) => (
                      <div key={idx} className="glass-card p-4 sm:p-6 rounded-xl text-center hover:bg-white/10 transition-colors">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-3">
                          <metric.icon size={20} className="text-cyan-400 sm:w-6 sm:h-6" />
                        </div>
                        <div className={`text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-1`}>
                          {metric.value}
                        </div>
                        <div className="text-white/60 text-xs">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-card text-white/80 text-xs sm:text-sm border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="glass-card p-6 rounded-2xl border-l-4 border-cyan-500 bg-gradient-to-r from-cyan-900/20 to-transparent">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-yellow-400 fill-yellow-400"/>)}
                    </div>
                    <p className="text-white/90 italic leading-relaxed mb-2 text-sm sm:text-base">
                      "{project.testimonial}"
                    </p>
                    <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider">
                      — {project.client}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* --- RESTORED & ANIMATED: Industries We Serve --- */}
          <section className="mb-20 overflow-hidden">
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

          {/* Stats Section */}
          <section className="mb-20">
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

          {/* CTA */}
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
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
                >
                  Start Your Project
                </motion.button>
              </Link>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
}