import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { useEquipmentList } from '../hooks/useEquipment';
import { CardSkeleton, ApiError, EmptyState } from '../components/common/ApiStates';
import { TechnicalEquipmentShowcase } from '../components/equipment/TechnicalEquipmentShowcase';
import { Reveal, SectionEyebrow, StaggerGroup, StaggerItem } from '../components/common/Motion';
import {
  Truck,
  ArrowRight,
  FileText,
  Calendar,
  Clock,
  UserCheck,
  CheckCircle2,
  Ruler,
  Gauge,
  Info,
  Building2
} from 'lucide-react';
import m42Img from '../assets/images/equipment/putzmeister-m42-5-equipment.webp';

export const EquipmentPage: React.FC = () => {
  const { data: equipment, loading, error, retry } = useEquipmentList();
  const featured = equipment?.[0];

  return (
    <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen">
      <SEO
        title="Equipment Rental | Chitrani Construction"
        description="Concrete placement equipment rental with operator and helper for construction projects in Maharashtra."
        canonical="https://chitraniconstruction.com/equipment"
      />

      {/* 1. Page Header */}
      <PageHeader
        badge="EQUIPMENT RENTAL"
        title="Concrete Placement Machinery"
        subtitle="Chitrani Construction provides concrete placement equipment on structured monthly rental with an operating crew."
        accentType="equipment"
      />

      {/* 2. Intro / Fleet Capability Statement */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <SectionEyebrow badge="MACHINERY DEPLOYMENT" className="justify-center mb-3" />
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight mb-4">
              High-Capacity Concrete Placement Machinery
            </h2>
            <p className="text-base sm:text-lg text-[#6B5E4E] font-body leading-relaxed max-w-3xl mx-auto">
              Chitrani Construction offers specialized machinery rental for concrete placement. Equipment is deployed on monthly single-shift rental agreements with an operator and helper.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. TECHNICAL MACHINERY CATALOGUE SHOWCASE (New Brochure Presentation) */}
      <TechnicalEquipmentShowcase />

      {/* 4. Featured Equipment Card (data-driven) */}
      <section className="py-16 sm:py-24 bg-[#F5EEE5] border-y border-[#E8DDD0]/70" aria-label="Concrete Placing Equipment Directory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <SectionEyebrow badge="FEATURED FLEET MODEL" className="justify-center mb-3" />
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#3D352D]">
                Verified Boom Placer Fleet
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="max-w-4xl mx-auto">
            {loading && (
              <div className="bg-white rounded-2xl border border-[#E8DDD0] p-6 space-y-4 animate-pulse">
                <div className="h-5 bg-[#F5EEE5] rounded w-2/3 mb-2" />
                <div className="h-3 bg-[#F5EEE5] rounded w-1/2" />
                <div className="h-3 bg-[#F5EEE5] rounded w-full" />
              </div>
            )}

            {error && <ApiError message={error} onRetry={retry} />}

            {!loading && !error && !featured && (
              <EmptyState message="No equipment is currently available. Please check back later." />
            )}

            {!loading && !error && featured && (
              <Link
                to={`/equipment/${featured.slug}`}
                className="block bg-white rounded-2xl border border-[#E8DDD0] p-6 sm:p-8 hover:border-[#C96F1B]/40 hover:shadow-md transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                        <Truck className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading font-semibold text-xl sm:text-2xl text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                        {featured.name}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-body text-[#6B5E4E]">
                      {featured.manufacturer && <span>{featured.manufacturer}</span>}
                      {featured.manufacturer && featured.model && <span>·</span>}
                      {featured.model && <span>{featured.model}</span>}
                      {featured.manufactureYear && <span>·</span>}
                      {featured.manufactureYear && <span>{featured.manufactureYear}</span>}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {featured.category?.name && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#C96F1B]/10 text-[#C96F1B] text-xs font-semibold font-heading">
                          {featured.category.name}
                        </span>
                      )}
                      {featured.publicStatus && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#F5EEE5] text-[#6B5E4E] text-xs font-body border border-[#E8DDD0]">
                          {featured.publicStatus}
                        </span>
                      )}
                    </div>

                    {featured.description && (
                      <p className="text-sm text-[#6B5E4E] font-body leading-relaxed mt-2 line-clamp-2">
                        {featured.description}
                      </p>
                    )}
                  </div>

                  <ArrowRight className="w-5 h-5 text-[#C96F1B] group-hover:translate-x-1 transition-transform shrink-0 mt-2 sm:mt-3" />
                </div>
              </Link>
            )}
          </Reveal>
        </div>
      </section>

      {/* 5. Rental Terms & Operations Band */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="space-y-8">
            <div className="max-w-3xl space-y-2">
              <SectionEyebrow badge="RENTAL STRUCTURE" className="mb-1" />
              <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
                Standard Deployment Parameters
              </h2>
              <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                Machinery rental is provided under a structured monthly agreement designed for long-pour stability and site coordination.
              </p>
            </div>

            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm font-body">
              <StaggerItem>
                <div className="p-6 bg-white rounded-2xl border border-[#E8DDD0] flex items-center gap-3 hover:border-[#C96F1B] transition-colors shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase tracking-wider block">Rental Model</span>
                    <span className="font-semibold text-[#3D352D] text-base">Monthly deployment</span>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-6 bg-white rounded-2xl border border-[#E8DDD0] flex items-center gap-3 hover:border-[#C96F1B] transition-colors shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase tracking-wider block">Shift Structure</span>
                    <span className="font-semibold text-[#3D352D] text-base">One fixed 12-hour shift</span>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-6 bg-white rounded-2xl border border-[#E8DDD0] flex items-center gap-3 hover:border-[#C96F1B] transition-colors shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase tracking-wider block">Working Schedule</span>
                    <span className="font-semibold text-[#3D352D] text-base">26 days/mo (Sundays off)</span>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-6 bg-white rounded-2xl border border-[#E8DDD0] flex items-center gap-3 hover:border-[#C96F1B] transition-colors shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase tracking-wider block">Operating Crew</span>
                    <span className="font-semibold text-[#3D352D] text-base">Operator & helper included</span>
                  </div>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </Reveal>
        </div>
      </section>

      {/* 6. Commercial Information & Client Scope Panel */}
      <section className="py-16 sm:py-24 bg-[#EADBC8]/40 border-y border-[#E8DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Reveal>
              <SectionEyebrow badge="COMMERCIAL SCOPE" className="justify-center mb-3" />
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#3D352D]">
                Client Site Responsibilities
              </h2>
              <p className="text-sm sm:text-base text-[#6B5E4E] font-body">
                Standard rental scope allocation between equipment provider and project site.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E8DDD0] shadow-sm max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-2 text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider border-b border-[#E8DDD0] pb-4">
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
                <li key={idx} className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C96F1B]" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-[#6B5E4E] font-body italic pt-2 border-t border-[#E8DDD0] text-center">
              Final responsibilities are confirmed in the written quotation and rental agreement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 7. Related Construction Services */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Reveal className="space-y-2">
            <SectionEyebrow badge="SERVICE INTEGRATION" className="mb-1" />
            <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
              Related Construction Services
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Reveal delay={0.1}>
              <Link
                to="/services/concrete-boom-placer-rental"
                className="p-8 bg-[#F5EEE5]/80 hover:bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] space-y-4 group transition-all block h-full"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center">
                    <Truck className="w-6 h-6" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#C96F1B] group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-heading font-semibold text-xl text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                  Concrete Boom Placer Rental Service
                </h4>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Detailed service breakdown, rental terms, and deployment support for concrete placement requirements.
                </p>
              </Link>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                to="/services/construction-contracting"
                className="p-8 bg-[#F5EEE5]/80 hover:bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] space-y-4 group transition-all block h-full"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#C96F1B] group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-heading font-semibold text-xl text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                  Construction Contracting Support
                </h4>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Civil and structural contracting support for building construction projects in Maharashtra.
                </p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. Equipment Rental Enquiry CTA Section */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="bg-[#3D352D] rounded-3xl p-8 sm:p-16 text-white text-center space-y-8 shadow-xl max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C96F1B]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <SectionEyebrow badge="MACHINERY ENQUIRY" className="justify-center mb-1 text-[#C96F1B]" />
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                Need Concrete Boom Placer Deployment?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#D1C5B0] font-body leading-relaxed max-w-2xl mx-auto">
                Share your site location, concrete volume requirements and expected deployment timeline with Chitrani Construction so availability and rental rates can be confirmed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
              <Link
                to="/request-quote?service=equipment-rental"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-md min-h-[44px]"
              >
                <FileText className="w-4 h-4" />
                <span>REQUEST A QUOTE</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
