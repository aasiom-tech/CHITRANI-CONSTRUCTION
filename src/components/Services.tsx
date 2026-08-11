import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useServices } from '../hooks/useServices';

export const Services: React.FC = () => {
  const { data: services, loading, error } = useServices();

  const isEquipment = (slug: string) => slug === 'concrete-boom-placer-rental';
  const getIcon = (slug: string) => isEquipment(slug) ? Truck : Building2;

  const displayServices = services
    ? services.filter(s => s.featured).length >= 2
      ? services.filter(s => s.featured).slice(0, 2)
      : services.slice(0, 2)
    : [];

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

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[0, 1].map((i) => (
              <div key={i} className="bg-white rounded-[18px] border border-[#E8DDD0] overflow-hidden animate-pulse">
                <div className="aspect-[16/9] bg-[#F5EEE5]" />
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="h-6 bg-[#F5EEE5] rounded w-2/3" />
                  <div className="h-4 bg-[#F5EEE5] rounded w-full" />
                  <div className="h-4 bg-[#F5EEE5] rounded w-3/4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-12 space-y-3">
            <p className="text-sm text-[#6B5E4E] font-body">{error}</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && displayServices.length === 0 && (
          <div className="text-center py-12 space-y-3">
            <p className="text-sm text-[#6B5E4E] font-body">No services are currently available.</p>
          </div>
        )}

        {/* Service Cards Grid */}
        {!loading && !error && displayServices.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {displayServices.map((service) => {
              const IconComponent = getIcon(service.slug);

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-[#C96F1B] motion-safe:hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    <div className="p-6 sm:p-8 space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="font-heading font-bold text-2xl text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                          {service.name}
                        </h3>
                      </div>
                      <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                        {service.shortDescription || service.fullDescription || 'Service details available on request.'}
                      </p>
                      {service.division && (
                        <div className="pt-2">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#C96F1B]/10 text-[#C96F1B] text-xs font-semibold font-heading">
                            {service.division.name}
                          </span>
                        </div>
                      )}
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
        )}

      </div>
    </section>
  );
};
