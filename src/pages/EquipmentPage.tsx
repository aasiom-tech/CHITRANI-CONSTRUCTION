import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { equipmentData } from '../data/equipment';
import { EquipmentCard } from '../components/equipment/EquipmentCard';
import { EquipmentApplications } from '../components/equipment/EquipmentApplications';
import { RentalStructure } from '../components/equipment/RentalStructure';
import { Truck, ShieldCheck, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export const EquipmentPage: React.FC = () => {
  const item = equipmentData[0];

  return (
    <div className="bg-[#F5EEE5] text-[#3D352D] min-h-screen">
      <SEO 
        title="Concrete Boom Placer Equipment | Chitrani Construction"
        description="View the Putzmeister M42-5 concrete boom placer available for structured monthly rental with a 42-metre reach, operator, and helper."
        canonical="https://chitraniconstruction.com/equipment"
      />

      {/* Page Header */}
      <PageHeader
        title="Concrete Placement Equipment for Construction Projects"
        subtitle="Chitrani Construction provides structured concrete boom placer rental for sites requiring high-capacity concrete-placement support. The equipment is supplied with an operator and helper, subject to project requirements, site conditions, and confirmed availability."
        badge="EQUIPMENT SUPPORT"
      />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-20">
        
        {/* Single Premium Equipment Card */}
        <section aria-label="Equipment Directory">
          <div className="max-w-4xl mx-auto">
            <EquipmentCard item={item} />
          </div>
        </section>

        {/* Why this equipment may suit project requirements */}
        <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
                SUITABILITY ANALYSIS
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352D]">
                Designed for High-Reach Concrete Placement
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed max-w-4xl">
            The Putzmeister M42-5 may support project requirements involving elevated concrete placement, large pours, constrained site access, and structured machinery deployment.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <li className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] text-xs sm:text-sm font-body text-[#3D352D] font-medium flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
              <span>42-metre reach for elevated placement requirements</span>
            </li>
            <li className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] text-xs sm:text-sm font-body text-[#3D352D] font-medium flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
              <span>High-capacity support for demanding concrete pours</span>
            </li>
            <li className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] text-xs sm:text-sm font-body text-[#3D352D] font-medium flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
              <span>Operator and helper included</span>
            </li>
            <li className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] text-xs sm:text-sm font-body text-[#3D352D] font-medium flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
              <span>Suitable for residential, commercial, and infrastructure-related requirements</span>
            </li>
          </ul>
        </section>

        {/* Rental Structure Preview */}
        <section>
          <RentalStructure />
        </section>

        {/* Suitable Applications Preview */}
        <section>
          <EquipmentApplications
            title="Suitable Applications"
            intro="Suitable for requirements involving…"
          />
        </section>

        {/* Availability Notice Banner */}
        <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
          <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-body text-[#6B5E4E]">
            <AlertCircle className="w-4 h-4 text-[#C96F1B] shrink-0" />
            <span>Availability is subject to confirmation for the requested project period.</span>
          </div>
        </section>

        {/* Request Rental CTA */}
        <section className="bg-[#3D352D] rounded-[18px] p-8 sm:p-12 text-white text-center space-y-6 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
              EQUIPMENT RENTAL DISPATCH
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
              Request Putzmeister M42-5 Rental Rates
            </h2>
            <p className="text-sm text-[#D1C5B0] font-body leading-relaxed">
              Submit your project schedule and site details to receive a project-specific equipment rental quotation.
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              to="/request-quote?requirement=equipment-rental&equipment=putzmeister-m42-5"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>Request Rental Quote</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};
