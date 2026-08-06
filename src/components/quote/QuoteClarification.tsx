import React from 'react';
import { Info } from 'lucide-react';

export const QuoteClarification: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#F5EEE5] text-[#3D352D] border-t border-[#E8DDD0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.04)] flex items-start gap-4">
          <div className="w-10 h-10 rounded-[12px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-5 h-5 text-[#C96F1B]" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm font-body text-[#6B5E4E]">
            <strong className="block font-heading font-semibold text-[#3D352D] text-sm sm:text-base">
              Commercial Quotation Policy
            </strong>
            <p className="leading-relaxed">
              Quotations provided by Chitrani Construction are prepared based on project site location, technical scope, machinery access and schedule requirements. Final commercial terms, mobilisation schedules, operator provisions and responsibilities are formally confirmed in the written agreement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
