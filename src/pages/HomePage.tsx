import React from 'react';
import { SEO } from '../components/common/SEO';
import { Hero } from '../components/Hero';
import { CompanyIntroPreview } from '../components/home/CompanyIntroPreview';
import { BusinessAreas } from '../components/BusinessAreas';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CoreServicesPreview } from '../components/home/CoreServicesPreview';
import { FeaturedProjectSection } from '../components/home/FeaturedProjectSection';
import { FeaturedEquipmentSection } from '../components/home/FeaturedEquipmentSection';
import { IndustriesPreviewSection } from '../components/home/IndustriesPreviewSection';
import { SafetyQualitySection } from '../components/home/SafetyQualitySection';
import { FinalCTA } from '../components/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Chitrani Construction | Construction & Boom Placer Rental"
        description="Chitrani Construction provides civil and structural construction support and Putzmeister M42-5 concrete boom placer rental with an operator and helper for projects in Maharashtra."
        canonical="https://chitraniconstruction.com/"
      />

      <div className="bg-[#EADBC8] space-y-0 text-[#3D352D]">
        
        {/* 1. Hero */}
        <Hero />

        {/* 2. Company Introduction */}
        <CompanyIntroPreview />

        {/* 3. Two Core Capabilities */}
        <BusinessAreas />

        {/* 4. Why Chitrani */}
        <WhyChooseUs />

        {/* 5. Core Services Preview */}
        <CoreServicesPreview />

        {/* 6. Featured Project */}
        <FeaturedProjectSection />

        {/* 7. Featured Equipment */}
        <FeaturedEquipmentSection />

        {/* 8. Industries We Serve Preview */}
        <IndustriesPreviewSection />

        {/* 9. Safety and Quality Preview */}
        <SafetyQualitySection />

        {/* 10. Final Enquiry CTA */}
        <FinalCTA />

      </div>
    </>
  );
};
