import React from 'react';
import { Metadata } from 'next';
import PortfolioContent from '@/components/portfolio/PortfolioContent';
import IndustriesSection from '@/components/portfolio/IndustriesSection';
import ImpactSection from '@/components/portfolio/ImpactSection';
import PortfolioCTA from '@/components/portfolio/PortfolioCTA';

export const metadata: Metadata = {
  title: "Portfolio | Web Core EX - Our Recent Projects & Success Stories",
  description: "Browse our portfolio of high-performance websites, web apps, and digital marketing campaigns initiated for startups across USA, UK, and Canada."
};

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
       <div className="max-w-7xl mx-auto">
          <PortfolioContent />
          <IndustriesSection />
          <ImpactSection />
          <PortfolioCTA />
       </div>
    </div>
  );
}
