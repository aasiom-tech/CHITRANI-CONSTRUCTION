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
import { motion, useReducedMotion } from 'motion/react';
import { Building2, Compass, ShieldCheck } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Custom Editorial Architectural Line Graphic Visual for About Hero (NO STOCK PHOTO)
  const aboutHeroVisual = (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative p-6 sm:p-8 rounded-2xl bg-white/70 backdrop-blur-xs border border-[#E8DDD0] shadow-sm max-w-md ml-auto"
    >
      {/* Corner Bracket Accents */}
      <div className="absolute top-3 left-3 text-[#C96F1B]" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 6V2H6" stroke="currentColor" strokeWidth="2"/></svg>
      </div>
      <div className="absolute bottom-3 right-3 text-[#C96F1B]" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M18 14V18H14" stroke="currentColor" strokeWidth="2"/></svg>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#E8DDD0] pb-3">
          <div className="flex items-center gap-2 text-xs font-heading font-semibold text-[#3D352D] uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-[#C96F1B]" />
            <span>ENTERPRISE CAPABILITY</span>
          </div>
          <span className="text-[11px] font-specs font-bold text-[#C96F1B] bg-[#C96F1B]/10 px-2.5 py-0.5 rounded-md">
            MAHARASHTRA
          </span>
        </div>

        {/* Abstract Structural Linework Diagram */}
        <div className="relative py-4 my-2 border-y border-dashed border-[#E8DDD0] space-y-3">
          <div className="flex items-center justify-between text-xs font-body text-[#6B5E4E]">
            <span className="flex items-center gap-1.5 font-semibold text-[#3D352D]">
              <Compass className="w-3.5 h-3.5 text-[#C96F1B]" />
              Contracting Scope
            </span>
            <span className="font-specs text-[11px] text-[#7E7267]">Civil & Structural</span>
          </div>
          <div className="w-full bg-[#EADBC8]/60 h-1.5 rounded-full overflow-hidden">
            <motion.div
              initial={shouldReduceMotion ? false : { width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[#C96F1B] h-full rounded-full"
            />
          </div>

          <div className="flex items-center justify-between text-xs font-body text-[#6B5E4E]">
            <span className="flex items-center gap-1.5 font-semibold text-[#3D352D]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C96F1B]" />
              Equipment Rental
            </span>
            <span className="font-specs text-[11px] text-[#7E7267]">Putzmeister M42-5</span>
          </div>
          <div className="w-full bg-[#EADBC8]/60 h-1.5 rounded-full overflow-hidden">
            <motion.div
              initial={shouldReduceMotion ? false : { width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="bg-[#3D352D] h-full rounded-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] font-heading font-medium text-[#6B5E4E]">
          <span>OPERATIONAL BASE: MUMBAI / JALGAON</span>
          <span className="text-[#C96F1B] font-semibold">REGISTERED MSME</span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <SEO
        title="About Chitrani Construction | Construction Capability in Maharashtra"
        description="Learn about Chitrani Construction's construction execution, manpower coordination, equipment support, operating presence and project-focused approach in Maharashtra."
        canonicalPath="/about"
      />

      <div className="bg-[#EADBC8] space-y-0 text-[#3D352D]">
        {/* 01. Shared PageHeader with Editorial Linework Visual (No Photo) */}
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

        {/* 03. Mission and Vision */}
        <AboutMissionVision />

        {/* 04. Core Strengths */}
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
