import React from 'react';
import { SEO } from '../components/common/SEO';
import { Hero } from '../components/Hero';
import { CompanyIntroPreview } from '../components/home/CompanyIntroPreview';
import { CoreServicesPreview } from '../components/home/CoreServicesPreview';
import { FeaturedProjectSection } from '../components/home/FeaturedProjectSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FeaturedEquipmentSection } from '../components/home/FeaturedEquipmentSection';
import { ExecutionProcessSection } from '../components/home/ExecutionProcessSection';
import { SafetyQualitySection } from '../components/home/SafetyQualitySection';
import { FinalCTA } from '../components/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Chitrani Construction | Construction & Boom Placer Support in Maharashtra"
        description="Chitrani Construction supports RCC, civil construction, brickwork, labour requirements and concrete boom placer rental for project requirements in Maharashtra."
        canonicalPath="/"
      />

      <div className="bg-[#EADBC8] space-y-0 text-[#3D352D]">
        
        {/* 01. Hero & Capability Strip */}
        <Hero />

        {/* 03. About Chitrani Summary */}
        <CompanyIntroPreview />

        {/* 04. Core Services */}
        <CoreServicesPreview />

        {/* 05. Featured Project */}
        <FeaturedProjectSection />

        {/* 06. Why Chitrani */}
        <WhyChooseUs />

        {/* 07. Equipment / Boom Placer */}
        <FeaturedEquipmentSection />

        {/* 08. How We Execute Projects */}
        <ExecutionProcessSection />

        {/* 09. Safety & Quality */}
        <SafetyQualitySection />

        {/* 10. Project Enquiry CTA */}
        <FinalCTA />

      </div>
    </>
  );
};
