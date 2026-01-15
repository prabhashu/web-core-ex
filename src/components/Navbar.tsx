import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  // --- FASTER Animation Variants ---
  const menuVars = {
    initial: { scaleY: 0 },
    animate: { 
      scaleY: 1, 
      transition: { duration: 0.3, ease: [0.12, 0, 0.39, 0] } 
    },
    exit: { 
      scaleY: 0, 
      transition: { delay: 0.1, duration: 0.3, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const containerVars = {
    initial: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.1, staggerChildren: 0.04, staggerDirection: 1 } }
  };

  const mobileLinkVars = {
    initial: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1, transition: { duration: 0.3 } }
  };

  return (
    <>
      <nav className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-[100] w-[96%] sm:w-[95%] max-w-7xl px-2 sm:px-0">
        <div className="glass-nav rounded-full px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl relative z-[100]">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 focus:outline-none group"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
                Web Core EX
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 whitespace-nowrap focus:outline-none ${isActive(link.path) ? 'text-cyan-400' : 'text-white/90'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="flex items-center gap-4">
                <Link to="/contact" className="hidden lg:block focus:outline-none">
                <button className="px-4 xl:px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap focus:outline-none">
                    Get Started
                </button>
                </Link>

                {/* Mobile Menu Toggle */}
                <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-0 active:scale-95" 
                aria-label="Toggle menu"
                >
                {isOpen ? <X size={24} className="text-cyan-400" /> : <Menu size={24} />}
                </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-gray-900 z-[90] origin-top lg:hidden flex flex-col"
          >
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[50%] bg-purple-600/10 rounded-full blur-[100px]"></div>
                <div className="absolute top-[40%] -right-[10%] w-[60%] h-[50%] bg-cyan-600/10 rounded-full blur-[100px]"></div>
            </div>

            {/* Main Content Container - Compact Spacing */}
            <div className="flex flex-col h-full px-6 pt-24 pb-6 justify-between relative z-10">
              
              {/* Navigation Links */}
              <motion.div 
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col gap-1" // Reduced gap between links
              >
                {navLinks.map((link) => (
                  <div key={link.path} className="overflow-hidden">
                    <motion.div variants={mobileLinkVars}>
                      <Link 
                        to={link.path} 
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center justify-between text-2xl font-bold tracking-tight py-3 border-b border-white/5 transition-all duration-300 ${isActive(link.path) ? 'text-cyan-400 pl-2' : 'text-white hover:text-white/80'}`}
                      >
                        {/* Clean Text without numbering */}
                        <span className="flex items-center gap-3">
                            {isActive(link.path) && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                            {link.name}
                        </span>
                        
                        <ChevronRight className={`w-5 h-5 transition-transform duration-300 text-white/20 group-hover:text-cyan-400 group-hover:translate-x-1`} />
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </motion.div>

              {/* Bottom Info Section - Compact & Always Visible */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                exit={{ opacity: 0, transition: { delay: 0 } }}
                className="flex flex-col gap-4"
              >
                {/* Contact Row */}
                <div className="flex justify-between items-center gap-2">
                    <a href="mailto:info@webcoreex.com" className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <Mail size={18} className="text-cyan-400" />
                        <span className="text-white text-xs font-medium">Email Us</span>
                    </a>
                    <a href="tel:+94768052503" className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <Phone size={18} className="text-purple-400" />
                        <span className="text-white text-xs font-medium">Call Us</span>
                    </a>
                </div>

                {/* Big CTA Button */}
                <Link 
                    to="/contact" 
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/20 active:scale-95 transition-transform"
                >
                    Let's Work Together
                </Link>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}