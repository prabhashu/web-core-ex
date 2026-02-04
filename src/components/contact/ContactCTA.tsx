"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Calendar } from 'lucide-react';

export default function ContactCTA() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 to-purple-900 shadow-2xl border border-white/10 group"
      >
        {/* Background Animated Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 sm:p-10 lg:p-16 gap-8 lg:gap-10">
          
          <div className="text-center lg:text-left max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Still on the fence?
              </h2>
              <p className="text-indigo-200 text-lg mb-8">
                  Let's strip away the complexity. Schedule a free 30-minute strategy session. No sales pressure, just actionable advice for your digital growth.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 text-sm text-indigo-300 bg-black/20 px-3 py-1.5 rounded-lg border border-white/5">
                      <CheckCircle size={14} className="text-green-400" /> Free Audit
                  </div>
                  <div className="flex items-center gap-2 text-sm text-indigo-300 bg-black/20 px-3 py-1.5 rounded-lg border border-white/5">
                      <CheckCircle size={14} className="text-green-400" /> Tech Roadmap
                  </div>
              </div>
          </div>

          <div className="flex-shrink-0 w-full lg:w-auto flex flex-col items-center">
              <motion.a 
                href="https://wa.me/94768052503?text=Hi%20Web%20Core%20EX,%20I%20would%20like%20to%20book%20a%20free%20strategy%20call."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group/btn flex items-center justify-center gap-3 px-8 py-5 bg-white text-indigo-900 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-300 overflow-hidden w-full sm:w-auto"
              >
                  <span className="relative z-10">Book Free Strategy Call</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                  
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent z-0"></div>
              </motion.a>
              
              <div className="mt-4 text-center">
                  <p className="text-xs text-indigo-300/60 flex items-center justify-center gap-2">
                      <Calendar size={12} /> Available slots for this week
                  </p>
              </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
