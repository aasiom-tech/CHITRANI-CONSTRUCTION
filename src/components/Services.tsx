import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/services';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F5EEE5] text-[#3D352D] border-t border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
            OUR CAPABILITIES
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#3D352D] tracking-tight">
            Construction Contracting and Equipment Rental Services
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Chitrani Construction supports building and infrastructure requirements through two connected service lines.
          </p>
        </div>

        {/* Service Cards Grid (Exactly 2 Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesData.map((service) => {
            const isContracting = service.slug === 'construction-contracting';
            const IconComponent = isContracting ? Building2 : Truck;

            return (
              <div
                key={service.id}
                className="bg-white rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-[#C96F1B] motion-safe:hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#F5EEE5]">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E8DDD0] text-[11px] font-heading font-bold text-[#3D352D] flex items-center gap-1.5 uppercase tracking-wider">
                      <IconComponent className="w-3.5 h-3.5 text-[#C96F1B]" />
                      <span>{service.category}</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="font-heading font-bold text-2xl text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-3 border-t border-[#E8DDD0] space-y-2">
                      <h4 className="font-heading text-xs text-[#3D352D] font-bold uppercase tracking-wider">
                        Highlights
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B5E4E] font-body">
                        {service.details.slice(0, 4).map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C96F1B] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <Link
                    to={`/services/${service.slug}`}
                    className="w-full py-3.5 px-6 rounded-lg bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
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
