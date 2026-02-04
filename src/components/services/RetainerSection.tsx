"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function RetainerSection() {
  return (
    <section className="mb-12 sm:mb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 sm:p-12 md:p-16 rounded-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">The Retainer Model</h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
          Our services are structured on a flexible monthly retainer basis, perfect for startups who need predictable costs and continuous, adaptive support. Scale up or down as your needs change.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {['Flexible', 'Predictable', 'Continuous'].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">{item}</div>
              <p className="text-sm sm:text-base text-white/70">{i === 0 ? 'Adjust services monthly' : i === 1 ? 'Fixed monthly costs' : 'Ongoing support & updates'}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
