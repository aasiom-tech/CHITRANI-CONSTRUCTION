import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building2, Truck } from 'lucide-react';
import { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const isContracting = service.slug === 'construction-contracting';
  
  const altText = isContracting
    ? 'Structural and civil construction activity at an organised building project site'
    : 'Concrete boom placer supporting a large concrete pour at an active construction site';

  const buttonText = isContracting
    ? 'Explore Construction Contracting'
    : 'Explore Boom Placer Rental';

  const Icon = isContracting ? Building2 : Truck;

  return (
    <div className="bg-white rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-[#C96F1B] motion-safe:hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Image Container with Overflow Hidden for Scale Animation */}
        <div className="relative aspect-[16/9] overflow-hidden bg-[#F5EEE5]">
          <img
            src={service.image}
            alt={altText}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E8DDD0] text-[11px] font-heading font-bold text-[#3D352D] flex items-center gap-1.5 uppercase tracking-wider">
            <Icon className="w-3.5 h-3.5 text-[#C96F1B]" />
            <span>{service.category}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-5">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352D] tracking-tight group-hover:text-[#C96F1B] transition-colors">
            {service.title}
          </h3>

          <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
            {service.description}
          </p>

          {/* Highlights */}
          <div className="pt-3 border-t border-[#E8DDD0] space-y-2.5">
            <h4 className="font-heading text-xs text-[#3D352D] font-bold uppercase tracking-wider">
              Key Highlights
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B5E4E] font-body">
              {service.details.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Button CTA */}
      <div className="p-6 sm:p-8 pt-0">
        <Link
          to={`/services/${service.slug}`}
          className="w-full py-3.5 px-6 rounded-lg bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs"
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
