import React from 'react';
import { Building2, Info, FileText } from 'lucide-react';

interface ProjectOverviewProps {
  image: string;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ image }) => {
  const altText = "Representative high-rise construction project visual for the Ocean Star engagement";

  return (
    <div className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-3 border-b border-[#E8DDD0] pb-4">
        <div className="w-10 h-10 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
          <Building2 className="w-5 h-5" />
        </div>
        <div>
          <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
            PROJECT OVERVIEW
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
            Ocean Star Vendor Engagement
          </h2>
        </div>
      </div>

      <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
        Chitrani Construction is documented as a construction vendor for the Ocean Star development at Kashinath Dhuru Marg, Mumbai.
      </p>

      {/* Image Container with Visible Representative Label */}
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-[#E8DDD0] bg-[#F5EEE5]">
        <img
          src={image}
          alt={altText}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 right-3 bg-[#3D352D]/90 backdrop-blur-xs px-3 py-1.5 rounded-md border border-white/20 text-xs font-heading text-white flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-[#C96F1B]" />
          <span>Representative project visual</span>
        </div>
      </div>

      {/* Safe Documented Scope Notice */}
      <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] text-xs sm:text-sm font-body text-[#6B5E4E] flex items-start gap-3">
        <FileText className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
        <div>
          <strong className="text-[#3D352D] block font-heading uppercase text-xs">Scope Documentation Notice:</strong>
          <span>Construction vendor engagement — detailed itemised scope not available in the current public project record.</span>
        </div>
      </div>
    </div>
  );
};
