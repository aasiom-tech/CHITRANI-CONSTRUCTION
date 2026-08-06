import React from 'react';
import { Target, Compass, Sparkles } from 'lucide-react';

export const AboutMissionVision: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-[#C96F1B]" />
            <span className="text-[#3D352D]">OUR PURPOSE</span>
          </div>
          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
            Mission and Vision
          </h2>
        </div>

        {/* Two Balanced Editorial Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-white p-8 sm:p-10 rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.05)] space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-[14px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center">
                <Target className="w-6 h-6 text-[#C96F1B]" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-[#3D352D]">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                To provide dependable construction execution and equipment support by combining quality-focused workmanship, appropriate machinery, trained operating manpower, transparent communication and responsible site coordination.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 sm:p-10 rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.05)] space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-[14px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center">
                <Compass className="w-6 h-6 text-[#C96F1B]" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-[#3D352D]">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                To grow as a trusted construction and equipment-support enterprise serving developers, contractors, infrastructure companies and public-sector requirements across Maharashtra.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
