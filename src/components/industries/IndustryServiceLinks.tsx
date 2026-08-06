import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList, ShieldCheck, ArrowRight } from 'lucide-react';

export const IndustryServiceLinks: React.FC = () => {
  const guidanceItems = [
    'Project type',
    'Project location',
    'Required service',
    'Expected start date',
    'Estimated duration',
    'Site access conditions',
    'Shift requirement',
    'Concrete-placement requirement, where applicable',
    'Equipment requirement, where applicable',
    'Client-provided site arrangements'
  ];

  return (
    <div className="space-y-8">
      {/* Project Requirement Guidance */}
      <div className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
        <div className="flex items-center gap-3 border-b border-[#E8DDD0] pb-4">
          <ClipboardList className="w-6 h-6 text-[#C96F1B] shrink-0" />
          <h3 className="font-heading font-bold text-2xl text-[#3D352D]">
            Information That Helps Us Review Your Requirement
          </h3>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-body text-[#3D352D]">
          {guidanceItems.map((item, idx) => (
            <li key={idx} className="p-3 bg-[#F5EEE5] rounded-lg border border-[#E8DDD0] flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C96F1B]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="pt-2 flex justify-start">
          <Link
            to="/request-quote"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
          >
            <span>Share Project Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Verified Capability Transparency Note */}
      <div className="bg-[#F5EEE5] rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-[#C96F1B] shrink-0" />
          <h4 className="font-heading font-bold text-lg text-[#3D352D]">
            Capabilities Presented Without Unsupported Claims
          </h4>
        </div>
        <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
          The industries listed on this page describe project environments where Chitrani Construction’s verified service capabilities may be relevant. They should not be interpreted as a claim that the company has completed a published project in every listed sector.
        </p>
      </div>
    </div>
  );
};
