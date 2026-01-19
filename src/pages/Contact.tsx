import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, CheckCircle, Globe, Linkedin, Twitter, Facebook, Instagram, Loader2, ArrowRight, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';

// --- Custom TikTok Icon ---
const TiktokIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  // --- Animation Variants ---
  const fadeInUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // --- CREDENTIALS ---
    const SERVICE_ID = 'service_05pssxh';
    const TEMPLATE_ID = 'template_zxzmi7u';
    const PUBLIC_KEY = 'ghR_iPhymglFi6R2b';

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setIsSuccess(true);
            setFormData({
              name: '', company: '', email: '', phone: '', country: '', 
              service: '', budget: '', timeline: '', message: ''
            });
            setIsSubmitting(false);
            
            setTimeout(() => setIsSuccess(false), 5000);
        }, (error) => {
            console.log(error.text);
            alert('Failed to send. Please check your connection and try again.');
            setIsSubmitting(false);
        });
    }
  };

  const faqs = [
    { question: 'What is your typical response time?', answer: 'We respond to all inquiries within 24 hours during business days, often much sooner.' },
    { question: 'Do you offer free consultations?', answer: 'Yes! We offer a free 30-minute consultation to discuss your project and provide initial recommendations.' },
    { question: 'What payment methods do you accept?', answer: 'We accept bank transfers, PayPal, Payoneer and major credit cards. Payment terms are flexible based on project scope.' },
    { question: 'Can we start with a small project first?', answer: 'Absolutely! We recommend starting with a pilot project to build trust and demonstrate value before committing to larger engagements.' }
  ];

  const officeHours = [
    { region: 'USA (EST)', hours: '9 AM - 6 PM', available: true, active: true },
    { region: 'UK (GMT)', hours: '9 AM - 6 PM', available: true, active: true },
    { region: 'Europe (CET)', hours: '9 AM - 6 PM', available: true, active: true },
    { region: 'Sri Lanka (IST)', hours: '24/7', available: true, active: true }
  ];

  return (
    <>
      <SEO 
        title="Contact Web Core EX | 24/7 Support for US, UK & Global Startups"
        description="Book a free consultation with Web Core EX. We offer 24/7 support aligned with US (EST), UK (GMT), and Australian time zones. Get your project quote today."
      />

      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6">
               Get in Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Build Something Great
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Your next chapter of growth starts here. We're ready to turn your vision into reality.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            
            {/* --- Contact Form (Left) --- */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden"
            >
              {/* Success Overlay */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gray-900/95 backdrop-blur-md z-50 flex flex-col items-center justify-center text-center p-8"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-6"
                    >
                      <CheckCircle size={40} className="text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-white/70">We will contact you at info@webcoreex.com shortly.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <h2 className="text-3xl font-bold text-white mb-2">Send Us a Message</h2>
              <p className="text-white/70 mb-8">Fill out the form and we'll get back to you within 24 hours</p>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2 text-sm font-medium">Full Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-white/80 mb-2 text-sm font-medium">Company Name *</label>
                    <input type="text" id="company" name="company" required value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="Your Company" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2 text-sm font-medium">Email Address *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white/80 mb-2 text-sm font-medium">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="country" className="block text-white/80 mb-2 text-sm font-medium">Target Country *</label>
                    <select id="country" name="country" required value={formData.country} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all">
                      <option value="" className="bg-gray-900">Select a country</option>
                      <option value="USA" className="bg-gray-900">USA</option>
                      <option value="UK" className="bg-gray-900">UK</option>
                      <option value="Canada" className="bg-gray-900">Canada</option>
                      <option value="Europe" className="bg-gray-900">Europe</option>
                      <option value="Australia" className="bg-gray-900">Australia</option>
                      <option value="Other" className="bg-gray-900">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-white/80 mb-2 text-sm font-medium">Service Interested In *</label>
                    <select id="service" name="service" required value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all">
                      <option value="" className="bg-gray-900">Select a service</option>
                      <option value="Web Development" className="bg-gray-900">Web Development</option>
                      <option value="Social Media Marketing" className="bg-gray-900">Social Media Marketing</option>
                      <option value="Design" className="bg-gray-900">Web & Graphic Design</option>
                      <option value="All" className="bg-gray-900">All Services</option>
                      <option value="Consultation" className="bg-gray-900">Just Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-white/80 mb-2 text-sm font-medium">Budget Range</label>
                    <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all">
                      <option value="" className="bg-gray-900">Select budget range</option>
                      <option value="<$1000" className="bg-gray-900">Less than $1,000</option>
                      <option value="$1000-$5000" className="bg-gray-900">$1,000 - $5,000</option>
                      <option value="$5000-$10000" className="bg-gray-900">$5,000 - $10,000</option>
                      <option value=">$10000" className="bg-gray-900">More than $10,000</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-white/80 mb-2 text-sm font-medium">Project Timeline</label>
                    <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all">
                      <option value="" className="bg-gray-900">Select timeline</option>
                      <option value="Urgent" className="bg-gray-900">Urgent (1-2 weeks)</option>
                      <option value="Soon" className="bg-gray-900">Soon (1 month)</option>
                      <option value="Flexible" className="bg-gray-900">Flexible (2-3 months)</option>
                      <option value="Planning" className="bg-gray-900">Just Planning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2 text-sm font-medium">Project Details *</label>
                  <textarea id="message" name="message" required value={formData.message} onChange={handleChange} rows={6} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none" placeholder="Tell us about your project, goals, and any specific requirements..." />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting} 
                  type="submit" 
                  className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                      <> <Loader2 className="animate-spin" size={20} /> Sending... </>
                  ) : (
                      <> Send Message <Send size={20} /> </>
                  )}
                </motion.button>

                <p className="text-white/40 text-xs text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </motion.div>

            {/* --- Info Section (Right) --- */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              
              {/* Contact Information */}
              <motion.div variants={fadeInUp} className="glass-card p-8 rounded-3xl border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 text-lg">Headquarters</h3>
                      <p className="text-white/70">Colombo, Sri Lanka</p>
                      <p className="text-white/40 text-sm mt-1">Global operations • Serving 25+ countries</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 text-lg">Email</h3>
                      <p className="text-white/70 mb-1">info@webcoreex.com</p>
                      <p className="text-white/40 text-sm mt-1">We reply within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 text-lg">Phone</h3>
                      <p className="text-white/70 mb-1">+94 72 872 5881 (Sri Lanka)</p>
                      <p className="text-white/70">+94 77 589 6396 (Sri Lanka)</p>
                      <p className="text-white/40 text-sm mt-1">Available 24/7 for urgent matters</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Office Hours */}
              <motion.div variants={fadeInUp} className="glass-card p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Clock size={28} className="text-cyan-400" /> Office Hours
                </h3>
                <div className="space-y-4">
                  {officeHours.map((office, index) => (
                    <motion.div 
                      key={index} 
                      whileHover={{ x: 5 }}
                      className="flex justify-between items-center glass-card p-4 rounded-xl border border-white/5"
                    >
                      <div>
                        <div className="text-white font-semibold">{office.region}</div>
                        <div className="text-white/60 text-sm">{office.hours}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        {/* Animated Pulse for EVERYONE now */}
                        <div className={`w-2 h-2 rounded-full ${office.active ? 'bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]' : 'bg-green-400/50'}`}></div>
                        <span className={`${office.active ? 'text-green-400 font-bold' : 'text-green-400/70'} text-sm`}>Available</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div variants={fadeInUp} className="glass-card p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-400', link: 'https://www.linkedin.com/company/web-core-ex' },
                    { name: 'Twitter', icon: Twitter, color: 'text-sky-400', link: '#' },
                    { name: 'Facebook', icon: Facebook, color: 'text-blue-600', link: 'https://facebook.com/webcoreex' },
                    { name: 'Instagram', icon: Instagram, color: 'text-pink-500', link: 'https://www.instagram.com/webcoreex/' },
                    { name: 'TikTok', icon: TiktokIcon, color: 'text-cyan-400', link: 'https://www.tiktok.com/@webcoreex' } 
                  ].map((social, idx) => (
                    <motion.a 
                      key={idx}
                      href={social.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                      className="glass-card p-4 rounded-xl flex items-center gap-3 cursor-pointer"
                    >
                      <social.icon size={24} className={social.color} />
                      <span className="text-white">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          </div>

          {/* FAQ Section */}
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

          {/* --- REDESIGNED GLOBAL PRESENCE: Holographic Orbital Network --- */}
          <section className="mb-24">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative rounded-3xl border border-white/10 bg-gray-900/50 backdrop-blur-xl overflow-hidden min-h-auto py-16 lg:min-h-[500px] lg:py-0 flex items-center justify-center"
            >
              {/* Background Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-gray-900/90 pointer-events-none"></div>

              <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                
                {/* Text Content */}
                <div className="text-center lg:text-left max-w-lg w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6 animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                        SYSTEM ONLINE: GLOBAL
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Command Center <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Global Operations</span>
                    </h2>
                    <p className="text-white/60 text-lg mb-8 leading-relaxed">
                        Operating from our strategic hub in Sri Lanka, we deploy digital solutions to partners across the USA, UK, and Europe with 24/7 efficiency.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="text-2xl font-bold text-white mb-1">25+</div>
                            <div className="text-xs text-white/40 uppercase tracking-wider">Countries Served</div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="text-2xl font-bold text-white mb-1">24/7</div>
                            <div className="text-xs text-white/40 uppercase tracking-wider">Active Support</div>
                        </div>
                    </div>
                </div>

                {/* Animated Orbital Map Visualization - Responsive Scaled */}
                <div className="relative w-full flex justify-center lg:justify-end">
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 scale-75 sm:scale-100 flex-shrink-0">
                        {/* Core (Sri Lanka) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)] z-20"></div>
                        
                        {/* Orbital Rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                        
                        {/* Orbiting Nodes (Satellites) */}
                        <motion.div 
                            className="absolute top-1/2 left-1/2 w-48 h-48 -ml-24 -mt-24"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="absolute top-0 left-1/2 -ml-3 w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-md border border-purple-500/30">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                            </div>
                            <motion.div 
                                className="absolute -top-6 left-1/2 -ml-4 text-[10px] text-purple-300 font-mono"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            >
                                USA
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="absolute top-1/2 left-1/2 w-72 h-72 -ml-36 -mt-36"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="absolute bottom-[15%] right-[10%] w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-md border border-blue-500/30">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            </div>
                            <motion.div 
                                className="absolute bottom-[8%] right-[5%] text-[10px] text-blue-300 font-mono"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            >
                                UK/EU
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

              </div>
            </motion.div>
          </section>

          {/* --- REDESIGNED FINAL CTA: The Magnetic Spotlight --- */}
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

        </div>
      </div>
    </>
  );
}