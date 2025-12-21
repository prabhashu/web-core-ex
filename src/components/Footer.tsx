import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Enhanced Social Hover: Scale + Glow effect
  const socialHover = {
    scale: 1.2,
    textShadow: "0px 0px 8px rgb(34, 211, 238)", // Cyan glow
    transition: { type: "spring", stiffness: 400 }
  };

  // Enhanced Link Style: Cyan hover + slight slide right
  const linkClass = "text-white/60 hover:text-cyan-400 transition-all duration-300 text-sm focus:outline-none hover:translate-x-1 inline-block";

  return (
    <footer className="relative mt-24">

      {/* --- GLASS BACKGROUND (Unchanged) --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black/80 backdrop-blur-xl border-t border-white/10"></div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 lg:px-8 py-12 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* COLUMN 1: Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link to="/" onClick={scrollToTop} className="inline-block focus:outline-none group">
              {/* UPDATED: Gradient Text Header */}
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Web Core EX
              </h3>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              World-class Web Design & Digital Marketing solutions. Built for global growth.
            </p>

            {/* --- CUSTOM TRUSTPILOT BADGE (Replaced the Widget) --- */}
            <a 
              href="https://www.trustpilot.com/review/webcoreex.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group max-w-fit"
            >
              {/* Green Star Icon Circle */}
              <div className="w-10 h-10 rounded-full bg-[#00b67a]/10 flex items-center justify-center border border-[#00b67a]/20 group-hover:scale-110 transition-transform">
                <Star size={18} className="text-[#00b67a] fill-[#00b67a]" />
              </div>
              
              {/* Text Info */}
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm leading-none mb-1">Excellent</span>
                <div className="flex items-center gap-1 text-[10px] text-white/50">
                  <span>See reviews on</span>
                  <span className="text-white/90 font-medium">Trustpilot</span>
                </div>
              </div>
            </a>
            {/* ---------------------------------------------------- */}

          </motion.div>

          {/* COLUMN 2: Company */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/" onClick={scrollToTop} className={linkClass}>Home</Link></li>
              <li><Link to="/about" className={linkClass}>About Us</Link></li>
              <li><Link to="/portfolio" className={linkClass}>Our Portfolio</Link></li>
              <li><Link to="/contact" className={linkClass}>Contact Us</Link></li>
            </ul>
          </motion.div>

          {/* COLUMN 3: Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className={linkClass}>Web Development</Link></li>
              <li><Link to="/services" className={linkClass}>UI/UX Design</Link></li>
              <li><Link to="/services" className={linkClass}>Social Media Marketing</Link></li>
              <li><Link to="/privacy" className={linkClass}>Privacy Policy</Link></li>
            </ul>
          </motion.div>

          {/* COLUMN 4: Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-white/60 text-sm group">
                <MapPin size={16} className="text-cyan-400 mt-0.5 group-hover:text-cyan-300 transition-colors" />
                <span>Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm group">
                <Mail size={16} className="text-cyan-400 mt-0.5 group-hover:text-cyan-300 transition-colors" />
                <a href="mailto:hello@webcoreex.com" className="hover:text-cyan-400 focus:outline-none transition-colors">info@webcoreex.com</a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm group">
                <Phone size={16} className="text-cyan-400 mt-0.5 group-hover:text-cyan-300 transition-colors" />
                <span>+94 77 589 6396</span>
              </li>
            </ul>

            {/* UPDATED: Social Icons with Glow & Color Hover */}
            <div className="flex gap-4">
              {[
                { Icon: Facebook, link: "https://web.facebook.com/webcoreex/" },
                { Icon: Instagram, link: "https://www.instagram.com/webcoreex/" },
                { Icon: Linkedin, link: "https://linkedin.com/company/web-core-ex" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  whileHover={socialHover}
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  // Changed hover color to cyan-400
                  className="text-white/60 hover:text-cyan-400 transition-colors focus:outline-none"
                >
                  <social.Icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <motion.div 
          variants={itemVariants} 
          className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Web Core EX. All rights reserved.
          </p>

          {/* UPDATED: Back to Top with Arrow Animation */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-semibold text-white/40 hover:text-cyan-400 transition-colors focus:outline-none"
          >
            BACK TO TOP
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </motion.div>
    </footer>
  );
}