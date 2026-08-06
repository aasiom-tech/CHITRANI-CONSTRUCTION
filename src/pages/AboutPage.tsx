import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { FinalCTA } from '../components/FinalCTA';
import { companyConfig } from '../config/companyConfig';
import capabilityImg from '../assets/images/chitrani-construction-capability.png';
import { 
  Building2, 
  Truck, 
  ShieldCheck, 
  Target, 
  Compass, 
  MapPin, 
  FileText, 
  CheckCircle2, 
  HardHat,
  Award,
  Users
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div>
      <SEO 
        title="About Chitrani Construction | Maharashtra Construction Enterprise"
        description="Learn about Chitrani Construction (Mrunali Dipak Sonawane) — leading structural contracting and Putzmeister M42-5 concrete boom placer rental enterprise in Maharashtra."
        canonical="https://chitraniconstruction.com/about"
      />

      <PageHeader
        title="About Chitrani Construction"
        subtitle="Structural civil contracting and high-capacity Putzmeister concrete boom placer rental backed by strict quality and EHS safety compliance."
        badge="ENTERPRISE PROFILE & COMPLIANCE"
      />

      {/* Editorial Section 1: Intro & Two Capabilities */}
      <section className="py-16 sm:py-24 bg-[#F5F2EB] text-[#181A1B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#242729] text-[#E3AA20] rounded-xs font-mono text-xs font-bold uppercase tracking-wider">
                <HardHat className="w-3.5 h-3.5 text-[#A9472B]" />
                <span>CORPORATE OVERVIEW</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#181A1B] leading-tight">
                Reliable Civil Contracting & Machinery Operations
              </h2>

              <p className="text-base text-[#666A6C] leading-relaxed">
                <strong>{companyConfig.name}</strong> operates as a specialized civil engineering and equipment rental enterprise under legal ownership of <strong>{companyConfig.legalName}</strong>. We deliver structural RCC building execution and Putzmeister M42-5 concrete boom placer rentals across Maharashtra.
              </p>

              {/* Two Connected Capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 bg-white border border-[#D8D4CC] rounded-xs shadow-xs space-y-2">
                  <div className="w-10 h-10 rounded-xs bg-[#181A1B] text-[#E3AA20] flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#181A1B]">Construction Contracting</h3>
                  <p className="text-xs text-[#666A6C] leading-relaxed">
                    Turnkey RCC frame construction, raft foundations, slab casting, and structural civil works for high-rise and commercial developments.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#D8D4CC] rounded-xs shadow-xs space-y-2">
                  <div className="w-10 h-10 rounded-xs bg-[#181A1B] text-[#E3AA20] flex items-center justify-center">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#181A1B]">Equipment Rental</h3>
                  <p className="text-xs text-[#666A6C] leading-relaxed">
                    Putzmeister M42-5 concrete boom placer rental complete with certified operator and helper crew for continuous concrete pours.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image Feature */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xs overflow-hidden border border-[#D8D4CC] shadow-xl bg-[#181A1B]">
                <img
                  src={capabilityImg}
                  alt="Chitrani Construction safety helmet, structural blueprints and digital building model at an active construction site"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                  className="w-full h-[360px] sm:h-[440px] object-cover object-center filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181A1B] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#242729] text-white rounded-xs border border-[#73787A]/30">
                  <div className="font-mono text-xs font-bold text-[#E3AA20] uppercase flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#A9472B]" />
                    <span>TAX COMPLIANT ENTERPRISE</span>
                  </div>
                  <p className="text-xs text-[#D9D7D1] mt-1 font-mono">
                    GSTIN: {companyConfig.gstin}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Editorial Section 2: Factual Capability Highlights (No Fake Numbers) */}
      <section className="py-16 bg-[#181A1B] text-white border-y border-[#242729]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="font-mono text-xs text-[#E3AA20] font-bold uppercase tracking-widest block">
              [AUTHENTIC HIGHLIGHTS]
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Core Enterprise Pillars
            </h2>
            <p className="text-sm text-[#D9D7D1]">
              Verified commercial credentials and operational capabilities across Maharashtra.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyConfig.highlights.map((highlight, idx) => (
              <div 
                key={idx}
                className="bg-[#242729] p-6 rounded-xs border border-[#73787A]/30 space-y-3 hover:border-[#A9472B] transition-colors"
              >
                <div className="w-8 h-8 rounded-xs bg-[#181A1B] border border-[#73787A]/40 text-[#E3AA20] flex items-center justify-center font-mono text-xs font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  {highlight.title}
                </h3>
                <p className="text-xs text-[#D9D7D1] leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Editorial Section 3: Legal Business Information & Offices */}
      <section className="py-16 bg-[#F5F2EB] text-[#181A1B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Legal Information Panel */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xs border border-[#D8D4CC] space-y-6 shadow-xs">
              <div className="flex items-center gap-2 border-b border-[#D8D4CC] pb-4">
                <FileText className="w-5 h-5 text-[#A9472B]" />
                <h3 className="font-heading font-bold text-xl text-[#181A1B]">
                  Legal & Registration Details
                </h3>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="p-3 bg-[#F5F2EB] rounded-xs space-y-1">
                  <span className="text-[#666A6C] text-[10px] uppercase block">[TRADE NAME]:</span>
                  <span className="font-bold text-[#181A1B] text-sm">{companyConfig.name}</span>
                </div>

                <div className="p-3 bg-[#F5F2EB] rounded-xs space-y-1">
                  <span className="text-[#666A6C] text-[10px] uppercase block">[LEGAL PROPRIETOR]:</span>
                  <span className="font-bold text-[#181A1B] text-sm">{companyConfig.legalName}</span>
                </div>

                <div className="p-3 bg-[#F5F2EB] rounded-xs space-y-1">
                  <span className="text-[#666A6C] text-[10px] uppercase block">[GSTIN REGISTRATION]:</span>
                  <span className="font-bold text-[#A9472B] text-sm">{companyConfig.gstin}</span>
                </div>

                <div className="p-3 bg-[#F5F2EB] rounded-xs space-y-1">
                  <span className="text-[#666A6C] text-[10px] uppercase block">[PRIMARY CONTACT]:</span>
                  <span className="font-bold text-[#181A1B] text-sm">{companyConfig.phone} • {companyConfig.email}</span>
                </div>
              </div>
            </div>

            {/* Offices Panel */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xs border border-[#D8D4CC] space-y-6 shadow-xs">
              <div className="flex items-center gap-2 border-b border-[#D8D4CC] pb-4">
                <MapPin className="w-5 h-5 text-[#A9472B]" />
                <h3 className="font-heading font-bold text-xl text-[#181A1B]">
                  Operating & Registered Offices
                </h3>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="p-4 bg-[#F5F2EB] rounded-xs space-y-1">
                  <span className="text-[#A9472B] font-bold text-[11px] uppercase block">
                    Operating Office (Mumbai):
                  </span>
                  <p className="text-[#181A1B] leading-relaxed">
                    {companyConfig.operatingOffice}
                  </p>
                </div>

                <div className="p-4 bg-[#F5F2EB] rounded-xs space-y-1">
                  <span className="text-[#A9472B] font-bold text-[11px] uppercase block">
                    Registered Office (Jalgaon):
                  </span>
                  <p className="text-[#181A1B] leading-relaxed">
                    {companyConfig.registeredOffice}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Editorial Section 4: Mission, Vision, Safety & Quality Commitment */}
      <section className="py-16 bg-[#242729] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-6 sm:p-8 bg-[#181A1B] rounded-xs border border-[#73787A]/30 space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#242729] border border-[#73787A]/30 text-[#E3AA20] flex items-center justify-center">
                <Target className="w-5 h-5 text-[#A9472B]" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">Our Mission</h3>
              <p className="text-sm text-[#D9D7D1] leading-relaxed">
                To deliver dependable structural civil contracting and high-capacity equipment rental on schedule, ensuring zero slump delay, high structural concrete strength, and complete transparency.
              </p>
            </div>

            {/* Vision */}
            <div className="p-6 sm:p-8 bg-[#181A1B] rounded-xs border border-[#73787A]/30 space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#242729] border border-[#73787A]/30 text-[#E3AA20] flex items-center justify-center">
                <Compass className="w-5 h-5 text-[#A9472B]" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">Our Vision</h3>
              <p className="text-sm text-[#D9D7D1] leading-relaxed">
                To serve as a trusted contracting and machinery partner for major real estate developers, government infrastructure authorities, and main contractors across Maharashtra.
              </p>
            </div>
          </div>

          {/* What Sets Us Apart & Safety */}
          <div className="p-6 sm:p-8 bg-[#181A1B] rounded-xs border border-[#73787A]/30 space-y-6">
            <h3 className="font-heading font-bold text-xl text-white flex items-center gap-2 border-b border-[#242729] pb-4">
              <Award className="w-5 h-5 text-[#E3AA20]" />
              <span>What Sets Chitrani Construction Apart</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
              <div className="space-y-1">
                <div className="text-[#E3AA20] font-bold uppercase flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A9472B]" />
                  <span>Experienced Operator Crew</span>
                </div>
                <p className="text-[#D9D7D1] text-[11px] leading-relaxed">
                  Boom placer rentals include skilled operator and maintenance helper to ensure smooth site operations.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-[#E3AA20] font-bold uppercase flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A9472B]" />
                  <span>Strict EHS & Quality</span>
                </div>
                <p className="text-[#D9D7D1] text-[11px] leading-relaxed">
                  Daily safety toolbox talks, mandatory PPE enforcement, and slump testing on all concrete pours.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-[#E3AA20] font-bold uppercase flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A9472B]" />
                  <span>Fast Mobilization</span>
                </div>
                <p className="text-[#D9D7D1] text-[11px] leading-relaxed">
                  Direct dispatch from operating hubs in Mumbai and Jalgaon for rapid site setup.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <FinalCTA />
    </div>
  );
};
