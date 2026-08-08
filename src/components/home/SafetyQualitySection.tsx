import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Reveal, SectionEyebrow } from '../common/Motion';

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
    <section className="py-20 sm:py-28 bg-[#F5EEE5] text-[#3D352D] border-b border-[#E8DDD0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="bg-white rounded-3xl border border-[#E8DDD0] p-8 sm:p-14 shadow-[0_10px_30px_rgba(61,53,45,0.05)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <SectionEyebrow badge="RESPONSIBLE SITE SUPPORT" className="mb-1" />

            <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#3D352D] tracking-tight">
              Safety and Quality in Everyday Site Coordination
            </h2>

            <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
              Chitrani Construction promotes responsible site practices through PPE usage, site supervision, quality inspections, workforce coordination, preventive equipment maintenance and compliance with applicable project requirements.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border-2 border-[#C96F1B] text-[#C96F1B] hover:bg-[#C96F1B] hover:text-white font-heading text-xs font-semibold uppercase tracking-wider transition-all shadow-xs min-h-[44px]"
              >
                <span>Learn About Our Approach</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#F5EEE5] p-6 sm:p-8 rounded-2xl border border-[#E8DDD0] space-y-4">
            <span className="font-heading text-xs font-semibold text-[#3D352D] uppercase tracking-wider block">
              Core Site Principles:
            </span>

            <ul className="space-y-3 font-body text-xs sm:text-sm text-[#6B5E4E]">
              {highlights.map((hl, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#C96F1B] shrink-0" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
