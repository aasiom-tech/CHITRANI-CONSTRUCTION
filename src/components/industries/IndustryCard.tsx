import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Building2, Truck, Landmark, Factory, Warehouse, GraduationCap, Info } from 'lucide-react';
import { PriyaIndustryItem } from '../../data/industries';

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
  industry: PriyaIndustryItem;
  index: number;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ industry, index }) => {
  const IconComponent = iconMap[industry.iconName] || Building2;
  const isEvidenced = industry.evidenceLevel === 'evidenced';
  const altText = industry.imageAlt || `Representative ${industry.name} project application visual`;

  return (
    <div className="bg-white rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-[#C96F1B] motion-safe:hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full">
      <div>
        {/* Image Header */}
        <div className="relative aspect-[16/9] overflow-hidden bg-[#F5EEE5]">
          <img
            src={industry.image}
            alt={altText}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E8DDD0] text-[11px] font-heading font-semibold text-[#3D352D] flex items-center gap-1.5 uppercase tracking-wider shadow-xs">
            <IconComponent className="w-3.5 h-3.5 text-[#C96F1B]" />
            <span>{isEvidenced ? 'DOCUMENTED CONTEXT' : 'APPLICABLE SCOPE'}</span>
          </div>

          <div className="absolute bottom-2 right-2 bg-[#3D352D]/85 backdrop-blur-xs text-white px-2 py-0.5 rounded text-[10px] font-body flex items-center gap-1">
            <Info className="w-3 h-3 text-[#C96F1B]" />
            <span>Representative visual</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <div className="space-y-1">
            <h3 className="font-heading font-semibold text-xl sm:text-2xl text-[#3D352D] tracking-tight group-hover:text-[#C96F1B] transition-colors">
              {industry.name}
            </h3>
            {industry.evidenceNotice && (
              <p className="text-[11px] font-body text-[#C96F1B] italic">
                {industry.evidenceNotice}
              </p>
            )}
          </div>

          <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
            {industry.description}
          </p>

          {/* Relevant Support Points */}
          <div className="pt-3 border-t border-[#E8DDD0] space-y-2">
            <h4 className="font-heading text-[11px] text-[#3D352D] font-semibold uppercase tracking-wider">
              Relevant Capabilities
            </h4>
            <ul className="space-y-1.5 text-xs text-[#6B5E4E] font-body">
              {(industry.relevantCapabilities || industry.capabilities).slice(0, 4).map((cap, cIdx) => (
                <li key={cIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C96F1B] shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Relevant Service Links & Quote CTA */}
      <div className="p-6 pt-0 space-y-3">
        <Link
          to="/request-quote"
          className="w-full min-h-[44px] py-3 px-4 rounded-lg bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
        >
          <span>Request Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
