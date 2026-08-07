import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { getServiceBySlug, getPublishedServices, PriyaServiceItem } from '../data/services';
import { ServiceHero } from '../components/services/ServiceHero';
import { ServiceCapabilities } from '../components/services/ServiceCapabilities';
import { ServiceApplications } from '../components/services/ServiceApplications';
import { ServiceBenefits } from '../components/services/ServiceBenefits';
import { ServiceCTA } from '../components/services/ServiceCTA';
import {
  Building2,
  Truck,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Info,
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
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* 2. Service Overview & Hero Image */}
            <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 border-b border-[#E8DDD0] pb-4">
                <div className="w-10 h-10 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
                    {service.category} DIVISION
                  </span>
                  <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
                    Service Overview
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                {service.overview || service.description}
              </p>

              <div className="aspect-[16/9] rounded-xl overflow-hidden border border-[#E8DDD0] bg-[#F5EEE5]">
                <img
                  src={service.image}
                  alt={service.imageAlt || `${service.title} at construction site`}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </section>

            {/* Special Section for Boom Placer Equipment Specs */}
            {isBoomPlacer && (
              <>
                <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8DDD0] pb-4">
                    <div>
                      <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block mb-1">
                        FLEET SPECIFICATION
                      </span>
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

                  <div className="p-5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-4">
                    <h4 className="font-heading font-semibold text-xl text-[#3D352D]">
                      Putzmeister M42-5 Concrete Boom Placer
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-body">
                      <div className="p-3 bg-white rounded-lg border border-[#E8DDD0]">
                        <span className="text-[#6B5E4E] block text-[11px] font-heading uppercase">Boom Reach</span>
                        <span className="font-semibold text-[#3D352D]">42 metres</span>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-[#E8DDD0]">
                        <span className="text-[#6B5E4E] block text-[11px] font-heading uppercase">Capacity</span>
                        <span className="font-semibold text-[#3D352D]">90 m³</span>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-[#E8DDD0]">
                        <span className="text-[#6B5E4E] block text-[11px] font-heading uppercase">Year of Manufacture</span>
                        <span className="font-semibold text-[#3D352D]">2020</span>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-[#E8DDD0]">
                        <span className="text-[#6B5E4E] block text-[11px] font-heading uppercase">AdBlue Equipped</span>
                        <span className="font-semibold text-[#3D352D]">Yes</span>
                      </div>
                    </div>

                    <div className="p-3 bg-[#C96F1B]/10 rounded-lg border border-[#C96F1B]/30 text-xs font-body text-[#3D352D] flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span><strong>Operating Crew:</strong> Operator and helper included with machine deployment.</span>
                    </div>
                  </div>
                </section>

                <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                  <h3 className="font-heading font-semibold text-2xl text-[#3D352D] border-b border-[#E8DDD0] pb-4">
                    Rental Structure
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-body">
                    <div className="p-3.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span>Monthly rental deployment</span>
                    </div>
                    <div className="p-3.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-center gap-3">
                      <Clock className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span>One fixed 12-hour shift</span>
                    </div>
                    <div className="p-3.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span>26 working days per month</span>
                    </div>
                    <div className="p-3.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-center gap-3">
                      <AlertCircle className="w-4 h-4 text-[#6B5E4E] shrink-0" />
                      <span>Sundays excluded</span>
                    </div>
                  </div>

                  <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] text-xs font-body text-[#6B5E4E] italic">
                    Availability is subject to confirmation for the requested project period.
                  </div>
                </section>

                <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center gap-2 text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider">
                    <Info className="w-4 h-4" />
                    <span>COMMERCIAL INFORMATION PANEL</span>
                  </div>
                  <h3 className="font-heading font-semibold text-2xl text-[#3D352D]">
                    Client Scope & Responsibilities
                  </h3>

                  <p className="text-sm text-[#6B5E4E] font-body">
                    Client responsibilities may include:
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-body text-[#3D352D]">
                    {[
                      'Fuel supply & AdBlue',
                      'Operator accommodation & food',
                      'Site access & security',
                      'PPE & safety equipment on site',
                      'Supporting equipment & pipeline arrangements',
                      'Internal site shifting coordination'
                    ].map((resp, idx) => (
                      <li key={idx} className="p-3 bg-[#F5EEE5] rounded-lg border border-[#E8DDD0] flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C96F1B]" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-[#6B5E4E] font-body italic pt-2 border-t border-[#E8DDD0]">
                    Final responsibilities are confirmed in the written quotation and rental agreement.
                  </p>
                </section>
              </>
            )}

            {/* 3. Scope of Work */}
            {service.scope && service.scope.length > 0 && (
              <section>
                <ServiceCapabilities
                  title="Scope of Work"
                  items={service.scope}
                />
              </section>
            )}

            {/* 4. Applications / Where This Service Fits */}
            {service.applications && service.applications.length > 0 && (
              <section>
                <ServiceApplications
                  title="Suitable Project Applications"
                  intro="Recommended for project environments requiring:"
                  items={service.applications}
                />
              </section>
            )}

            {/* 5. Key Service Considerations / Highlights */}
            {service.serviceConsiderations && service.serviceConsiderations.length > 0 && (
              <section>
                <ServiceBenefits
                  title="Key Service Considerations"
                  items={service.serviceConsiderations}
                />
              </section>
            )}

            {/* 6. Related Capability / Equipment Links */}
            <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="border-b border-[#E8DDD0] pb-4 space-y-1">
                <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
                  SERVICE INTEGRATION
                </span>
                <h3 className="font-heading font-semibold text-2xl text-[#3D352D]">
                  Related Capabilities & Services
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedServices.map((relService) => (
                  <Link
                    key={relService.id}
                    to={`/services/${relService.slug}`}
                    className="p-5 bg-[#F5EEE5] hover:bg-[#EADBC8]/60 rounded-xl border border-[#E8DDD0] space-y-2 group transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-heading font-semibold text-[#C96F1B] uppercase tracking-wider">
                        {relService.category}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C96F1B] group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h4 className="font-heading font-semibold text-base text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                      {relService.title}
                    </h4>
                    <p className="text-xs text-[#6B5E4E] font-body line-clamp-2">
                      {relService.summary || relService.description}
                    </p>
                  </Link>
                ))}

                {service.relatedEquipmentSlug && (
                  <Link
                    to="/equipment/putzmeister-m42-5"
                    className="p-5 bg-[#3D352D] text-white hover:bg-[#2D2620] rounded-xl border border-[#E8DDD0]/20 space-y-2 group transition-all sm:col-span-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-heading font-semibold text-[#C96F1B] uppercase tracking-wider">
                        EQUIPMENT DEPLOYMENT
                      </span>
                      <ExternalLink className="w-4 h-4 text-[#C96F1B] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <h4 className="font-heading font-semibold text-lg text-white">
                      Putzmeister M42-5 Concrete Boom Placer
                    </h4>
                    <p className="text-xs text-[#D1C5B0] font-body">
                      Explore detailed machinery specifications, 42m boom reach dimensions, and monthly rental terms.
                    </p>
                  </Link>
                )}
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* 7. Final Service CTA */}
            <ServiceCTA
              title={`Discuss Your ${service.shortTitle || service.title} Requirement`}
              description="Share your project location, expected timeline and service requirement with Chitrani Construction so the scope can be reviewed and discussed."
              quoteLink={`/request-quote?service=${service.slug}`}
              buttonText="Request Quote"
            />

            {/* Other Services Navigation Card */}
            <div className="bg-white p-6 rounded-[18px] border border-[#E8DDD0] space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <h4 className="font-heading text-xs font-semibold text-[#3D352D] uppercase tracking-wider border-b border-[#E8DDD0] pb-2">
                All Services Directory
              </h4>
              <div className="space-y-2">
                {sidebarOtherServices.map((otherSvc) => (
                  <Link
                    key={otherSvc.id}
                    to={`/services/${otherSvc.slug}`}
                    className="block p-3 rounded-lg bg-[#F5EEE5] hover:bg-[#EADBC8]/60 border border-[#E8DDD0] text-xs font-heading font-semibold text-[#3D352D] hover:text-[#C96F1B] transition-colors"
                  >
                    {otherSvc.title} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
