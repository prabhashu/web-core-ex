"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Quote, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { name: 'Sarah Johnson', role: 'CEO, TechStart Inc.', country: 'USA', text: 'Web Core EX transformed our vision into reality. Their team delivered a stunning website that increased our conversions by 300%. The quality rivals top Silicon Valley agencies at a fraction of the cost.', rating: 5 },
    { name: 'James Mitchell', role: 'Founder, FinanceFlow', country: 'UK', text: 'Working with Web Core EX was seamless. Despite the time difference, communication was excellent. They delivered our MVP in just 6 weeks, helping us secure seed funding.', rating: 5 },
    { name: 'Emma Rodriguez', role: 'Marketing Director, GrowthLab', country: 'Canada', text: 'The social media marketing campaign they ran exceeded all expectations. We saw a 400% increase in qualified leads within 3 months. Highly recommended!', rating: 5 }
  ];

  const faqs = [
    { question: 'Why choose a Sri Lankan agency over local options?', answer: 'We offer the same quality as top-tier agencies in the US, UK, or Europe, but at 40-60% lower costs. Our team works in your timezone, ensuring seamless communication and rapid delivery.' },
    { question: 'How do you handle time zone differences?', answer: "We operate 24/7 with team members aligned to US, UK, and European time zones. You'll have dedicated points of contact available during your business hours for real-time collaboration." },
    { question: 'What makes your retainer model beneficial for startups?', answer: 'Our retainer model provides predictable monthly costs, continuous support, and the flexibility to scale services as your startup grows. No surprise bills or project delays.' },
    { question: 'Can you work with our existing team?', answer: "Absolutely! We integrate seamlessly with your in-house team, using your preferred tools and workflows. We're here to augment your capabilities, not replace them." }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="relative glass-card p-8 rounded-2xl border border-white/5 overflow-hidden group hover:border-cyan-500/30 transition-all duration-300"
            >
              {/* Decorative Background Quote */}
              <div className="absolute top-2 right-4 text-white/5 group-hover:text-cyan-500/10 transition-colors transform rotate-12">
                <Quote size={100} fill="currentColor" />
              </div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={18} className="text-yellow-400 fill-yellow-400 drop-shadow-sm" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-white/80 mb-8 italic leading-relaxed text-lg">"{t.text}"</p>

                {/* Author Profile */}
                <div className="flex items-center gap-4">
                  {/* Gradient Ring around avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-[2px] flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                      <Users size={24} className="text-white" />
                    </div>
                  </div>

                  <div>
                    <div className="text-white font-bold text-lg">{t.name}</div>
                    <div className="text-cyan-400 text-sm font-medium">{t.role}</div>
                    <div className="text-white/40 text-xs mt-0.5">{t.country}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12"><h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2></div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl hover:scale-[1.01] transition-all">
              <h3 className="text-lg font-bold text-white mb-2 flex gap-2"><MessageSquare className="text-cyan-400" /> {faq.question}</h3>
              <p className="text-white/70 pl-8">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
