import React from 'react';
import { Building2 } from 'lucide-react';

interface ProjectOverviewProps {
  image: string;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ image }) => {
  const altText = "Representative urban building construction project in Mumbai";

  return (
    <div className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
          <Building2 className="w-5 h-5" />
        </div>
        <div>
          <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
            PROJECT OVERVIEW
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352D]">
            Ocean Star Project Engagement
          </h2>
        </div>
      </div>

      <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
        Chitrani Construction was engaged as a construction vendor for the Ocean Star project at Kashinath Dhuru Marg, Mumbai.
      </p>

      <div className="aspect-[16/9] rounded-xl overflow-hidden border border-[#E8DDD0]">
        <img
          src={image}
          alt={altText}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
