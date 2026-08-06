import React from 'react';
import { MapPin, Building2 } from 'lucide-react';
import { companyConfig } from '../../config/companyConfig';

export const ContactOffices: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block mb-2">
            CORPORATE PRESENCE
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
            Office Locations
          </h2>
        </div>

        {/* Two Balanced Address Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Mumbai Operating Office */}
          <div className="bg-white p-8 rounded-[20px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.05)] space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[12px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#C96F1B]" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-[#3D352D]">
                Mumbai Operating Office
              </h3>
            </div>

            <address className="not-italic text-sm text-[#3D352D] font-body leading-relaxed p-4 bg-[#F5EEE5] rounded-[12px] border border-[#E8DDD0] block font-semibold">
              {companyConfig.operatingOffice}
            </address>

            <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
              Supports client communication, quotations, construction enquiries and equipment-rental coordination.
            </p>
          </div>

          {/* Jalgaon Registered Office */}
          <div className="bg-white p-8 rounded-[20px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.05)] space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[12px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#C96F1B]" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-[#3D352D]">
                Jalgaon Registered Office
              </h3>
            </div>

            <address className="not-italic text-sm text-[#3D352D] font-body leading-relaxed p-4 bg-[#F5EEE5] rounded-[12px] border border-[#E8DDD0] block font-semibold">
              {companyConfig.registeredOffice}
            </address>

            <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
              Registered principal place of business under the company’s GST registration.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
