import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { companyConfig } from '../config/companyConfig';
import { FileCheck2, Truck, ShieldAlert, Award } from 'lucide-react';

export const TermsConditionsPage: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Terms & Conditions | Chitrani Construction"
        description="Commercial contract terms, machinery rental conditions, site mobilization, and safety rules for Chitrani Construction."
        canonical="https://chitraniconstruction.com/terms-and-conditions"
      />

      <PageHeader
        title="Terms & Conditions"
        subtitle="Commercial contract conditions, machinery rental terms, site mobilization, and safety compliance rules."
        badge="CONTRACTUAL TERMS"
      />

      <section className="py-16 bg-[#F9F7F2] text-[#2D2D2D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="bg-white p-6 sm:p-8 rounded-[20px] border border-[#E7E7E7] space-y-4 font-body text-xs sm:text-sm text-[#2D2D2D] shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-2 text-[#FFB300] font-heading font-bold uppercase text-xs mb-2">
              <FileCheck2 className="w-5 h-5 text-[#FFB300]" />
              <span>Standard Contract Terms</span>
            </div>

            <p className="leading-relaxed text-[#5D5D5D]">
              These Terms & Conditions govern all civil construction contracts and equipment rental agreements executed by <strong>{companyConfig.name}</strong>.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-[20px] border border-[#E7E7E7] space-y-4 shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
            <h2 className="text-xl font-heading font-bold text-[#2D2D2D] flex items-center gap-2 border-b border-[#E7E7E7] pb-3">
              <Truck className="w-5 h-5 text-[#FFB300]" />
              <span>1. Equipment Rental & Machinery Dispatch</span>
            </h2>

            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-[#2D2D2D] font-body">
              <li><strong>Operator Inclusion:</strong> Putzmeister M42-5 Concrete Boom Placer is dispatched with a certified operator and maintenance helper.</li>
              <li><strong>Site Readiness:</strong> Hirers must ensure unhindered site access, firm ground compaction, and safe electrical clearances before boom unfolding.</li>
              <li><strong>Rental Billing:</strong> Rental rates are calculated per shift or per monthly agreement as specified in the formal purchase order.</li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-[20px] border border-[#E7E7E7] space-y-4 shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
            <h2 className="text-xl font-heading font-bold text-[#2D2D2D] flex items-center gap-2 border-b border-[#E7E7E7] pb-3">
              <Award className="w-5 h-5 text-[#FFB300]" />
              <span>2. Civil Contracting Execution</span>
            </h2>

            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-[#2D2D2D] font-body">
              <li><strong>BOQ & Milestone Approval:</strong> Work progresses according to signed Bill of Quantities and milestone schedules.</li>
              <li><strong>Quality Inspections:</strong> Concrete pours, rebar inspections, and cube tests follow standard IS code specifications.</li>
              <li><strong>Variations & Changes:</strong> Scope changes outside original tender contracts require written change orders.</li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-[20px] border border-[#E7E7E7] space-y-4 shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
            <h2 className="text-xl font-heading font-bold text-[#2D2D2D] flex items-center gap-2 border-b border-[#E7E7E7] pb-3">
              <ShieldAlert className="w-5 h-5 text-[#FFB300]" />
              <span>3. Safety & Site Compliance</span>
            </h2>

            <p className="text-sm text-[#5D5D5D] font-body leading-relaxed">
              All active job sites operate under strict safety protocols. PPE compliance, zero-harm policies, and environmental waste management are mandatory for all site personnel.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};
