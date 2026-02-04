"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb, Shield, Zap, Globe } from 'lucide-react';

export default function ValuesSection() {
  const values = [
    { icon: Target, title: 'Excellence First', description: 'We never compromise on quality. Every project receives the same attention to detail and commitment to excellence.', color: 'from-cyan-500 to-blue-500' },
    { icon: Heart, title: 'Client Success', description: 'Your success is our success. We measure our achievements by the growth and satisfaction of our clients.', color: 'from-purple-500 to-pink-500' },
    { icon: Lightbulb, title: 'Innovation', description: 'We stay ahead of trends and continuously adopt cutting-edge technologies to give you a competitive edge.', color: 'from-blue-500 to-cyan-500' },
    { icon: Shield, title: 'Transparency', description: 'Clear communication, honest timelines, and transparent pricing. No hidden costs or surprises.', color: 'from-green-500 to-emerald-500' },
    { icon: Zap, title: 'Speed & Agility', description: 'Fast turnarounds without sacrificing quality. We move at startup speed because we understand urgency.', color: 'from-yellow-500 to-orange-500' },
    { icon: Globe, title: 'Global Mindset', description: 'Local roots, global perspective. We understand diverse markets and cultural nuances across continents.', color: 'from-indigo-500 to-purple-500' }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="mb-12 sm:mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Our Core Values</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 sm:mt-6"></div>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {values.map((value, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
            className="glass-card p-6 sm:p-8 rounded-2xl"
          >
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}>
              <value.icon size={28} className="sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{value.title}</h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">{value.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
