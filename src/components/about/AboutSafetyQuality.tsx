import React from 'react';
import { ShieldCheck, CheckCircle2, Info } from 'lucide-react';

export const AboutSafetyQuality: React.FC = () => {
  const points = [
    'PPE usage and site-safety awareness',
    'Site supervision and workforce coordination',
    'Quality inspections',
    'Preventive machinery maintenance',
    'Responsible equipment deployment',
    'Documented project communication'
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F5EEE5] text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block mb-2">
            RESPONSIBLE SITE PRACTICES
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
            Safety and Quality in Site Coordination
          </h2>
        </div>

        {/* Main Content Box */}
        <div className="bg-white rounded-[20px] border border-[#E8DDD0] p-8 sm:p-12 shadow-[0_10px_30px_rgba(61,53,45,0.05)] space-y-8 max-w-5xl mx-auto">
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-[14px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center shrink-0 mt-1">
              <ShieldCheck className="w-6 h-6 text-[#C96F1B]" />
            </div>
            <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
              Chitrani Construction emphasizes responsible site support through workforce supervision, PPE usage, equipment checks, quality inspections, preventive maintenance and communication aligned with applicable project requirements.
            </p>
          </div>

          {/* 6 Key Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {points.map((pt, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-[#F5EEE5] rounded-[12px] border border-[#E8DDD0]">
                <CheckCircle2 className="w-5 h-5 text-[#C96F1B] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#3D352D] font-body">{pt}</span>
              </div>
            ))}
          </div>

          {/* Clarification Box */}
          <div className="p-4 sm:p-5 bg-[#F5EEE5] rounded-[12px] border border-[#E8DDD0] flex items-start gap-3 text-xs text-[#6B5E4E] font-body">
            <Info className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Specific site responsibilities, PPE arrangements, safety provisions and commercial obligations are confirmed in the relevant quotation or project agreement.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
