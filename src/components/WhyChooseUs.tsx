import React from 'react';
import { Users, ShieldCheck, Truck, Scale, CheckCircle2, TrendingUp } from 'lucide-react';
import { Reveal, SectionEyebrow, StaggerGroup, StaggerItem } from './common/Motion';

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
    <section id="why-us" className="py-20 sm:py-28 bg-white text-[#3D352D] border-b border-[#E8DDD0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Reveal>
            <SectionEyebrow badge="WHY CHITRANI" className="justify-center mb-3" />
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
              Reliable Execution. Disciplined Operations.
            </h2>
            <p className="text-sm sm:text-base text-[#6B5E4E] font-body mt-3">
              Key capability pillars that make Chitrani Construction a dependable partner for developers and contractors.
            </p>
          </Reveal>
        </div>

        {/* 7 Capability Pillars Grid */}
        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pt, idx) => {
            const Icon = pt.icon;

            return (
              <StaggerItem
                key={idx}
                className={`h-full ${idx === 6 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
              >
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
