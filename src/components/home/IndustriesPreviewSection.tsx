import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Factory, HardHat, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Reveal, SectionEyebrow, StaggerGroup, StaggerItem } from '../common/Motion';

export const IndustriesPreviewSection: React.FC = () => {
  const sectors = [
    {
      icon: Building,
      title: 'Real Estate and Building Construction',
      description: 'Construction and concrete-placement support for residential, commercial and mixed-use building requirements.',
      highlights: [
        'Building construction support',
        'Concrete-intensive works',
        'Machinery and site coordination'
      ]
    },
    {
      icon: Factory,
      title: 'Infrastructure and Civil Works',
      description: 'Civil construction and equipment support for infrastructure contractors and public or private project requirements.',
      highlights: [
        'Infrastructure-linked civil works',
        'Concrete placement support',
        'Contractor coordination'
      ]
    },
    {
      icon: HardHat,
      title: 'Contractor Equipment Support',
      description: 'Boom placer rental for contractors requiring high-capacity concrete-placement capability without direct equipment ownership.',
      highlights: [
        'Putzmeister M42-5',
        'Operator and helper',
        'Structured monthly rental'
      ]
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white text-[#3D352D] border-b border-[#E8DDD0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <SectionEyebrow badge="SECTORS WE SUPPORT" className="mb-2" />
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
              Industries We Serve
            </h2>
          </div>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F5EEE5] hover:bg-[#E8DDD0] text-[#3D352D] font-heading text-xs font-semibold uppercase tracking-wider border border-[#E8DDD0] transition-all w-fit shadow-xs min-h-[44px]"
          >
            <span>Explore Industries</span>
            <ArrowRight className="w-4 h-4 text-[#C96F1B]" />
          </Link>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;

            return (
              <StaggerItem key={idx} className="h-full">
                <div className="bg-white p-8 rounded-2xl border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.04)] hover:border-[#C96F1B]/60 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(61,53,45,0.09)] transition-all duration-300 space-y-4 group flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] group-hover:bg-[#C96F1B] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-[#C96F1B] group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="font-heading font-semibold text-xl text-[#3D352D] leading-snug">
                      {sec.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                      {sec.description}
                    </p>

                    <div className="pt-3 space-y-2 border-t border-[#E8DDD0]">
                      <span className="text-[11px] font-semibold text-[#3D352D] uppercase tracking-wider block font-heading">
                        Focus Areas:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#6B5E4E] font-body">
                        {sec.highlights.map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C96F1B] shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
