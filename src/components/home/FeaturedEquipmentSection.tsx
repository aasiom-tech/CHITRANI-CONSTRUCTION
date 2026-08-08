import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import boomPlacerImg from '../../assets/images/putzmeister-m42-boom-placer.jpeg';
import { Reveal, SectionEyebrow } from '../common/Motion';

export const FeaturedEquipmentSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#EADBC8]/40 text-[#3D352D] border-b border-[#E8DDD0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="mb-10 sm:mb-14">
          <SectionEyebrow badge="CONCRETE PLACING EQUIPMENT" className="mb-2" />
          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
            Featured Equipment
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-white rounded-3xl border border-[#E8DDD0] overflow-hidden shadow-[0_16px_40px_rgba(61,53,45,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Equipment Image */}
            <div className="lg:col-span-5 relative bg-white min-h-[300px]">
              <img
                src={boomPlacerImg}
                alt="Putzmeister M42-5 Concrete Boom Placer Truck"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-xs text-[#3D352D] border border-[#E8DDD0] font-heading text-xs font-semibold uppercase shadow-xs">
                  Concrete Boom Placer
                </span>
              </div>
            </div>

            {/* Right: Equipment Specifications & Details */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-xl bg-[#F5EEE5] text-[#C96F1B] border border-[#E8DDD0] font-heading text-xs font-semibold uppercase">
                    <span className="text-[#3D352D]">Putzmeister M42-5</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 font-heading text-xs font-semibold uppercase">
                    <span>Availability: Subject to confirmation</span>
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
                  Putzmeister M42-5 Concrete Boom Placer
                </h3>

                <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                  A high-capacity concrete boom placer offered on structured monthly rental with an operator and helper for construction sites requiring reliable concrete-placement support.
                </p>

                {/* Verified Technical Specifications */}
                <div className="pt-2">
                  <span className="text-xs font-semibold text-[#3D352D] uppercase tracking-wider block font-heading mb-3">
                    Verified Technical Specifications:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-body text-[#6B5E4E]">
                    <div className="flex items-center gap-2 p-3 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0]">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span><strong>Boom Reach:</strong> <span className="font-specs font-bold text-[#3D352D]">42 metres</span></span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0]">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span><strong>Capacity:</strong> <span className="font-specs font-bold text-[#3D352D]">90 m³</span></span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0]">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span><strong>Manufacture Year:</strong> <span className="font-specs font-bold text-[#3D352D]">2020</span></span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0]">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span><strong>Emissions:</strong> AdBlue equipped</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0]">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span><strong>Crew:</strong> Operator & helper included</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0]">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span><strong>Rental Terms:</strong> 12h shift / 26 days/mo (Sundays excl)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/equipment/putzmeister-m42-5"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md min-h-[44px]"
                >
                  <span>View Equipment Details</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>

                <Link
                  to="/request-quote?requirement=equipment-rental&equipment=putzmeister-m42-5"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white border-2 border-[#C96F1B] text-[#C96F1B] hover:bg-[#C96F1B] hover:text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all min-h-[44px]"
                >
                  <span>Request Rental Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
