import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { equipmentData } from '../data/equipment';
import { EquipmentCard } from '../components/equipment/EquipmentCard';
import { Reveal, SectionEyebrow, StaggerGroup, StaggerItem } from '../components/common/Motion';
import {
  Truck,
  Building2,
  ArrowRight,
  FileText,
  PhoneCall,
  CheckCircle2,
  Calendar,
  Clock,
  UserCheck,
  AlertCircle,
  Info
} from 'lucide-react';

export const EquipmentPage: React.FC = () => {
  const featuredEquipment = equipmentData[0]; // Putzmeister M42-5

  const equipmentHeroVisual = (
    <div className="relative rounded-2xl overflow-hidden border border-[#E8DDD0] bg-[#F5EEE5] shadow-md group aspect-[16/10] max-h-[300px] sm:max-h-[340px]">
      <img
        src={featuredEquipment.image}
        alt="Putzmeister M42-5 concrete boom placer machine visual representation"
        loading="eager"
        decoding="async"
        className="w-full h-full object-cover filter brightness-95 group-hover:scale-[1.025] transition-transform duration-500 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      {/* Technical Measurement Guide Line Accent (No floating cards) */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-heading font-medium">
        <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20">
          PUTZMEISTER M42-5
        </span>
        <span className="bg-[#3D352D]/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-white font-specs font-bold">
          42 M REACH · 90 M³
        </span>
      </div>
    </div>
  );

  return (
    <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen">
      <SEO
        title="Concrete Boom Placer Rental | Chitrani Construction"
        description="Putzmeister M42-5 concrete boom placer rental with 42m reach, 90 m³ capacity, operator, and helper for construction projects in Maharashtra."
        canonical="https://chitraniconstruction.com/equipment"
      />

      {/* 1. Page Header */}
      <PageHeader
        badge="EQUIPMENT RENTAL"
        title="Concrete Placement Machinery"
        subtitle="Chitrani Construction provides the Putzmeister M42-5 concrete boom placer on structured monthly rental with an operating crew."
        accentType="equipment"
        customRightVisual={equipmentHeroVisual}
      />

      {/* 2. Intro / Fleet Capability Statement (White Viewport Background) */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <SectionEyebrow badge="MACHINERY DEPLOYMENT" className="justify-center mb-3" />
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight mb-4">
              High-Capacity Concrete Placement
            </h2>
            <p className="text-base sm:text-lg text-[#6B5E4E] font-body leading-relaxed max-w-3xl mx-auto">
              Chitrani Construction offers specialized machinery rental focused on the 42-metre Putzmeister M42-5 concrete boom placer. Equipment is deployed on monthly single-shift rental agreements with an operator and helper.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. Featured Machinery Card — Putzmeister M42-5 (Soft Cream Viewport Background) */}
      <section className="py-16 sm:py-24 bg-[#F5EEE5] border-y border-[#E8DDD0]/70" aria-label="Concrete Placing Equipment Directory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <SectionEyebrow badge="FEATURED FLEET MODEL" className="justify-center mb-3" />
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#3D352D]">
                Verified Boom Placer Fleet
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="max-w-4xl mx-auto">
            <EquipmentCard item={featuredEquipment} />
          </Reveal>
        </div>
      </section>

      {/* 4. Rental Terms & Operations Band (White Viewport Background) */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="space-y-8">
            <div className="max-w-3xl space-y-2">
              <SectionEyebrow badge="RENTAL STRUCTURE" className="mb-1" />
              <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
                Standard Deployment Parameters
              </h2>
              <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                Machinery rental is provided under a structured monthly agreement designed for long-pour stability and site coordination.
              </p>
            </div>

            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm font-body">
              <StaggerItem>
                <div className="p-5 bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] flex items-center gap-3 hover:border-[#C96F1B]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase tracking-wider block">Rental Model</span>
                    <span className="font-semibold text-[#3D352D] text-base">Monthly deployment</span>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-5 bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] flex items-center gap-3 hover:border-[#C96F1B]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase tracking-wider block">Shift Structure</span>
                    <span className="font-semibold text-[#3D352D] text-base">One fixed 12-hour shift</span>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-5 bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] flex items-center gap-3 hover:border-[#C96F1B]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase tracking-wider block">Working Schedule</span>
                    <span className="font-semibold text-[#3D352D] text-base">26 days/mo (Sundays off)</span>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-5 bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] flex items-center gap-3 hover:border-[#C96F1B]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase tracking-wider block">Operating Crew</span>
                    <span className="font-semibold text-[#3D352D] text-base">Operator & helper included</span>
                  </div>
                </div>
              </StaggerItem>
            </StaggerGroup>

            <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] text-xs font-body text-[#6B5E4E] flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#C96F1B] shrink-0" />
              <span><em>Availability is subject to confirmation for the requested project period.</em></span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Commercial Information & Client Scope Panel (Warm Cream Viewport Background) */}
      <section className="py-16 sm:py-24 bg-[#EADBC8]/40 border-y border-[#E8DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Reveal>
              <SectionEyebrow badge="COMMERCIAL SCOPE" className="justify-center mb-3" />
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#3D352D]">
                Client Site Responsibilities
              </h2>
              <p className="text-sm sm:text-base text-[#6B5E4E] font-body">
                Standard rental scope allocation between equipment provider and project site.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E8DDD0] shadow-sm max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-2 text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider border-b border-[#E8DDD0] pb-4">
              <Info className="w-4 h-4" />
              <span>RESPONSIBILITY ALLOCATION PANEL</span>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-body text-[#3D352D]">
              {[
                'Fuel supply & AdBlue',
                'Operator accommodation & food',
                'Site access & security',
                'PPE & safety equipment on site',
                'Tools and tackles',
                'Internal site shifting coordination',
                'Supporting equipment',
                'Pipeline arrangements'
              ].map((resp, idx) => (
                <li key={idx} className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C96F1B]" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-[#6B5E4E] font-body italic pt-2 border-t border-[#E8DDD0] text-center">
              Final responsibilities are confirmed in the written quotation and rental agreement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. Related Construction Services (White Background) */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Reveal className="space-y-2">
            <SectionEyebrow badge="SERVICE INTEGRATION" className="mb-1" />
            <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
              Related Construction Services
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Reveal delay={0.1}>
              <Link
                to="/services/concrete-boom-placer-rental"
                className="p-8 bg-[#F5EEE5]/80 hover:bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] space-y-4 group transition-all block h-full"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center">
                    <Truck className="w-6 h-6" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#C96F1B] group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-heading font-semibold text-xl text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                  Concrete Boom Placer Rental Service
                </h4>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Detailed service breakdown, rental terms, and deployment support for concrete placement requirements.
                </p>
              </Link>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                to="/services/construction-contracting"
                className="p-8 bg-[#F5EEE5]/80 hover:bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] space-y-4 group transition-all block h-full"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#C96F1B] group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-heading font-semibold text-xl text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                  Construction Contracting Support
                </h4>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Civil and structural contracting support for building construction projects in Maharashtra.
                </p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Equipment Rental Enquiry CTA Section (Dark Charcoal Viewport Background) */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="bg-[#3D352D] rounded-3xl p-8 sm:p-16 text-white text-center space-y-8 shadow-xl max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C96F1B]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <SectionEyebrow badge="MACHINERY ENQUIRY" className="justify-center mb-1 text-[#C96F1B]" />
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                Need Concrete Boom Placer Deployment?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#D1C5B0] font-body leading-relaxed max-w-2xl mx-auto">
                Share your site location, concrete volume requirements and expected deployment timeline with Chitrani Construction so availability and rental rates can be confirmed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
              <Link
                to="/request-quote?service=equipment-rental"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-md min-h-[44px] focus:outline-hidden focus:ring-2 focus:ring-white"
              >
                <FileText className="w-4 h-4" />
                <span>REQUEST A QUOTE</span>
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#F5EEE5] hover:bg-[#EADBC8] text-[#3D352D] font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all border border-[#E8DDD0] min-h-[44px] focus:outline-hidden focus:ring-2 focus:ring-white"
              >
                <PhoneCall className="w-4 h-4 text-[#C96F1B]" />
                <span>CONTACT US</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
