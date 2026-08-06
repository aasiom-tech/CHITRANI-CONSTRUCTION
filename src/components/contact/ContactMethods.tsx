import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, FileText } from 'lucide-react';
import { companyConfig } from '../../config/companyConfig';

export const ContactMethods: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F5EEE5] text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Call the Team */}
          <div className="bg-white p-7 rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.04)] space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-[12px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#C96F1B]" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-[#3D352D]">
                Call the Team
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                Direct phone contact for project enquiries and rental dispatch.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#E8DDD0]">
              <a
                href={`tel:${companyConfig.phoneRaw}`}
                className="flex items-center justify-between p-2.5 rounded-[10px] bg-[#F5EEE5] hover:bg-[#E8DDD0] text-xs font-heading font-semibold text-[#3D352D] hover:text-[#C96F1B] transition-colors"
                aria-label={`Call primary phone ${companyConfig.phone}`}
              >
                <span>Primary: {companyConfig.phone}</span>
              </a>
              <a
                href={`tel:${companyConfig.secondaryPhoneRaw}`}
                className="flex items-center justify-between p-2.5 rounded-[10px] bg-[#F5EEE5] hover:bg-[#E8DDD0] text-xs font-heading font-semibold text-[#3D352D] hover:text-[#C96F1B] transition-colors"
                aria-label={`Call secondary phone ${companyConfig.secondaryPhone}`}
              >
                <span>Secondary: {companyConfig.secondaryPhone}</span>
              </a>
            </div>
          </div>

          {/* Card 2: Email Enquiries */}
          <div className="bg-white p-7 rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.04)] space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-[12px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#C96F1B]" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-[#3D352D]">
                Email Enquiries
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                Send written project specifications and formal requests.
              </p>
            </div>

            <div className="pt-2 border-t border-[#E8DDD0]">
              <a
                href={`mailto:${companyConfig.email}`}
                className="flex items-center justify-between p-3 rounded-[10px] bg-[#F5EEE5] hover:bg-[#E8DDD0] text-xs font-heading font-semibold text-[#3D352D] hover:text-[#C96F1B] transition-colors truncate"
                aria-label={`Send email to ${companyConfig.email}`}
              >
                <span className="truncate">{companyConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Card 3: Request a Quote */}
          <div className="bg-white p-7 rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.04)] space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-[12px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#C96F1B]" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-[#3D352D]">
                Request a Quote
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                Provide structured project and equipment details through the quotation form.
              </p>
            </div>

            <div className="pt-2 border-t border-[#E8DDD0]">
              <Link
                to="/request-quote"
                className="flex items-center justify-center p-3 rounded-[10px] bg-[#C96F1B] hover:bg-[#B35E17] text-xs font-heading font-semibold text-white uppercase tracking-wider transition-colors shadow-xs"
                aria-label="Navigate to quotation form page"
              >
                <span>Fill Quotation Form</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
