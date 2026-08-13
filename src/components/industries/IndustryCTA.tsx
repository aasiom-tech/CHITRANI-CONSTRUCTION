import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';

export const IndustryCTA: React.FC = () => {
  return (
    <div className="bg-[#F5EEE5] rounded-[18px] p-8 sm:p-12 text-[#3D352D] text-center space-y-6 border border-[#E8DDD0] shadow-lg">
      <div className="max-w-2xl mx-auto space-y-3">
        <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
          COMMERCIAL CONSULTATION
        </span>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#3D352D]">
          Discuss Your Project or Equipment Requirement
        </h2>
        <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
          Share your construction, concrete-placement, location, schedule, and equipment requirements for review by Chitrani Construction.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/request-quote"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider transition-all shadow-md"
        >
          <FileText className="w-4 h-4" />
          <span>Request a Quote</span>
        </Link>

        <Link
          to="/services"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white hover:bg-[#EADBC8] text-[#3D352D] font-heading text-xs font-bold uppercase tracking-wider transition-all border border-[#E8DDD0]"
        >
          <span>Explore Services</span>
          <ArrowRight className="w-4 h-4 text-[#C96F1B]" />
        </Link>
      </div>
    </div>
  );
};
