import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Building, 
  Landmark, 
  Factory, 
  Warehouse, 
  GraduationCap, 
  Truck,
  ArrowRight
} from 'lucide-react';
import { industriesData } from '../data/industries';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Building2,
  Building,
  Landmark,
  Factory,
  Warehouse,
  GraduationCap,
  Truck
};

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-16 sm:py-24 bg-[#F5EEE5] text-[#3D352D] border-t border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
            INDUSTRIES WE SUPPORT
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#3D352D] tracking-tight">
            Construction and Equipment Support Across Project Sectors
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Services may support requirements across selected residential, commercial, civil, industrial, institutional, and contractor-led project environments.
          </p>
        </div>

        {/* 7 Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industriesData.map((ind, idx) => {
            const IconComponent = iconMap[ind.iconName] || Building2;

            return (
              <div
                key={ind.id}
                className="bg-white p-6 rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-[#C96F1B] motion-safe:hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center group-hover:bg-[#C96F1B] group-hover:text-white transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-[#6B5E4E] font-body leading-relaxed line-clamp-3">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E8DDD0]">
                  <Link
                    to="/industries"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#C96F1B] hover:text-[#B35E17] uppercase tracking-wider transition-colors"
                  >
                    <span>View Sector Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
