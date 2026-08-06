import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, PhoneCall, FileText, ArrowRight } from 'lucide-react';
import { companyConfig } from '../../config/companyConfig';

export const AboutOperatingPresence: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F5EEE5] text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block mb-2">
            OUR PRESENCE
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
            Operating from Mumbai, Registered in Jalgaon
          </h2>
        </div>

        {/* Two Address Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Operating Office (Mumbai) */}
          <div className="bg-white p-8 rounded-[20px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.05)] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[12px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#C96F1B]" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-[#3D352D]">
                  Operating Office (Mumbai)
                </h3>
              </div>

              <address className="not-italic text-sm text-[#3D352D] font-body leading-relaxed p-4 bg-[#F5EEE5] rounded-[12px] border border-[#E8DDD0] block font-semibold">
                {companyConfig.operatingOffice}
              </address>

              <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                The Mumbai office supports client communication, quotations, construction enquiries and equipment-rental coordination.
              </p>
            </div>
          </div>

          {/* Registered Office (Jalgaon) */}
          <div className="bg-white p-8 rounded-[20px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.05)] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[12px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#C96F1B]" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-[#3D352D]">
                  Registered Office (Jalgaon)
                </h3>
              </div>

              <address className="not-italic text-sm text-[#3D352D] font-body leading-relaxed p-4 bg-[#F5EEE5] rounded-[12px] border border-[#E8DDD0] block font-semibold">
                {companyConfig.registeredOffice}
              </address>

              <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                The Jalgaon address is the registered principal place of business recorded under the company’s GST registration.
              </p>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-2">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5"
          >
            <PhoneCall className="w-4 h-4 text-white" />
            <span>Contact Us</span>
          </Link>

          <Link
            to="/request-quote"
            className="w-full sm:w-auto px-7 py-3.5 rounded-[12px] bg-white border-2 border-[#C96F1B] text-[#C96F1B] hover:bg-[#C96F1B] hover:text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>Request a Quote</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
