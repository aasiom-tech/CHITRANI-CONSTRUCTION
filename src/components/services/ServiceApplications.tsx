import React from 'react';

interface ServiceApplicationsProps {
  title?: string;
  intro?: string;
  items: string[];
}

export const ServiceApplications: React.FC<ServiceApplicationsProps> = ({
  title = 'Suitable Project Requirements',
  intro = 'Suitable for requirements involving:',
  items
}) => {
  return (
    <div className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <h3 className="font-heading font-bold text-2xl text-[#3D352D] border-b border-[#E8DDD0] pb-4">
        {title}
      </h3>

      {intro && (
        <p className="text-sm text-[#6B5E4E] font-body italic">
          {intro}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item, idx) => (
          <div 
            key={idx}
            className="p-3.5 bg-[#F5EEE5] rounded-lg border border-[#E8DDD0] flex items-center gap-3 text-xs sm:text-sm font-body text-[#3D352D]"
          >
            <span className="w-2 h-2 rounded-full bg-[#C96F1B] shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
