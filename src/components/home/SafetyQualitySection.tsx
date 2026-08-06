import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const SafetyQualitySection: React.FC = () => {
  const highlights = [
    'PPE and site-safety awareness',
    'Site supervision',
    'Quality inspections',
    'Preventive machinery checks',
    'Workforce coordination',
    'Documented project communication'
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F9F7F2] text-[#2D2D2D] border-b border-[#E7E7E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-[20px] border border-[#E7E7E7] p-8 sm:p-12 shadow-[0_10px_30px_rgba(45,45,45,0.05)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] bg-[#F9F7F2] border border-[#E7E7E7] text-[#FFB300]">
              <ShieldCheck className="w-4 h-4 text-[#FFB300]" />
              <span className="font-heading text-xs font-bold tracking-wider uppercase text-[#2D2D2D]">
                RESPONSIBLE SITE SUPPORT
              </span>
            </div>

            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#2D2D2D] tracking-tight">
              Safety and Quality in Everyday Site Coordination
            </h2>

            <p className="text-sm sm:text-base text-[#5D5D5D] font-body leading-relaxed">
              Chitrani Construction promotes responsible site practices through PPE usage, site supervision, quality inspections, workforce coordination, preventive equipment maintenance and compliance with applicable project requirements.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[12px] bg-white border-2 border-[#FFB300] hover:bg-[#FFB300] text-[#2D2D2D] font-heading text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
              >
                <span>Learn About Our Approach</span>
                <ArrowRight className="w-4 h-4 text-[#2D2D2D]" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#F9F7F2] p-6 sm:p-8 rounded-[16px] border border-[#E7E7E7] space-y-4">
            <span className="font-heading text-xs font-bold text-[#2D2D2D] uppercase tracking-wider block">
              Core Site Principles:
            </span>

            <ul className="space-y-3 font-body text-xs sm:text-sm text-[#5D5D5D]">
              {highlights.map((hl, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#FFB300] shrink-0" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
