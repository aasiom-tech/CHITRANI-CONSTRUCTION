import React from 'react';
import { SEO } from '../components/common/SEO';
import { Hero } from '../components/Hero';
import { HeroLoopingStrip } from '../components/home/HeroLoopingStrip';
import { CompanyIntroPreview } from '../components/home/CompanyIntroPreview';
import { ScrollingFeatureCardsSection } from '../components/home/ScrollingFeatureCardsSection';
import { TerminalModularPathways } from '../components/home/TerminalModularPathways';
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

        {/* 01. Hero Section */}
        <Hero />

        {/* 02. Interactive Horizontal Looping Strip (Feature 1) */}
        <HeroLoopingStrip />

        {/* 03. About Chitrani Summary */}
        <CompanyIntroPreview />

        {/* 04. Scrolling Layered Feature Cards Section (Feature 2) */}
        <ScrollingFeatureCardsSection />

        {/* 05. Terminal-Style Modular Pathways */}
        <TerminalModularPathways />

        {/* 06. Core Services */}
        <CoreServicesPreview />

        {/* 07. Featured Project */}
        <FeaturedProjectSection />

        {/* 08. Why Chitrani */}
        <WhyChooseUs />

        {/* 09. Equipment / Boom Placer */}
        <FeaturedEquipmentSection />

        {/* 10. How We Execute Projects */}
        <ExecutionProcessSection />

        {/* 11. Safety & Quality */}
        <SafetyQualitySection />

        {/* 12. Project Enquiry CTA */}
        <FinalCTA />

      </div>
    </>
  );
};
