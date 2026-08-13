import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { SlidersVertical, CheckCircle2, ShieldCheck, Truck, Clock, UserCheck, Calendar, Layers } from 'lucide-react';
import putzmeisterImg from '../../assets/images/putzmeister-m42-boom-placer.jpeg';

export const EquipmentScrollZoomShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>('overview');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center']
  });

  // Continuous linear scroll interpolation: 0.92 -> 1.00 scale, 0.8 -> 1.0 opacity
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1.0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.8, 1.0]);

  const tabs = [
    { id: 'overview', label: '01 Overview', icon: Layers },
    { id: 'specs', label: '02 Specifications', icon: SlidersVertical },
    { id: 'applications', label: '03 Applications', icon: Truck },
    { id: 'terms', label: '04 Rental Support', icon: Calendar },
    { id: 'scope', label: '05 Client Scope', icon: ShieldCheck }
  ];

  return (
    <section ref={containerRef} className="py-20 sm:py-32 bg-[#F5EEE5] border-y border-[#E8DDD0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Outer Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#C96F1B] border border-[#E8DDD0] font-heading text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#C96F1B]" />
            <span>EXACT PRODUCT SCROLL FOCUS</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#3D352D] tracking-tight">
            Putzmeister M42-5 Technical Showcase
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Scroll down to see the equipment interface smoothly scale into dominant viewport focus.
          </p>
        </div>

        {/* CENTERED INNER EQUIPMENT PANEL WITH CONTINUOUS SCROLL-LINKED SCALE */}
        <motion.div
          style={{ scale, opacity }}
          className="bg-white rounded-3xl border border-[#C96F1B]/60 shadow-2xl p-6 sm:p-10 space-y-8 max-w-5xl mx-auto transition-shadow duration-300"
        >
          {/* Top Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E8DDD0] pb-6">
            <div className="space-y-1">
              <span className="font-specs text-xs text-[#C96F1B] font-extrabold uppercase tracking-widest block">
                FLAGSHIP CONCRETE BOOM PLACER
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352D]">
                Putzmeister M42-5
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-[#F5EEE5] px-4 py-2 rounded-xl border border-[#E8DDD0] text-xs font-specs font-bold text-[#3D352D]">
              <span className="w-2 h-2 rounded-full bg-[#C96F1B]" />
              <span>42M VERTICAL REACH · 90 M³ OUTPUT</span>
            </div>
          </div>

          {/* Side Tabs Navigation */}
          <div className="flex flex-wrap gap-2 border-b border-[#E8DDD0] pb-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 rounded-xl font-heading text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 ${
                    isActive
                      ? 'bg-[#C96F1B] text-white shadow-md'
                      : 'bg-[#F5EEE5] text-[#3D352D] hover:bg-[#EADBC8]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Main Visual & Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Image Side */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#E8DDD0] aspect-[16/10] bg-[#F5EEE5] shadow-md group">
              <img
                src={putzmeisterImg}
                alt="Putzmeister M42-5 Equipment Visual"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-heading font-medium">
                <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20">
                  PUTZMEISTER M42-5
                </span>
                <span className="bg-[#C96F1B]/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-white font-bold">
                  2020 MODEL
                </span>
              </div>
            </div>

            {/* Dynamic Content Panel Side */}
            <div className="lg:col-span-6 space-y-6">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-4"
                  >
                    <h4 className="font-heading font-bold text-xl text-[#3D352D]">
                      Machinery Overview
                    </h4>
                    <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                      The Putzmeister M42-5 is a 5-arm Z-fold concrete boom placer engineered for high-volume elevated concrete pours, long reach stability, and continuous slab casting across high-rise sites in Maharashtra.
                    </p>
                    <div className="space-y-2 text-xs font-body text-[#3D352D]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C96F1B]" />
                        <span>5-Arm Z-Fold placement boom</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C96F1B]" />
                        <span>High-volume 90 m³ concrete pump capacity</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C96F1B]" />
                        <span>2020 model with AdBlue emission control</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'specs' && (
                  <motion.div
                    key="specs"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-4"
                  >
                    <h4 className="font-heading font-bold text-xl text-[#3D352D]">
                      Verified Technical Specifications
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-xs font-body">
                      <div className="p-3 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0]">
                        <span className="text-[#6B5E4E] block font-heading text-[10px] uppercase font-semibold">Vertical Reach</span>
                        <span className="font-specs font-bold text-sm text-[#3D352D]">42.0 Metres</span>
                      </div>
                      <div className="p-3 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0]">
                        <span className="text-[#6B5E4E] block font-heading text-[10px] uppercase font-semibold">Pump Output</span>
                        <span className="font-specs font-bold text-sm text-[#3D352D]">90 m³ Capacity</span>
                      </div>
                      <div className="p-3 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0]">
                        <span className="text-[#6B5E4E] block font-heading text-[10px] uppercase font-semibold">Boom Arm Config</span>
                        <span className="font-specs font-bold text-sm text-[#3D352D]">5 Arms (Z-Fold)</span>
                      </div>
                      <div className="p-3 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0]">
                        <span className="text-[#6B5E4E] block font-heading text-[10px] uppercase font-semibold">Manufacture Year</span>
                        <span className="font-[#3D352D] font-specs font-bold text-sm">2020 Model</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'applications' && (
                  <motion.div
                    key="applications"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-4"
                  >
                    <h4 className="font-heading font-bold text-xl text-[#3D352D]">
                      Target Placement Applications
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#6B5E4E] font-body">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C96F1B]" />
                        <span>High-rise residential building slab pours</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C96F1B]" />
                        <span>Commercial podiums & elevated slab casting</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C96F1B]" />
                        <span>Raft foundations & heavy structural pours</span>
                      </li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'terms' && (
                  <motion.div
                    key="terms"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-4"
                  >
                    <h4 className="font-heading font-bold text-xl text-[#3D352D]">
                      Rental Support & Shift Terms
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#6B5E4E] font-body">
                      <li className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#C96F1B]" />
                        <span><strong>Shift Structure:</strong> Single 12-hour shift per day</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#C96F1B]" />
                        <span><strong>Monthly Schedule:</strong> 26 working days (Sundays off)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <UserCheck className="w-4 h-4 text-[#C96F1B]" />
                        <span><strong>Operating Crew:</strong> Operator + Helper included</span>
                      </li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'scope' && (
                  <motion.div
                    key="scope"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-4"
                  >
                    <h4 className="font-heading font-bold text-xl text-[#3D352D]">
                      Client Site Allocation
                    </h4>
                    <p className="text-xs text-[#6B5E4E] font-body leading-relaxed">
                      Client provides diesel fuel, AdBlue, operator accommodation/food, site security, and pipeline arrangements as confirmed in the quotation.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
