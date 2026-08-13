import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { AboutCompanyOverview } from '../components/about/AboutCompanyOverview';
import { SlidingAboutPanels } from '../components/about/SlidingAboutPanels';
import { AboutMissionVision } from '../components/about/AboutMissionVision';
import { AboutCoreStrengths } from '../components/about/AboutCoreStrengths';
import { AboutConnectedCapabilities } from '../components/about/AboutConnectedCapabilities';
import { AboutSafetyQuality } from '../components/about/AboutSafetyQuality';
import { AboutLegalInformation } from '../components/about/AboutLegalInformation';
import { AboutOperatingPresence } from '../components/about/AboutOperatingPresence';
import { AboutFinalCTA } from '../components/about/AboutFinalCTA';
import aboutImage from '../assets/images/construction-company-about.webp';
import { Building2, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  // Custom Editorial Visual for About Hero featuring construction-company-about.webp (No floating generic card)
  const aboutHeroVisual = (
    <div className="relative rounded-3xl overflow-hidden border border-[#E8DDD0] bg-white shadow-xl group aspect-[4/3] max-w-lg ml-auto">
      <img
        src={aboutImage}
        alt="Chitrani Construction company site planning, engineering tools and safety equipment"
        className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

      <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-[#E8DDD0] shadow-md flex items-center justify-between text-xs font-heading font-semibold text-[#3D352D]">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-[#C96F1B]" />
          <span>REGISTERED MSME ENTERPRISE</span>
        </div>
        <span className="font-specs font-bold text-[#C96F1B]">MUMBAI & JALGAON</span>
      </div>
    </div>
  );

  return (
    <>
      <SEO
        title="About Chitrani Construction | Construction Capability in Maharashtra"
        description="Learn about Chitrani Construction's construction execution, manpower coordination, equipment support, operating presence and project-focused approach in Maharashtra."
        canonicalPath="/about"
      />

      <div className="bg-[#EADBC8] space-y-0 text-[#3D352D]">
        {/* 01. Shared PageHeader with Editorial Photo Visual (No floating card) */}
        <PageHeader
          badge="ABOUT CHITRANI"
          title="Construction Capability Built Around Responsible Project Execution"
          subtitle="Chitrani Construction supports civil and structural construction execution, skilled manpower coordination and concrete boom placer rental for project-based work across Maharashtra."
          accentType="about"
          customRightVisual={aboutHeroVisual}
          breadcrumb={[{ label: 'Home', href: '/' }]}
        />

        {/* 02. Company Overview */}
        <AboutCompanyOverview />

        {/* 03. Clickable Sliding Panels (APPROVED FEATURE 3) */}
        <SlidingAboutPanels />

        {/* 04. Mission and Vision */}
        <AboutMissionVision />

        {/* 05. Core Strengths */}
        <AboutCoreStrengths />

        {/* 06. Construction Capabilities */}
        <AboutConnectedCapabilities />

        {/* 07. Areas Served / Operating Presence */}
        <AboutOperatingPresence />

        {/* 08. Safety & Quality Approach */}
        <AboutSafetyQuality />

        {/* 09. Registered Business Information */}
        <AboutLegalInformation />

        {/* 10. Discuss Your Project CTA */}
        <AboutFinalCTA />
      </div>
    </>
  );
};

export default AboutPage;
