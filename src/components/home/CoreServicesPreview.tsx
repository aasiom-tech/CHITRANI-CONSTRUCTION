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
      {/* Background Radial Texture Ray */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C96F1B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E8DDD0] pb-6">
          <div>
            <SectionEyebrow badge="CONTRACTING & RENTAL CAPABILITIES" className="mb-2 text-[#C96F1B]" />
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#3D352D] tracking-tight">
              Our Core Services Directory
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider transition-all w-fit shadow-md min-h-[44px]"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </Reveal>

        {/* 5 Core Services Grid on Dark Charcoal Background */}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {homeServicesData.map((svc) => {
            const Icon = iconMap[svc.id] || Building2;

            return (
              <StaggerItem key={svc.id} className="h-full">
                <div className="bg-white p-7 sm:p-8 rounded-3xl border border-[#E8DDD0] hover:border-[#C96F1B] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#C96F1B]/20 border border-[#C96F1B]/40 text-[#C96F1B] flex items-center justify-center group-hover:bg-[#C96F1B] group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6 text-[#C96F1B] group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-specs text-xs bg-[#F5EEE5] text-[#C96F1B] px-3.5 py-1 rounded-xl border border-[#E8DDD0] font-bold uppercase">
                        0{svc.number}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#3D352D] group-hover:text-[#C96F1B] transition-colors leading-snug">
                      {svc.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                      {svc.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E8DDD0]">
                    <Link
                      to={svc.link}
                      className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider transition-all shadow-sm min-h-[44px]"
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
