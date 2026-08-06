import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Building2, Truck, Landmark, Factory, Warehouse, GraduationCap } from 'lucide-react';
import { IndustryItem } from '../../types';

const altTextMap: Record<string, string> = {
  'residential-construction': 'Representative multi-storey residential construction project',
  'commercial-buildings': 'Representative commercial building construction activity',
  'infrastructure-civil-works': 'Representative infrastructure and civil construction project',
  'industrial-manufacturing': 'Representative industrial and manufacturing facility construction',
  'warehouse-logistics': 'Representative warehouse and logistics facility construction',
  'institutional-projects': 'Representative institutional building construction project',
  'contractor-equipment-support': 'Concrete boom placer supporting contractor equipment requirements'
};

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Building2,
  Building: Building2,
  Landmark,
  Factory,
  Warehouse,
  GraduationCap,
  Truck
};

interface IndustryCardProps {
  industry: IndustryItem;
  index: number;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ industry, index }) => {
  const altText = altTextMap[industry.id] || `Representative ${industry.name} project`;
  const IconComponent = iconMap[industry.iconName] || Building2;
  const isContractorSupportOnly = industry.id === 'contractor-equipment-support';

  return (
    <div className="bg-white rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-[#C96F1B] motion-safe:hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Image Header with Controlled Overflow Scale */}
        <div className="relative aspect-[16/9] overflow-hidden bg-[#F5EEE5]">
          <img
            src={industry.image}
            alt={altText}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E8DDD0] text-[11px] font-heading font-bold text-[#3D352D] flex items-center gap-1.5 uppercase tracking-wider">
            <IconComponent className="w-3.5 h-3.5 text-[#C96F1B]" />
            <span>Sector 0{index + 1}</span>
          </div>

          <div className="absolute bottom-2 right-2 bg-[#3D352D]/80 backdrop-blur-xs text-white/90 px-2 py-0.5 rounded text-[10px] font-body">
            Representative industry image
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#3D352D] tracking-tight group-hover:text-[#C96F1B] transition-colors">
            {industry.name}
          </h3>

          <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
            {industry.description}
          </p>

          {/* Relevant Support Points */}
          <div className="pt-3 border-t border-[#E8DDD0] space-y-2">
            <h4 className="font-heading text-xs text-[#3D352D] font-bold uppercase tracking-wider">
              Relevant Support
            </h4>
            <ul className="space-y-1.5 text-xs text-[#6B5E4E] font-body">
              {industry.capabilities.map((cap, cIdx) => (
                <li key={cIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C96F1B] shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Relevant Service Links & Quote CTA */}
      <div className="p-6 pt-0 space-y-3">
        <div className="pt-3 border-t border-[#E8DDD0] flex flex-wrap gap-2 text-[11px] font-heading font-bold">
          {!isContractorSupportOnly && (
            <Link
              to="/services/construction-contracting"
              className="px-2.5 py-1 bg-[#F5EEE5] hover:bg-[#EADBC8] text-[#3D352D] rounded-md border border-[#E8DDD0] transition-colors"
            >
              Construction Contracting
            </Link>
          )}
          <Link
            to="/services/concrete-boom-placer-rental"
            className="px-2.5 py-1 bg-[#F5EEE5] hover:bg-[#EADBC8] text-[#3D352D] rounded-md border border-[#E8DDD0] transition-colors"
          >
            Concrete Boom Placer Rental
          </Link>
        </div>

        <Link
          to="/request-quote"
          className="w-full py-2.5 px-4 rounded-lg bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs"
        >
          <span>Request Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
