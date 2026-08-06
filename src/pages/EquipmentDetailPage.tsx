import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { equipmentData } from '../data/equipment';
import { EquipmentHero } from '../components/equipment/EquipmentHero';
import { EquipmentSpecifications } from '../components/equipment/EquipmentSpecifications';
import { EquipmentApplications } from '../components/equipment/EquipmentApplications';
import { RentalStructure } from '../components/equipment/RentalStructure';
import { ClientScopePanel } from '../components/equipment/ClientScopePanel';
import { EquipmentCTA } from '../components/equipment/EquipmentCTA';
import { Truck, ShieldCheck, UserCheck, AlertCircle, ExternalLink } from 'lucide-react';

export const EquipmentDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Validate allowed slug strictly
  if (slug !== 'putzmeister-m42-5') {
    return <Navigate to="/404" replace />;
  }

  const item = equipmentData.find((e) => e.slug === slug);
  if (!item) {
    return <Navigate to="/404" replace />;
  }

  const altText = "Putzmeister M42-5 concrete boom placer positioned for concrete placement at a construction site";

  return (
    <div className="bg-[#F5EEE5] text-[#3D352D] min-h-screen">
      <SEO 
        title="Putzmeister M42-5 Boom Placer Rental | Chitrani Construction"
        description="Review verified specifications, rental structure, applications, crew inclusion, and quotation information for the Putzmeister M42-5 concrete boom placer."
        canonical="https://chitraniconstruction.com/equipment/putzmeister-m42-5"
      />

      <EquipmentHero
        title="Putzmeister M42-5 Concrete Boom Placer"
        badge="CONCRETE PLACEMENT EQUIPMENT"
        intro="Chitrani Construction provides the Putzmeister M42-5 concrete boom placer on structured monthly rental with an operator and helper for sites requiring dependable, high-capacity concrete-placement support."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Specs Column */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Equipment Overview & Image */}
            <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
                    FLEET OVERVIEW
                  </span>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352D]">
                    Equipment Overview
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                The Putzmeister M42-5 is offered for project requirements involving elevated concrete placement, large concrete pours, high-rise developments, commercial construction, and infrastructure-related concrete work. Rental deployment remains subject to site requirements, requested dates, and confirmation through the quotation process.
              </p>

              <div className="aspect-[16/9] rounded-xl overflow-hidden border border-[#E8DDD0]">
                <img
                  src={item.image}
                  alt={altText}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </section>

            {/* Verified Specifications */}
            <section>
              <EquipmentSpecifications />
            </section>

            {/* Rental Structure */}
            <section>
              <RentalStructure />
            </section>

            {/* Suitable Applications */}
            <section>
              <EquipmentApplications
                title="Suitable Applications"
                intro="This equipment may support requirements involving:"
              />
            </section>

            {/* Operating Crew */}
            <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 border-b border-[#E8DDD0] pb-4">
                <UserCheck className="w-6 h-6 text-[#C96F1B] shrink-0" />
                <h3 className="font-heading font-bold text-2xl text-[#3D352D]">
                  Operating Crew
                </h3>
              </div>
              <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                The equipment is supplied with an operator and helper to support organised machinery deployment. Their inclusion does not replace the client’s responsibility for site readiness, coordination, safety arrangements, or other items confirmed in the commercial agreement.
              </p>
            </section>

            {/* Client Responsibilities */}
            <section>
              <ClientScopePanel />
            </section>

            {/* Availability and Commercial Terms */}
            <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 border-b border-[#E8DDD0] pb-4">
                <AlertCircle className="w-6 h-6 text-[#C96F1B] shrink-0" />
                <h3 className="font-heading font-bold text-2xl text-[#3D352D]">
                  Availability and Commercial Terms
                </h3>
              </div>

              <div className="space-y-3 text-sm text-[#6B5E4E] font-body leading-relaxed">
                <p className="font-semibold text-[#3D352D]">
                  Availability is subject to confirmation for the requested project period.
                </p>
                <p>
                  Pricing, mobilization, payment terms, client responsibilities, and deployment conditions are provided through a project-specific quotation.
                </p>
              </div>
            </section>

            {/* Related Service */}
            <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
                SERVICE REFERENCE
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#3D352D]">
                Related Service
              </h3>

              <div className="p-5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-bold text-xl text-[#3D352D]">
                    Concrete Boom Placer Rental
                  </h4>
                  <Link
                    to="/services/concrete-boom-placer-rental"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#C96F1B] hover:text-[#B35E17] uppercase tracking-wider"
                  >
                    <span>View Service</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Review the complete rental service, operating crew, applications, and commercial-scope information.
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6">
            <EquipmentCTA />
          </div>

        </div>
      </div>
    </div>
  );
};
