import React from 'react';
import { History } from 'lucide-react';

export const AboutCompanyStory: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#EADBC8] text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider">
            <History className="w-4 h-4 text-[#C96F1B]" />
            <span className="text-[#3D352D]">OUR STORY</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-heading font-semibold text-[#3D352D] tracking-tight leading-snug">
            Established to Support Reliable Construction Delivery
          </h2>

          <div className="space-y-5 text-sm sm:text-base text-[#6B5E4E] leading-relaxed font-body bg-white/80 backdrop-blur-xs p-7 sm:p-10 rounded-[20px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.04)]">
            <p>
              Chitrani Construction was established to provide dependable civil construction, infrastructure support and equipment-rental services with emphasis on quality workmanship, responsible site practices, transparent communication and project-specific coordination.
            </p>
            <p>
              The business was developed around a practical requirement within the construction sector: clients often need both organised construction support and dependable access to specialised concrete-placement equipment.
            </p>
            <p>
              By bringing these capabilities together, Chitrani Construction aims to support developers, contractors and project teams with coordinated service options suited to their site requirements.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
