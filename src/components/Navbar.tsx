import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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

  return (
    <>
      <nav className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] sm:w-[95%] max-w-7xl px-2 sm:px-0">
        <div className="glass-nav rounded-full px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap relative z-[60]">
              Web Core EX
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 whitespace-nowrap ${isActive(link.path) ? 'text-cyan-400' : 'text-white/90'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <Link to="/contact" className="hidden lg:block">
              <button className="px-4 xl:px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Get Started
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors relative z-[60]" 
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsOpen(false)} 
      />

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-xl z-50 lg:hidden transition-transform duration-300 ease-out shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8 pt-24">
          
          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)} 
                className={`text-lg font-medium transition-all duration-300 py-4 px-6 rounded-xl ${isActive(link.path) ? 'text-cyan-400 bg-cyan-500/20 border border-cyan-500/30' : 'text-white/90 hover:bg-white/10 hover:text-white'}`} 
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                  transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
                  opacity: isOpen ? 1 : 0
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* FIX: Mobile CTA Button (Removed nested button tag) */}
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)} 
            className="mt-8 w-full px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-[1.02] text-center block"
            style={{
              transitionDelay: isOpen ? '250ms' : '0ms',
              transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
              opacity: isOpen ? 1 : 0
            }}
          >
            Get Started
          </Link>

          {/* Decorative Gradient Orbs */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
      </div>
    </>
  );
}