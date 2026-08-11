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
  FileText,
  PhoneCall,
  CheckCircle2,
  Landmark,
  HardHat
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { data: services, loading, error, retry } = useServices();

  return (
    <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen">
      <SEO
        title="Construction Services & Project Support | Chitrani Construction"
        description="Chitrani Construction provides construction, structural, civil, masonry, labour and concrete-placement support for project requirements in Maharashtra."
        canonical="https://chitraniconstruction.com/services"
      />

      {/* 1. Page Header */}
      <PageHeader
        badge="OUR SERVICES"
        title="Construction Services and Project Support"
        subtitle="Chitrani Construction provides construction, structural, civil, masonry, labour and concrete-placement support for project requirements across the construction sector."
        accentType="services"
      />

      {/* 2. Introduction Section (White Background, Architectural Spacing) */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <SectionEyebrow badge="WHAT WE DO" className="justify-center mb-3" />
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight mb-4">
              Practical Capabilities Across Construction Execution
            </h2>
            <p className="text-base sm:text-lg text-[#6B5E4E] font-body leading-relaxed max-w-3xl mx-auto">
              Chitrani Construction supports construction requirements through a mix of site execution services, structural and civil work, masonry support, construction labour and concrete-placement equipment. Project scope, deployment requirements and commercial terms are discussed according to the needs of each enquiry.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. Main Services Grid (Soft Cream Viewport Background) */}
      <section className="py-16 sm:py-24 bg-[#F5EEE5] border-y border-[#E8DDD0]/70" aria-label="Construction Services Directory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <SectionEyebrow badge="SERVICE DIRECTORY" className="justify-center mb-3" />
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#3D352D]">
                Core Construction Services
              </h2>
              <p className="text-sm sm:text-base text-[#6B5E4E] font-body mt-2">
                Explore the six core service areas supported by Chitrani Construction.
              </p>
            </Reveal>
          </div>

          {/* 3 Columns x 2 Rows Desktop Grid for Services */}
          {loading && <CardSkeleton count={6} />}
          {error && <ApiError message={error} onRetry={retry} />}
          {!loading && !error && services && services.length === 0 && (
            <EmptyState message="Service information is being updated." />
          )}
          {!loading && !error && services && services.length > 0 && (
            <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {services.map((service) => (
                <StaggerItem key={service.id} className="h-full">
                  <Link
                    to={`/services/${service.slug}`}
                    className="block bg-white rounded-2xl border border-[#E8DDD0] p-6 sm:p-8 space-y-4 hover:border-[#C96F1B]/40 hover:shadow-md transition-all h-full"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                        {service.division?.slug === 'equipment-rental' ? <Truck className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
                      </div>
                      <div>
                        <span className="text-[10px] font-heading font-semibold text-[#9D9287] uppercase tracking-wider block">
                          {service.division?.name}
                        </span>
                        <h3 className="font-heading font-semibold text-base sm:text-lg text-[#3D352D]">
                          {service.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed line-clamp-3">
                      {service.shortDescription || service.fullDescription || "Service details coming soon."}
                    </p>
                    <div className="pt-2 flex items-center gap-1 text-xs font-heading font-semibold text-[#C96F1B] uppercase tracking-wider">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>
          )}
        </div>
      </section>

      {/* 4. Connected Capabilities Section (White Background, Open Composition) */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Reveal className="max-w-3xl space-y-3">
            <SectionEyebrow badge="INTEGRATED CAPABILITIES" className="mb-1" />
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
              Execution Support & Equipment Deployment
            </h2>
            <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
              Some projects require site execution services such as structural RCC framing, civil works, or blockwork masonry, while others require specialized concrete-placement equipment and crew deployment. Chitrani Construction can discuss these requirements independently or as part of the same project conversation depending on confirmed project needs.
            </p>
          </Reveal>

          {/* Open Architecture Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Reveal delay={0.1}>
              <div className="p-8 bg-[#F5EEE5]/80 hover:bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] space-y-4 transition-colors h-full">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-[#3D352D]">
                    Site Execution Services
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Building construction contracting, RCC structural framing, civil foundations, blockwork masonry, and site workforce coordination.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#3D352D] font-body pt-2 border-t border-[#E8DDD0]/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                    <span>Vendor participation & site coordination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                    <span>Verified Mumbai project engagement</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-8 bg-[#F5EEE5]/80 hover:bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] space-y-4 transition-colors h-full">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                    <Truck className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-[#3D352D]">
                    Equipment Deployment Support
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Concrete boom placer rental with operator and helper for high-volume or elevated concrete pours.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#3D352D] font-body pt-2 border-t border-[#E8DDD0]/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                    <span>High-capacity placement equipment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                    <span>Dedicated operator & helper included</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Machinery Support Highlight (Soft Cream Viewport Background) */}
      <section className="py-14 sm:py-20 bg-[#F5EEE5] border-t border-[#E8DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="bg-white rounded-2xl border border-[#E8DDD0] p-8 sm:p-12 shadow-[0_10px_30px_rgba(61,53,45,0.05)] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <SectionEyebrow badge="FEATURED MACHINERY SUPPORT" className="mb-1" />
              <h3 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-[#3D352D]">
                Concrete Boom Placer Rental
              </h3>
              <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                Need high-capacity concrete pumping for slab casting or elevated pours? Explore specs and monthly rental terms for our boom placer equipment.
              </p>
            </div>

            <Link
              to="/equipment"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#3D352D] hover:bg-[#2D2620] text-white font-heading text-xs font-semibold uppercase tracking-wider transition-all shrink-0 min-h-[44px] shadow-sm hover:shadow-md"
            >
              <span>View Machinery Details</span>
              <ArrowRight className="w-4 h-4 text-[#C96F1B]" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 6. Sector Applicability Section (Warm Cream Viewport Background) */}
      <section className="py-16 sm:py-24 bg-[#EADBC8]/40 border-y border-[#E8DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <SectionEyebrow badge="SECTOR APPLICABILITY" className="justify-center mb-3" />
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#3D352D]">
                Target Project Sectors
              </h2>
              <p className="text-sm sm:text-base text-[#6B5E4E] font-body mt-2">
                Services may support requirements across the following verified project environments.
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <StaggerItem>
              <div className="bg-white p-8 rounded-2xl border border-[#E8DDD0] space-y-4 shadow-2xs hover:shadow-md hover:border-[#C96F1B]/40 transition-all h-full">
                <div className="w-12 h-12 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-base sm:text-lg text-[#3D352D]">
                  REAL ESTATE & BUILDING CONSTRUCTION
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Construction contracting and concrete-placement support for building requirements.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white p-8 rounded-2xl border border-[#E8DDD0] space-y-4 shadow-2xs hover:shadow-md hover:border-[#C96F1B]/40 transition-all h-full">
                <div className="w-12 h-12 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center">
                  <Landmark className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-base sm:text-lg text-[#3D352D]">
                  INFRASTRUCTURE & CIVIL WORKS
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Project and equipment support for infrastructure and civil construction requirements.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white p-8 rounded-2xl border border-[#E8DDD0] space-y-4 shadow-2xs hover:shadow-md hover:border-[#C96F1B]/40 transition-all h-full">
                <div className="w-12 h-12 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center">
                  <HardHat className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-base sm:text-lg text-[#3D352D]">
                  CONTRACTOR EQUIPMENT SUPPORT
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Concrete boom placer deployment for contractors requiring high-capacity placement capability.
                </p>
              </div>
            </StaggerItem>
          </StaggerGroup>

          <div className="text-center pt-2">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider text-[#C96F1B] hover:text-[#B35E17] transition-colors"
            >
              <span>Explore All Supported Industries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Final Services CTA Section (Dark Charcoal Viewport Background) */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="bg-[#3D352D] rounded-3xl p-8 sm:p-16 text-white text-center space-y-8 shadow-xl max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C96F1B]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <SectionEyebrow badge="PROJECT REQUIREMENT" className="justify-center mb-1 text-[#C96F1B]" />
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                Need Construction Support or Boom Placer Rental?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#D1C5B0] font-body leading-relaxed max-w-2xl mx-auto">
                Share your site location, project requirement and expected timeline with Chitrani Construction so the relevant service scope can be discussed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
              <Link
                to="/request-quote"
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
