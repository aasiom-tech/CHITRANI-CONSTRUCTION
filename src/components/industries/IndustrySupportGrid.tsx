import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Truck, ArrowRight } from 'lucide-react';

export const IndustrySupportGrid: React.FC = () => {
  return (
    <div className="bg-[#EADBC8]/40 rounded-[18px] border border-[#E8DDD0] p-6 sm:p-10 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <div className="max-w-3xl space-y-2">
        <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
          SERVICE ALIGNMENT
        </span>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352D]">
          Matching Services to Project Requirements
        </h2>
        <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
          Industry type alone does not determine the final service scope. Chitrani Construction reviews project location, site access, construction requirements, equipment needs, requested dates, shift conditions, and commercial responsibilities before confirming support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* Panel 1 */}
        <div className="bg-white p-6 rounded-xl border border-[#E8DDD0] space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#3D352D]">
              Construction Contracting
            </h3>
            <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
              Structural and civil construction support for project-specific requirements.
            </p>
          </div>

          <Link
            to="/services/construction-contracting"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold text-[#C96F1B] hover:text-[#B35E17] uppercase tracking-wider transition-colors pt-2"
          >
            <span>Explore Contracting Support</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Panel 2 */}
        <div className="bg-white p-6 rounded-xl border border-[#E8DDD0] space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#3D352D]">
              Concrete Boom Placer Rental
            </h3>
            <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
              Putzmeister M42-5 rental with operator and helper for high-capacity concrete-placement requirements.
            </p>
          </div>

          <Link
            to="/services/concrete-boom-placer-rental"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold text-[#C96F1B] hover:text-[#B35E17] uppercase tracking-wider transition-colors pt-2"
          >
            <span>Explore Rental Support</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
