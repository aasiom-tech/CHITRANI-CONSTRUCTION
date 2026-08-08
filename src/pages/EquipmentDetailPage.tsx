import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { getEquipmentBySlug } from '../data/equipment';
import { EquipmentHero } from '../components/equipment/EquipmentHero';
import { EquipmentSpecifications } from '../components/equipment/EquipmentSpecifications';
import { EquipmentApplications } from '../components/equipment/EquipmentApplications';
import { RentalStructure } from '../components/equipment/RentalStructure';
import { ClientScopePanel } from '../components/equipment/ClientScopePanel';
import { EquipmentCTA } from '../components/equipment/EquipmentCTA';
import { Reveal, SectionEyebrow } from '../components/common/Motion';
import { Truck, UserCheck, AlertCircle, ExternalLink } from 'lucide-react';

export const EquipmentDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Retrieve equipment item dynamically from data layer
  const item = getEquipmentBySlug(slug || '');

  // Defensive validation: unknown equipment slug redirects to 404
  if (!item) {
    return <Navigate to="/404" replace />;
  }

  const altText = item.imageAlt || 'Putzmeister M42-5 concrete boom placer machine';

  return (
    <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen">
      <SEO
        title={item.seoTitle || `${item.name} | Chitrani Construction`}
        description={item.seoDescription || item.description}
        canonical={`https://chitraniconstruction.com/equipment/${item.slug}`}
      />

      {/* Hero / Intro Header */}
      <EquipmentHero
        title={item.name}
        badge="CONCRETE PLACEMENT EQUIPMENT"
        intro={item.description}
        image={item.image}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Equipment Overview & Image */}
            <Reveal className="bg-white rounded-2xl border border-[#E8DDD0] p-6 sm:p-10 space-y-6 shadow-sm">
              <div className="flex items-center gap-3 border-b border-[#E8DDD0] pb-4">
                <div className="w-11 h-11 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <SectionEyebrow badge="FLEET OVERVIEW" className="mb-0.5" />
                  <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
                    Machinery Overview
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                The Putzmeister M42-5 is offered for project requirements involving elevated concrete placement, large concrete pours, high-rise developments, commercial construction, and infrastructure-related concrete work. Rental deployment remains subject to site requirements, requested dates, and confirmation through the quotation process.
              </p>

              <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-[#E8DDD0] bg-[#F5EEE5]">
                <img
                  src={item.image}
                  alt={altText}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>

            {/* Verified Specifications Grid */}
            <Reveal delay={0.1}>
              <EquipmentSpecifications />
            </Reveal>

            {/* Rental Structure */}
            <Reveal delay={0.15}>
              <RentalStructure />
            </Reveal>

            {/* Suitable Applications */}
            <Reveal delay={0.2}>
              <EquipmentApplications
                title="Suitable Applications"
                intro="This equipment may support requirements involving:"
              />
            </Reveal>

            {/* Operating Crew */}
            <Reveal delay={0.25} className="bg-white rounded-2xl border border-[#E8DDD0] p-6 sm:p-10 space-y-4 shadow-sm">
              <div className="flex items-center gap-3 border-b border-[#E8DDD0] pb-4">
                <UserCheck className="w-6 h-6 text-[#C96F1B] shrink-0" />
                <h3 className="font-heading font-semibold text-2xl text-[#3D352D]">
                  Operating Crew Inclusion
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                The equipment is supplied with an operator and helper to support organised machinery deployment. Their inclusion does not replace the client’s responsibility for site readiness, coordination, safety arrangements, or other items confirmed in the commercial agreement.
              </p>
            </Reveal>

            {/* Client Scope Responsibilities */}
            <Reveal delay={0.3}>
              <ClientScopePanel />
            </Reveal>

            {/* Availability Disclaimer Panel */}
            <Reveal delay={0.35} className="bg-white rounded-2xl border border-[#E8DDD0] p-6 sm:p-10 space-y-4 shadow-sm">
              <div className="flex items-center gap-3 border-b border-[#E8DDD0] pb-4">
                <AlertCircle className="w-6 h-6 text-[#C96F1B] shrink-0" />
                <h3 className="font-heading font-semibold text-2xl text-[#3D352D]">
                  Availability & Commercial Terms
                </h3>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                <p className="font-semibold text-[#3D352D]">
                  Availability is subject to confirmation for the requested project period.
                </p>
                <p>
                  Pricing, mobilization, payment terms, client responsibilities, and deployment conditions are provided through a project-specific quotation.
                </p>
              </div>
            </Reveal>

            {/* Related Service */}
            <Reveal delay={0.4} className="bg-white rounded-2xl border border-[#E8DDD0] p-6 sm:p-10 space-y-4 shadow-sm">
              <SectionEyebrow badge="SERVICE REFERENCE" className="mb-1" />
              <h3 className="font-heading font-semibold text-2xl text-[#3D352D]">
                Related Construction Service
              </h3>

              <div className="p-6 bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-semibold text-xl text-[#3D352D]">
                    Concrete Boom Placer Rental Service
                  </h4>
                  <Link
                    to="/services/concrete-boom-placer-rental"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[#C96F1B] hover:text-[#B35E17] uppercase tracking-wider"
                  >
                    <span>View Service</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Review the complete rental service, operating crew, applications, and commercial-scope information.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Sidebar CTA Column */}
          <div className="lg:col-span-4 space-y-6">
            <Reveal delay={0.15}>
              <EquipmentCTA />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};
