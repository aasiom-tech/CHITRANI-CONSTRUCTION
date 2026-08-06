import React from 'react';
import { FileCheck } from 'lucide-react';

export const ProjectFacts: React.FC = () => {
  const facts = [
    { label: 'Project Name', value: 'Ocean Star' },
    { label: 'Client', value: 'Suraj Estate Developers Ltd' },
    { label: 'Location', value: 'Kashinath Dhuru Marg, Mumbai – 400028' },
    { label: 'Role', value: 'Construction Vendor' },
    { label: 'Work Order Reference', value: 'OSWOJ0002126-27' },
    { label: 'Order Date', value: '31 July 2026' },
    { label: 'Scheduled Completion', value: '31 December 2026' }
  ];

  return (
    <div className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-3 border-b border-[#E8DDD0] pb-4">
        <FileCheck className="w-6 h-6 text-[#C96F1B] shrink-0" />
        <h3 className="font-heading font-bold text-2xl text-[#3D352D]">
          Verified Project Facts
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {facts.map((fact, idx) => (
          <div 
            key={idx}
            className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-1"
          >
            <span className="text-[11px] font-heading font-semibold text-[#6B5E4E] uppercase tracking-wider block">
              {fact.label}
            </span>
            <span className="font-body font-bold text-sm sm:text-base text-[#3D352D]">
              {fact.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
