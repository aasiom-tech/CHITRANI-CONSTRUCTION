import React from 'react';
import { Info } from 'lucide-react';

export const ClientScopePanel: React.FC = () => {
  const responsibilities = [
    'Fuel',
    'AdBlue',
    'Operator accommodation',
    'Crew food and travel',
    'Site safety and security',
    'PPE',
    'Tools and tackles',
    'Internal shifting',
    'Supporting equipment',
    'Pipeline arrangements',
    'Suitable access and working area',
    'Site coordination'
  ];

  return (
    <div className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-2 text-[#C96F1B] font-heading text-xs font-bold uppercase tracking-wider">
        <Info className="w-4 h-4" />
        <span>COMMERCIAL INFORMATION PANEL</span>
      </div>

      <h3 className="font-heading font-bold text-2xl text-[#3D352D]">
        Client Responsibilities
      </h3>

      <p className="text-sm text-[#6B5E4E] font-body">
        Client responsibilities may include:
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-body text-[#3D352D]">
        {responsibilities.map((resp, idx) => (
          <li key={idx} className="p-3 bg-[#F5EEE5] rounded-lg border border-[#E8DDD0] flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C96F1B]" />
            <span>{resp}</span>
          </li>
        ))}
      </ul>

      <p className="text-xs text-[#6B5E4E] font-body italic pt-2 border-t border-[#E8DDD0]">
        Final responsibilities are confirmed in the written quotation and rental agreement.
      </p>
    </div>
  );
};
