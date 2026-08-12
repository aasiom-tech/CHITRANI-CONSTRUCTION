import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { equipmentData } from '../data/equipment';
import { TechnicalEquipmentShowcase } from '../components/equipment/TechnicalEquipmentShowcase';
import { Reveal, SectionEyebrow, StaggerGroup, StaggerItem } from '../components/common/Motion';
import {
  Truck,
  ArrowRight,
  FileText,
  Calendar,
  Clock,
  UserCheck,
  CheckCircle2,
  Ruler,
  Gauge
} from 'lucide-react';
import m42Img from '../assets/images/equipment/putzmeister-m42-5-equipment.webp';

export const EquipmentPage: React.FC = () => {
  const featuredEquipment = equipmentData[0]; // Putzmeister M42-5

  const equipmentHeroVisual = (
    <div className="relative rounded-2xl overflow-hidden border border-[#E8DDD0] bg-[#F5EEE5] shadow-md group aspect-[16/10] max-h-[300px] sm:max-h-[340px]">
      <img
        src={m42Img}
        alt="Putzmeister M42-5 concrete boom placer machine visual representation"
        loading="eager"
        decoding="async"
        className="w-full h-full object-cover filter brightness-95 group-hover:scale-[1.025] transition-transform duration-500 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
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
        title="Concrete Placement Machinery Catalogue"
        subtitle="Chitrani Construction provides the Putzmeister M42-5 concrete boom placer on structured monthly rental with an operating crew."
        accentType="equipment"
        customRightVisual={equipmentHeroVisual}
      />

      {/* 2. Intro Section */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <SectionEyebrow badge="MACHINERY DEPLOYMENT" className="justify-center mb-3" />
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight mb-4">
              High-Capacity Concrete Placement Machinery
            </h2>
            <p className="text-base sm:text-lg text-[#6B5E4E] font-body leading-relaxed max-w-3xl mx-auto">
              Chitrani Construction offers specialized machinery rental focused on the 42-metre Putzmeister M42-5 concrete boom placer. Equipment is deployed on monthly single-shift rental agreements with an operator and helper.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. TECHNICAL MACHINERY CATALOGUE SHOWCASE (New Brochure Presentation) */}
      <TechnicalEquipmentShowcase />

      {/* 4. Standard Deployment Parameters */}
      <section className="py-16 sm:py-24 bg-[#F5EEE5] border-y border-[#E8DDD0]">
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
                <div className="p-6 bg-white rounded-2xl border border-[#E8DDD0] flex items-center gap-3 hover:border-[#C96F1B] transition-colors shadow-sm">
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
                <div className="p-6 bg-white rounded-2xl border border-[#E8DDD0] flex items-center gap-3 hover:border-[#C96F1B] transition-colors shadow-sm">
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
                <div className="p-6 bg-white rounded-2xl border border-[#E8DDD0] flex items-center gap-3 hover:border-[#C96F1B] transition-colors shadow-sm">
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
                <div className="p-6 bg-white rounded-2xl border border-[#E8DDD0] flex items-center gap-3 hover:border-[#C96F1B] transition-colors shadow-sm">
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
          </Reveal>
        </div>
      </section>

      {/* 5. Rental Enquiry CTA */}
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-md min-h-[44px]"
              >
                <FileText className="w-4 h-4" />
                <span>REQUEST A QUOTE</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
