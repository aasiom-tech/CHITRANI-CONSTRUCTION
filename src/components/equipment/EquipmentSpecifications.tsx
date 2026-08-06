import React from 'react';
import { Sliders } from 'lucide-react';

export const EquipmentSpecifications: React.FC = () => {
  const specs = [
    { label: 'Equipment', value: 'Putzmeister M42-5 Concrete Boom Placer' },
    { label: 'Boom Reach', value: '42 metres' },
    { label: 'Capacity', value: '90 m³' },
    { label: 'Year of Manufacture', value: '2020' },
    { label: 'AdBlue Equipped', value: 'Yes' },
    { label: 'Operator', value: 'Included' },
    { label: 'Helper', value: 'Included' },
    { label: 'Rental Model', value: 'Monthly deployment' },
    { label: 'Shift', value: 'One fixed 12-hour shift' },
    { label: 'Working Days', value: '26 working days per month' },
    { label: 'Sundays', value: 'Excluded' }
  ];

  return (
    <div className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-3 border-b border-[#E8DDD0] pb-4">
        <Sliders className="w-6 h-6 text-[#C96F1B] shrink-0" />
        <h3 className="font-heading font-bold text-2xl text-[#3D352D]">
          Verified Specifications
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {specs.map((spec, idx) => (
          <div 
            key={idx}
            className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-1"
          >
            <span className="text-[11px] font-heading font-semibold text-[#6B5E4E] uppercase tracking-wider block">
              {spec.label}
            </span>
            <span className="font-body font-bold text-base text-[#3D352D]">
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
