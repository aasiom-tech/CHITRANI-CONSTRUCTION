import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ServiceCapabilitiesProps {
  title?: string;
  items: string[];
}

export const ServiceCapabilities: React.FC<ServiceCapabilitiesProps> = ({ 
  title = 'Scope of Support', 
  items 
}) => {
  return (
    <div className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <h3 className="font-heading font-bold text-2xl text-[#3D352D] border-b border-[#E8DDD0] pb-4 flex items-center gap-2">
        <CheckCircle2 className="w-6 h-6 text-[#C96F1B]" />
        <span>{title}</span>
      </h3>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
        {items.map((item, idx) => (
          <li 
            key={idx}
            className="p-3.5 bg-[#F5EEE5] rounded-lg border border-[#E8DDD0] flex items-start gap-3 text-sm text-[#3D352D] font-body"
          >
            <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
