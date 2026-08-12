import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import contractingImg from '../../assets/images/services/construction-contracting-service.webp';
import boomPlacerImg from '../../assets/images/services/boom-placer-rental-service.webp';
import equipmentImg from '../../assets/images/equipment/putzmeister-m42-5-equipment.webp';

interface Pathway {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  link: string;
  ctaText: string;
  image: string;
  imageAlt: string;
}

const pathways: Pathway[] = [
  {
    id: 'contracting',
    num: '01',
    title: 'CONSTRUCTION CONTRACTING',
    subtitle: 'Structural RCC & Civil Execution',
    description: 'Organised structural and civil construction execution support for commercial, residential, and infrastructure-linked projects based on approved drawings and BOQ scope.',
    highlights: [
      'Single-point contractor coordination',
      'Concrete-intensive structural execution',
      'Verified construction-vendor experience on Mumbai projects',
      'Site coordination and execution planning'
    ],
    link: '/services/construction-contracting',
    ctaText: 'Explore Contracting Scope',
    image: contractingImg,
    imageAlt: 'Construction site representing contracting and project execution services'
  },
  {
    id: 'concrete-placement',
    num: '02',
    title: 'CONCRETE PLACEMENT',
    subtitle: 'High-Elevation Slab & Raft Pours',
    description: 'High-volume concrete placement support using high-capacity pumping machinery and skilled operating crew for continuous pours and multi-storey slab execution.',
    highlights: [
      '42-metre vertical boom reach capability',
      '90 m³/h continuous pumping volume',
      '100-metre steel delivery line setup',
      'Operating crew included'
    ],
    link: '/services/concrete-boom-placer-rental',
    ctaText: 'Explore Concrete Placement',
    image: boomPlacerImg,
    imageAlt: 'Concrete placement operation during slab pouring'
  },
  {
    id: 'equipment-rental',
    num: '03',
    title: 'EQUIPMENT RENTAL',
    subtitle: 'Putzmeister M42-5 Deployment',
    description: 'Structured monthly rental deployment of a 42m Putzmeister concrete boom placer with dedicated operator and helper team across Maharashtra.',
    highlights: [
      'Putzmeister M42-5 2020 fleet model',
      'AdBlue BS6 environmentally compliant',
      'Dedicated operator & helper team included',
      'Structured 12-hour single shift schedule'
    ],
    link: '/equipment/putzmeister-m42-5',
    ctaText: 'View Equipment Details',
    image: equipmentImg,
    imageAlt: 'Putzmeister M42-5 concrete boom placer machine'
  }
];

export const TerminalModularPathways: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('contracting');
  const activePathway = pathways.find((p) => p.id === activeId) || pathways[0];

  return (
    <section className="py-24 sm:py-32 bg-[#FFFFFF] text-[#3D352D] border-b border-[#E8DDD0] relative overflow-hidden" aria-label="Terminal Modular Pathways">

      {/* Background Technical Grid Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#3D352D 1px, transparent 1px), linear-gradient(90deg, #3D352D 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-[#3D352D] pb-8 gap-4">
          <div className="space-y-2">
            <span className="font-specs text-xs text-[#C96F1B] font-extrabold uppercase tracking-widest block">
              MODULAR EXECUTION SYSTEM
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#3D352D] uppercase tracking-tight">
              CORE OPERATIONAL PATHWAYS
            </h2>
          </div>
          <span className="font-specs text-xs font-bold text-[#7E7267] uppercase tracking-widest border border-[#E8DDD0] px-4 py-2 rounded-full w-fit">
            SELECT PATHWAY TO EXPAND
          </span>
        </div>

        {/* TERMINAL-STYLE EXPANDABLE MODULAR GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT: COLLAPSIBLE PATHWAY SELECTOR STACK */}
          <div className="lg:col-span-6 space-y-4">
            {pathways.map((pathway) => {
              const isActive = pathway.id === activeId;
              return (
                <div
                  key={pathway.id}
                  onClick={() => setActiveId(pathway.id)}
                  className={`p-6 sm:p-8 rounded-3xl border-2 transition-all duration-500 cursor-pointer ${
                    isActive
                      ? 'bg-[#3D352D] text-white border-[#C96F1B] shadow-2xl scale-[1.01]'
                      : 'bg-[#F5EEE5]/60 text-[#3D352D] border-[#E8DDD0] hover:border-[#C96F1B]/50 hover:bg-[#F5EEE5]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`font-specs font-black text-lg ${isActive ? 'text-[#C96F1B]' : 'text-[#7E7267]'}`}>
                        {pathway.num}
                      </span>
                      <div>
                        <h3 className={`font-heading font-bold text-lg sm:text-2xl uppercase tracking-tight ${
                          isActive ? 'text-white' : 'text-[#3D352D]'
                        }`}>
                          {pathway.title}
                        </h3>
                        <p className={`text-xs font-body ${isActive ? 'text-[#D1C5B0]' : 'text-[#6B5E4E]'}`}>
                          {pathway.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isActive ? 'bg-[#C96F1B] text-white rotate-90' : 'bg-white text-[#3D352D] border border-[#E8DDD0]'
                    }`}>
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Expanded Content View when active */}
                  {isActive && (
                    <div className="mt-6 pt-6 border-t border-white/15 space-y-6 animate-in fade-in duration-300">
                      <p className="text-xs sm:text-sm text-[#D1C5B0] font-body leading-relaxed">
                        {pathway.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {pathway.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-body text-white">
                            <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <Link
                          to={pathway.link}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                        >
                          <span>{pathway.ctaText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT: DYNAMIC VISUAL STAGE WITH CUBERTO-INSPIRED CURSOR INTERACTION */}
          <div
            className="lg:col-span-6 relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#3D352D] border border-[#E8DDD0] shadow-2xl group"
          >
            <img
              src={activePathway.image}
              alt={activePathway.imageAlt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs font-heading">
              <span className="bg-[#C96F1B] px-3.5 py-1.5 rounded-full font-specs font-bold uppercase tracking-wider">
                PATHWAY {activePathway.num} VISUAL STAGE
              </span>
              <span className="bg-black/60 backdrop-blur-xs px-3.5 py-1.5 rounded-full font-specs font-bold text-white border border-white/20">
                CHITRANI CONSTRUCTION
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
