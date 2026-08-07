import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Truck, ArrowRight, Layers, HardHat, Wrench } from 'lucide-react';

export const AboutConnectedCapabilities: React.FC = () => {
  const capabilities = [
    {
      icon: Building2,
      title: 'RCC Structural Work',
      description: 'Formwork, shuttering, steel reinforcement binding and concrete pouring for structural packages.'
    },
    {
      icon: Layers,
      title: 'Civil Construction',
      description: 'Foundations, structural masonry, site preparation and concrete-intensive civil work.'
    },
    {
      icon: Wrench,
      title: 'Brickwork & Blockwork',
      description: 'AAC blockwork, traditional brick masonry and internal wall partitions.'
    },
    {
      icon: HardHat,
      title: 'Construction Labour Contracting',
      description: 'Deployment of skilled masons, shuttering carpenters, bar-benders and site labourers.'
    },
    {
      icon: Truck,
      title: 'Equipment / Boom Placer Support',
      description: 'High-capacity Putzmeister M42-5 concrete boom placer rental with operating crew.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block mb-2">
            SCOPE &amp; EXECUTION CAPABILITIES
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
            Construction Capabilities
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body mt-3">
            An overview of the structural construction execution and equipment capabilities available through Chitrani Construction.
          </p>
        </div>

        {/* 5 Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;

            return (
              <div
                key={idx}
                className={`bg-white p-7 rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.04)] hover:border-[rgba(201,111,27,0.45)] hover:-translate-y-0.5 transition-all space-y-3 flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-[12px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C96F1B]" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-[#3D352D] leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="text-center pt-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider transition-all shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>

      </div>
    </section>
  );
};
