import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import contractingImg from '../../assets/images/construction-contracting-capability.jpeg';
import placementImg from '../../assets/images/concrete-boom-placer-rental-capability.jpeg';
import putzmeisterImg from '../../assets/images/putzmeister-m42-boom-placer.jpeg';
import capabilityImg from '../../assets/images/chitrani-construction-capability.jpeg';

interface FeatureCardData {
  number: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
  linkText: string;
  bullets: string[];
  specs?: string;
}

const featureCards: FeatureCardData[] = [
  {
    number: '01',
    badge: 'STRUCTURAL CONTRACTING',
    title: 'Construction Contracting',
    description: 'Turnkey structural RCC frame execution, shuttering, formwork, steel reinforcement binding, brickwork and civil packages for multi-storey building developments.',
    image: contractingImg,
    imageAlt: 'RCC structural frame civil construction site execution',
    link: '/services/construction-contracting',
    linkText: 'Explore Contracting Scope',
    bullets: [
      'RCC structural frame & foundations',
      'Shuttering & bar-bending coordination',
      'Brickwork, blockwork & internal masonry'
    ],
    specs: 'RCC & CIVIL PACKAGES'
  },
  {
    number: '02',
    badge: 'CONCRETE DELIVERY',
    title: 'Concrete Placement Support',
    description: 'High-volume concrete placement, pipeline configuration up to 100 metres, and trained operating crew support for high-rise slab casting and foundation pours.',
    image: placementImg,
    imageAlt: 'Concrete pump pipeline configuration for slab pour',
    link: '/services/concrete-boom-placer-rental',
    linkText: 'Explore Placement Scope',
    bullets: [
      '100m pipeline configuration & layout',
      'Dedicated concrete-pumping operating manpower',
      'Continuous slab & raft foundation pouring'
    ],
    specs: '100M PIPELINE SUPPORT'
  },
  {
    number: '03',
    badge: 'MACHINERY SUPPORT',
    title: 'Equipment Rental',
    description: 'Putzmeister M42-5 concrete boom placer available on structured monthly single-shift rental agreements including certified operator and site helper.',
    image: putzmeisterImg,
    imageAlt: 'Putzmeister M42-5 concrete boom placer machine visual',
    link: '/equipment/putzmeister-m42-5',
    linkText: 'Inspect Putzmeister Specs',
    bullets: [
      '42-metre vertical & horizontal boom reach',
      '90 m³ pump output capacity',
      'Included operator & helper team'
    ],
    specs: '42M REACH · 90 M³'
  },
  {
    number: '04',
    badge: 'SECTOR ALIGNMENT',
    title: 'Industry Support',
    description: 'Tailored construction and machinery capabilities aligned to residential high-rises, commercial developments, civil infrastructure, and specialized contractor support.',
    image: capabilityImg,
    imageAlt: 'Chitrani Construction infrastructure capability overview',
    link: '/industries',
    linkText: 'Explore Target Sectors',
    bullets: [
      'Residential high-rise building projects',
      'Commercial & institutional structures',
      'Contractor equipment & labour support'
    ],
    specs: '7 SECTOR CATEGORIES'
  }
];

export const ScrollingFeatureCardsSection: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIdx = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      setActiveCardIndex(closestIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-[#FFFFFF] text-[#3D352D] relative border-b border-[#E8DDD0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EEE5] text-[#C96F1B] border border-[#E8DDD0] font-heading text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#C96F1B]" />
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#3D352D] tracking-tight">
            Discover Chitrani Capabilities
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#6B5E4E] font-body leading-relaxed">
            A structured path from structural contracting to concrete placement and equipment deployment.
          </p>
        </div>

        {/* CENTERED FEATURE CARDS STACK WITH SMOOTH SCROLL HIGHLIGHT AURA */}
        <div className="max-w-5xl mx-auto space-y-16 sm:space-y-24">
          {featureCards.map((card, idx) => {
            const isActive = activeCardIndex === idx;

            return (
              <div
                key={card.number}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className="relative group transition-all duration-500"
              >
                {/* 1. SOFT TERRACOTTA/CREAM RADIAL BLURRED GLOW BACKDROP (DESKTOP) */}
                <div
                  aria-hidden="true"
                  className={`absolute -inset-4 sm:-inset-8 rounded-[40px] pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive
                      ? 'opacity-100 scale-100 bg-[radial-gradient(ellipse_at_center,rgba(201,111,27,0.12)_0%,rgba(245,238,229,0.55)_65%,transparent_100%)] blur-2xl sm:blur-3xl'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                />

                {/* 2. CARD CONTAINER */}
                <div
                  className={`relative bg-white rounded-3xl border transition-all duration-500 overflow-hidden ${
                    isActive
                      ? 'border-[#C96F1B] ring-2 ring-[#C96F1B]/30 shadow-2xl bg-gradient-to-br from-white via-[#F5EEE5]/20 to-white'
                      : 'border-[#E8DDD0] shadow-md hover:border-[#C96F1B]/50'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                    
                    {/* Visual Image Side (Right on Desktop) */}
                    <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] bg-[#F5EEE5] overflow-hidden order-1 lg:order-2">
                      <img
                        src={card.image}
                        alt={card.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      <div className={`absolute top-4 left-4 backdrop-blur-xs px-3 py-1 rounded-full border text-[11px] font-heading font-bold flex items-center gap-1.5 uppercase tracking-wider transition-colors duration-300 ${
                        isActive
                          ? 'bg-[#C96F1B] text-white border-[#C96F1B]'
                          : 'bg-white/95 text-[#3D352D] border-[#E8DDD0]'
                      }`}>
                        <span className={`font-specs ${isActive ? 'text-white' : 'text-[#C96F1B]'}`}>{card.number}</span>
                        <span>{card.badge}</span>
                      </div>

                      {card.specs && (
                        <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-xs text-white px-3 py-1.5 rounded-xl text-[11px] font-specs font-bold text-center border border-white/20">
                          {card.specs}
                        </div>
                      )}
                    </div>

                    {/* Content Side (Left on Desktop) */}
                    <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6 order-2 lg:order-1">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <span className={`font-specs text-xs font-extrabold uppercase tracking-widest block transition-colors duration-300 ${
                            isActive ? 'text-[#C96F1B]' : 'text-[#6B5E4E]'
                          }`}>
                            STAGE {card.number}
                          </span>
                          <h3 className={`font-heading font-bold text-2xl sm:text-3xl transition-colors duration-300 ${
                            isActive ? 'text-[#C96F1B]' : 'text-[#3D352D]'
                          }`}>
                            {card.title}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                          {card.description}
                        </p>

                        <div className="pt-2 space-y-2">
                          <span className="font-heading text-[11px] font-bold text-[#3D352D] uppercase tracking-wider block">
                            Key Deliverables:
                          </span>
                          <ul className="space-y-2 text-xs text-[#6B5E4E] font-body">
                            {card.bullets.map((b, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2">
                                <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 transition-colors duration-300 ${
                                  isActive ? 'text-[#C96F1B]' : 'text-[#6B5E4E]'
                                }`} />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[#E8DDD0]">
                        <Link
                          to={card.link}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <span>{card.linkText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
