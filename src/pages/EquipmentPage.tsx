import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { equipmentData } from '../data/equipment';
import { EquipmentCard } from '../components/equipment/EquipmentCard';
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
  Info,
  ShieldCheck
} from 'lucide-react';

export const EquipmentPage: React.FC = () => {
  const featuredEquipment = equipmentData[0]; // Putzmeister M42-5

  return (
    <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen">
      <SEO
        title="Concrete Boom Placer Rental | Chitrani Construction"
        description="Putzmeister M42-5 concrete boom placer rental with 42m reach, 90 m³ capacity, operator, and helper for construction projects in Maharashtra."
        canonical="https://chitraniconstruction.com/equipment"
      />

      {/* 1. Page Header (Existing Shared PageHeader Component) */}
      <PageHeader
        badge="EQUIPMENT RENTAL"
        title="Concrete Placement Machinery"
        subtitle="Chitrani Construction provides the Putzmeister M42-5 concrete boom placer on structured monthly rental with an operating crew."
      />

      {/* 2. Intro / Fleet Capability Statement (White Background) */}
      <section className="py-12 sm:py-16 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
            MACHINERY DEPLOYMENT
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
            High-Capacity Concrete Placement
          </h2>
          <p className="text-base sm:text-lg text-[#6B5E4E] font-body leading-relaxed max-w-3xl mx-auto">
            Chitrani Construction offers specialized machinery rental focused on the 42-metre Putzmeister M42-5 concrete boom placer. Equipment is deployed on monthly single-shift rental agreements with an operator and helper.
          </p>
        </div>
      </section>

      {/* 3. Featured Machinery Card — Putzmeister M42-5 (Soft Cream Background) */}
      <section className="py-12 sm:py-20 bg-[#F5EEE5]" aria-label="Concrete Placing Equipment Directory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
              FEATURED FLEET MODEL
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
              Verified Boom Placer Fleet
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <EquipmentCard item={featuredEquipment} />
          </div>
        </div>
      </section>

      {/* 4. Rental Terms & Operations Band (White Background) */}
      <section className="py-12 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.04)] space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
                RENTAL STRUCTURE
              </span>
              <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
                Standard Deployment Parameters
              </h2>
              <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                Machinery rental is provided under a structured monthly agreement designed for long-pour stability and site coordination.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm font-body">
              <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#C96F1B] shrink-0" />
                <div>
                  <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase block">Rental Model</span>
                  <span className="font-semibold text-[#3D352D]">Monthly deployment</span>
                </div>
              </div>

              <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#C96F1B] shrink-0" />
                <div>
                  <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase block">Shift Structure</span>
                  <span className="font-semibold text-[#3D352D]">One fixed 12-hour shift</span>
                </div>
              </div>

              <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C96F1B] shrink-0" />
                <div>
                  <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase block">Working Schedule</span>
                  <span className="font-semibold text-[#3D352D]">26 days/month (Sundays off)</span>
                </div>
              </div>

              <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-center gap-3">
                <UserCheck className="w-5 h-5 text-[#C96F1B] shrink-0" />
                <div>
                  <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase block">Operating Crew</span>
                  <span className="font-semibold text-[#3D352D]">Operator & helper included</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] text-xs font-body text-[#6B5E4E] flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#C96F1B] shrink-0" />
              <span><em>Availability is subject to confirmation for the requested project period.</em></span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Commercial Information & Client Scope Panel (Warm Cream Background) */}
      <section className="py-12 sm:py-20 bg-[#EADBC8]/40 border-y border-[#E8DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
              COMMERCIAL SCOPE
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
              Client Site Responsibilities
            </h2>
            <p className="text-sm text-[#6B5E4E] font-body">
              Standard rental scope allocation between equipment provider and project site.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-10 rounded-[18px] border border-[#E8DDD0] shadow-xs max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-2 text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider border-b border-[#E8DDD0] pb-3">
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
                <li key={idx} className="p-3.5 bg-[#F5EEE5] rounded-lg border border-[#E8DDD0] flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C96F1B]" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-[#6B5E4E] font-body italic pt-2 border-t border-[#E8DDD0] text-center">
              Final responsibilities are confirmed in the written quotation and rental agreement.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Related Construction Services (White Background) */}
      <section className="py-12 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] space-y-6">
            <div className="space-y-2">
              <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
                SERVICE INTEGRATION
              </span>
              <h3 className="font-heading font-semibold text-2xl text-[#3D352D]">
                Related Construction Services
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to="/services/concrete-boom-placer-rental"
                className="p-6 bg-[#F5EEE5] hover:bg-[#EADBC8]/60 rounded-xl border border-[#E8DDD0] space-y-3 group transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center">
                    <Truck className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#C96F1B] group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-heading font-semibold text-xl text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                  Concrete Boom Placer Rental Service
                </h4>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Detailed service breakdown, rental terms, and deployment support for concrete placement requirements.
                </p>
              </Link>

              <Link
                to="/services/construction-contracting"
                className="p-6 bg-[#F5EEE5] hover:bg-[#EADBC8]/60 rounded-xl border border-[#E8DDD0] space-y-3 group transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#C96F1B] group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-heading font-semibold text-xl text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                  Construction Contracting Support
                </h4>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Civil and structural contracting support for building construction projects in Maharashtra.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Equipment Rental Enquiry CTA Section (Dark Charcoal Background) */}
      <section className="py-12 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#3D352D] rounded-[18px] p-8 sm:p-14 text-white text-center space-y-6 shadow-xl max-w-4xl mx-auto">
            <div className="space-y-3">
              <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
                MACHINERY ENQUIRY
              </span>
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-white tracking-tight">
                Need Concrete Boom Placer Deployment?
              </h2>
              <p className="text-sm sm:text-base text-[#D1C5B0] font-body leading-relaxed max-w-2xl mx-auto">
                Share your site location, concrete volume requirements and expected deployment timeline with Chitrani Construction so availability and rental rates can be confirmed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/request-quote?service=equipment-rental"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider transition-all shadow-md min-h-[44px] focus:outline-hidden focus:ring-2 focus:ring-white"
              >
                <FileText className="w-4 h-4" />
                <span>REQUEST A QUOTE</span>
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#F5EEE5] hover:bg-[#EADBC8] text-[#3D352D] font-heading text-xs font-semibold uppercase tracking-wider transition-all border border-[#E8DDD0] min-h-[44px] focus:outline-hidden focus:ring-2 focus:ring-white"
              >
                <PhoneCall className="w-4 h-4 text-[#C96F1B]" />
                <span>CONTACT US</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
