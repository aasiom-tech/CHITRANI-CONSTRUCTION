import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Truck, ArrowRight, Layers, HardHat, Wrench } from 'lucide-react';
import { Reveal, SectionEyebrow, StaggerGroup, StaggerItem } from '../common/Motion';
import { homeServicesData } from './homeServicePreviewData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'rcc-structural-work': Building2,
  'civil-construction': Layers,
  'brickwork-blockwork': Wrench,
  'construction-labour-contracting': HardHat,
  'boom-placer-rental': Truck
};

export const CoreServicesPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F5EEE5] text-[#3D352D] border-b border-[#E8DDD0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <SectionEyebrow badge="CONTRACTING & RENTAL CAPABILITIES" className="mb-2" />
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
              Our Core Services
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#F5EEE5] text-[#3D352D] font-heading text-xs font-semibold uppercase tracking-wider border border-[#E8DDD0] transition-all w-fit shadow-xs hover:border-[#C96F1B]/60 min-h-[44px]"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-[#C96F1B]" />
          </Link>
        </Reveal>

        {/* 5 Core Services Grid */}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {homeServicesData.map((svc, idx) => {
            const Icon = iconMap[svc.id] || Building2;

            return (
              <StaggerItem key={svc.id} className="h-full">
                <div className="bg-white p-7 sm:p-8 rounded-2xl border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.05)] hover:border-[#C96F1B]/60 hover:shadow-[0_20px_40px_rgba(61,53,45,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center group-hover:bg-[#C96F1B] group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6 text-[#C96F1B] group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-heading text-xs bg-[#F5EEE5] text-[#C96F1B] px-3.5 py-1 rounded-xl border border-[#E8DDD0] font-semibold uppercase">
                        Service {svc.number}
                      </span>
                    </div>

                    <h3 className="font-heading font-semibold text-xl sm:text-2xl text-[#3D352D] group-hover:text-[#C96F1B] transition-colors leading-snug">
                      {svc.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                      {svc.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E8DDD0]">
                    <Link
                      to={svc.link}
                      className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider transition-all shadow-sm hover:shadow-md min-h-[44px]"
                    >
                      <span>{svc.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </Link>
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
