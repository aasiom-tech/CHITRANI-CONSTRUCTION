import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Truck, ArrowRight, Layers, HardHat, Wrench } from 'lucide-react';
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
    <section className="py-20 sm:py-28 bg-[#F5EEE5] text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block mb-2">
              CONTRACTING &amp; RENTAL CAPABILITIES
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
              Our Core Services
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] bg-white hover:bg-[#F5EEE5] text-[#3D352D] font-heading text-xs font-semibold uppercase tracking-wider border border-[#E8DDD0] transition-all w-fit shadow-xs"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-[#C96F1B]" />
          </Link>
        </div>

        {/* 5 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {homeServicesData.map((svc) => {
            const Icon = iconMap[svc.id] || Building2;

            return (
              <div
                key={svc.id}
                className="bg-white p-7 sm:p-8 rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.05)] hover:border-[rgba(201,111,27,0.55)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-[12px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center group-hover:bg-[#C96F1B] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6 text-[#C96F1B] group-hover:text-white" />
                    </div>
                    <span className="font-heading text-xs bg-[#F5EEE5] text-[#C96F1B] px-3 py-1 rounded-[10px] border border-[#E8DDD0] font-semibold uppercase">
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
                    className="inline-flex items-center justify-between w-full px-5 py-3 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider transition-all shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5"
                  >
                    <span>{svc.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
