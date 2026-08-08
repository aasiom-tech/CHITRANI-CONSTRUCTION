import React from 'react';
import { HardHat } from 'lucide-react';
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
                Construction Execution and Equipment Support Through One Enterprise
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-4 text-sm sm:text-base text-[#6B5E4E] leading-relaxed font-body">
                <p>
                  Chitrani Construction is a Maharashtra-based construction and construction-equipment support enterprise operating in the Mumbai construction market.
                </p>
                <p>
                  The company supports building, civil and concrete-intensive project requirements through two connected capabilities: construction contracting and concrete boom placer rental.
                </p>
                <p>
                  This combination allows clients to coordinate construction requirements, machinery deployment and operating manpower through a single business relationship.
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
                  alt="Construction planning materials, safety equipment and structural site activity representing Chitrani Construction"
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
