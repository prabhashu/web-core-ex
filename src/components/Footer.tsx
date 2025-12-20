import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  // --- Animation Settings (Typed as 'any' to fix errors) ---
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const socialHover: any = {
    scale: 1.2,
    rotate: 5,
    transition: { type: "spring", stiffness: 300 }
  };

  return (
    // Reverted to your original "glass-card" style
    <footer className="relative mt-20 py-8 sm:py-12 glass-card border-t border-white/10">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* COLUMN 1: Company Info & Trustpilot */}
          <motion.div variants={itemVariants} className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Web Core EX
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              World-class Web Design & Digital Marketing solutions crafted by a
              Sri Lankan powerhouse, built for global growth.
            </p>

            {/* Reverted Trustpilot to the original wide layout */}
            <div className="w-full max-w-[400px] mx-auto sm:mx-0">
              <div 
                className="trustpilot-widget" 
                data-locale="en-US" 
                data-template-id="56278e9abfbbba0bdcd568bc" 
                data-businessunit-id="69415d1673b68c1c75a300d5" 
                data-style-height="52px" 
                data-style-width="100%" 
                data-token="90dc272d-3d85-4d6e-a514-5e81b8053a87"
              >
                <a href="https://www.trustpilot.com/review/webcoreex.com" target="_blank" rel="noopener noreferrer">Trustpilot</a>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: Quick Links */}
          <motion.div variants={itemVariants} className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {/* Used Link for faster navigation */}
              <li><Link to="/" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">Services</Link></li>
              <li><Link to="/portfolio" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">Portfolio</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">Contact</Link></li>
            </ul>
          </motion.div>

          {/* COLUMN 3: Contact & Socials */}
          <motion.div variants={itemVariants} className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center justify-center sm:justify-start gap-2 text-white/70 text-sm">
                <MapPin size={16} className="text-cyan-400 flex-shrink-0" />
                <span>Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 text-white/70 text-sm">
                <Mail size={16} className="text-cyan-400 flex-shrink-0" />
                <span className="break-all">info@webcoreex.com</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 text-white/70 text-sm">
                <Phone size={16} className="text-cyan-400 flex-shrink-0" />
                <span>+94 77 589 6396</span>
              </li>
            </ul>

            {/* Social Media Icons with "Pop" Animation */}
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <motion.a 
                whileHover={socialHover}
                href="https://web.facebook.com/webcoreex/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                whileHover={socialHover}
                href="https://www.instagram.com/webcoreex/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-pink-600 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                whileHover={socialHover}
                href="https://linkedin.com/company/web-core-ex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-blue-500 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-8 pt-6 sm:pt-8 border-t border-white/10 text-center text-white/60 text-xs sm:text-sm">
          © {new Date().getFullYear()} Web Core EX. All rights reserved. | Global Quality, Smart Pricing.
        </motion.div>
      </motion.div>
    </footer>
  );
}