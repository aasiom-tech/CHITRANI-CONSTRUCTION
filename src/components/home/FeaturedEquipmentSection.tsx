import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import boomPlacerImg from '../../assets/images/putzmeister-m42-boom-placer.jpeg';

export const FeaturedEquipmentSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#EADBC8] text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block mb-2">
              CONCRETE PLACING EQUIPMENT
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
              Featured Equipment
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-[20px] border border-[#E8DDD0] overflow-hidden shadow-[0_10px_30px_rgba(61,53,45,0.05)] grid grid-cols-1 lg:grid-cols-12 gap-0">
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
              <span className="px-3 py-1 rounded-[10px] bg-white text-[#3D352D] border border-[#E8DDD0] font-heading text-xs font-semibold uppercase shadow-xs">
                Concrete Boom Placer
              </span>
            </div>
          </div>

          {/* Right: Equipment Specifications & Details */}
          <div className="lg:col-span-7 p-7 sm:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[10px] bg-[#F5EEE5] text-[#C96F1B] border border-[#E8DDD0] font-heading text-xs font-semibold uppercase">
                <span className="text-[#3D352D]">Putzmeister M42-5</span>
              </div>

              <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
                Putzmeister M42-5 Concrete Boom Placer
              </h3>

              <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                A high-capacity concrete boom placer offered on structured monthly rental with an operator and helper for construction sites requiring reliable concrete-placement support.
              </p>

              {/* Verified Technical Specifications */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-[#3D352D] uppercase tracking-wider block font-heading mb-3">
                  Verified Technical Specifications:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-body text-[#6B5E4E]">
                  <div className="flex items-center gap-2 p-2.5 bg-[#F5EEE5] rounded-[10px] border border-[#E8DDD0]">
                    <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                    <span><strong>Boom Reach:</strong> <span className="font-specs font-bold text-[#3D352D]">42 metres</span></span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#F5EEE5] rounded-[10px] border border-[#E8DDD0]">
                    <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                    <span><strong>Capacity:</strong> <span className="font-specs font-bold text-[#3D352D]">90 m³</span></span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#F5EEE5] rounded-[10px] border border-[#E8DDD0]">
                    <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                    <span><strong>Manufacture Year:</strong> <span className="font-specs font-bold text-[#3D352D]">2020</span></span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#F5EEE5] rounded-[10px] border border-[#E8DDD0]">
                    <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                    <span><strong>Emissions:</strong> AdBlue equipped</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#F5EEE5] rounded-[10px] border border-[#E8DDD0]">
                    <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                    <span><strong>Crew:</strong> Operator & helper included</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#F5EEE5] rounded-[10px] border border-[#E8DDD0]">
                    <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                    <span><strong>Rental Terms:</strong> 12h shift / 26 days/mo (Sundays excl)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/equipment/putzmeister-m42-5"
                className="w-full sm:w-auto px-6 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5"
              >
                <span>View Equipment Details</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <Link
                to="/request-quote?requirement=equipment-rental&equipment=putzmeister-m42-5"
                className="w-full sm:w-auto px-6 py-3.5 rounded-[12px] bg-white border-2 border-[#C96F1B] text-[#C96F1B] hover:bg-[#C96F1B] hover:text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <span>Request Rental Quote</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
