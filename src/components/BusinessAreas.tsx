import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Truck, CheckCircle2 } from 'lucide-react';
import contractingImg from '../assets/images/construction-contracting-capability.png';
import boomPlacerImg from '../assets/images/concrete-boom-placer-rental-capability.png';

export const BusinessAreas: React.FC = () => {
  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-[#EADBC8] text-[#3D352D] border-t border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-heading text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block mb-2">
            OPERATIONAL FOCUS
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
            Two Core Capabilities
          </h2>
        </div>

        {/* Two Large Visually Distinct Capability Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Capability 1: Construction Contracting */}
          <div className="bg-white rounded-[20px] border border-[#EFE8DE] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col justify-between hover:border-[#C96F1B] hover:shadow-[0_22px_45px_rgba(45,45,45,0.12)] hover:-translate-y-1 transition-all duration-300 group focus-within:ring-2 focus-within:ring-[#C96F1B] focus-within:ring-offset-2">
            <div>
              <div className="relative h-60 sm:h-64 overflow-hidden bg-[#F5EEE5] rounded-t-[20px]">
                <img 
                  src={contractingImg} 
                  alt="Chitrani Construction safety helmet, structural blueprints and digital building model at an active construction site"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-[1.055] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] filter brightness-95 motion-reduce:transform-none motion-reduce:transition-none"
                  style={{
                    objectFit: 'cover',
                    objectPosition: '45% 65%',
                  }}
                />
                <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-[#F5EEE5] text-[#C96F1B] border border-[#E8DDD0] shadow-xs">
                  <Building2 className="w-5 h-5 text-[#C96F1B]" />
                </div>
              </div>

              <div className="p-7 sm:p-9 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider">
                  <span>STRUCTURAL & CIVIL CONTRACTS</span>
                </div>

                <h3 className="font-heading font-semibold text-2xl text-[#3D352D]">
                  Construction Contracting
                </h3>

                <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                  We undertake structural and civil construction contracts for public and private sector clients, supporting organised project execution, site coordination, structural works, and concrete-intensive construction requirements.
                </p>

                <div className="pt-2 space-y-2">
                  <span className="text-xs font-semibold text-[#3D352D] uppercase tracking-wider block font-heading">
                    Key Highlights:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B5E4E] font-body">
                    {[
                      'Structural contract execution',
                      'Civil construction works',
                      'Building construction support',
                      'Heavy concrete logistics',
                      'Public and private sector requirements'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-7 sm:p-9 pt-0">
              <Link
                to="/services/construction-contracting"
                className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold tracking-wider uppercase transition-colors shadow-[0_10px_30px_rgba(201,111,27,0.25)] focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
              >
                <span>Explore Contracting Services</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Capability 2: Concrete Boom Placer Rental */}
          <div className="bg-white rounded-[20px] border border-[#EFE8DE] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col justify-between hover:border-[#C96F1B] hover:shadow-[0_22px_45px_rgba(45,45,45,0.12)] hover:-translate-y-1 transition-all duration-300 group focus-within:ring-2 focus-within:ring-[#C96F1B] focus-within:ring-offset-2">
            <div>
              <div className="relative h-60 sm:h-64 overflow-hidden bg-[#F5EEE5] rounded-t-[20px]">
                <img 
                  src={boomPlacerImg} 
                  alt="Concrete boom placer supporting high-capacity concrete placement at a construction site"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-[1.055] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] filter brightness-95 motion-reduce:transform-none motion-reduce:transition-none"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center center',
                  }}
                />
                <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-[#F5EEE5] text-[#C96F1B] border border-[#E8DDD0] shadow-xs">
                  <Truck className="w-5 h-5 text-[#C96F1B]" />
                </div>
              </div>

              <div className="p-7 sm:p-9 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider">
                  <span>EQUIPMENT RENTAL</span>
                </div>

                <h3 className="font-heading font-semibold text-2xl text-[#3D352D]">
                  Concrete Boom Placer Rental
                </h3>

                <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                  We provide a Putzmeister M42-5 concrete boom placer on rental with an operator and helper, allowing contractors to access high-capacity concrete-placement support without equipment ownership.
                </p>

                <div className="pt-2 space-y-2">
                  <span className="text-xs font-semibold text-[#3D352D] uppercase tracking-wider block font-heading">
                    Key Highlights:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B5E4E] font-body">
                    {[
                      '42-metre boom reach',
                      '90 m³ capacity',
                      'Operator and helper included',
                      'Monthly single-shift deployment',
                      'Suitable for large-volume concrete placement'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-7 sm:p-9 pt-0">
              <Link
                to="/services/concrete-boom-placer-rental"
                className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold tracking-wider uppercase transition-colors shadow-[0_10px_30px_rgba(201,111,27,0.25)] focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
              >
                <span>View Rental Details</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
