import React from 'react';
import { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import FAQSection from '@/components/contact/FAQSection';
import GlobalPresence from '@/components/contact/GlobalPresence';
import ContactCTA from '@/components/contact/ContactCTA';

export const metadata: Metadata = {
  title: "Contact Us | Web Core EX - Free Consultation for Startups",
  description: "Get in touch with Web Core EX for a free consultation. Scale your startup with our expert web development, design, and marketing strategies."
};

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ContactHero />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <ContactForm />
          <ContactInfo />
        </div>

        <FAQSection />
        <GlobalPresence />
        <ContactCTA />
      </div>
    </div>
  );
}
