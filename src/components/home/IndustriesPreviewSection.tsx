import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Factory, HardHat, ArrowRight, CheckCircle2 } from 'lucide-react';

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
    <section className="py-20 sm:py-28 bg-white text-[#2D2D2D] border-b border-[#E7E7E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-heading text-xs text-[#FFB300] font-bold tracking-wider uppercase block mb-2">
              SECTORS WE SUPPORT
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#2D2D2D] tracking-tight">
              Industries We Serve
            </h2>
          </div>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] bg-[#F9F7F2] hover:bg-[#E7E7E7] text-[#2D2D2D] font-heading text-xs font-semibold uppercase tracking-wider border border-[#E7E7E7] transition-all w-fit"
          >
            <span>Explore Industries</span>
            <ArrowRight className="w-4 h-4 text-[#FFB300]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;

            return (
              <div 
                key={idx}
                className="bg-white p-7 rounded-[20px] border border-[#E7E7E7] shadow-[0_10px_30px_rgba(45,45,45,0.05)] hover:border-[#FFB300] hover:-translate-y-1 transition-all duration-300 space-y-4 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-[12px] bg-[#F9F7F2] border border-[#E7E7E7] text-[#FFB300] group-hover:bg-[#FFB300] group-hover:text-[#2D2D2D] flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-[#FFB300] group-hover:text-[#2D2D2D]" />
                  </div>

                  <h3 className="font-heading font-semibold text-xl text-[#2D2D2D] leading-snug">
                    {sec.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5D5D5D] font-body leading-relaxed">
                    {sec.description}
                  </p>

                  <div className="pt-2 space-y-2 border-t border-[#E7E7E7]">
                    <span className="text-[11px] font-semibold text-[#2D2D2D] uppercase tracking-wider block font-heading">
                      Focus Areas:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#5D5D5D] font-body">
                      {sec.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB300] shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
