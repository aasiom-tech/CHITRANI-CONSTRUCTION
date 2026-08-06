import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Truck, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';

export const AboutConnectedCapabilities: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block mb-2">
            OUR BUSINESS MODEL
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
            Two Capabilities That Support Construction Requirements
          </h2>
        </div>

        {/* Editorial Connected Layout with Central Connector */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Capability Panel 1: Construction Contracting */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-10 rounded-[20px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.05)] flex flex-col justify-between space-y-6 hover:border-[rgba(201,111,27,0.55)] transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-[14px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center">
                <Building2 className="w-6 h-6 text-[#C96F1B]" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[10px] bg-[#F5EEE5] text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider">
                STRUCTURAL & CIVIL CONTRACTING
              </div>
              <h3 className="font-heading font-semibold text-2xl text-[#3D352D]">
                Construction Contracting
              </h3>
              <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                Civil and structural construction support for residential, commercial, infrastructure-linked and concrete-intensive project requirements.
              </p>

              <div className="pt-2 space-y-2">
                <span className="text-xs font-semibold text-[#3D352D] uppercase tracking-wider block font-heading">
                  Service Scope:
                </span>
                <ul className="space-y-2 text-xs text-[#6B5E4E] font-body">
                  {[
                    'Structural construction support',
                    'Civil construction requirements',
                    'Site and resource coordination',
                    'Project-specific execution planning',
                    'Public and private sector support'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8DDD0]">
              <Link
                to="/services/construction-contracting"
                className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold tracking-wider uppercase transition-all shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5"
              >
                <span>Explore Construction Contracting</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Connected Flow Badge for Desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#C96F1B] text-white shadow-lg items-center justify-center border-4 border-white">
            <RefreshCw className="w-5 h-5 text-white" />
          </div>

          {/* Capability Panel 2: Concrete Boom Placer Rental */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-10 rounded-[20px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.05)] flex flex-col justify-between space-y-6 hover:border-[rgba(201,111,27,0.55)] transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-[14px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center">
                <Truck className="w-6 h-6 text-[#C96F1B]" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[10px] bg-[#F5EEE5] text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider">
                SPECIALISED EQUIPMENT RENTAL
              </div>
              <h3 className="font-heading font-semibold text-2xl text-[#3D352D]">
                Concrete Boom Placer Rental
              </h3>
              <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                Putzmeister M42-5 concrete boom placer rental with an operator and helper for sites requiring organised, high-capacity concrete-placement support.
              </p>

              <div className="pt-2 space-y-2">
                <span className="text-xs font-semibold text-[#3D352D] uppercase tracking-wider block font-heading">
                  Equipment Specifications:
                </span>
                <ul className="space-y-2 text-xs text-[#6B5E4E] font-body">
                  {[
                    '42-metre boom reach',
                    '90 m³ capacity',
                    'Operator and helper included',
                    'One 12-hour shift',
                    '26 working days per month',
                    'Sundays excluded'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8DDD0]">
              <Link
                to="/services/concrete-boom-placer-rental"
                className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold tracking-wider uppercase transition-all shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5"
              >
                <span>View Boom Placer Rental</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
