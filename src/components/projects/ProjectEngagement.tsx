import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export const ProjectEngagement: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Vendor Engagement Summary */}
      <div className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
        <h3 className="font-heading font-bold text-2xl text-[#3D352D] border-b border-[#E8DDD0] pb-4">
          Construction Vendor Engagement
        </h3>

        <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
          The Ocean Star record confirms Chitrani Construction’s engagement as a construction vendor for a Mumbai development project. The website does not infer or publish unverified execution scope beyond the available work-order information.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <li className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] text-xs sm:text-sm font-body text-[#3D352D] font-medium flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
            <span>Verified client and project location</span>
          </li>
          <li className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] text-xs sm:text-sm font-body text-[#3D352D] font-medium flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
            <span>Verified construction-vendor role</span>
          </li>
          <li className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] text-xs sm:text-sm font-body text-[#3D352D] font-medium flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
            <span>Verified order and scheduled-completion dates</span>
          </li>
        </ul>
      </div>

      {/* Responsible Information Note */}
      <div className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-[#C96F1B] shrink-0" />
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#3D352D]">
            Project Information Presented Responsibly
          </h3>
        </div>
        <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
          The project details shown on this website are limited to verified client, location, role, work-order, and schedule information. Detailed construction scope, commercial value, progress, and project outcomes are not published without supporting documentation.
        </p>
      </div>
    </div>
  );
};
