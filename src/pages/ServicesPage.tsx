import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { useServices } from '../hooks/useServices';
import { CardSkeleton, ApiError, EmptyState } from '../components/common/ApiStates';
import { Reveal, SectionEyebrow, StaggerGroup, StaggerItem } from '../components/common/Motion';
import {
  Building2,
  Truck,
  ArrowRight,
  CheckCircle2,
  Ruler,
  Gauge,
  Layers,
  ShieldCheck,
  ChevronRight,
  FileText
} from 'lucide-react';
import contractingImg from '../assets/images/services/construction-contracting-service.webp';
import boomPlacerImg from '../assets/images/services/boom-placer-rental-service.webp';
import rccImg from '../assets/images/services/rcc-structural-work.webp';
import civilImg from '../assets/images/services/civil-construction.webp';
import brickworkImg from '../assets/images/services/brickwork-blockwork.webp';
import labourImg from '../assets/images/services/labour-contracting.webp';

export const ServicesPage: React.FC = () => {
  const { data: services, loading, error, retry } = useServices();

  return (
    <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen">
      <SEO
        title="Construction Contracting & Equipment Rental | Chitrani"
        description="Chitrani Construction offers structural civil contracting, RCC framing, civil works, blockwork masonry, labour contracting, and Putzmeister M42-5 boom placer rental."
        canonicalPath="/services"
      />

      {/* 1. Page Header */}
      <PageHeader
        badge="SERVICES & CAPABILITIES"
        title="Construction Contracting & Boom Placer Rental"
        subtitle="Organised structural execution, civil project support, masonry works, labour team deployment, and high-capacity Putzmeister M42-5 concrete boom placer monthly rentals across Maharashtra."
        accentType="services"
        heroImage={contractingImg}
        heroImageAlt="Active construction site representing civil contracting and boom placer services"
      />

      {/* 2. Intro Statement Section */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <SectionEyebrow badge="TWO CORE SERVICE PILLARS" className="justify-center mb-3" />
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight mb-4">
              Project Execution & Equipment Support
            </h2>
            <p className="text-base sm:text-lg text-[#6B5E4E] font-body leading-relaxed max-w-3xl mx-auto">
              Chitrani Construction delivers project-based contracting support for developers and contractors alongside high-capacity Putzmeister M42-5 concrete boom placer monthly rentals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. CHAPTER 01: CONSTRUCTION CONTRACTING (Vertical Editorial Layout) */}
      <section className="py-20 sm:py-28 bg-[#F5EEE5] border-y border-[#E8DDD0]" id="contracting" aria-label="Construction Contracting Chapter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <div className="border-b-2 border-[#C96F1B]/30 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-specs text-xs text-[#C96F1B] font-extrabold uppercase tracking-widest block">
                CHAPTER 01 · STRUCTURAL CONTRACTING
              </span>
              <h2 className="font-display text-4xl sm:text-7xl text-[#3D352D] uppercase tracking-wide leading-none mt-2">
                CONSTRUCTION CONTRACTING
              </h2>
            </div>
            <span className="font-specs text-xs font-bold text-[#7E7267] uppercase tracking-widest border border-[#E8DDD0] px-4 py-2 rounded-full w-fit">
              RCC · CIVIL · MASONRY · WORKFORCE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Left: Large Visual Frame with Cuberto Hover Cursor */}
            <div
              className="lg:col-span-7 relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#F5EEE5] border border-[#E8DDD0] shadow-2xl group"
            >
              <img
                src={contractingImg}
                alt="Construction Contracting active site"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs font-heading">
                <span className="bg-[#C96F1B] px-3.5 py-1.5 rounded-full font-specs font-bold uppercase">
                  CONTRACTING SCOPE
                </span>
                <span className="bg-black/60 backdrop-blur-xs px-3.5 py-1.5 rounded-full font-specs font-bold border border-white/20">
                  MUMBAI &amp; MAHARASHTRA
                </span>
              </div>
            </div>

            {/* Right: Narrow Editorial Text Column */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-base sm:text-lg text-[#3D352D] font-body leading-relaxed font-semibold">
                Project-based construction support for building and civil requirements, with scope defined according to project documentation, site conditions and commercial agreement.
              </p>

              <div className="space-y-3 pt-2">
                <span className="font-heading font-bold text-xs text-[#3D352D] uppercase tracking-wider block">
                  Documented Scope Boundaries:
                </span>
                {[
                  'RCC structural framing and formwork',
                  'Civil foundation and site coordination',
                  'AAC blockwork and masonry walls',
                  'Organised site workforce deployment'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-body text-[#6B5E4E]">
                    <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#E8DDD0] flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/services/construction-contracting"
                  className="px-7 py-4 rounded-xl bg-white hover:bg-[#EADBC8] text-[#3D352D] border border-[#E8DDD0] font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span>View Detailed Scope</span>
                  <ArrowRight className="w-4 h-4 text-[#C96F1B]" />
                </Link>

                <Link
                  to="/request-quote"
                  className="px-7 py-4 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>Request Contracting Quote</span>
                </Link>
              </div>
            </div>

          </div>

          {/* Sub-Services Grid */}
          <div className="pt-8 border-t border-[#E8DDD0]">
            <span className="font-specs text-xs text-[#C96F1B] font-extrabold uppercase tracking-widest block mb-6">
              SPECIALISED CONTRACTING SUB-PACKAGES
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'RCC Structural Work', img: rccImg, desc: 'Formwork, shuttering & steel binding' },
                { name: 'Civil Construction', img: civilImg, desc: 'Foundations & site civil coordination' },
                { name: 'Brickwork & Blockwork', img: brickworkImg, desc: 'AAC blockwork & masonry walls' },
                { name: 'Labour Contracting', img: labourImg, desc: 'Organised site workforce deployment' }
              ].map((sub, idx) => (
                <div
                  key={sub.name}
                  className="bg-white rounded-2xl p-5 border border-[#E8DDD0] shadow-sm hover:shadow-xl transition-all duration-300 space-y-3 group"
                >
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#F5EEE5]">
                    <img src={sub.img} alt={sub.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                    {sub.name}
                  </h4>
                  <p className="text-xs text-[#6B5E4E] font-body">{sub.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. CHAPTER 02: CONCRETE BOOM PLACER RENTAL (Horizontal Progression Layout) */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF]" id="equipment-rental" aria-label="Boom Placer Rental Chapter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <div className="border-b-2 border-[#C96F1B]/30 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-specs text-xs text-[#C96F1B] font-extrabold uppercase tracking-widest block">
                CHAPTER 02 · MACHINERY DEPLOYMENT
              </span>
              <h2 className="font-display text-4xl sm:text-7xl text-[#3D352D] uppercase tracking-wide leading-none mt-2">
                BOOM PLACER RENTAL
              </h2>
            </div>
            <span className="font-specs text-xs font-bold text-[#7E7267] uppercase tracking-widest border border-[#E8DDD0] px-4 py-2 rounded-full w-fit">
              PUTZMEISTER M42-5 · 42M REACH
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F5EEE5] p-8 sm:p-14 rounded-3xl border border-[#E8DDD0] shadow-xl">

            <div className="lg:col-span-6 space-y-6">
              <span className="font-specs text-xs text-[#C96F1B] font-extrabold uppercase tracking-widest block">
                Putzmeister M42-5 Concrete Boom Placer
              </span>
              <h3 className="font-heading font-bold text-3xl sm:text-4xl text-[#3D352D]">
                High-Capacity Concrete Placement Support
              </h3>
              <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                Putzmeister M42-5 concrete boom placer rental with an operator and helper for sites requiring dependable, high-capacity concrete-placement support.
              </p>

              {/* Technical Spec Chips */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-[#E8DDD0] text-center">
                  <span className="font-specs text-[10px] text-[#7E7267] font-bold block">BOOM REACH</span>
                  <span className="font-display text-2xl text-[#C96F1B]">42M</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E8DDD0] text-center">
                  <span className="font-specs text-[10px] text-[#7E7267] font-bold block">PUMP OUTPUT</span>
                  <span className="font-display text-2xl text-[#C96F1B]">90 m³</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E8DDD0] text-center">
                  <span className="font-specs text-[10px] text-[#7E7267] font-bold block">PIPELINE</span>
                  <span className="font-display text-2xl text-[#C96F1B]">100M</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/services/concrete-boom-placer-rental"
                  className="px-7 py-4 rounded-xl bg-white hover:bg-[#EADBC8] text-[#3D352D] border border-[#E8DDD0] font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span>View Equipment Terms</span>
                  <ArrowRight className="w-4 h-4 text-[#C96F1B]" />
                </Link>

                <Link
                  to="/request-quote?requirement=equipment-rental"
                  className="px-7 py-4 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>Request Rental Quote</span>
                </Link>
              </div>
            </div>

            <div
              className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#F5EEE5] border border-[#E8DDD0] shadow-xl group"
            >
              <img
                src={boomPlacerImg}
                alt="Putzmeister M42-5 Concrete Boom Placer visual"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-heading">
                <span className="bg-[#C96F1B] px-3 py-1 rounded-md font-specs font-bold uppercase">
                  OPERATOR &amp; HELPER INCLUDED
                </span>
                <span className="bg-black/70 backdrop-blur-xs px-3 py-1 rounded-md border border-white/20 font-specs font-bold">
                  MONTHLY RENTAL
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-16 sm:py-24 bg-[#F5EEE5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <SectionEyebrow badge="SERVICE ENQUIRY" className="justify-center mb-1 text-[#C96F1B]" />
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-[#3D352D]">
            Discuss Your Specific Service Requirements
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body max-w-2xl mx-auto">
            Contact Chitrani Construction to review project BOQs, drawings, or boom placer deployment dates.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              to="/request-quote"
              className="px-8 py-4 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              REQUEST A QUOTE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
