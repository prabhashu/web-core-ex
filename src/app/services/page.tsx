import React from 'react';
import { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesContent from '@/components/services/ServicesContent';
import RetainerSection from '@/components/services/RetainerSection';
import ServicesCTA from '@/components/services/ServicesCTA';

export const metadata: Metadata = {
  title: "Services | Web Core EX - Web Development, Marketing & POS Solutions",
  description: "Comprehensive digital services for startups including Web Development, UI/UX Design, Social Media Marketing, WordPress, and POS Systems."
};

export default function Services() {
  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ServicesHero />
        <ServicesContent />
        <RetainerSection />
        <ServicesCTA />
      </div>
    </div>
  );
}
