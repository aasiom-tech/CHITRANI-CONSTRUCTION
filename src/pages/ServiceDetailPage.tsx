import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { useServiceBySlug, useServices } from '../hooks/useServices';
import { ApiError } from '../components/common/ApiStates';
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
} from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: service, loading, error } = useServiceBySlug(slug);
  const { data: allServices } = useServices();

  if (loading) {
    return (
      <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-3 px-6 py-3.5 bg-[#F5EEE5] rounded-[14px] border border-[#E8DDD0] shadow-sm text-xs font-heading font-semibold text-[#3D352D]">
          <span className="w-4 h-4 rounded-full border-2 border-[#C96F1B] border-t-transparent animate-spin" />
          <span>Loading service...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md"><ApiError message={error} /></div>
      </div>
    );
  }

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const relatedServices = allServices?.filter((s) => s.id !== service.id).slice(0, 3) ?? [];
  const sidebarOtherServices = allServices?.filter((s) => s.id !== service.id) ?? [];

  const Icon = service.division?.slug === 'equipment-rental' ? Truck : Building2;

  return (
    <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen">
      <SEO
        title={service.seoTitle || `${service.name} | Chitrani Construction`}
        description={service.seoDescription || service.shortDescription || service.fullDescription || ""}
        canonical={`https://chitraniconstruction.com/services/${service.slug}`}
      />

      {/* 1. Service Hero / Intro */}
      <ServiceHero
        title={service.name}
        badge={service.division?.name?.toUpperCase() || "SERVICE"}
        intro={service.shortDescription || service.fullDescription || ""}
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
                  <SectionEyebrow badge={`${service.division?.name || 'SERVICE'} DIVISION`} className="mb-0.5" />
                  <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
                    Service Overview
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                {service.fullDescription || service.shortDescription || "Service details coming soon."}
              </p>
            </Reveal>

            {/* 3. Capabilities / Key Highlights */}
            <Reveal>
              <ServiceCapabilities
                capabilities={[]}
                title="Service Scope & Key Capabilities"
              />
            </Reveal>

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
                        {relService.name}
                      </h4>
                      <p className="text-xs text-[#6B5E4E] font-body line-clamp-2">
                        {relService.shortDescription || "Service details coming soon."}
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
                      <span className="truncate max-w-[200px]">{s.name}</span>
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
