import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, CheckCircle2, ArrowRight, FileText } from 'lucide-react';
import { equipmentData } from '../data/equipment';

export const Equipment: React.FC = () => {
  const item = equipmentData[0];
  const altText = "Putzmeister M42-5 concrete boom placer positioned for concrete placement at a construction site";
  const quoteLink = `/request-quote?requirement=equipment-rental&equipment=${encodeURIComponent(item.slug)}`;

  return (
    <section id="equipment" className="py-16 sm:py-24 bg-[#F5EEE5] text-[#3D352D] border-t border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
            EQUIPMENT SUPPORT
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#3D352D] tracking-tight">
            Concrete Placement Equipment for Construction Projects
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Chitrani Construction provides structured concrete boom placer rental for sites requiring high-capacity concrete-placement support.
          </p>
        </div>

        {/* Single Equipment Card Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-[#C96F1B] motion-safe:hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div>
              <div className="relative aspect-[16/9] overflow-hidden bg-[#F5EEE5]">
                <img
                  src={item.image}
                  alt={altText}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E8DDD0] text-[11px] font-heading font-bold text-[#3D352D] flex items-center gap-1.5 uppercase tracking-wider">
                  <Truck className="w-3.5 h-3.5 text-[#C96F1B]" />
                  <span>{item.category}</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352D] tracking-tight group-hover:text-[#C96F1B] transition-colors">
                  {item.name}
                </h3>

                <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                  {item.clientScopeSummary}
                </p>

                <div className="pt-3 border-t border-[#E8DDD0] space-y-2.5">
                  <h4 className="font-heading text-xs text-[#3D352D] font-bold uppercase tracking-wider">
                    Verified Specifications
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B5E4E] font-body">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span><strong>42 m</strong> boom reach</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span><strong>90 m³</strong> capacity</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span>Manufactured in <strong>2020</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span><strong>AdBlue</strong> equipped</span>
                    </li>
                    <li className="flex items-center gap-2 sm:col-span-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span><strong>Operator and helper</strong> included</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to={`/equipment/${item.slug}`}
                className="w-full sm:w-1/2 py-3.5 px-5 rounded-lg bg-[#3D352D] hover:bg-[#2D2620] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <span>View Equipment Details</span>
                <ArrowRight className="w-4 h-4 text-[#C96F1B]" />
              </Link>

              <Link
                to={quoteLink}
                className="w-full sm:w-1/2 py-3.5 px-5 rounded-lg bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <FileText className="w-4 h-4" />
                <span>Request Rental Quote</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
