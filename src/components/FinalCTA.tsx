import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, ArrowRight, Phone } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 sm:py-28 bg-[#EADBC8] text-[#3D352D] border-t border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B]">
          <HardHat className="w-4 h-4 text-[#C96F1B]" />
          <span className="font-heading text-xs font-semibold tracking-wider uppercase">
            PROJECT & EQUIPMENT ENQUIRIES
          </span>
        </div>

        <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight max-w-3xl mx-auto leading-tight">
          Have a Project or Equipment Requirement?
        </h2>

        <p className="text-sm sm:text-base text-[#6B5E4E] max-w-2xl mx-auto font-body leading-relaxed">
          Share your construction-contracting or concrete boom placer requirement with Chitrani Construction. Our team will review your site, schedule, and service needs before preparing a relevant proposal.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Link
            to="/request-quote"
            className="w-full sm:w-auto px-8 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_10px_30px_rgba(201,111,27,0.25)] active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>

          <a
            href="tel:+919833706666"
            className="w-full sm:w-auto px-8 py-3.5 rounded-[12px] bg-transparent border border-[#C96F1B] text-[#C96F1B] hover:bg-[#C96F1B] hover:text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
          >
            <Phone className="w-4 h-4" />
            <span>Call Us</span>
          </a>
        </div>

      </div>
    </section>
  );
};
