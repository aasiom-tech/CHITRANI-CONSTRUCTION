import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { useEquipmentBySlug } from '../hooks/useEquipment';
import { CardSkeleton, ApiError } from '../components/common/ApiStates';
import { Reveal, SectionEyebrow } from '../components/common/Motion';
import { Truck, UserCheck, AlertCircle, ExternalLink, ArrowRight } from 'lucide-react';

export const EquipmentDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: item, loading, error, retry } = useEquipmentBySlug(slug || '');

  if (loading) {
    return (
      <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <CardSkeleton count={1} />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <ApiError message={error} onRetry={retry} />
        </div>
      </div>
    );
  }

  if (!item) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen">
      <SEO
        title={`${item.name} | Chitrani Construction`}
        description={item.description || `${item.name} rental from Chitrani Construction.`}
        canonical={`https://chitraniconstruction.com/equipment/${item.slug}`}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F5EEE5] to-[#FFFFFF] py-16 sm:py-24 border-b border-[#E8DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-2 text-xs font-heading font-semibold text-[#9D9287] uppercase tracking-wider mb-4">
              <span>EQUIPMENT</span>
              <span className="text-[#E8DDD0]">·</span>
              <span className="text-[#C96F1B]">CONCRETE PLACEMENT</span>
            </div>
            <h1 className="font-heading font-bold text-3xl sm:text-5xl text-[#3D352D] tracking-tight mb-4">
              {item.name}
            </h1>
            <p className="text-base sm:text-lg text-[#6B5E4E] font-body leading-relaxed max-w-3xl">
              {item.description}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview & Image */}
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
                {item.description}
              </p>
            </Reveal>

            {/* Specifications */}
            <Reveal delay={0.1} className="bg-white rounded-2xl border border-[#E8DDD0] p-6 sm:p-10 space-y-6 shadow-sm">
              <div className="flex items-center gap-3 border-b border-[#E8DDD0] pb-4">
                <SectionEyebrow badge="SPECIFICATIONS" className="mb-0.5" />
                <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
                  Technical Specifications
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-body">
                {item.manufacturer && (
                  <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0]">
                    <span className="text-[10px] text-[#9D9287] uppercase block mb-1">Manufacturer</span>
                    <span className="font-semibold text-[#3D352D]">{item.manufacturer}</span>
                  </div>
                )}
                {item.model && (
                  <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0]">
                    <span className="text-[10px] text-[#9D9287] uppercase block mb-1">Model</span>
                    <span className="font-semibold text-[#3D352D]">{item.model}</span>
                  </div>
                )}
                {item.manufactureYear && (
                  <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0]">
                    <span className="text-[10px] text-[#9D9287] uppercase block mb-1">Year</span>
                    <span className="font-semibold text-[#3D352D]">{item.manufactureYear}</span>
                  </div>
                )}
                {item.publicStatus && (
                  <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0]">
                    <span className="text-[10px] text-[#9D9287] uppercase block mb-1">Status</span>
                    <span className="font-semibold text-[#3D352D]">{item.publicStatus}</span>
                  </div>
                )}
              </div>

              {item.specifications && item.specifications.length > 0 && (
                <div className="space-y-3">
                  {item.specifications.map((spec) => (
                    <div key={spec.name} className="flex items-center justify-between py-3 border-b border-[#E8DDD0] last:border-0">
                      <span className="text-sm text-[#6B5E4E] font-body">{spec.name}</span>
                      <span className="text-sm font-semibold text-[#3D352D]">
                        {spec.value}{spec.unit ? ` ${spec.unit}` : ''}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>

            {/* Operating Crew */}
            <Reveal delay={0.15} className="bg-white rounded-2xl border border-[#E8DDD0] p-6 sm:p-10 space-y-4 shadow-sm">
              <div className="flex items-center gap-3 border-b border-[#E8DDD0] pb-4">
                <UserCheck className="w-6 h-6 text-[#C96F1B] shrink-0" />
                <h3 className="font-heading font-semibold text-2xl text-[#3D352D]">
                  Operating Crew Inclusion
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                The equipment is supplied with an operator and helper to support organised machinery deployment. Their inclusion does not replace the client's responsibility for site readiness, coordination, safety arrangements, or other items confirmed in the commercial agreement.
              </p>
            </Reveal>

            {/* Rental Terms */}
            <Reveal delay={0.2} className="bg-white rounded-2xl border border-[#E8DDD0] p-6 sm:p-10 space-y-4 shadow-sm">
              <div className="flex items-center gap-3 border-b border-[#E8DDD0] pb-4">
                <SectionEyebrow badge="RENTAL TERMS" className="mb-0.5" />
                <h3 className="font-heading font-semibold text-2xl text-[#3D352D]">
                  Rental Structure
                </h3>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-[#6B5E4E] font-body">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C96F1B] shrink-0" />
                  Monthly single-shift rental with operator and helper
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C96F1B] shrink-0" />
                  26 days per month (Sundays off)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C96F1B] shrink-0" />
                  Pricing, mobilization, and terms provided through quotation
                </li>
              </ul>
            </Reveal>

            {/* Availability Disclaimer */}
            <Reveal delay={0.25} className="bg-white rounded-2xl border border-[#E8DDD0] p-6 sm:p-10 space-y-4 shadow-sm">
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
            <Reveal delay={0.3} className="bg-white rounded-2xl border border-[#E8DDD0] p-6 sm:p-10 space-y-4 shadow-sm">
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
              <div className="bg-[#F5EEE5] rounded-3xl p-6 sm:p-8 text-[#3D352D] space-y-6 border border-[#E8DDD0] shadow-lg sticky top-24">
                <div className="space-y-2">
                  <h3 className="font-heading font-semibold text-xl text-[#3D352D]">
                    Request This Equipment
                  </h3>
                  <p className="text-xs text-[#6B5E4E] font-body leading-relaxed">
                    Share your project requirements and we will confirm availability, pricing, and deployment dates.
                  </p>
                </div>

                <div className="space-y-3">
                  <Link
                    to="/request-quote?service=equipment-rental"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    <span>REQUEST A QUOTE</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#EADBC8] text-[#3D352D] font-heading text-xs font-semibold uppercase tracking-wider transition-all border border-[#E8DDD0]"
                  >
                    <span>CONTACT US</span>
                  </Link>
                </div>

                <div className="pt-4 border-t border-[#E8DDD0] space-y-2 text-xs text-[#6B5E4E] font-body">
                  <p>Monthly single-shift rental</p>
                  <p>Operator & helper included</p>
                  <p>26 days/month schedule</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};
