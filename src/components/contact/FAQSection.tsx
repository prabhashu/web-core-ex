"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { faqs } from './contactData';

export default function FAQSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section className="mb-24">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-white/70">Quick answers to common questions</p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6"></div>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {faqs.map((faq, index) => (
          <motion.div 
            key={index} 
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="glass-card p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
          >
            <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
              <MessageSquare size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
              {faq.question}
            </h3>
            <p className="text-white/70 leading-relaxed pl-9">{faq.answer}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
