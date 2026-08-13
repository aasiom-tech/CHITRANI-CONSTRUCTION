import React from 'react';
import { ShieldCheck, CheckCircle2, Info, HardHat, Compass, FileCheck } from 'lucide-react';

export const AboutSafetyQuality: React.FC = () => {
  const safetyModules = [
    {
      title: 'MANDATORY SITE PPE & PROTOCOLS',
      desc: 'Helmets, safety boots, high-visibility jackets, and harnesses strictly enforced on active sites.',
      icon: HardHat
    },
    {
      title: 'PRECISION LINE & LEVEL EXECUTION',
      desc: 'Execution verified strictly as per approved structural drawings, benchmarks, and surveying lines.',
      icon: Compass
    },
    {
      title: 'QUALITY & WORKMANSHIP INSPECTIONS',
      desc: 'Formwork tightness, bar-bending spacing, concrete slump testing, and curing supervision at every pour.',
      icon: FileCheck
    },
    {
      title: 'PREVENTIVE MACHINERY MAINTENANCE',
      desc: 'Regular hydraulic, engine, and pipe wear inspections for Putzmeister M42-5 equipment before deployment.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F5EEE5] text-[#3D352D] border-b border-[#E8DDD0] relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(#C96F1B_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C96F1B]/20 text-[#C96F1B] border border-[#C96F1B]/40 font-heading text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#C96F1B]" />
            <span>RESPONSIBLE SITE PRACTICES</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#3D352D] tracking-tight">
            Safety and Quality Standards
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed max-w-2xl mx-auto">
            Chitrani Construction maintains disciplined site supervision, equipment checks, and workmanship protocols across all project engagements.
          </p>
        </div>

        {/* HORIZONTAL SAFETY PERFORMANCE ROWS */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {safetyModules.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.title}
                className="p-6 rounded-2xl bg-white border border-[#E8DDD0] hover:border-[#C96F1B] hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C96F1B]/20 text-[#C96F1B] flex items-center justify-center shrink-0 border border-[#C96F1B]/30 group-hover:bg-[#C96F1B] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-specs font-bold text-xs text-[#F5A54A]">0{idx + 1}</span>
                      <h3 className="font-heading font-bold text-base text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                        {mod.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#6B5E4E] font-body leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 text-xs font-specs text-[#C96F1B]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>VERIFIED PROTOCOL</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clarification Box */}
        <div className="p-4 sm:p-5 bg-white rounded-2xl border border-[#E8DDD0] max-w-5xl mx-auto flex items-center gap-3 text-xs text-[#6B5E4E] font-body">
          <Info className="w-4 h-4 text-[#C96F1B] shrink-0" />
          <p>
            Specific site responsibilities, PPE arrangements, safety provisions, and commercial obligations are confirmed in the relevant quotation or project agreement.
          </p>
        </div>

      </div>
    </section>
  );
};
