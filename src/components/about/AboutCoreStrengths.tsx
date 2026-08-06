import React from 'react';
import { 
  Award, 
  Layers, 
  MessageSquare, 
  Users, 
  ShieldCheck, 
  Sliders 
} from 'lucide-react';

export const AboutCoreStrengths: React.FC = () => {
  const strengths = [
    {
      icon: Award,
      title: 'Quality-Focused Workmanship',
      description: 'Attention to construction quality, site requirements and project-specific execution needs.'
    },
    {
      icon: Layers,
      title: 'Connected Capabilities',
      description: 'Construction contracting and concrete-placement equipment support through one enterprise.'
    },
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      description: 'Clear coordination regarding requirements, schedules, commercial terms and responsibilities.'
    },
    {
      icon: Users,
      title: 'Equipment with Operating Crew',
      description: 'Concrete boom placer rental supplied with an operator and helper.'
    },
    {
      icon: ShieldCheck,
      title: 'Safety-Conscious Practices',
      description: 'PPE awareness, site supervision, workforce coordination and responsible machinery deployment.'
    },
    {
      icon: Sliders,
      title: 'Customized Project Support',
      description: 'Service planning based on project location, site conditions, duration and equipment requirements.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F5EEE5] text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block mb-2">
            WHAT DEFINES OUR WORK
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
            Core Strengths
          </h2>
        </div>

        {/* 6 Light Feature Grid Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((st, idx) => {
            const Icon = st.icon;

            return (
              <div 
                key={idx}
                className="bg-white p-7 rounded-[18px] border border-[#E8DDD0] border-t-2 border-t-[#C96F1B] shadow-[0_10px_30px_rgba(61,53,45,0.04)] hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(61,53,45,0.09)] transition-all duration-300 space-y-3 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-full bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5 text-[#C96F1B]" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-[#3D352D] leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                    {st.description}
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
