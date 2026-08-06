import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Truck, ArrowRight } from 'lucide-react';

export const CoreServicesPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F5EEE5] text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block mb-2">
              CONTRACTING & RENTAL CAPABILITIES
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
              Our Core Services
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] bg-white hover:bg-[#F5EEE5] text-[#3D352D] font-heading text-xs font-semibold uppercase tracking-wider border border-[#E8DDD0] transition-all w-fit shadow-xs"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-[#C96F1B]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-7 sm:p-9 rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.05)] hover:border-[rgba(201,111,27,0.55)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-[12px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center group-hover:bg-[#C96F1B] group-hover:text-white transition-colors">
                  <Building2 className="w-6 h-6 text-[#C96F1B] group-hover:text-white" />
                </div>
                <span className="font-heading text-xs bg-[#F5EEE5] text-[#C96F1B] px-3 py-1 rounded-[10px] border border-[#E8DDD0] font-semibold uppercase">
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
                className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider transition-all shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5"
              >
                <span>View Service</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-7 sm:p-9 rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.05)] hover:border-[rgba(201,111,27,0.55)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-[12px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center group-hover:bg-[#C96F1B] group-hover:text-white transition-colors">
                  <Truck className="w-6 h-6 text-[#C96F1B] group-hover:text-white" />
                </div>
                <span className="font-heading text-xs bg-[#F5EEE5] text-[#C96F1B] px-3 py-1 rounded-[10px] border border-[#E8DDD0] font-semibold uppercase">
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
                className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider transition-all shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5"
              >
                <span>View Service</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
