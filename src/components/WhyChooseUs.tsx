import React from 'react';
import { Layers, Users, Truck, MapPin } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Layers,
      title: 'Two Capabilities, One Partner',
      description: 'Construction contracting and equipment rental are available through the same enterprise.'
    },
    {
      icon: Users,
      title: 'Machine and Crew Together',
      description: 'The boom placer is supplied with an operator and helper for organised site deployment.'
    },
    {
      icon: Truck,
      title: 'Concrete Logistics Focus',
      description: 'The business supports concrete-intensive construction and high-capacity placement requirements.'
    },
    {
      icon: MapPin,
      title: 'Maharashtra Operating Presence',
      description: 'A GST-registered enterprise with an operating office in Mumbai and registered office in Jalgaon.'
    }
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="font-heading text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block mb-2">
            WHY CHITRANI
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
            Practical Support for Demanding Construction Work
          </h2>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;

            return (
              <div 
                key={idx}
                className="bg-white p-7 rounded-[18px] border border-[#EFE8DE] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-[#C96F1B] transition-all duration-300 space-y-4 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] group-hover:bg-[#C96F1B] group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5 text-[#C96F1B] group-hover:text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-[#3D352D] group-hover:text-[#C96F1B] transition-colors leading-snug">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
