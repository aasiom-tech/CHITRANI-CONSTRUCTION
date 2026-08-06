import React from 'react';
import { 
  Building2, 
  Landmark, 
  Building, 
  Factory, 
  Warehouse, 
  Route, 
  GraduationCap, 
  Hospital, 
  Hotel, 
  Hammer, 
  Cpu 
} from 'lucide-react';
import { industriesData } from '../data/industries';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Building2,
  Landmark,
  Building,
  Factory,
  Warehouse,
  Route,
  GraduationCap,
  Hospital,
  Hotel,
  Hammer,
  Cpu
};

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-16 sm:py-24 bg-[#F9F7F2] text-[#2D2D2D] border-t border-[#E7E7E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="font-display text-xs text-[#FFB300] font-bold tracking-wider uppercase block mb-2">
            CROSS-SECTOR EXPERIENCE
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2D2D2D] tracking-tight">
            Industries We Serve
          </h2>
          <p className="mt-3 text-base text-[#5D5D5D] font-body">
            Tailored engineering capabilities and machinery logistics for diverse economic sectors.
          </p>
        </div>

        {/* Compact Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industriesData.map((ind) => {
            const IconComponent = iconMap[ind.iconName] || Factory;

            return (
              <div
                key={ind.id}
                className="bg-white p-5 rounded-[20px] border border-[#E7E7E7] shadow-[0_15px_35px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-[#FFB300] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-md bg-[#FFB300]/12 border border-[#FFB300]/35 text-[#FFB300] group-hover:bg-[#FFB300] group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="font-heading font-bold text-xs sm:text-sm text-[#2D2D2D] mb-1 group-hover:text-[#FFB300] transition-colors">
                  {ind.name}
                </h3>

                <p className="text-[11px] text-[#7D7D7D] font-body leading-tight hidden sm:block">
                  {ind.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
