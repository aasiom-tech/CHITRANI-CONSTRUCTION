import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Phone } from 'lucide-react';
import { companyConfig } from '../../config/companyConfig';

interface EquipmentCTAProps {
  title?: string;
  description?: string;
  quoteLink?: string;
}

export const EquipmentCTA: React.FC<EquipmentCTAProps> = ({
  title = 'Rent Putzmeister M42-5',
  description = 'Request shift rates, monthly contract rates, and equipment mobilization dates for your site.',
  quoteLink = '/request-quote?requirement=equipment-rental&equipment=putzmeister-m42-5'
}) => {
  return (
    <div className="bg-[#F5EEE5] text-[#3D352D] p-6 sm:p-8 rounded-[18px] border border-[#E8DDD0] space-y-5 shadow-lg">
      <div className="flex items-center gap-2 text-[#C96F1B] font-heading text-xs font-bold uppercase tracking-wider">
        <FileText className="w-4 h-4" />
        <span>DIRECT RENTAL DISPATCH</span>
      </div>

      <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#3D352D] tracking-tight">
        {title}
      </h3>

      <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
        {description}
      </p>

      <div className="space-y-3">
        <Link
          to={quoteLink}
          className="w-full py-3.5 px-6 rounded-lg bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs"
        >
          <span>Request Equipment Rental</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <a
          href={`tel:${companyConfig.phoneRaw}`}
          className="w-full py-3 px-6 rounded-lg bg-[#F5EEE5] hover:bg-[#EADBC8] text-[#3D352D] font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-[#E8DDD0]"
        >
          <Phone className="w-4 h-4 text-[#C96F1B]" />
          <span>Call for Equipment Enquiry</span>
        </a>
      </div>
    </div>
  );
};
