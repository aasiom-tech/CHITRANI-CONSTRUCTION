import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { AboutCompanyOverview } from '../components/about/AboutCompanyOverview';
import { AboutMissionVision } from '../components/about/AboutMissionVision';
import { AboutCoreStrengths } from '../components/about/AboutCoreStrengths';
import { AboutConnectedCapabilities } from '../components/about/AboutConnectedCapabilities';
import { AboutSafetyQuality } from '../components/about/AboutSafetyQuality';
import { AboutLegalInformation } from '../components/about/AboutLegalInformation';
import { AboutOperatingPresence } from '../components/about/AboutOperatingPresence';
import { AboutFinalCTA } from '../components/about/AboutFinalCTA';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Chitrani Construction | Construction Capability in Maharashtra"
        description="Learn about Chitrani Construction's construction execution, manpower coordination, equipment support, operating presence and project-focused approach in Maharashtra."
        canonicalPath="/about"
      />

      <div className="bg-[#EADBC8] space-y-0 text-[#3D352D]">
        {/* 01. Shared PageHeader */}
        <PageHeader
          badge="ABOUT CHITRANI"
          title="Construction Capability Built Around Responsible Project Execution"
          subtitle="Chitrani Construction supports civil and structural construction execution, skilled manpower coordination and concrete boom placer rental for project-based work across Maharashtra."
          breadcrumb={[{ label: 'Home', href: '/' }]}
        />

        {/* 02. Company Overview */}
        <AboutCompanyOverview />

        {/* 03. Mission and Vision */}
        <AboutMissionVision />

        {/* 04. Our Values */}
        <AboutCoreStrengths />

        {/* 05. Construction Capabilities */}
        <AboutConnectedCapabilities />

        {/* 06. Areas Served / Operating Presence */}
        <AboutOperatingPresence />

        {/* 07. Safety & Quality Approach */}
        <AboutSafetyQuality />

        {/* 08. Registered Business Information */}
        <AboutLegalInformation />

        {/* 09. Discuss Your Project CTA */}
        <AboutFinalCTA />

      </div>
    </>
  );
};

export default AboutPage;
