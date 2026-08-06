import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Building, 
  Factory, 
  Compass, 
  KeyRound, 
  ClipboardCheck, 
  HardHat, 
  Truck, 
  Radio, 
  Users, 
  Wrench, 
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  ArrowUpRight
} from 'lucide-react';
import { servicesData } from '../data/services';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Building2,
  Building,
  Factory,
  Compass,
  KeyRound,
  ClipboardCheck,
  HardHat,
  Truck,
  Radio,
  Users,
  Wrench,
  ShieldAlert,
};

export const Services: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Construction', 'Engineering', 'Machinery', 'Support'];

  const filteredServices = servicesData.filter((service) => {
    if (selectedCategory === 'All') return true;
    return service.category === selectedCategory;
  });

  const visibleServices = showAll ? filteredServices : filteredServices.slice(0, 6);

  return (
    <section id="services" className="py-16 sm:py-24 bg-white text-[#2D2D2D] border-t border-[#E7E7E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="font-display text-xs text-[#FFB300] font-bold tracking-wider uppercase block mb-2">
            SPECIALIZED CONTRACT SERVICES
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2D2D2D] tracking-tight">
            Comprehensive Construction Services
          </h2>
          <p className="mt-3 text-base text-[#5D5D5D] font-body">
            From structural concrete pours to full EPC management and site mobilization.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-md font-heading text-xs tracking-wider uppercase transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#FFB300] text-white font-bold shadow-xs'
                  : 'bg-[#F9F7F2] text-[#5D5D5D] hover:text-[#2D2D2D] hover:bg-[#E7E7E7] border border-[#E7E7E7]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Wrench;

            return (
              <div
                key={service.id}
                className="bg-white p-6 rounded-[20px] border border-[#E7E7E7] shadow-[0_15px_35px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-[#FFB300] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-md bg-[#FFB300]/12 border border-[#FFB300]/35 text-[#FFB300] flex items-center justify-center group-hover:bg-[#FFB300] group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-display text-[11px] bg-[#FFB300]/12 text-[#2D2D2D] px-2.5 py-1 rounded-md border border-[#FFB300]/35 font-bold uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#2D2D2D] mb-2 group-hover:text-[#FFB300] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5D5D5D] font-body leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.details.map((detail, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-body bg-[#F9F7F2] text-[#5D5D5D] px-2 py-0.5 rounded-md border border-[#E7E7E7]"
                      >
                        • {detail}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enquire CTA */}
                <Link
                  to={`/services/${service.id}`}
                  className="pt-4 border-t border-[#E7E7E7] text-[#2D2D2D] hover:text-[#FFB300] font-heading text-xs font-bold flex items-center justify-between transition-colors uppercase tracking-wider"
                >
                  <span>View Service Details</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FFB300]" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Expansion Button */}
        {filteredServices.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#F9F7F2] hover:bg-[#E7E7E7] border border-[#E7E7E7] text-[#2D2D2D] font-heading text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>{showAll ? 'Show Fewer Services' : `View All (${filteredServices.length}) Services`}</span>
              {showAll ? <ChevronUp className="w-4 h-4 text-[#FFB300]" /> : <ChevronDown className="w-4 h-4 text-[#FFB300]" />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
