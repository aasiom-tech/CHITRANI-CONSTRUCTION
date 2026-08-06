import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { servicesData } from '../data/services';
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

  // Validate allowed service slugs strictly
  if (slug !== 'construction-contracting' && slug !== 'concrete-boom-placer-rental') {
    return <Navigate to="/404" replace />;
  }

  const service = servicesData.find((s) => s.slug === slug);
  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const isContracting = slug === 'construction-contracting';

  if (isContracting) {
    return (
      <div className="bg-[#F5EEE5] text-[#3D352D] min-h-screen">
        <SEO 
          title="Construction Contracting Services | Chitrani Construction"
          description="Structural and civil construction support for residential, commercial, infrastructure-linked, and concrete-intensive project requirements in Maharashtra."
          canonical="https://chitraniconstruction.com/services/construction-contracting"
        />

        <ServiceHero 
          title="Construction Contracting"
          badge="STRUCTURAL & CIVIL SUPPORT"
          intro="Chitrani Construction undertakes structural and civil construction requirements for public and private sector projects. The service focuses on organised execution support, concrete-intensive construction, site coordination, resource planning, and project-specific delivery requirements."
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Service Overview & Hero Image */}
              <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
                      CIVIL & STRUCTURAL DIVISION
                    </span>
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352D]">
                      Service Overview
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                  Chitrani Construction undertakes structural and civil construction requirements for public and private sector projects. The service focuses on organised execution support, concrete-intensive construction, site coordination, resource planning, and project-specific delivery requirements.
                </p>

                <div className="aspect-[16/9] rounded-xl overflow-hidden border border-[#E8DDD0]">
                  <img
                    src={service.image}
                    alt="Structural and civil construction activity at an organised building project site"
                    className="w-full h-full object-cover"
                  />
                </div>
              </section>

              {/* Scope of Support */}
              <section>
                <ServiceCapabilities
                  title="Scope of Support"
                  items={[
                    'Structural construction support',
                    'Civil construction works',
                    'Residential building requirements',
                    'Commercial building requirements',
                    'Infrastructure-related civil works',
                    'Concrete-intensive execution',
                    'Site coordination',
                    'Resource planning',
                    'Machinery coordination',
                    'Public and private sector support'
                  ]}
                />
              </section>

              {/* Suitable Project Requirements */}
              <section>
                <ServiceApplications
                  title="Suitable Project Requirements"
                  intro="Suitable for requirements involving:"
                  items={[
                    'Residential developments',
                    'Commercial building works',
                    'Concrete-intensive construction',
                    'Structural execution support',
                    'Infrastructure-linked civil requirements',
                    'Contractor support requiring machinery coordination'
                  ]}
                />
              </section>

              {/* Key Benefits */}
              <section>
                <ServiceBenefits
                  title="Key Benefits"
                  items={[
                    'One point of project coordination',
                    'Construction and machinery support under one enterprise',
                    'Quality-focused workmanship',
                    'Transparent communication',
                    'Safety-conscious site practices',
                    'Project-specific resource planning'
                  ]}
                />
              </section>

              {/* Safety & Quality Approach */}
              <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#C96F1B] shrink-0" />
                  <h3 className="font-heading font-bold text-2xl text-[#3D352D]">
                    Responsible Site and Equipment Support
                  </h3>
                </div>
                <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Chitrani Construction emphasizes PPE usage, site supervision, quality inspections, preventive equipment maintenance, workforce coordination, and compliance with applicable project and site requirements.
                </p>
              </section>

              {/* Related Project */}
              <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
                  PROJECT REFERENCE
                </span>
                <h3 className="font-heading font-bold text-2xl text-[#3D352D]">
                  Related Project
                </h3>

                <div className="p-5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading font-bold text-xl text-[#3D352D]">
                      Ocean Star
                    </h4>
                    <Link
                      to="/projects/ocean-star"
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#C96F1B] hover:text-[#B35E17] uppercase tracking-wider"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                    Chitrani Construction was engaged as a construction vendor for the Ocean Star project in Mumbai.
                  </p>
                </div>
              </section>

            </div>

            {/* Sidebar CTA & Navigation */}
            <div className="lg:col-span-4 space-y-6">
              <ServiceCTA
                title="Construction Contracting Quote"
                description="Request a formal proposal for structural and civil construction contracting support."
                quoteLink="/request-quote?requirement=construction-contracting"
                buttonText="Request Quote"
              />

              <div className="bg-white p-6 rounded-[18px] border border-[#E8DDD0] space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                <h4 className="font-heading text-xs font-bold text-[#3D352D] uppercase tracking-wider">
                  Other Services
                </h4>
                <Link
                  to="/services/concrete-boom-placer-rental"
                  className="block p-4 rounded-xl bg-[#F5EEE5] hover:bg-[#E8DDD0]/60 border border-[#E8DDD0] text-xs font-heading font-bold text-[#3D352D] transition-colors"
                >
                  Concrete Boom Placer Rental →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // Boom Placer Rental Detail Page
  return (
    <div className="bg-[#F5EEE5] text-[#3D352D] min-h-screen">
      <SEO 
        title="Concrete Boom Placer Rental | Chitrani Construction"
        description="Putzmeister M42-5 boom placer rental with 42-metre reach, 90 m³ capacity, operator, and helper for construction projects in Maharashtra."
        canonical="https://chitraniconstruction.com/services/concrete-boom-placer-rental"
      />

      <ServiceHero 
        title="Concrete Boom Placer Rental"
        badge="CONCRETE PLACEMENT SUPPORT"
        intro="Chitrani Construction provides a Putzmeister M42-5 concrete boom placer on structured monthly rental with an operator and helper for construction sites requiring reliable, high-capacity concrete placement."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Service Overview & Image */}
            <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
                    MACHINERY DIVISION
                  </span>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352D]">
                    Service Overview
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                Chitrani Construction provides a Putzmeister M42-5 concrete boom placer on structured monthly rental with an operator and helper for construction sites requiring reliable, high-capacity concrete placement.
              </p>

              <div className="aspect-[16/9] rounded-xl overflow-hidden border border-[#E8DDD0]">
                <img
                  src={service.image}
                  alt="Concrete boom placer supporting a large concrete pour at an active construction site"
                  className="w-full h-full object-cover"
                />
              </div>
            </section>

            {/* Verified Equipment */}
            <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8DDD0] pb-4">
                <div>
                  <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block mb-1">
                    FLEET SPECIFICATION
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-[#3D352D]">
                    Verified Equipment
                  </h3>
                </div>
                <Link
                  to="/equipment/putzmeister-m42-5"
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#C96F1B] hover:text-[#B35E17] uppercase tracking-wider"
                >
                  <span>View Equipment Spec</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-4">
                <h4 className="font-heading font-bold text-xl text-[#3D352D]">
                  Putzmeister M42-5 Concrete Boom Placer
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-body">
                  <div className="p-3 bg-white rounded-lg border border-[#E8DDD0]">
                    <span className="text-[#6B5E4E] block text-[11px] font-heading uppercase">Boom Reach</span>
                    <span className="font-bold text-[#3D352D]">42 metres</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#E8DDD0]">
                    <span className="text-[#6B5E4E] block text-[11px] font-heading uppercase">Capacity</span>
                    <span className="font-bold text-[#3D352D]">90 m³</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#E8DDD0]">
                    <span className="text-[#6B5E4E] block text-[11px] font-heading uppercase">Year of Manufacture</span>
                    <span className="font-bold text-[#3D352D]">2020</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#E8DDD0]">
                    <span className="text-[#6B5E4E] block text-[11px] font-heading uppercase">AdBlue Equipped</span>
                    <span className="font-bold text-[#3D352D]">Yes</span>
                  </div>
                </div>

                <div className="p-3 bg-[#C96F1B]/10 rounded-lg border border-[#C96F1B]/30 text-xs font-body text-[#3D352D] flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#C96F1B] shrink-0" />
                  <span><strong>Operating Crew:</strong> Operator and helper included with machine deployment.</span>
                </div>
              </div>
            </section>

            {/* Rental Structure */}
            <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <h3 className="font-heading font-bold text-2xl text-[#3D352D] border-b border-[#E8DDD0] pb-4">
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
                <div className="p-3.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-center gap-3">
                  <UserCheck className="w-4 h-4 text-[#C96F1B] shrink-0" />
                  <span>Operator included</span>
                </div>
                <div className="p-3.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-center gap-3">
                  <UserCheck className="w-4 h-4 text-[#C96F1B] shrink-0" />
                  <span>Helper included</span>
                </div>
              </div>

              <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] text-xs font-body text-[#6B5E4E] italic">
                Availability is subject to confirmation for the requested project period.
              </div>
            </section>

            {/* Suitable Applications */}
            <section>
              <ServiceApplications
                title="Suitable Applications"
                intro="Recommended for construction sites requiring:"
                items={[
                  'High-rise concrete placement',
                  'Large-volume concrete pours',
                  'Residential building projects',
                  'Commercial construction',
                  'Infrastructure-related concrete work',
                  'Contractor equipment support'
                ]}
              />
            </section>

            {/* Operating Crew */}
            <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <h3 className="font-heading font-bold text-2xl text-[#3D352D] border-b border-[#E8DDD0] pb-4">
                Operating Crew
              </h3>
              <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                The equipment is supplied with an operator and helper to support organised machinery deployment. Site access, working conditions, coordination, and client-provided arrangements remain subject to the final quotation and commercial terms.
              </p>
            </section>

            {/* Client Scope Commercial Panel */}
            <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-2 text-[#C96F1B] font-heading text-xs font-bold uppercase tracking-wider">
                <Info className="w-4 h-4" />
                <span>COMMERCIAL INFORMATION PANEL</span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#3D352D]">
                Client Scope
              </h3>

              <p className="text-sm text-[#6B5E4E] font-body">
                Client responsibilities may include:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-body text-[#3D352D]">
                {[
                  'Fuel',
                  'AdBlue',
                  'Operator accommodation',
                  'Crew food and travel',
                  'Site safety and security',
                  'PPE',
                  'Tools and tackles',
                  'Internal shifting',
                  'Supporting equipment',
                  'Pipeline arrangements'
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

          </div>

          {/* Sidebar CTA & Navigation */}
          <div className="lg:col-span-4 space-y-6">
            <ServiceCTA
              title="Equipment Rental Quote"
              description="Request rental rate confirmation for the Putzmeister M42-5 Concrete Boom Placer."
              quoteLink="/request-quote?requirement=equipment-rental&equipment=putzmeister-m42-5"
              buttonText="Request Rental Quote"
            />

            <div className="bg-white p-6 rounded-[18px] border border-[#E8DDD0] space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <h4 className="font-heading text-xs font-bold text-[#3D352D] uppercase tracking-wider">
                Other Services
              </h4>
              <Link
                to="/services/construction-contracting"
                className="block p-4 rounded-xl bg-[#F5EEE5] hover:bg-[#E8DDD0]/60 border border-[#E8DDD0] text-xs font-heading font-bold text-[#3D352D] transition-colors"
              >
                Construction Contracting →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
