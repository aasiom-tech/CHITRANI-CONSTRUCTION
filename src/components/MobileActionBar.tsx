import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, FileText } from 'lucide-react';
import { companyConfig } from '../config/companyConfig';

export const MobileActionBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#3D352D] border-t border-[#E8DDD0]/20 lg:hidden shadow-2xl">
      <div className="grid grid-cols-3 divide-x divide-[#E8DDD0]/20 p-1.5 font-heading text-[11px] font-semibold uppercase tracking-wider">
        {/* Call Us */}
        <a
          href={`tel:${companyConfig.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 text-[#D8CCBC] hover:text-[#C96F1B] active:bg-white/10 transition-colors min-h-[44px]"
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
          className="flex flex-col items-center justify-center py-2 px-1 text-[#D8CCBC] hover:text-emerald-400 active:bg-white/10 transition-colors min-h-[44px]"
          aria-label="WhatsApp Chitrani Construction"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Get Quote */}
        <Link
          to="/request-quote"
          className="flex flex-col items-center justify-center py-2 px-1 text-white bg-[#C96F1B] hover:bg-[#B35E17] rounded-[12px] transition-colors min-h-[44px]"
          aria-label="Request a Construction Quote"
        >
          <FileText className="w-4 h-4 text-white mb-0.5" />
          <span>Get Quote</span>
        </Link>
      </div>
    </div>
  );
};
