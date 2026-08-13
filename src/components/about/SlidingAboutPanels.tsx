import React, { useState } from 'react';
import { Building2, Compass, Eye, ShieldCheck, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import aboutImg from '../../assets/images/construction-company-about.webp';
import contractingImg from '../../assets/images/construction-contracting-capability.jpeg';
import putzmeisterImg from '../../assets/images/putzmeister-m42-boom-placer.jpeg';
import capabilityImg from '../../assets/images/chitrani-construction-capability.jpeg';
import heroImg from '../../assets/images/chitrani-construction-hero.jpeg';

interface StoryPanelData {
  id: string;
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  image: string;
  bullets: string[];
}

const storyPanels: StoryPanelData[] = [
  {
    id: 'who-we-are',
    number: '01',
    badge: 'COMPANY OVERVIEW',
    title: 'Who We Are',
    subtitle: 'Structural Civil Execution & Machinery Support',
    description: 'Chitrani Construction is a Maharashtra-based enterprise offering civil structural contracting, skilled workforce coordination, and high-capacity concrete boom placer rentals.',
    icon: Building2,
    image: aboutImg,
    bullets: [
      'Registered business entity with Dadar & Jalgaon presence',
      'Dual focus on structural contracting & equipment rental',
      'Putzmeister M42-5 boom placer deployment with crew'
    ]
  },
  {
    id: 'our-mission',
    number: '02',
    badge: 'OPERATIONAL GOAL',
    title: 'Our Mission',
    subtitle: 'Transparent Execution & On-Time Milestones',
    description: 'To support developers and contractors with disciplined civil execution, safety compliance, and uninterrupted concrete placement machinery.',
    icon: Compass,
    image: contractingImg,
    bullets: [
      'Factual project transparency without speculative claims',
      'Strict adherence to engineering drawings & structural schedules',
      'Single 12-hour shift equipment uptime reliability'
    ]
  },
  {
    id: 'our-vision',
    number: '03',
    badge: 'FUTURE DIRECTIVE',
    title: 'Our Vision',
    subtitle: 'Building Infrastructure with Confidence',
    description: 'To become Maharashtra’s preferred single-point partner for structural concrete execution and specialized concrete pumping equipment support.',
    icon: Eye,
    image: putzmeisterImg,
    bullets: [
      'Expanding high-capacity concrete machinery fleets',
      'Long-term relationships with regional developers & contractors',
      'Continuous workforce safety & skill upgrading'
    ]
  },
  {
    id: 'our-strengths',
    number: '04',
    badge: 'CORE COMPETENCIES',
    title: 'Our Strengths',
    subtitle: 'Operational Reach & Machinery Ownership',
    description: 'Direct equipment ownership of Putzmeister M42-5, skilled site supervisors, and established offices in Dadar (Mumbai) and Jalgaon.',
    icon: Award,
    image: capabilityImg,
    bullets: [
      '42-metre vertical reach Putzmeister boom placer',
      'Full operator + helper crew included with rentals',
      'Registered MSME & GST tax-compliant enterprise'
    ]
  },
  {
    id: 'safety-quality',
    number: '05',
    badge: 'RESPONSIBLE PRACTICES',
    title: 'Safety & Quality',
    subtitle: 'Disciplined Supervision & Workmanship Checks',
    description: 'Mandatory PPE protocols, line/level verification, shuttering pre-checks, and daily preventive maintenance for all site equipment.',
    icon: ShieldCheck,
    image: heroImg,
    bullets: [
      'Mandatory helmets, safety boots & harness compliance',
      'Pre-pour shuttering & cover block inspection',
      'Daily pre-start hydraulic & mechanical equipment checks'
    ]
  }
];

export const SlidingAboutPanels: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('who-we-are');

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EEE5] text-[#C96F1B] border border-[#E8DDD0] font-heading text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#C96F1B]" />
            <span>EXACT AASIOM STORY PANELS</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#3D352D] tracking-tight">
            Explore Chitrani Construction
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Click any narrow vertical tab on the right to horizontally expand that story panel.
          </p>
        </div>

        {/* DESKTOP HORIZONTAL SLIDING PANELS (Shared Parent Flex Container) */}
        <div className="hidden lg:flex gap-4 min-h-[520px] items-stretch w-full overflow-hidden select-none">
          {storyPanels.map((panel) => {
            const isExpanded = activeId === panel.id;
            const Icon = panel.icon;

            return (
              <motion.div
                key={panel.id}
                onClick={() => setActiveId(panel.id)}
                animate={{
                  flexGrow: isExpanded ? 1 : 0,
                  flexShrink: isExpanded ? 1 : 0,
                  flexBasis: isExpanded ? '0%' : '84px'
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={`relative rounded-3xl overflow-hidden border cursor-pointer flex items-stretch transition-colors duration-500 ${
                  isExpanded
                    ? 'bg-white border-[#C96F1B] shadow-2xl ring-2 ring-[#C96F1B]/30'
                    : 'bg-[#F5EEE5] border-[#E8DDD0] hover:bg-[#EADBC8]/50 hover:border-[#C96F1B]/40'
                }`}
              >
                {/* Collapsed Narrow Vertical Tab Button */}
                {!isExpanded ? (
                  <div className="w-full h-full p-5 flex flex-col justify-between items-center text-center">
                    <span className="font-specs font-extrabold text-lg text-[#C96F1B] transition-colors duration-300">
                      {panel.number}
                    </span>

                    <div className="writing-vertical rotate-180 font-heading font-bold text-xs text-[#3D352D] uppercase tracking-wider my-auto whitespace-nowrap">
                      {panel.title}
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-white text-[#C96F1B] border border-[#E8DDD0] flex items-center justify-center shadow-xs shrink-0 transition-transform duration-300 hover:scale-105">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                ) : (
                  /* Expanded Active Story Panel Layout */
                  <div className="grid grid-cols-12 h-full items-stretch w-full overflow-hidden">
                    
                    {/* Visual Image Side */}
                    <div className="col-span-5 relative overflow-hidden bg-[#F5EEE5]">
                      <motion.img
                        initial={{ scale: 1.05, opacity: 0.8 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        src={panel.image}
                        alt={panel.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E8DDD0] text-[11px] font-heading font-bold text-[#3D352D] flex items-center gap-1.5 uppercase">
                        <span className="text-[#C96F1B] font-specs">{panel.number}</span>
                        <span>{panel.badge}</span>
                      </div>
                    </div>

                    {/* Content Column with 140ms Stagger Delay */}
                    <div className="col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6 overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.14,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        className="space-y-4"
                      >
                        <div className="space-y-1">
                          <span className="font-specs text-xs text-[#C96F1B] font-bold uppercase tracking-wider block">
                            STORY {panel.number}
                          </span>
                          <h3 className="font-heading font-bold text-2xl xl:text-3xl text-[#3D352D]">
                            {panel.title}
                          </h3>
                          <span className="font-heading text-xs text-[#6B5E4E] font-semibold block">
                            {panel.subtitle}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                          {panel.description}
                        </p>

                        <div className="pt-2 space-y-2">
                          <span className="font-heading text-[11px] font-bold text-[#3D352D] uppercase tracking-wider block">
                            Key Highlights:
                          </span>
                          <ul className="space-y-2 text-xs text-[#6B5E4E] font-body">
                            {panel.bullets.map((b, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#C96F1B] shrink-0 mt-0.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="pt-4 border-t border-[#E8DDD0]"
                      >
                        <span className="text-[11px] font-heading font-semibold text-[#C96F1B] uppercase tracking-wider flex items-center gap-1">
                          <span>Active Story Panel</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </motion.div>
                    </div>

                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE ACCORDION STACK (lg:hidden) */}
        <div className="lg:hidden space-y-4">
          {storyPanels.map((panel) => {
            const isExpanded = activeId === panel.id;
            const Icon = panel.icon;

            return (
              <div
                key={panel.id}
                className="bg-white rounded-2xl border border-[#E8DDD0] overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setActiveId(isExpanded ? '' : panel.id)}
                  className="w-full p-5 flex items-center justify-between text-left bg-[#F5EEE5] hover:bg-[#EADBC8]/40 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-specs font-bold text-sm text-[#C96F1B]">
                      {panel.number}
                    </span>
                    <span className="font-heading font-bold text-base text-[#3D352D]">
                      {panel.title}
                    </span>
                  </div>
                  <Icon className="w-5 h-5 text-[#C96F1B]" />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 space-y-4 border-t border-[#E8DDD0] bg-white">
                        <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                          {panel.description}
                        </p>
                        <ul className="space-y-2 text-xs text-[#6B5E4E] font-body">
                          {panel.bullets.map((b, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C96F1B] shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
