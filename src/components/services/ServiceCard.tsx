import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building2, Truck } from 'lucide-react';
import { PriyaServiceItem } from '../../data/services';

interface ServiceCardProps {
  service: PriyaServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const isEquipment = service.slug === 'concrete-boom-placer-rental';
  const Icon = isEquipment ? Truck : Building2;

  const summaryText = service.summary || service.description;
  const highlights = service.scope || service.keyHighlights || service.details;
  const altText = service.imageAlt || `${service.title} activity at a construction site`;

  return (
    <div className="bg-white rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-[#C96F1B] motion-safe:hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full">
      <div>
        {/* Image Wrapper */}
        <div className="relative aspect-[16/9] overflow-hidden bg-[#F5EEE5]">
          <img
            src={service.image}
            alt={altText}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E8DDD0] text-[11px] font-heading font-semibold text-[#3D352D] flex items-center gap-1.5 uppercase tracking-wider shadow-xs">
            <Icon className="w-3.5 h-3.5 text-[#C96F1B]" />
            <span>{service.category}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <h3 className="font-heading font-semibold text-xl sm:text-2xl text-[#3D352D] tracking-tight group-hover:text-[#C96F1B] transition-colors">
            {service.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed line-clamp-3">
            {summaryText}
          </p>

          {/* Key Scope Points */}
          <div className="pt-3 border-t border-[#E8DDD0] space-y-2">
            <h4 className="font-heading text-[11px] text-[#3D352D] font-semibold uppercase tracking-wider">
              Key Scope & Capabilities
            </h4>
            <ul className="space-y-1.5 text-xs text-[#6B5E4E] font-body">
              {highlights.slice(0, 4).map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C96F1B] shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="p-6 pt-0">
        <Link
          to={`/services/${service.slug}`}
          className="w-full min-h-[44px] py-3 px-4 rounded-lg bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
        >
          <span>VIEW SERVICE</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
