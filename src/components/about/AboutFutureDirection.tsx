import React from 'react';
import { TrendingUp } from 'lucide-react';

export const AboutFutureDirection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4 text-[#C96F1B]" />
            <span className="text-[#3D352D]">LOOKING AHEAD</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-heading font-semibold text-[#3D352D] tracking-tight leading-snug">
            Building Capability for Future Construction Requirements
          </h2>

          <div className="space-y-5 text-sm sm:text-base text-[#6B5E4E] leading-relaxed font-body bg-[#F5EEE5]/60 p-7 sm:p-10 rounded-[20px] border border-[#E8DDD0]">
            <p>
              Chitrani Construction aims to strengthen its construction-support capabilities, improve equipment coordination, adopt practical digital tools and expand its ability to serve construction requirements across Maharashtra.
            </p>
            <p>
              The company’s future direction is centred on responsible growth, better project communication, modern equipment support and long-term relationships with developers, contractors and infrastructure companies.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
