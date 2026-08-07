import React from 'react';
import { Layers, Users, ShieldCheck, Truck, Scale, CheckCircle2, TrendingUp } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Users,
      title: 'Execution-Focused Team',
      description: 'Supervisors and engineers with hands-on site coordination experience for structural packages.'
    },
    {
      icon: HardHatIcon,
      title: 'Skilled Workforce',
      description: 'Trained shuttering carpenters, bar-benders and masons for organized package execution.'
    },
    {
      icon: CheckCircle2,
      title: 'Site Discipline',
      description: 'Adherence to drawings, pouring schedules, material handling and site instructions.'
    },
    {
      icon: ShieldCheck,
      title: 'Safety-Conscious Operations',
      description: 'PPE protocols, tool-box awareness and responsible site practices across active projects.'
    },
    {
      icon: Scale,
      title: 'Transparent Commercials',
      description: 'Clear rate structures, defined measurement basis and predictable billing practices.'
    },
    {
      icon: Truck,
      title: 'Equipment Support',
      description: 'In-house high-capacity Putzmeister M42-5 concrete boom placer for rapid pouring.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Execution',
      description: 'Ability to scale manpower and machinery resources based on project timelines.'
    }
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block mb-2">
            WHY CHITRANI
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
            Reliable Execution. Disciplined Operations.
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body mt-3">
            Key capability pillars that make Chitrani Construction a dependable partner for developers and contractors.
          </p>
        </div>

        {/* 7 Capability Pillars Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pt, idx) => {
            const Icon = pt.icon;

            return (
              <div 
                key={idx}
                className={`p-6 rounded-[16px] border border-[#E8DDD0] bg-[#F5EEE5]/40 hover:bg-white hover:border-[#C96F1B]/40 hover:shadow-[0_10px_30px_rgba(61,53,45,0.06)] transition-all duration-300 space-y-3 flex flex-col justify-between ${
                  idx === 6 ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="space-y-2.5">
                  <div className="w-10 h-10 rounded-[10px] bg-white border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center shadow-2xs">
                    <Icon className="w-5 h-5 text-[#C96F1B]" />
                  </div>
                  <h3 className="font-heading font-semibold text-base sm:text-lg text-[#3D352D] leading-snug">
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

// Internal icon wrapper helper
function HardHatIcon(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
      <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
      <path d="M4 15a8 8 0 0 1 16 0" />
    </svg>
  );
}
