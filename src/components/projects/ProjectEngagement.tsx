import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export const ProjectEngagement: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Portfolio Governance & Responsible Information Note */}
      <div className="bg-white rounded-[20px] border border-[#E8DDD0] p-6 sm:p-8 space-y-5 shadow-[0_10px_30px_rgba(61,53,45,0.04)]">
        <div className="flex items-center gap-3 border-b border-[#E8DDD0] pb-4">
          <ShieldCheck className="w-6 h-6 text-[#C96F1B] shrink-0" />
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#3D352D]">
            Project & Engagement Disclosures
          </h3>
        </div>

        <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
          Chitrani Construction maintains strict factual integrity across all published project and equipment engagement listings:
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          <li className="p-4 bg-[#F5EEE5]/70 rounded-xl border border-[#E8DDD0] text-xs font-body text-[#3D352D] font-medium flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
            <span>Documented project engagements are verified with formal client records.</span>
          </li>
          <li className="p-4 bg-[#F5EEE5]/70 rounded-xl border border-[#E8DDD0] text-xs font-body text-[#3D352D] font-medium flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
            <span>Quotation-stage requirements clearly state client proposal status.</span>
          </li>
          <li className="p-4 bg-[#F5EEE5]/70 rounded-xl border border-[#E8DDD0] text-xs font-body text-[#3D352D] font-medium flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
            <span>Commercial rates, internal terms, and financial values remain strictly confidential.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
