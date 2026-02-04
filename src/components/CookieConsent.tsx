"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { consent } from '../lib/gtm';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const consentStatus = localStorage.getItem('cookieConsent');
    
    if (consentStatus === 'true') {
      consent({
        analytics_storage: 'granted',
        ad_storage: 'granted'
      });
    } else if (consentStatus === 'false') {
      consent({
        analytics_storage: 'denied',
        ad_storage: 'denied'
      });
    } else {
      // Default to denied if not set
      consent({
        analytics_storage: 'denied',
        ad_storage: 'denied'
      });
      // Delay showing it slightly for better UX
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    consent({
      analytics_storage: 'granted',
      ad_storage: 'granted'
    });
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    consent({
      analytics_storage: 'denied',
      ad_storage: 'denied'
    });
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 flex justify-center"
        >
          <div className="glass-card p-6 rounded-2xl max-w-2xl w-full flex flex-col sm:flex-row items-center gap-6 shadow-2xl border border-white/10 bg-gray-900/90 backdrop-blur-xl">
            <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-400">
              <Cookie size={32} />
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-white font-bold mb-1">We use cookies</h3>
              <p className="text-white/70 text-sm">
                To ensure you get the best experience on our website, we use cookies for analytics and site functionality.
              </p>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={declineCookies}
                className="px-4 py-2 rounded-full text-white/60 hover:text-white text-sm font-medium transition-colors"
              >
                Decline
              </button>
              <button 
                onClick={acceptCookies}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
