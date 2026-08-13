import React, { useState } from 'react';
import { Building2, Truck, HardHat, ShieldCheck, Compass, Layers } from 'lucide-react';

interface MarqueeItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.FC<{ className?: string }>;
}

const marqueeItems: MarqueeItem[] = [
  {
    id: '1',
    number: '01',
    title: 'CONSTRUCTION CONTRACTING',
    subtitle: 'Structural RCC execution & civil packages',
    icon: Building2
  },
  {
    id: '2',
    number: '02',
    title: 'CONCRETE PUMP SUPPORT',
    subtitle: 'Pipeline placement for high-rise & foundation pours',
    icon: Truck
  },
  {
    id: '3',
    number: '03',
    title: 'EQUIPMENT RENTAL',
    subtitle: 'Putzmeister M42-5 boom placer',
    icon: HardHat
  },
  {
    id: '4',
    number: '04',
    title: 'INFRASTRUCTURE SUPPORT',
    subtitle: 'Civil infrastructure & foundation support',
    icon: Layers
  },
  {
    id: '5',
    number: '05',
    title: 'PUTZMEISTER M42-5',
    subtitle: '42-metre reach with 90 m³ pump capacity',
    icon: ShieldCheck
  },
  {
    id: '6',
    number: '06',
    title: 'HIGH-RISE PLACEMENT',
    subtitle: 'Vertical concrete delivery for high-rise slabs',
    icon: Compass
  },
  {
    id: '7',
    number: '07',
    title: 'RESIDENTIAL CONSTRUCTION',
    subtitle: 'Multi-storey apartment structural construction',
    icon: Building2
  },
  {
    id: '8',
    number: '08',
    title: 'COMMERCIAL CONSTRUCTION',
    subtitle: 'Institutional & office building structural execution',
    icon: Building2
  }
];

export const HeroLoopingStrip: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section 
      aria-label="Chitrani Capability Ribbon"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full bg-gradient-to-r from-[#A34E12] via-[#C96F1B] to-[#A34E12] text-white border-t border-white/35 border-b border-[#7F3B0A]/50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25)] py-4.5 sm:py-5.5 relative group overflow-hidden"
    >
      {/* Faint Construction Blueprint Diagonal Grid Overlay Pattern */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"
      />

      {/* Terracotta Side Fade Edge Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-r from-[#A34E12] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-l from-[#A34E12] to-transparent z-20 pointer-events-none" />

      {/* Full-Width Continuous Information Ribbon Track */}
      <div className="w-full overflow-hidden relative z-10">
        <div className="flex w-max items-center">
          
          {/* TRACK GROUP 1 */}
          <div 
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            className="flex shrink-0 items-center gap-10 sm:gap-14 animate-marquee pr-10 sm:pr-14 transition-[animation-play-state]"
          >
            {marqueeItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={`g1-${item.id}`} className="flex items-center gap-10 sm:gap-14 shrink-0">
                  <article className="space-y-0.5 whitespace-nowrap cursor-default transition-opacity duration-300 group-hover:opacity-65 hover:!opacity-100 group/item">
                    <div className="flex items-center gap-2">
                      <span className="font-specs font-extrabold text-[11px] sm:text-xs text-[#F5EEE5]/85">
                        {item.number}
                      </span>
                      <Icon className="w-3.5 h-3.5 text-[#F5EEE5]/80 shrink-0 transition-transform duration-300 group-hover/item:text-white group-hover/item:scale-110" />
                      <span className="relative font-heading font-bold text-xs sm:text-sm text-white uppercase tracking-wider block after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#F5EEE5] after:scale-x-0 group-hover/item:after:scale-x-100 after:transition-transform after:duration-300">
                        {item.title}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5EEE5] shadow-[0_0_8px_rgba(255,255,255,0.9)] ml-1" />
                    </div>
                    <span className="font-body text-[11px] sm:text-xs text-[#F5EEE5]/90 block pl-6">
                      {item.subtitle}
                    </span>
                  </article>

                  {/* Elegant Vertical Separator */}
                  <div className="h-8 w-[1px] bg-[#F5EEE5]/30 shrink-0" aria-hidden="true" />
                </div>
              );
            })}
          </div>

          {/* TRACK GROUP 2 (DUPLICATE FOR 100% SEAMLESS INFINITE LOOP) */}
          <div 
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            className="flex shrink-0 items-center gap-10 sm:gap-14 animate-marquee pr-10 sm:pr-14 transition-[animation-play-state]" 
            aria-hidden="true"
          >
            {marqueeItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={`g2-${item.id}`} className="flex items-center gap-10 sm:gap-14 shrink-0">
                  <article className="space-y-0.5 whitespace-nowrap cursor-default transition-opacity duration-300 group-hover:opacity-65 hover:!opacity-100 group/item">
                    <div className="flex items-center gap-2">
                      <span className="font-specs font-extrabold text-[11px] sm:text-xs text-[#F5EEE5]/85">
                        {item.number}
                      </span>
                      <Icon className="w-3.5 h-3.5 text-[#F5EEE5]/80 shrink-0 transition-transform duration-300 group-hover/item:text-white group-hover/item:scale-110" />
                      <span className="relative font-heading font-bold text-xs sm:text-sm text-white uppercase tracking-wider block after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#F5EEE5] after:scale-x-0 group-hover/item:after:scale-x-100 after:transition-transform after:duration-300">
                        {item.title}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5EEE5] shadow-[0_0_8px_rgba(255,255,255,0.9)] ml-1" />
                    </div>
                    <span className="font-body text-[11px] sm:text-xs text-[#F5EEE5]/90 block pl-6">
                      {item.subtitle}
                    </span>
                  </article>

                  {/* Elegant Vertical Separator */}
                  <div className="h-8 w-[1px] bg-[#F5EEE5]/30 shrink-0" aria-hidden="true" />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
