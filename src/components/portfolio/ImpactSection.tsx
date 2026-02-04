"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Users, TrendingUp, DollarSign, ExternalLink } from 'lucide-react';

const NumberCounter = ({ value, suffix = '', prefix = '' }: { value: number, suffix?: string, prefix?: string }) => {
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
      <span>{prefix}</span>
      <motion.span>{roundedValue}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

export default function ImpactSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="mb-24">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="glass-card p-8 md:p-16 rounded-3xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-white sm:w-10 sm:h-10" />
            </div>
            <div className="text-3xl sm:text-5xl font-bold text-white mb-2">
              <NumberCounter value={150} suffix="+" />
            </div>
            <div className="text-white/60 text-sm">Happy Clients</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
              <ExternalLink size={32} className="text-white sm:w-10 sm:h-10" />
            </div>
            <div className="text-3xl sm:text-5xl font-bold text-white mb-2">
              <NumberCounter value={250} suffix="+" />
            </div>
            <div className="text-white/60 text-sm">Projects Delivered</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={32} className="text-white sm:w-10 sm:h-10" />
            </div>
            <div className="text-3xl sm:text-5xl font-bold text-white mb-2">
              <NumberCounter value={300} suffix="%" />
            </div>
            <div className="text-white/60 text-sm">Avg Growth Rate</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
              <DollarSign size={32} className="text-white sm:w-10 sm:h-10" />
            </div>
            <div className="text-3xl sm:text-5xl font-bold text-white mb-2">
              <NumberCounter value={10} prefix="$" suffix="M+" />
            </div>
            <div className="text-white/60 text-sm">Funding Raised</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
