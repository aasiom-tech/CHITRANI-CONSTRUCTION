import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const QuoteIntro: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-4xl font-heading font-semibold text-[#3D352D] tracking-tight">
            Tell Us What You Need
          </h2>

          <p className="text-sm sm:text-base text-[#6B5E4E] leading-relaxed font-body">
            Select whether your enquiry relates to construction contracting or concrete boom placer rental. The form will display the relevant fields for that requirement.
          </p>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] bg-[#F5EEE5] border border-[#E8DDD0] text-xs text-[#6B5E4E] font-body mx-auto">
            <ShieldCheck className="w-4 h-4 text-[#C96F1B]" />
            <span>Information submitted through this form is used only to review and respond to the enquiry.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
