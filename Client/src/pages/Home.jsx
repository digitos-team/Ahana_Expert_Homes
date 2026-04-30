import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProjectOverview } from '@/components/ProjectOverview';
import { EnquiryForm } from '@/components/EnquiryForm';
import { AboutProject } from '@/components/AboutProject';
import { Amenities } from '@/components/Amenities';
import { FloorPlans } from '@/components/FloorPlans';
import { Specifications } from '@/components/Specifications';
import { LocationMap } from '@/components/LocationMap';
import { Gallery } from '@/components/Gallery';
import { DeveloperTrust } from '@/components/DeveloperTrust';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export function Home() {
  const [showMobileForm, setShowMobileForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowMobileForm(true);
      } else {
        setShowMobileForm(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Header />
      <Hero />
      <ProjectOverview />

      <div className="relative">
        {/* Main Content */}
        <div className="w-full">
          <AboutProject />
          <Amenities />
          <FloorPlans />
          <Specifications />
          <LocationMap />
          <Gallery />
          <DeveloperTrust />
        </div>
      </div>

      <EnquiryForm />
      <FinalCTA />
      <Footer />

      {/* Mobile: Floating Call Button */}
      {showMobileForm && (
        <a
          href="tel:+919820606049"
          className="lg:hidden fixed bottom-6 right-6 z-50 bg-[#2c3820] text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-2 font-semibold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call Now
        </a>
      )}
    </div>
  );
}
