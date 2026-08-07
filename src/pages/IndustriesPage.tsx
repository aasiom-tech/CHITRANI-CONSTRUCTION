import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { getEvidencedIndustries, getApplicabilityIndustries } from '../data/industries';
import { IndustryCard } from '../components/industries/IndustryCard';
import {
  Building2,
  Truck,
  ArrowRight,
  FileText,
  PhoneCall,
  CheckCircle2,
  Landmark,
  ShieldCheck,
  Layers,
  FileCheck
} from 'lucide-react';

export const IndustriesPage: React.FC = () => {
  const evidencedSectors = getEvidencedIndustries();
  const applicabilitySectors = getApplicabilityIndustries();

  return (
    <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen">
      <SEO
        title="Sectors & Project Applications | Chitrani Construction"
        description="Explore construction and concrete boom placer rental capabilities across residential, civil infrastructure, commercial, and contractor support sectors."
        canonical="https://chitraniconstruction.com/industries"
      />

      {/* 1. Page Header (Existing Shared PageHeader Component) */}
      <PageHeader
        badge="SECTORS & APPLICATIONS"
        title="Construction Capabilities Across Project Types"
        subtitle="Chitrani Construction’s contracting, civil, structural, masonry, workforce and concrete-placement capabilities can support different construction requirements depending on project scope, site conditions and commercial agreement."
      />

      {/* 2. Intro / Sector Positioning (White Background) */}
      <section className="py-12 sm:py-16 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
            PROJECT APPLICATIONS
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
            Capabilities Aligned to Different Construction Requirements
          </h2>
          <p className="text-base sm:text-lg text-[#6B5E4E] font-body leading-relaxed max-w-3xl mx-auto">
            Construction projects vary by building type, execution scope, workforce requirement and equipment needs. Chitrani Construction’s service structure is designed to support project-specific requirements across building, civil and contractor-led construction contexts.
          </p>
        </div>
      </section>

      {/* 3. Verified Sector Context (Soft Cream Background) */}
      <section className="py-12 sm:py-20 bg-[#F5EEE5]" aria-label="Evidenced Project Sectors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
              EVIDENCED SECTORS
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
              Primary Evidenced Sectors
            </h2>
            <p className="text-sm text-[#6B5E4E] font-body">
              Sectors supported by verified contract documentation and machinery deployment capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {evidencedSectors.map((sector, idx) => (
              <IndustryCard key={sector.id} industry={sector} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Broader Service Applications (White Background) */}
      <section className="py-12 sm:py-20 bg-[#FFFFFF]" aria-label="Applicable Construction Scope">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
              APPLICABLE PROJECT TYPES
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
              Applicable Construction Scope
            </h2>
            <p className="text-sm text-[#6B5E4E] font-body">
              Sectors where Chitrani Construction’s civil, structural, and equipment capabilities may apply based on project scope.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
            {applicabilitySectors.map((sector, idx) => (
              <IndustryCard key={sector.id} industry={sector} index={idx + 3} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Service-to-Sector Relationship (Warm Cream Background) */}
      <section className="py-12 sm:py-20 bg-[#EADBC8]/40 border-y border-[#E8DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
              CAPABILITY MATRIX
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
              Service to Sector Alignment
            </h2>
            <p className="text-sm text-[#6B5E4E] font-body">
              How core capabilities align to different project environments.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-10 rounded-[18px] border border-[#E8DDD0] shadow-xs space-y-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-body">
              <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-2">
                <h4 className="font-heading font-semibold text-[#3D352D] text-base">
                  Building & Real Estate
                </h4>
                <p className="text-xs text-[#6B5E4E] leading-relaxed">
                  Supported by Construction Contracting, RCC Structural Work, Brickwork & Blockwork, and Labour Contracting.
                </p>
              </div>

              <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-2">
                <h4 className="font-heading font-semibold text-[#3D352D] text-base">
                  Civil & Infrastructure
                </h4>
                <p className="text-xs text-[#6B5E4E] leading-relaxed">
                  Supported by Civil Construction, RCC Structural Work, and Putzmeister M42-5 Boom Placer deployment.
                </p>
              </div>

              <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-2">
                <h4 className="font-heading font-semibold text-[#3D352D] text-base">
                  Contractor Machinery Support
                </h4>
                <p className="text-xs text-[#6B5E4E] leading-relaxed">
                  Supported by Putzmeister M42-5 concrete boom placer rental with operator and helper.
                </p>
              </div>

              <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-2">
                <h4 className="font-heading font-semibold text-[#3D352D] text-base">
                  Commercial & Industrial Facilities
                </h4>
                <p className="text-xs text-[#6B5E4E] leading-relaxed">
                  Supported by Civil Execution, Foundation Pours, and High-Volume Concrete Placement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Project Discussion CTA Section (Dark Charcoal Background) */}
      <section className="py-12 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#3D352D] rounded-[18px] p-8 sm:p-14 text-white text-center space-y-6 shadow-xl max-w-4xl mx-auto">
            <div className="space-y-3">
              <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
                PROJECT ENQUIRY
              </span>
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-white tracking-tight">
                Discuss Sector Requirements
              </h2>
              <p className="text-sm sm:text-base text-[#D1C5B0] font-body leading-relaxed max-w-2xl mx-auto">
                Share your site location, project category and expected timeline so the relevant construction contracting or equipment deployment scope can be reviewed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/request-quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider transition-all shadow-md min-h-[44px] focus:outline-hidden focus:ring-2 focus:ring-white"
              >
                <FileText className="w-4 h-4" />
                <span>REQUEST A QUOTE</span>
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#F5EEE5] hover:bg-[#EADBC8] text-[#3D352D] font-heading text-xs font-semibold uppercase tracking-wider transition-all border border-[#E8DDD0] min-h-[44px] focus:outline-hidden focus:ring-2 focus:ring-white"
              >
                <PhoneCall className="w-4 h-4 text-[#C96F1B]" />
                <span>CONTACT US</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
