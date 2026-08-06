import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { industriesData } from '../data/industries';
import { IndustryCard } from '../components/industries/IndustryCard';
import { IndustrySupportGrid } from '../components/industries/IndustrySupportGrid';
import { IndustryServiceLinks } from '../components/industries/IndustryServiceLinks';
import { IndustryCTA } from '../components/industries/IndustryCTA';

export const IndustriesPage: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen">
      <SEO 
        title="Industries Supported | Chitrani Construction"
        description="Explore residential, commercial, infrastructure, industrial, warehouse, institutional, and contractor-equipment project requirements that may be supported by Chitrani Construction."
        canonical="https://chitraniconstruction.com/industries"
      />

      {/* Page Header */}
      <PageHeader
        title="Construction and Equipment Support Across Project Sectors"
        subtitle="Chitrani Construction supports construction and concrete-placement requirements across selected residential, commercial, civil, industrial, institutional, and contractor-led project environments. Service suitability depends on the project scope, site conditions, schedule, and confirmed commercial requirements."
        badge="INDUSTRIES WE SUPPORT"
      />

      {/* Section 1: Industry Directory Cards Grid (White / Soft Cream Background) */}
      <section className="py-12 sm:py-16 bg-[#F5EEE5]" aria-label="Industries Directory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
              SECTOR APPLICABILITY DIRECTORY
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#3D352D] tracking-tight">
              Target Project Environments
            </h2>
            <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
              Explore the core project sectors where Chitrani Construction’s services may support client execution and machinery requirements.
            </p>
          </div>

          {/* 7 Cards Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {industriesData.map((ind, idx) => (
              <div 
                key={ind.id} 
                className={idx === 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}
              >
                <IndustryCard industry={ind} index={idx} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 2: Connected Service Support (Warm Cream Background) */}
      <section className="py-12 sm:py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IndustrySupportGrid />
        </div>
      </section>

      {/* Section 3: Project Requirement Guidance & Verified Capability Note (Soft Cream Background) */}
      <section className="py-12 sm:py-16 bg-[#F5EEE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IndustryServiceLinks />
        </div>
      </section>

      {/* Section 4: Final Request Quote CTA (Dark / Terracotta Accent) */}
      <section className="py-12 sm:py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IndustryCTA />
        </div>
      </section>

    </div>
  );
};
