import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { companyConfig } from '../config/companyConfig';

export const ClientConfidence: React.FC = () => {
  return (
    <section id="confidence" className="py-16 sm:py-20 bg-white text-[#2D2D2D] border-t border-[#E7E7E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#F9F7F2] rounded-[20px] p-6 sm:p-10 border border-[#E7E7E7] shadow-[0_15px_35px_rgba(0,0,0,0.08)] relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E7E7E7] shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#FFB300]" />
              <span className="font-display text-xs text-[#2D2D2D] font-bold tracking-wider uppercase">
                CONTRACTOR RELIABILITY & QUALITY STANDARDS
              </span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#2D2D2D] tracking-tight">
              Built to Satisfy Corporate & Government Standards
            </h2>

            <p className="text-sm sm:text-base text-[#5D5D5D] font-body leading-relaxed">
              At {companyConfig.name}, we prioritize contractual compliance, financial seriousness, zero-accident safety records, and technical documentation required by institutional clients and public tenders.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E7E7E7] text-xs font-body">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFB300] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2D2D2D] block font-heading text-sm">Concrete Cube Testing Protocol</strong>
                  <span className="text-[#5D5D5D]">Mandatory 7-day and 28-day compressive strength lab test reports provided for all pours.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFB300] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2D2D2D] block font-heading text-sm">Equipment Fitness Certificates</strong>
                  <span className="text-[#5D5D5D]">Hydraulic safety inspection reports and third-party fitness checks maintained for heavy machinery.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFB300] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2D2D2D] block font-heading text-sm">EHS Site Enforcement</strong>
                  <span className="text-[#5D5D5D]">Mandatory hard hats, safety harnesses, high-visibility vests, and weekly toolbox safety meetings.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFB300] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2D2D2D] block font-heading text-sm">GSTIN Compliant Billing</strong>
                  <span className="text-[#5D5D5D]">Fully GST compliant (27CLUPB6299K2Z6) with transparent itemized invoicing and milestone verification.</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
