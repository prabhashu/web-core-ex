"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <section>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 sm:p-12 md:p-16 rounded-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to Get Started?</h2>
        <p className="text-base sm:text-xl text-white/80 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
          Schedule a free consultation to discuss your project and get a custom quote
        </p>
        <Link href="/contact">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all cursor-pointer inline-block"
          >
            Start Your Project
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
