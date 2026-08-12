import React, { useState } from 'react';
import { Ruler, Gauge, Truck, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import m42Img from '../../assets/images/equipment/putzmeister-m42-5-equipment.webp';

type SystemTab = 'Overview' | 'Specifications' | 'Applications' | 'Rental Support' | 'Client Scope';

const tabs: SystemTab[] = ['Overview', 'Specifications', 'Applications', 'Rental Support', 'Client Scope'];

export const TechnicalEquipmentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SystemTab>('Overview');

  return (
    <section className="py-24 sm:py-32 bg-[#F5EEE5] text-[#3D352D] relative overflow-hidden border-b border-[#E8DDD0]">

      {/* Background Architectural Grid Linework */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#3D352D 1px, transparent 1px), linear-gradient(90deg, #3D352D 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-[#3D352D] pb-8 gap-4">
          <div className="space-y-2">
            <span className="font-specs text-xs text-[#C96F1B] font-extrabold uppercase tracking-widest block">
              SYSTEM ANALYSIS · HEAVY CONCRETE MACHINERY
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-5xl text-[#3D352D] uppercase tracking-tight">
              PUTZMEISTER M42-5 CONCRETE BOOM PLACER
            </h1>
          </div>

          <span className="font-specs text-xs font-bold text-[#3D352D]/70 uppercase tracking-widest border border-[#3D352D]/20 px-4 py-2 rounded-full w-fit">
            2020 MODEL · AdBlue BS6 CERTIFIED
          </span>
        </div>

        {/* TERMINAL-STYLE SELECTABLE SYSTEM TAB STRIP */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#E8DDD0] pb-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? 'bg-[#3D352D] text-white border-[#3D352D] shadow-lg'
                    : 'bg-white text-[#3D352D] border-[#E8DDD0] hover:border-[#C96F1B]'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* LARGE TECHNICAL EQUIPMENT CANVAS WITH CUBERTO HOVER CURSOR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-12 rounded-3xl border border-[#E8DDD0] shadow-xl">

          {/* LEFT / CENTER: MACHINE ISOLATED CANVAS WITH MEASUREMENT LINES */}
          <div className="lg:col-span-7 space-y-4">

            {/* Top Measurement Leader Arrow */}
            <div className="border-b border-dashed border-[#C96F1B] pb-2 flex justify-between text-[11px] font-specs font-bold text-[#C96F1B] uppercase tracking-widest">
              <span>← 42M VERTICAL BOOM REACH</span>
              <span>38M HORIZONTAL →</span>
            </div>

            {/* Central Visual Stage */}
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#3D352D] group"
            >
              <img
                src={m42Img}
                alt="Putzmeister M42-5 Concrete Boom Placer machine visual"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-heading">
                <span className="bg-[#C96F1B] px-3 py-1 rounded-md font-specs font-bold uppercase">
                  90 m³/h PUMP CAPACITY
                </span>
                <span className="bg-black/70 backdrop-blur-xs px-3 py-1 rounded-md border border-white/20 font-specs font-bold">
                  100M STEEL PIPELINE
                </span>
              </div>
            </div>

            {/* Bottom Measurement Leader Arrow */}
            <div className="border-t border-dashed border-[#C96F1B] pt-2 flex justify-between text-[11px] font-specs font-bold text-[#C96F1B] uppercase tracking-widest">
              <span>OPERATOR &amp; HELPER INCLUDED</span>
              <span>12-HOUR SINGLE SHIFT</span>
            </div>

          </div>

          {/* RIGHT: DYNAMIC SYSTEM VIEW CONTENT */}
          <div className="lg:col-span-5 space-y-6">

            <div className="border-b border-[#E8DDD0] pb-4">
              <span className="font-specs text-xs text-[#C96F1B] font-extrabold uppercase tracking-widest block">
                ACTIVE SYSTEM TAB: {activeTab}
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352D] mt-1">
                Putzmeister M42-5 Scope
              </h3>
            </div>

            {activeTab === 'Overview' && (
              <div className="space-y-4 text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                <p>
                  Chitrani Construction provides the Putzmeister M42-5 concrete boom placer on structured monthly rental with an operator and helper for sites requiring dependable, high-capacity concrete-placement support.
                </p>
                <div className="p-4 bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] space-y-2 text-xs font-specs text-[#3D352D]">
                  <div className="flex justify-between border-b border-[#E8DDD0] pb-1">
                    <span>BOOM REACH</span>
                    <strong className="text-[#C96F1B]">42 Metres</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#E8DDD0] pb-1">
                    <span>PUMP OUTPUT</span>
                    <strong className="text-[#C96F1B]">90 m³/h</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>YEAR OF MANUFACTURE</span>
                    <strong className="text-[#C96F1B]">2020</strong>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Specifications' && (
              <div className="space-y-3 text-xs font-specs text-[#3D352D]">
                <div className="p-3 bg-[#F5EEE5] rounded-xl flex justify-between">
                  <span>Boom Reach</span>
                  <strong className="text-[#C96F1B]">42 metres</strong>
                </div>
                <div className="p-3 bg-[#F5EEE5] rounded-xl flex justify-between">
                  <span>Capacity</span>
                  <strong className="text-[#C96F1B]">90 m³</strong>
                </div>
                <div className="p-3 bg-[#F5EEE5] rounded-xl flex justify-between">
                  <span>AdBlue BS6</span>
                  <strong className="text-[#C96F1B]">Equipped</strong>
                </div>
                <div className="p-3 bg-[#F5EEE5] rounded-xl flex justify-between">
                  <span>Operating Crew</span>
                  <strong className="text-[#C96F1B]">Operator &amp; Helper Included</strong>
                </div>
                <div className="p-3 bg-[#F5EEE5] rounded-xl flex justify-between">
                  <span>Working Days</span>
                  <strong className="text-[#C96F1B]">26 Days / Month (Sundays Excluded)</strong>
                </div>
              </div>
            )}

            {activeTab === 'Applications' && (
              <div className="space-y-3 text-xs sm:text-sm text-[#6B5E4E] font-body">
                <p>Designed for demanding high-volume concrete pour requirements:</p>
                <div className="space-y-2">
                  {[
                    'High-rise residential concrete placement',
                    'Large-volume commercial slab pours',
                    'Infrastructure & foundation concrete works',
                    'Contractor equipment support'
                  ].map((app, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-body text-[#3D352D]">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Rental Support' && (
              <div className="space-y-4 text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                <p>
                  Deployments are governed by structured monthly single-shift contracts including dedicated operating personnel for continuous site operations.
                </p>
                <div className="p-4 bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] font-specs text-xs text-[#C96F1B] font-bold">
                  Shift Model: 12-Hour Single Shift (26 Days per Month)
                </div>
              </div>
            )}

            {activeTab === 'Client Scope' && (
              <div className="space-y-3 text-xs font-body text-[#6B5E4E]">
                <span className="font-heading font-bold text-xs text-[#3D352D] uppercase block">
                  Client Site Responsibilities:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {['Fuel supply', 'AdBlue', 'Accommodation', 'Crew food', 'Site safety', 'PPE'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-[#3D352D]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C96F1B] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
