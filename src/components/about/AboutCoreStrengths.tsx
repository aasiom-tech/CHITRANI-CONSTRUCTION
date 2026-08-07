import React from 'react';
import { ShieldCheck, CheckCircle2, UserCheck, Layers, Scale, Clock } from 'lucide-react';

export const AboutCoreStrengths: React.FC = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Safety',
      description: 'Work practices aligned with project and site safety requirements.'
    },
    {
      icon: CheckCircle2,
      title: 'Quality',
      description: 'Focus on drawings, workmanship, line and level, curing and execution checks.'
    },
    {
      icon: UserCheck,
      title: 'Accountability',
      description: 'Clear ownership of assigned scope and communication.'
    },
    {
      icon: Layers,
      title: 'Discipline',
      description: 'Organised site execution and resource coordination.'
    },
    {
      icon: Scale,
      title: 'Transparency',
      description: 'Clear commercial scope, exclusions and measurement basis.'
    },
    {
      icon: Clock,
      title: 'Timely Execution',
      description: 'Resource planning and progress monitoring against project requirements.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F5EEE5] text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block mb-2">
            PRINCIPLES THAT GUIDE OUR WORK
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
            Our Values
          </h2>
        </div>

        {/* 6 Core Values Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;

            return (
              <div 
                key={idx}
                className="bg-white p-7 rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.04)] hover:-translate-y-1 transition-all duration-300 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-[12px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C96F1B]" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-[#3D352D] leading-snug">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                    {val.description}
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
