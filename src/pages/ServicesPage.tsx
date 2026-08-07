import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { getPublishedServices } from '../data/services';
import { ServiceCard } from '../components/services/ServiceCard';
import {
  Building2,
  Truck,
  ArrowRight,
  FileText,
  PhoneCall,
  CheckCircle2,
  Landmark,
  HardHat,
  ShieldCheck,
  Layers
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const publishedServices = getPublishedServices();

  return (
    <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen">
      <SEO
        title="Construction Services & Project Support | Chitrani Construction"
        description="Chitrani Construction provides construction, structural, civil, masonry, labour and concrete-placement support for project requirements in Maharashtra."
        canonical="https://chitraniconstruction.com/services"
      />

      {/* 1. Page Header (Existing Shared PageHeader Component) */}
      <PageHeader
        badge="OUR SERVICES"
        title="Construction Services and Project Support"
        subtitle="Chitrani Construction provides construction, structural, civil, masonry, labour and concrete-placement support for project requirements across the construction sector."
      />

      {/* 2. Introduction Section (White Background) */}
      <section className="py-12 sm:py-16 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
            WHAT WE DO
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
            Practical Capabilities Across Construction Execution
          </h2>
          <p className="text-base sm:text-lg text-[#6B5E4E] font-body leading-relaxed max-w-3xl mx-auto">
            Chitrani Construction supports construction requirements through a mix of site execution services, structural and civil work, masonry support, construction labour and concrete-placement equipment. Project scope, deployment requirements and commercial terms are discussed according to the needs of each enquiry.
          </p>
        </div>
      </section>

      {/* 3. Main Services Grid (6 Cards, Soft Cream Background) */}
      <section className="py-12 sm:py-20 bg-[#F5EEE5]" aria-label="Construction Services Directory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
              SERVICE DIRECTORY
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
              Construction Services
            </h2>
            <p className="text-sm text-[#6B5E4E] font-body">
              Explore the six core service areas supported by Chitrani Construction.
            </p>
          </div>

          {/* 3 Columns x 2 Rows Desktop Grid for 6 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {publishedServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Connected Capabilities Section (White Background) */}
      <section className="py-12 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.04)] space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
                INTEGRATED CAPABILITIES
              </span>
              <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
                Construction Execution Support and Equipment Deployment
              </h2>
              <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                Some projects require site execution services such as structural RCC framing, civil works, or blockwork masonry, while others require specialized concrete-placement equipment and crew deployment. Chitrani Construction can discuss these requirements independently or as part of the same project conversation depending on confirmed project needs.
              </p>
            </div>

            {/* Horizontal Connection Flow */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E8DDD0]">
              <div className="p-6 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-[#3D352D]">
                    Site Execution Services
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Building construction contracting, RCC structural framing, civil foundations, blockwork masonry, and site workforce coordination.
                </p>
                <ul className="space-y-1.5 text-xs text-[#3D352D] font-body pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C96F1B]" />
                    <span>Vendor participation & site coordination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C96F1B]" />
                    <span>Verified Mumbai project engagement</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-[#3D352D]">
                    Equipment Deployment Support
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Putzmeister M42-5 boom placer rental with operator and helper for high-volume or elevated concrete pours.
                </p>
                <ul className="space-y-1.5 text-xs text-[#3D352D] font-body pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C96F1B]" />
                    <span>42m reach & 90 m³ capacity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C96F1B]" />
                    <span>Dedicated operator & helper included</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Equipment Support Highlight Section (Soft Cream Background) */}
      <section className="py-12 sm:py-16 bg-[#F5EEE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
                FEATURED MACHINERY SUPPORT
              </span>
              <h3 className="font-heading font-semibold text-xl sm:text-2xl text-[#3D352D]">
                Putzmeister M42-5 Concrete Boom Placer Rental
              </h3>
              <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                Need high-capacity concrete pumping for slab casting or elevated pours? Explore specs and monthly rental terms for our 42-metre boom placer.
              </p>
            </div>

            <Link
              to="/equipment/putzmeister-m42-5"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#3D352D] hover:bg-[#2D2620] text-white font-heading text-xs font-semibold uppercase tracking-wider transition-all shrink-0 min-h-[44px]"
            >
              <span>View Machinery Details</span>
              <ArrowRight className="w-4 h-4 text-[#C96F1B]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Sector Applicability Section (Warm Cream Background) */}
      <section className="py-12 sm:py-20 bg-[#EADBC8]/40 border-y border-[#E8DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
              SECTOR APPLICABILITY
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
              Target Project Sectors
            </h2>
            <p className="text-sm text-[#6B5E4E] font-body">
              Services may support requirements across the following verified project environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-[18px] border border-[#E8DDD0] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg text-[#3D352D]">
                REAL ESTATE & BUILDING CONSTRUCTION
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                Construction contracting and concrete-placement support for building requirements.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-[18px] border border-[#E8DDD0] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg text-[#3D352D]">
                INFRASTRUCTURE & CIVIL WORKS
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                Project and equipment support for infrastructure and civil construction requirements.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-[18px] border border-[#E8DDD0] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center">
                <HardHat className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg text-[#3D352D]">
                CONTRACTOR EQUIPMENT SUPPORT
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                Concrete boom placer deployment for contractors requiring high-capacity placement capability.
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-[#C96F1B] hover:text-[#B35E17] transition-colors"
            >
              <span>Explore All Supported Industries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Final Services CTA Section (Dark Charcoal Background) */}
      <section className="py-12 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#3D352D] rounded-[18px] p-8 sm:p-14 text-white text-center space-y-6 shadow-xl max-w-4xl mx-auto">
            <div className="space-y-3">
              <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
                PROJECT REQUIREMENT
              </span>
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-white tracking-tight">
                Need Construction Support or Boom Placer Rental?
              </h2>
              <p className="text-sm sm:text-base text-[#D1C5B0] font-body leading-relaxed max-w-2xl mx-auto">
                Share your site location, project requirement and expected timeline with Chitrani Construction so the relevant service scope can be discussed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/request-quote"
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
