import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { AboutCompanyOverview } from '../components/about/AboutCompanyOverview';
import { AboutCompanyStory } from '../components/about/AboutCompanyStory';
import { AboutMissionVision } from '../components/about/AboutMissionVision';
import { AboutCoreStrengths } from '../components/about/AboutCoreStrengths';
import { AboutConnectedCapabilities } from '../components/about/AboutConnectedCapabilities';
import { AboutSafetyQuality } from '../components/about/AboutSafetyQuality';
import { AboutLegalInformation } from '../components/about/AboutLegalInformation';
import { AboutOperatingPresence } from '../components/about/AboutOperatingPresence';
import { AboutFutureDirection } from '../components/about/AboutFutureDirection';
import { AboutFinalCTA } from '../components/about/AboutFinalCTA';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Chitrani Construction | Construction & Equipment Support"
        description="Learn about Chitrani Construction, a Maharashtra-based enterprise providing civil and structural construction support and Putzmeister M42-5 boom placer rental."
        canonical="https://chitraniconstruction.com/about"
      />

      <div className="bg-[#EADBC8] space-y-0 text-[#3D352D]">
        {/* 1. Shared PageHeader */}
        <PageHeader
          badge="ABOUT CHITRANI"
          title="Construction Capability Built Around Practical Project Support"
          subtitle="Learn how Chitrani Construction combines civil and structural contracting with concrete boom placer rental to support construction requirements across Maharashtra."
          breadcrumb={[{ label: 'Home', href: '/' }]}
        />

        {/* 2. Company Overview */}
        <AboutCompanyOverview />

        {/* 3. Company Story */}
        <AboutCompanyStory />

        {/* 4. Mission and Vision */}
        <AboutMissionVision />

        {/* 5. Core Strengths */}
        <AboutCoreStrengths />

        {/* 6. Two Connected Business Capabilities */}
        <AboutConnectedCapabilities />

        {/* 7. Safety and Quality Approach */}
        <AboutSafetyQuality />

        {/* 8. Legal and Business Information */}
        <AboutLegalInformation />

        {/* 9. Operating Presence */}
        <AboutOperatingPresence />

        {/* 10. Future Direction */}
        <AboutFutureDirection />

        {/* 11. Final Enquiry CTA */}
        <AboutFinalCTA />

      </div>
    </>
  );
};

export default AboutPage;
