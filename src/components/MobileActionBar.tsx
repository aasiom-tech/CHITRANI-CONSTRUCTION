import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, FileText } from 'lucide-react';
import { companyConfig } from '../config/companyConfig';

export const MobileActionBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-[#E8DDD0] lg:hidden shadow-[0_-4px_20px_rgba(61,53,45,0.08)]">
      <div className="grid grid-cols-3 gap-1.5 p-2 font-heading text-[11px] font-semibold uppercase tracking-wider">
        {/* Call Us */}
        <a
          href={`tel:${companyConfig.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 text-[#3D352D] hover:text-[#C96F1B] bg-[#F5EEE5] hover:bg-[#E8DDD0] rounded-[10px] transition-colors min-h-[44px] border border-[#E8DDD0]"
          aria-label="Call Chitrani Construction"
        >
          <Phone className="w-4 h-4 text-[#C96F1B] mb-0.5" />
          <span>Call Us</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${companyConfig.whatsappRaw}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 text-[#3D352D] hover:text-emerald-700 bg-[#F5EEE5] hover:bg-[#E8DDD0] rounded-[10px] transition-colors min-h-[44px] border border-[#E8DDD0]"
          aria-label="WhatsApp Chitrani Construction"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Get Quote */}
        <Link
          to="/request-quote"
          className="flex flex-col items-center justify-center py-2 px-1 text-white bg-[#C96F1B] hover:bg-[#B35E17] rounded-[10px] transition-colors min-h-[44px] shadow-xs"
          aria-label="Request a Construction Quote"
        >
          <FileText className="w-4 h-4 text-white mb-0.5" />
          <span>Get Quote</span>
        </Link>
      </div>
    </div>
  );
};
