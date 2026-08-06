import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Truck, CheckCircle2 } from 'lucide-react';
import contractingImg from '../assets/images/construction-contracting-capability.png';
import boomPlacerImg from '../assets/images/concrete-boom-placer-rental-capability.png';

export const BusinessAreas: React.FC = () => {
  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-[#F9F7F2] text-[#2D2D2D] border-t border-b border-[#E7E7E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-heading text-xs text-[#FFB300] font-bold tracking-wider uppercase block mb-2">
            OPERATIONAL FOCUS
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#2D2D2D] tracking-tight">
            Two Core Capabilities
          </h2>
        </div>

        {/* Two Large Visually Distinct Capability Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Capability 1: Construction Contracting */}
          <div className="bg-white rounded-[20px] border border-[#E7E7E7] overflow-hidden shadow-[0_10px_30px_rgba(45,45,45,0.05)] flex flex-col justify-between hover:border-[#FFB300] hover:shadow-[0_20px_40px_rgba(45,45,45,0.1)] hover:-translate-y-1 transition-all duration-300 group focus-within:ring-2 focus-within:ring-[#FFB300] focus-within:ring-offset-2">
            <div>
              <div className="relative h-60 sm:h-64 overflow-hidden bg-[#F9F7F2] rounded-t-[20px]">
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
                <div className="absolute top-4 left-4 p-2.5 rounded-[12px] bg-white text-[#FFB300] border border-[#E7E7E7] shadow-xs">
                  <Building2 className="w-5 h-5 text-[#FFB300]" />
                </div>
              </div>

              <div className="p-7 sm:p-9 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[10px] bg-[#F9F7F2] border border-[#E7E7E7] text-[#FFB300] font-heading text-xs font-semibold uppercase tracking-wider">
                  <span className="text-[#2D2D2D]">STRUCTURAL & CIVIL CONTRACTS</span>
                </div>

                <h3 className="font-heading font-semibold text-2xl text-[#2D2D2D]">
                  Construction Contracting
                </h3>

                <p className="text-sm text-[#5D5D5D] font-body leading-relaxed">
                  Civil and structural construction support for public and private sector requirements, with focus on organised execution, concrete-intensive works, site coordination and project-specific resource planning.
                </p>

                <div className="pt-2 space-y-2">
                  <span className="text-xs font-semibold text-[#2D2D2D] uppercase tracking-wider block font-heading">
                    Key Highlights:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5D5D5D] font-body">
                    {[
                      'Structural construction support',
                      'Civil construction requirements',
                      'Residential and commercial projects',
                      'Infrastructure-linked civil support',
                      'Site and resource coordination'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FFB300] shrink-0" />
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
                className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-[12px] bg-[#FFB300] hover:bg-[#E59A00] text-[#2D2D2D] font-heading text-xs font-semibold tracking-wider uppercase transition-all shadow-xs hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-[#FFB300]"
              >
                <span>Explore Contracting Services</span>
                <ArrowRight className="w-4 h-4 text-[#2D2D2D]" />
              </Link>
            </div>
          </div>

          {/* Capability 2: Concrete Boom Placer Rental */}
          <div className="bg-white rounded-[20px] border border-[#E7E7E7] overflow-hidden shadow-[0_10px_30px_rgba(45,45,45,0.05)] flex flex-col justify-between hover:border-[#FFB300] hover:shadow-[0_20px_40px_rgba(45,45,45,0.1)] hover:-translate-y-1 transition-all duration-300 group focus-within:ring-2 focus-within:ring-[#FFB300] focus-within:ring-offset-2">
            <div>
              <div className="relative h-60 sm:h-64 overflow-hidden bg-[#F9F7F2] rounded-t-[20px]">
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
                <div className="absolute top-4 left-4 p-2.5 rounded-[12px] bg-white text-[#FFB300] border border-[#E7E7E7] shadow-xs">
                  <Truck className="w-5 h-5 text-[#FFB300]" />
                </div>
              </div>

              <div className="p-7 sm:p-9 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[10px] bg-[#F9F7F2] border border-[#E7E7E7] text-[#FFB300] font-heading text-xs font-semibold uppercase tracking-wider">
                  <span className="text-[#2D2D2D]">EQUIPMENT RENTAL</span>
                </div>

                <h3 className="font-heading font-semibold text-2xl text-[#2D2D2D]">
                  Concrete Boom Placer Rental
                </h3>

                <p className="text-sm text-[#5D5D5D] font-body leading-relaxed">
                  Putzmeister M42-5 concrete boom placer rental with an operator and helper for project sites requiring dependable, high-capacity concrete-placement support.
                </p>

                <div className="pt-2 space-y-2">
                  <span className="text-xs font-semibold text-[#2D2D2D] uppercase tracking-wider block font-heading">
                    Key Highlights:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5D5D5D] font-body">
                    {[
                      '42-metre boom reach',
                      '90 m³ capacity',
                      'Operator and helper included',
                      'Monthly single-shift deployment',
                      'Large-volume concrete-placement support'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FFB300] shrink-0" />
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
                className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-[12px] bg-[#FFB300] hover:bg-[#E59A00] text-[#2D2D2D] font-heading text-xs font-semibold tracking-wider uppercase transition-all shadow-xs hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-[#FFB300]"
              >
                <span>View Rental Details</span>
                <ArrowRight className="w-4 h-4 text-[#2D2D2D]" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
