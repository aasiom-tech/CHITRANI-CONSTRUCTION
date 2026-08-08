import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Truck, ArrowRight } from 'lucide-react';
import { Reveal, SectionEyebrow } from '../common/Motion';

export const CoreServicesPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F5EEE5] text-[#3D352D] border-b border-[#E8DDD0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <SectionEyebrow badge="CONTRACTING & RENTAL CAPABILITIES" className="mb-2" />
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
              Our Core Services
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#F5EEE5] text-[#3D352D] font-heading text-xs font-semibold uppercase tracking-wider border border-[#E8DDD0] transition-all w-fit shadow-xs hover:border-[#C96F1B]/60 min-h-[44px]"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-[#C96F1B]" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <Reveal delay={0.1}>
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.05)] hover:border-[#C96F1B]/60 hover:shadow-[0_20px_40px_rgba(61,53,45,0.1)] transition-all duration-300 flex flex-col justify-between group h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center group-hover:bg-[#C96F1B] group-hover:text-white transition-colors">
                    <Building2 className="w-6 h-6 text-[#C96F1B] group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-heading text-xs bg-[#F5EEE5] text-[#C96F1B] px-3.5 py-1 rounded-xl border border-[#E8DDD0] font-semibold uppercase">
                    Service 01
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-2xl text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                  Construction Contracting
                </h3>

                <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Civil and structural construction support for building, infrastructure-linked and concrete-intensive project requirements.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8DDD0]">
                <Link
                  to="/services/construction-contracting"
                  className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider transition-all shadow-sm hover:shadow-md min-h-[44px]"
                >
                  <span>View Service</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Service 2 */}
          <Reveal delay={0.2}>
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.05)] hover:border-[#C96F1B]/60 hover:shadow-[0_20px_40px_rgba(61,53,45,0.1)] transition-all duration-300 flex flex-col justify-between group h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center group-hover:bg-[#C96F1B] group-hover:text-white transition-colors">
                    <Truck className="w-6 h-6 text-[#C96F1B] group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-heading text-xs bg-[#F5EEE5] text-[#C96F1B] px-3.5 py-1 rounded-xl border border-[#E8DDD0] font-semibold uppercase">
                    Service 02
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-2xl text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                  Concrete Boom Placer Rental
                </h3>

                <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Putzmeister M42-5 rental with operator and helper for high-capacity concrete placement.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8DDD0]">
                <Link
                  to="/services/concrete-boom-placer-rental"
                  className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider transition-all shadow-sm hover:shadow-md min-h-[44px]"
                >
                  <span>View Service</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
