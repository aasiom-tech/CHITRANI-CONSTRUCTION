import React from 'react';
import { Layers, Users, ShieldCheck, MapPin } from 'lucide-react';
import { Reveal, SectionEyebrow, StaggerGroup, StaggerItem } from './common/Motion';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Layers,
      title: 'Two Capabilities, One Enterprise',
      description: 'Construction contracting and equipment rental are offered through the same business.'
    },
    {
      icon: Users,
      title: 'Equipment with Operating Crew',
      description: 'The boom placer is supplied with an operator and helper for organised deployment.'
    },
    {
      icon: ShieldCheck,
      title: 'Quality-Focused Coordination',
      description: 'The company emphasizes workmanship, clear communication, site supervision and project-specific coordination.'
    },
    {
      icon: MapPin,
      title: 'Maharashtra Operating Presence',
      description: 'A GST-registered enterprise with an operating office in Mumbai and registered office in Jalgaon.'
    }
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white text-[#3D352D] border-b border-[#E8DDD0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Reveal>
            <SectionEyebrow badge="WHY CHITRANI" className="justify-center mb-3" />
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
              Practical Support for Demanding Construction Requirements
            </h2>
          </Reveal>
        </div>

        {/* 4 Feature Cards Grid */}
        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;

            return (
              <StaggerItem key={idx} className="h-full">
                <div className="bg-white p-7 rounded-2xl border border-[#E8DDD0] border-t-2 border-t-[#C96F1B] shadow-[0_10px_30px_rgba(61,53,45,0.04)] hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(61,53,45,0.09)] transition-all duration-300 space-y-4 group flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center transition-colors group-hover:bg-[#C96F1B] group-hover:text-white">
                      <Icon className="w-6 h-6 text-[#C96F1B] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-[#3D352D] leading-snug">
                      {pt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                      {pt.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
};
