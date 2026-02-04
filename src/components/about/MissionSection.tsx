"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle } from 'lucide-react';

export default function MissionSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
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
  );
}
