import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import TechnologyTicker from '@/components/home/TechnologyTicker';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';

export const metadata = {
  title: "Web Core EX | #1 Web Design & Digital Marketing for Startups",
  description: "Launch your startup with Web Core EX. We provide Silicon Valley quality web design, SEO, and digital marketing at smart prices. Trusted by 150+ startups.",
};

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <TechnologyTicker />
      <Testimonials />
      <CTASection />
    </div>
  );
}
