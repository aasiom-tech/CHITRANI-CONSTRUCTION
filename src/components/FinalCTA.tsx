import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, ArrowRight, Phone } from 'lucide-react';
import { companyConfig } from '../config/companyConfig';

export const FinalCTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 sm:py-28 bg-white text-[#2D2D2D] border-t border-[#E7E7E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] bg-[#F9F7F2] border border-[#E7E7E7] text-[#FFB300]">
          <HardHat className="w-4 h-4 text-[#FFB300]" />
          <span className="font-heading text-xs font-bold tracking-wider uppercase text-[#2D2D2D]">
            PROJECT & EQUIPMENT ENQUIRIES
          </span>
        </div>

        <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#2D2D2D] tracking-tight max-w-3xl mx-auto leading-tight">
          Have a Project or Equipment Requirement?
        </h2>

        <p className="text-sm sm:text-base text-[#5D5D5D] max-w-2xl mx-auto font-body leading-relaxed">
          Share your construction-contracting or concrete boom placer requirement with Chitrani Construction. The team will review your site, schedule and service needs before preparing a relevant proposal.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Link
            to="/request-quote"
            className="w-full sm:w-auto px-8 py-3.5 rounded-[12px] bg-[#FFB300] hover:bg-[#E59A00] text-[#2D2D2D] font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-[#FFB300]"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4 text-[#2D2D2D]" />
          </Link>

          <a
            href={`tel:${companyConfig.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-3.5 rounded-[12px] bg-white border-2 border-[#FFB300] text-[#2D2D2D] hover:bg-[#FFB300] hover:text-[#2D2D2D] font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all focus:outline-hidden focus:ring-2 focus:ring-[#FFB300]"
          >
            <Phone className="w-4 h-4 text-[#2D2D2D]" />
            <span>Call Us</span>
          </a>
        </div>

      </div>
    </section>
  );
};
