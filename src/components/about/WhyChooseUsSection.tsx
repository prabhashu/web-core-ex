"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Clock, Star, Shield, CheckCircle } from 'lucide-react';

export default function WhyChooseUsSection() {
  const whyChooseUs = [
    {
      icon: Globe,
      title: 'Global Quality, Local Agility',
      desc: 'We deliver Silicon Valley-level quality with the agility and cost-effectiveness of a Sri Lankan powerhouse. Best of both worlds.',
      features: ['40-60% cost savings', 'Same quality standards', 'Faster turnaround times'],
      color: 'from-cyan-500 to-blue-500',
      checkColor: 'text-cyan-400'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      desc: 'We operate around the clock to align with US, UK, and European time zones, ensuring seamless communication and rapid delivery.',
      features: ['Real-time collaboration', 'Dedicated account managers', 'Quick response times'],
      color: 'from-purple-500 to-pink-500',
      checkColor: 'text-purple-400'
    },
    {
      icon: Star,
      title: 'Proven Track Record',
      desc: '150+ successful projects, 98% client satisfaction, and countless startups funded thanks to our work.',
      features: ['Portfolio of success stories', 'Industry recognition', 'Long-term partnerships'],
      color: 'from-blue-500 to-cyan-500',
      checkColor: 'text-blue-400'
    },
    {
      icon: Shield,
      title: 'Transparent & Trustworthy',
      desc: 'No hidden fees, clear communication, and honest timelines. We build relationships based on trust and transparency.',
      features: ['Fixed monthly pricing', 'Regular progress updates', 'Money-back guarantee'],
      color: 'from-green-500 to-emerald-500',
      checkColor: 'text-green-400'
    }
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
    <section>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Why Choose Web Core EX?</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 sm:mt-6"></div>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
      >
        {whyChooseUs.map((item, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-6 sm:p-8 rounded-2xl"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4 sm:mb-6">
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <item.icon size={28} className="sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white text-center sm:text-left">{item.title}</h3>
            </div>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-3 sm:mb-4 text-center sm:text-left">{item.desc}</p>
            
            <ul className="space-y-2">
              {item.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm sm:text-base text-white/80">
                  <CheckCircle size={16} className={`sm:w-[18px] sm:h-[18px] ${item.checkColor} flex-shrink-0`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
