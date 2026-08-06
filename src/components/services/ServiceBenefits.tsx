import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface ServiceBenefitsProps {
  title?: string;
  items: string[];
}

export const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({
  title = 'Key Benefits',
  items
}) => {
  return (
    <div className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <h3 className="font-heading font-bold text-2xl text-[#3D352D] border-b border-[#E8DDD0] pb-4 flex items-center gap-2">
        <ShieldCheck className="w-6 h-6 text-[#C96F1B]" />
        <span>{title}</span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((benefit, idx) => (
          <div key={idx} className="p-4 bg-[#F5EEE5] rounded-lg border border-[#E8DDD0] flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] font-heading text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              {idx + 1}
            </span>
            <span className="text-sm font-body text-[#3D352D] font-medium leading-relaxed">
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
