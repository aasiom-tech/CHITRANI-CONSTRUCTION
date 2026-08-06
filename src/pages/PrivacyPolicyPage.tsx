import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { companyConfig } from '../config/companyConfig';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Privacy Policy | Chitrani Construction"
        description="Data protection policies, client confidentiality, and web security compliance standards for Chitrani Construction."
        canonical="https://chitraniconstruction.com/privacy-policy"
      />

      <PageHeader
        title="Privacy Policy"
        subtitle="Data protection policies, client confidentiality, and web security compliance standards."
        badge="LEGAL & COMPLIANCE"
      />

      <section className="py-16 bg-[#F9F7F2] text-[#2D2D2D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="bg-white p-6 sm:p-8 rounded-[20px] border border-[#E7E7E7] space-y-4 font-body text-xs sm:text-sm text-[#2D2D2D] shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-2 text-[#FFB300] font-heading font-bold uppercase text-xs mb-2">
              <ShieldCheck className="w-5 h-5 text-[#FFB300]" />
              <span>Effective Date: January 1, 2026</span>
            </div>

            <p className="leading-relaxed text-[#5D5D5D]">
              At <strong>{companyConfig.name}</strong> ("Chitrani Construction", "we", "us", "our"), we respect your privacy and are committed to protecting all personal and commercial data provided through our website, quote forms, and direct communication channels.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-[20px] border border-[#E7E7E7] space-y-4 shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
            <h2 className="text-xl font-heading font-bold text-[#2D2D2D] flex items-center gap-2 border-b border-[#E7E7E7] pb-3">
              <Lock className="w-5 h-5 text-[#FFB300]" />
              <span>1. Information We Collect</span>
            </h2>

            <p className="text-sm text-[#5D5D5D] font-body leading-relaxed">
              We collect information necessary to process technical tenders, machinery rental inquiries, site evaluations, and commercial contract negotiations:
            </p>

            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-[#2D2D2D] font-body">
              <li>Contact details: Full Name, Email Address, Mobile/Phone Number, Company Name.</li>
              <li>Project details: Site location, approximate plot area, budget estimates, machinery requirements.</li>
              <li>Technical details: Scope descriptions and BOQ requirements.</li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-[20px] border border-[#E7E7E7] space-y-4 shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
            <h2 className="text-xl font-heading font-bold text-[#2D2D2D] flex items-center gap-2 border-b border-[#E7E7E7] pb-3">
              <Eye className="w-5 h-5 text-[#FFB300]" />
              <span>2. How We Use Your Data</span>
            </h2>

            <p className="text-sm text-[#5D5D5D] font-body leading-relaxed">
              All submitted project specifications and client contacts are utilized exclusively for:
            </p>

            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-[#2D2D2D] font-body">
              <li>Preparing itemized BOQ estimates and technical proposals.</li>
              <li>Scheduling concrete boom placer mobilization.</li>
              <li>Communicating contract terms, inspection reports, and billing schedules.</li>
              <li>Fulfilling legal and GST compliance requirements.</li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-[20px] border border-[#E7E7E7] space-y-4 shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
            <h2 className="text-xl font-heading font-bold text-[#2D2D2D] flex items-center gap-2 border-b border-[#E7E7E7] pb-3">
              <FileText className="w-5 h-5 text-[#FFB300]" />
              <span>3. Data Protection & Confidentiality</span>
            </h2>

            <p className="text-sm text-[#5D5D5D] font-body leading-relaxed">
              We do NOT sell, rent, or commercialize your personal or technical data to third-party marketing brokers. Technical drawings and project blueprints are restricted to certified contract managers and structural engineers assigned to your inquiry.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};
