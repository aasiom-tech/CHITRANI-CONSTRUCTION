import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { getServiceBySlug, getPublishedServices, PriyaServiceItem } from '../data/services';
import { ServiceHero } from '../components/services/ServiceHero';
import { ServiceCapabilities } from '../components/services/ServiceCapabilities';
import { ServiceApplications } from '../components/services/ServiceApplications';
import { ServiceBenefits } from '../components/services/ServiceBenefits';
import { ServiceCTA } from '../components/services/ServiceCTA';
import { Reveal, SectionEyebrow, StaggerGroup, StaggerItem } from '../components/common/Motion';
import {
  Building2,
  Truck,
  ArrowRight,
  ExternalLink,
  Calendar,
  Clock,
  UserCheck,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Retrieve service dynamically from data layer
  const service = getServiceBySlug(slug || '');

  // Defensive validation: unknown or invalid service slug redirects to 404
  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const isBoomPlacer = service.slug === 'concrete-boom-placer-rental';
  const Icon = isBoomPlacer ? Truck : Building2;

  // Resolve related services dynamically from data model
  const allServices = getPublishedServices();
  const relatedServices = service.relatedServiceSlugs
    ? service.relatedServiceSlugs
        .map((sSlug) => getServiceBySlug(sSlug))
        .filter((s): s is PriyaServiceItem => s !== undefined)
    : allServices.filter((s) => s.slug !== service.slug).slice(0, 3);

  const sidebarOtherServices = allServices.filter((s) => s.slug !== service.slug);

  return (
    <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen">
      <SEO
        title={service.seoTitle || `${service.title} | Chitrani Construction`}
        description={service.seoDescription || service.description}
        canonical={`https://chitraniconstruction.com/services/${service.slug}`}
      />

      {/* 1. Service Hero / Intro */}
      <ServiceHero
        title={service.title}
        badge={service.category.toUpperCase()}
        intro={service.summary || service.description}
        image={service.image}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* 2. Service Overview & Hero Image */}
            <Reveal className="bg-white rounded-2xl border border-[#E8DDD0] p-6 sm:p-10 space-y-6 shadow-sm">
              <div className="flex items-center gap-3 border-b border-[#E8DDD0] pb-4">
                <div className="w-11 h-11 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <SectionEyebrow badge={`${service.category} DIVISION`} className="mb-0.5" />
                  <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
                    Service Overview
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                {service.overview || service.description}
              </p>

              <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-[#E8DDD0] bg-[#F5EEE5]">
                <img
                  src={service.image}
                  alt={service.imageAlt || `${service.title} at construction site`}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>

            {/* Special Section for Boom Placer Equipment Specs */}
            {isBoomPlacer && (
              <>
                <Reveal className="bg-white rounded-2xl border border-[#E8DDD0] p-6 sm:p-10 space-y-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8DDD0] pb-4">
                    <div>
                      <SectionEyebrow badge="FLEET SPECIFICATION" className="mb-1" />
                      <h3 className="font-heading font-semibold text-2xl text-[#3D352D]">
                        Verified Machinery Specs
                      </h3>
                    </div>
                    <Link
                      to="/equipment/putzmeister-m42-5"
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[#C96F1B] hover:text-[#B35E17] uppercase tracking-wider"
                    >
                      <span>View Machinery Details</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="p-6 bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-semibold text-lg text-[#3D352D]">
                        Putzmeister M42-5 Concrete Boom Placer
                      </span>
                      <span className="px-3 py-1 rounded-xl bg-white text-[#C96F1B] border border-[#E8DDD0] text-xs font-heading font-semibold uppercase">
                        2020 Model
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-body">
                      <div className="p-3.5 bg-white rounded-xl border border-[#E8DDD0] flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                        <span><strong>Boom Reach:</strong> 42 metres</span>
                      </div>
                      <div className="p-3.5 bg-white rounded-xl border border-[#E8DDD0] flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                        <span><strong>Capacity:</strong> 90 m³</span>
                      </div>
                      <div className="p-3.5 bg-white rounded-xl border border-[#E8DDD0] flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                        <span><strong>Emissions:</strong> AdBlue equipped</span>
                      </div>
                      <div className="p-3.5 bg-white rounded-xl border border-[#E8DDD0] flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                        <span><strong>Crew:</strong> Operator & helper included</span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal className="bg-white rounded-2xl border border-[#E8DDD0] p-6 sm:p-10 space-y-6 shadow-sm">
                  <div className="border-b border-[#E8DDD0] pb-4">
                    <SectionEyebrow badge="COMMERCIAL TERMS" className="mb-1" />
                    <h3 className="font-heading font-semibold text-2xl text-[#3D352D]">
                      Rental Shift Structure
                    </h3>
                  </div>

                  <StaggerGroup className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-body">
                    <StaggerItem>
                      <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-1">
                        <Calendar className="w-4 h-4 text-[#C96F1B] mb-1" />
                        <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase block">Rental Model</span>
                        <span className="font-semibold text-[#3D352D]">Monthly deployment</span>
                      </div>
                    </StaggerItem>

                    <StaggerItem>
                      <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-1">
                        <Clock className="w-4 h-4 text-[#C96F1B] mb-1" />
                        <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase block">Shift Structure</span>
                        <span className="font-semibold text-[#3D352D]">12-hour single shift</span>
                      </div>
                    </StaggerItem>

                    <StaggerItem>
                      <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-1">
                        <UserCheck className="w-4 h-4 text-[#C96F1B] mb-1" />
                        <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase block">Schedule</span>
                        <span className="font-semibold text-[#3D352D]">26 days/mo (Sundays off)</span>
                      </div>
                    </StaggerItem>
                  </StaggerGroup>

                  <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] text-xs font-body text-[#6B5E4E] flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 text-[#C96F1B] shrink-0" />
                    <span><em>Availability is subject to confirmation for the requested project period.</em></span>
                  </div>
                </Reveal>
              </>
            )}

            {/* 3. Capabilities / Key Highlights */}
            <Reveal>
              <ServiceCapabilities
                capabilities={service.scope || service.keyHighlights || service.details}
                title="Service Scope & Key Capabilities"
              />
            </Reveal>

            {/* 4. Applications */}
            {service.applications && service.applications.length > 0 && (
              <Reveal>
                <ServiceApplications
                  applications={service.applications}
                  title="Typical Project Applications"
                />
              </Reveal>
            )}

            {/* 5. Benefits / Considerations */}
            {service.serviceConsiderations && service.serviceConsiderations.length > 0 && (
              <Reveal>
                <ServiceBenefits
                  benefits={service.serviceConsiderations}
                  title="Project Considerations & Coordination"
                />
              </Reveal>
            )}

            {/* 6. Related Services */}
            <Reveal className="bg-white rounded-2xl border border-[#E8DDD0] p-6 sm:p-10 space-y-6 shadow-sm">
              <div className="border-b border-[#E8DDD0] pb-4">
                <SectionEyebrow badge="SERVICE INTEGRATION" className="mb-1" />
                <h3 className="font-heading font-semibold text-2xl text-[#3D352D]">
                  Related Construction Services
                </h3>
              </div>

              <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {relatedServices.map((relService) => (
                  <StaggerItem key={relService.id}>
                    <Link
                      to={`/services/${relService.slug}`}
                      className="p-5 bg-[#F5EEE5] hover:bg-[#EADBC8]/60 rounded-xl border border-[#E8DDD0] space-y-2 group transition-all block h-full"
                    >
                      <h4 className="font-heading font-semibold text-base text-[#3D352D] group-hover:text-[#C96F1B] transition-colors line-clamp-1">
                        {relService.title}
                      </h4>
                      <p className="text-xs text-[#6B5E4E] font-body line-clamp-2">
                        {relService.summary}
                      </p>
                      <div className="pt-2 flex items-center gap-1 text-xs font-heading font-semibold text-[#C96F1B] uppercase tracking-wider">
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </Reveal>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            <Reveal delay={0.1}>
              <ServiceCTA serviceTitle={service.title} serviceSlug={service.slug} />
            </Reveal>

            {/* Sidebar Directory Links */}
            <Reveal delay={0.2} className="bg-white rounded-2xl border border-[#E8DDD0] p-6 space-y-4 shadow-sm">
              <SectionEyebrow badge="OTHER SERVICES" className="mb-1" />
              <h4 className="font-heading font-semibold text-lg text-[#3D352D]">
                Construction Directory
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm font-body">
                {sidebarOtherServices.map((s) => (
                  <li key={s.id}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="p-3 bg-[#F5EEE5] hover:bg-[#EADBC8]/60 rounded-xl border border-[#E8DDD0] flex items-center justify-between text-[#3D352D] hover:text-[#C96F1B] font-medium transition-all group block"
                    >
                      <span className="truncate max-w-[200px]">{s.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C96F1B] group-hover:translate-x-1 transition-transform shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};
