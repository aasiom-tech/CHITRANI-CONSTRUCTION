import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { getEvidencedIndustries, getApplicabilityIndustries } from '../data/industries';
import { IndustryCard } from '../components/industries/IndustryCard';
import { Reveal, SectionEyebrow, StaggerGroup, StaggerItem } from '../components/common/Motion';
import {
  FileText,
  PhoneCall
} from 'lucide-react';

export const IndustriesPage: React.FC = () => {
  const evidencedSectors = getEvidencedIndustries();
  const applicabilitySectors = getApplicabilityIndustries();

  const img1 = evidencedSectors[0]?.image;
  const img2 = evidencedSectors[1]?.image;
  const img3 = evidencedSectors[2]?.image;

  const industriesHeroVisual = (
    <div className="grid grid-cols-12 gap-2.5 max-w-md ml-auto">
      <div className="col-span-7 relative rounded-2xl overflow-hidden border border-[#E8DDD0] shadow-sm aspect-[4/5] bg-[#F5EEE5] group">
        {img1 && (
          <img
            src={img1}
            alt="Residential construction sector visual"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover filter brightness-95 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          />
        )}
        <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-heading font-semibold uppercase px-2 py-0.5 rounded-md">
          RESIDENTIAL
        </div>
      </div>

      <div className="col-span-5 flex flex-col gap-2.5">
        <div className="relative rounded-2xl overflow-hidden border border-[#E8DDD0] shadow-sm aspect-[4/3] bg-[#F5EEE5] group h-1/2">
          {img2 && (
            <img
              src={img2}
              alt="Infrastructure civil works sector visual"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover filter brightness-95 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            />
          )}
          <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] font-heading font-semibold uppercase px-2 py-0.5 rounded-md">
            CIVIL
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-[#E8DDD0] shadow-sm aspect-[4/3] bg-[#F5EEE5] group h-1/2">
          {img3 && (
            <img
              src={img3}
              alt="Industrial manufacturing sector visual"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover filter brightness-95 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            />
          )}
          <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] font-heading font-semibold uppercase px-2 py-0.5 rounded-md">
            COMMERCIAL
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen">
      <SEO
        title="Sectors & Project Applications | Chitrani Construction"
        description="Explore construction and concrete boom placer rental capabilities across residential, civil infrastructure, commercial, and contractor support sectors."
        canonical="https://chitraniconstruction.com/industries"
      />

      {/* 1. Page Header */}
      <PageHeader
        badge="SECTORS & APPLICATIONS"
        title="Construction Capabilities Across Project Types"
        subtitle="Chitrani Construction’s contracting, civil, structural, masonry, workforce and concrete-placement capabilities can support different construction requirements depending on project scope, site conditions and commercial agreement."
        accentType="industries"
        customRightVisual={industriesHeroVisual}
      />

      {/* 2. Intro / Sector Positioning (White Viewport Background) */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <SectionEyebrow badge="PROJECT APPLICATIONS" className="justify-center mb-3" />
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight mb-4">
              Capabilities Aligned to Different Construction Requirements
            </h2>
            <p className="text-base sm:text-lg text-[#6B5E4E] font-body leading-relaxed max-w-3xl mx-auto">
              Construction projects vary by building type, execution scope, workforce requirement and equipment needs. Chitrani Construction’s service structure is designed to support project-specific requirements across building, civil and contractor-led construction contexts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. Verified Sector Context (Soft Cream Viewport Background) */}
      <section className="py-16 sm:py-24 bg-[#F5EEE5] border-y border-[#E8DDD0]/70" aria-label="Evidenced Project Sectors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <SectionEyebrow badge="EVIDENCED SECTORS" className="justify-center mb-3" />
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#3D352D]">
                Primary Evidenced Sectors
              </h2>
              <p className="text-sm sm:text-base text-[#6B5E4E] font-body mt-2">
                Sectors supported by verified contract documentation and machinery deployment capabilities.
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {evidencedSectors.map((sector, idx) => (
              <StaggerItem key={sector.id} className="h-full">
                <IndustryCard industry={sector} index={idx} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 4. Broader Service Applications (White Viewport Background) */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF]" aria-label="Applicable Construction Scope">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <SectionEyebrow badge="APPLICABLE PROJECT TYPES" className="justify-center mb-3" />
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#3D352D]">
                Applicable Construction Scope
              </h2>
              <p className="text-sm sm:text-base text-[#6B5E4E] font-body mt-2">
                Sectors where Chitrani Construction’s civil, structural, and equipment capabilities may apply based on project scope.
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
            {applicabilitySectors.map((sector, idx) => (
              <StaggerItem key={sector.id} className="h-full">
                <IndustryCard industry={sector} index={idx + 3} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 5. Service-to-Sector Relationship (Warm Cream Viewport Background) */}
      <section className="py-16 sm:py-24 bg-[#EADBC8]/40 border-y border-[#E8DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <SectionEyebrow badge="CAPABILITY MATRIX" className="justify-center mb-3" />
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#3D352D]">
                Service to Sector Alignment
              </h2>
              <p className="text-sm sm:text-base text-[#6B5E4E] font-body mt-2">
                How core capabilities align to different project environments.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E8DDD0] shadow-sm space-y-6 max-w-4xl mx-auto">
            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm font-body">
              <StaggerItem>
                <div className="p-5 bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] space-y-2 hover:border-[#C96F1B]/40 transition-colors">
                  <h4 className="font-heading font-semibold text-[#3D352D] text-base">
                    Building & Real Estate
                  </h4>
                  <p className="text-xs text-[#6B5E4E] leading-relaxed">
                    Supported by Construction Contracting, RCC Structural Work, Brickwork & Blockwork, and Labour Contracting.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-5 bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] space-y-2 hover:border-[#C96F1B]/40 transition-colors">
                  <h4 className="font-heading font-semibold text-[#3D352D] text-base">
                    Civil & Infrastructure
                  </h4>
                  <p className="text-xs text-[#6B5E4E] leading-relaxed">
                    Supported by Civil Construction, RCC Structural Work, and Putzmeister M42-5 Boom Placer deployment.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-5 bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] space-y-2 hover:border-[#C96F1B]/40 transition-colors">
                  <h4 className="font-heading font-semibold text-[#3D352D] text-base">
                    Contractor Machinery Support
                  </h4>
                  <p className="text-xs text-[#6B5E4E] leading-relaxed">
                    Supported by Putzmeister M42-5 concrete boom placer rental with operator and helper.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-5 bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] space-y-2 hover:border-[#C96F1B]/40 transition-colors">
                  <h4 className="font-heading font-semibold text-[#3D352D] text-base">
                    Commercial & Industrial Facilities
                  </h4>
                  <p className="text-xs text-[#6B5E4E] leading-relaxed">
                    Supported by Civil Execution, Foundation Pours, and High-Volume Concrete Placement.
                  </p>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </Reveal>
        </div>
      </section>

      {/* 6. Project Discussion CTA Section (Dark Charcoal Background) */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="bg-[#3D352D] rounded-3xl p-8 sm:p-16 text-white text-center space-y-8 shadow-xl max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C96F1B]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <SectionEyebrow badge="PROJECT ENQUIRY" className="justify-center mb-1 text-[#C96F1B]" />
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                Discuss Sector Requirements
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#D1C5B0] font-body leading-relaxed max-w-2xl mx-auto">
                Share your site location, project category and expected timeline so the relevant construction contracting or equipment deployment scope can be reviewed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
              <Link
                to="/request-quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-md min-h-[44px] focus:outline-hidden focus:ring-2 focus:ring-white"
              >
                <FileText className="w-4 h-4" />
                <span>REQUEST A QUOTE</span>
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#F5EEE5] hover:bg-[#EADBC8] text-[#3D352D] font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all border border-[#E8DDD0] min-h-[44px] focus:outline-hidden focus:ring-2 focus:ring-white"
              >
                <PhoneCall className="w-4 h-4 text-[#C96F1B]" />
                <span>CONTACT US</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
