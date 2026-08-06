import React from 'react';
import { CheckCircle2, HelpCircle } from 'lucide-react';

export const ContactGuidance: React.FC = () => {
  const points = [
    'Project or site location',
    'Type of construction requirement',
    'Equipment required',
    'Preferred start date',
    'Expected duration',
    'Shift requirement',
    'Concrete-placement requirement, when applicable',
    'Site-access or working-condition details'
  ];

  return (
    <section className="py-20 sm:py-24 bg-white text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4 text-[#C96F1B]" />
            <span className="text-[#3D352D]">ENQUIRY CHECKLIST</span>
          </div>
          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
            Information That Helps Us Review Your Requirement
          </h2>
        </div>

        {/* Guidance Grid */}
        <div className="bg-[#F5EEE5] rounded-[20px] border border-[#E8DDD0] p-7 sm:p-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#6B5E4E] font-body">
            {points.map((pt, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-[10px] border border-[#E8DDD0]">
                <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                <span className="font-medium text-[#3D352D]">{pt}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
