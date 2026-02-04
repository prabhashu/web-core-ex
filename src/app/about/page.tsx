import AboutHero from '@/components/about/AboutHero';
import TimelineSection from '@/components/about/TimelineSection';
import MissionSection from '@/components/about/MissionSection';
import ValuesSection from '@/components/about/ValuesSection';
import TeamSection from '@/components/about/TeamSection';
import WhyChooseUsSection from '@/components/about/WhyChooseUsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Web Core EX | Trusted Tech Partner for US, UK & Global Startups",
  description: "Meet the team behind Web Core EX. We provide Silicon Valley-grade web development and marketing to startups in the USA, UK, Canada, and Australia at smart prices."
};

export default function Page() {
  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <AboutHero />
            <TimelineSection />
            <MissionSection />
            <ValuesSection />
            <TeamSection />
            <WhyChooseUsSection />
        </div>
    </div>
  );
}
