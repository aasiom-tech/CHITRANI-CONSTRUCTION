import React from 'react';
import aboutImage from '../../assets/images/construction-company-about.webp';
import { Reveal, SectionEyebrow } from '../common/Motion';

export const AboutCompanyOverview: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#3D352D] border-b border-[#E8DDD0] relative overflow-hidden">
      {/* Background Soft Gradient Ambient Light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C96F1B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <SectionEyebrow badge="WHO WE ARE" className="mb-2" />

              <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-heading font-semibold text-[#3D352D] tracking-tight leading-tight mb-4">
                Project Execution and Machinery Support Across Maharashtra
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-4 text-sm sm:text-base text-[#6B5E4E] leading-relaxed font-body">
                <p>
                  Chitrani Construction is a Maharashtra-based construction and equipment-support enterprise serving project requirements through civil and structural execution support, construction manpower coordination and specialised concrete boom placer rental.
                </p>
                <p>
                  We support structural packages, RCC work, masonry and concrete placement requirements for developers, general contractors and institutional project developments.
                </p>
                <p>
                  By combining skilled workforce coordination, site supervision and high-capacity equipment deployment, Chitrani Construction brings disciplined site execution under one responsible commercial relationship.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={0.2} direction="left">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8DDD0] shadow-[0_16px_36px_rgba(61,53,45,0.08)] bg-white aspect-[4/3] sm:aspect-auto group">
                <img
                  src={aboutImage}
                  alt="Chitrani Construction site planning, safety equipment, blueprints and engineering tools"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                  className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
