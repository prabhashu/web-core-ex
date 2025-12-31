import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Custom TikTok Icon Component (since Lucide doesn't have one)
const TiktokIcon = ({ size = 22, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

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

  const socialHover = {
    scale: 1.2,
    textShadow: "0px 0px 8px rgb(34, 211, 238)",
    transition: { type: "spring", stiffness: 400 }
  };

  const linkClass = "text-white/60 hover:text-cyan-400 transition-all duration-300 text-sm focus:outline-none hover:translate-x-1 inline-block";

  return (
    // Changed mt-24 to mt-12 sm:mt-24 for better mobile spacing
    <footer className="relative mt-12 sm:mt-24">

      {/* --- GLASS BACKGROUND --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black/80 backdrop-blur-xl border-t border-white/10"></div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        // Changed px-6 to px-4 for mobile
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-center sm:text-left">
          
          {/* COLUMN 1: Brand */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link to="/" onClick={scrollToTop} className="inline-block focus:outline-none group">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Web Core EX
              </h3>
            </Link>
            {/* Added mx-auto sm:mx-0 to center text on mobile */}
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              World-class Web Design & Digital Marketing solutions. Built for global growth.
            </p>

            {/* Trustpilot - Centered on Mobile (mx-auto sm:mx-0) */}
            <a 
              href="https://www.trustpilot.com/review/webcoreex.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group max-w-fit mx-auto sm:mx-0"
            >
              <div className="w-10 h-10 rounded-full bg-[#00b67a]/10 flex items-center justify-center border border-[#00b67a]/20 group-hover:scale-110 transition-transform">
                <Star size={18} className="text-[#00b67a] fill-[#00b67a]" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-white font-bold text-sm leading-none mb-1">Excellent</span>
                <div className="flex items-center gap-1 text-[10px] text-white/50">
                  <span>See reviews on</span>
                  <span className="text-white/90 font-medium">Trustpilot</span>
                </div>
              </div>
            </a>
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
              {/* Added justify-center sm:justify-start for alignment */}
              <li className="flex items-start justify-center sm:justify-start gap-3 text-white/60 text-sm group">
                <MapPin size={16} className="text-cyan-400 mt-0.5 group-hover:text-cyan-300 transition-colors" />
                <span>Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start gap-3 text-white/60 text-sm group">
                <Mail size={16} className="text-cyan-400 mt-0.5 group-hover:text-cyan-300 transition-colors" />
                <a href="mailto:info@webcoreex.com" className="hover:text-cyan-400 focus:outline-none transition-colors">info@webcoreex.com</a>
              </li>
              <li className="flex items-start justify-center sm:justify-start gap-3 text-white/60 text-sm group">
                <Phone size={16} className="text-cyan-400 mt-0.5 group-hover:text-cyan-300 transition-colors" />
                <span>+94 76 805 2503</span>
              </li>
            </ul>

            {/* Social Icons - Centered on Mobile */}
            <div className="flex gap-4 justify-center sm:justify-start">
              {[
                { Icon: Facebook, link: "https://web.facebook.com/webcoreex/" },
                { Icon: Instagram, link: "https://www.instagram.com/webcoreex/" },
                { Icon: Linkedin, link: "https://linkedin.com/company/web-core-ex" },
                { Icon: TiktokIcon, link: "https://www.tiktok.com/@webcoreex" } // <-- ADDED TIKTOK HERE
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  whileHover={socialHover}
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
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
          className="pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Web Core EX. All rights reserved.
          </p>

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