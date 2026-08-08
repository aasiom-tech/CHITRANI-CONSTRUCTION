import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Truck, CheckCircle2 } from 'lucide-react';
import contractingImg from '../assets/images/construction-contracting-capability.png';
import boomPlacerImg from '../assets/images/concrete-boom-placer-rental-capability.png';
import { Reveal, SectionEyebrow, StaggerGroup, StaggerItem } from './common/Motion';

export const BusinessAreas: React.FC = () => {
  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-[#EADBC8]/40 text-[#3D352D] border-t border-b border-[#E8DDD0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <Reveal>
            <SectionEyebrow badge="OPERATIONAL FOCUS" className="justify-center mb-3" />
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
              Two Core Capabilities
            </h2>
          </Reveal>
        </div>

        {/* Two Large Visually Distinct Capability Panels */}
        <StaggerGroup className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Capability 1: Construction Contracting */}
          <StaggerItem>
            <div className="bg-white rounded-2xl border border-[#E8DDD0] overflow-hidden shadow-[0_10px_30px_rgba(61,53,45,0.05)] flex flex-col justify-between hover:border-[#C96F1B]/60 hover:shadow-[0_20px_40px_rgba(61,53,45,0.1)] transition-all duration-300 group h-full focus-within:ring-2 focus-within:ring-[#C96F1B] focus-within:ring-offset-2">
              <div>
                <div className="relative h-60 sm:h-68 overflow-hidden bg-[#F5EEE5]">
                  <img
                    src={contractingImg}
                    alt="Chitrani Construction safety helmet, structural blueprints and digital building model at an active construction site"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-[1.055] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] filter brightness-95"
                    style={{
                      objectFit: 'cover',
                      objectPosition: '45% 65%',
                    }}
                  />
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-white text-[#C96F1B] border border-[#E8DDD0] shadow-2xs">
                    <Building2 className="w-5 h-5 text-[#C96F1B]" />
                  </div>
                </div>

                <div className="p-7 sm:p-9 space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider">
                    <span className="text-[#3D352D]">STRUCTURAL & CIVIL CONTRACTS</span>
                  </div>

                  <h3 className="font-heading font-semibold text-2xl text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                    Construction Contracting
                  </h3>

                  <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                    Civil and structural construction support for public and private sector requirements, with focus on organised execution, concrete-intensive works, site coordination and project-specific resource planning.
                  </p>

                  <div className="pt-2 space-y-2">
                    <span className="text-xs font-semibold text-[#3D352D] uppercase tracking-wider block font-heading">
                      Key Highlights:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B5E4E] font-body">
                      {[
                        'Structural construction support',
                        'Civil construction requirements',
                        'Residential and commercial projects',
                        'Infrastructure-linked civil support',
                        'Site and resource coordination'
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
                  className="inline-flex items-center justify-between w-full px-6 py-4 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold tracking-wider uppercase transition-all shadow-sm hover:shadow-md focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B] min-h-[44px]"
                >
                  <span>Explore Contracting Services</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>
          </StaggerItem>

          {/* Capability 2: Concrete Boom Placer Rental */}
          <StaggerItem>
            <div className="bg-white rounded-2xl border border-[#E8DDD0] overflow-hidden shadow-[0_10px_30px_rgba(61,53,45,0.05)] flex flex-col justify-between hover:border-[#C96F1B]/60 hover:shadow-[0_20px_40px_rgba(61,53,45,0.1)] transition-all duration-300 group h-full focus-within:ring-2 focus-within:ring-[#C96F1B] focus-within:ring-offset-2">
              <div>
                <div className="relative h-60 sm:h-68 overflow-hidden bg-[#F5EEE5]">
                  <img
                    src={boomPlacerImg}
                    alt="Concrete boom placer supporting high-capacity concrete placement at a construction site"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-[1.055] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] filter brightness-95"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center center',
                    }}
                  />
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-white text-[#C96F1B] border border-[#E8DDD0] shadow-2xs">
                    <Truck className="w-5 h-5 text-[#C96F1B]" />
                  </div>
                </div>

                <div className="p-7 sm:p-9 space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider">
                    <span className="text-[#3D352D]">EQUIPMENT RENTAL</span>
                  </div>

                  <h3 className="font-heading font-semibold text-2xl text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                    Concrete Boom Placer Rental
                  </h3>

                  <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                    Putzmeister M42-5 concrete boom placer rental with an operator and helper for project sites requiring dependable, high-capacity concrete-placement support.
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
                        'Large-volume concrete-placement support'
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
                  className="inline-flex items-center justify-between w-full px-6 py-4 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold tracking-wider uppercase transition-all shadow-sm hover:shadow-md focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B] min-h-[44px]"
                >
                  <span>View Rental Details</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
};
