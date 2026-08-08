import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, ArrowRight, Phone } from 'lucide-react';
import { companyConfig } from '../config/companyConfig';
import { Reveal, SectionEyebrow } from './common/Motion';

export const FinalCTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 sm:py-28 bg-white text-[#3D352D] border-t border-[#E8DDD0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="bg-[#C96F1B] rounded-3xl border border-[#B35E17] p-8 sm:p-16 text-center space-y-8 shadow-[0_20px_40px_rgba(201,111,27,0.22)] relative overflow-hidden max-w-5xl mx-auto">
          {/* Subtle background glow/texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            aria-hidden="true"
            style={{
              backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/15 border border-white/25 text-white mx-auto backdrop-blur-xs">
              <HardHat className="w-4 h-4 text-white" />
              <span className="font-heading text-xs font-semibold tracking-wider uppercase text-white">
                PROJECT & EQUIPMENT ENQUIRIES
              </span>
            </div>

            <h2 className="font-heading font-semibold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight max-w-3xl mx-auto leading-tight">
              Have a Project or Equipment Requirement?
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto font-body leading-relaxed">
              Share your construction-contracting or concrete boom placer requirement with Chitrani Construction. The team will review your site, schedule and service needs before preparing a relevant proposal.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Link
                to="/request-quote"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-[#F5EEE5] text-[#C96F1B] font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-white min-h-[44px]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 text-[#C96F1B]" />
              </Link>

              <a
                href={`tel:${companyConfig.phoneRaw}`}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent border-2 border-white/85 text-white hover:bg-white hover:text-[#C96F1B] font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all focus:outline-hidden focus:ring-2 focus:ring-white min-h-[44px]"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
