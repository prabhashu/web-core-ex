"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Users, Award, TrendingUp, Globe } from 'lucide-react';

const NumberCounter = ({ value, suffix = '' }: { value: number, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const roundedValue = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: 2.5, ease: "easeOut" });
    }
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{roundedValue}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

export default function StatsSection() {
  const stats = [
    { icon: Users, number: 150, suffix: '+', label: 'Happy Clients Worldwide' },
    { icon: Award, number: 250, suffix: '+', label: 'Projects Completed' },
    { icon: TrendingUp, number: 98, suffix: '%', label: 'Client Satisfaction' },
    { icon: Globe, number: 25, suffix: '+', label: 'Countries Served' }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card p-4 sm:p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <stat.icon size={24} className="sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">
                <NumberCounter value={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-white/60 text-xs sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
