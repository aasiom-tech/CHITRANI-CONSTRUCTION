import React from 'react';
import { HardHat } from 'lucide-react';
import aboutImage from '../../assets/images/construction-company-about.webp';

export const AboutCompanyOverview: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider">
              <HardHat className="w-4 h-4 text-[#C96F1B]" />
              <span className="text-[#3D352D]">COMPANY OVERVIEW</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-heading font-semibold text-[#3D352D] tracking-tight leading-snug">
              Project Execution and Machinery Support Across Maharashtra
            </h2>

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
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[20px] overflow-hidden border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.06)] bg-white aspect-[4/3] sm:aspect-auto">
              <img 
                src={aboutImage} 
                alt="Chitrani Construction site planning, safety equipment, blueprints and engineering tools"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
                className="w-full h-[300px] sm:h-[400px] lg:h-[440px] object-cover object-center filter brightness-95"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
