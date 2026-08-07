import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';
import {
  Building2,
  Truck,
  ArrowRight,
  FileText,
  PhoneCall,
  CheckCircle2,
  ShieldCheck,
  FileCheck,
  Calendar,
  MapPin
} from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const featuredProject = projectsData[0]; // Ocean Star

  return (
    <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen">
      <SEO
        title="Documented Construction Projects & Vendor Engagements | Chitrani"
        description="View documented construction vendor engagements by Chitrani Construction, including the Ocean Star development in Mumbai for Suraj Estate Developers Ltd."
        canonical="https://chitraniconstruction.com/projects"
      />

      {/* 1. Page Header (Existing Shared PageHeader Component) */}
      <PageHeader
        badge="PROJECT PORTFOLIO"
        title="Documented Project Engagements"
        subtitle="Chitrani Construction maintains transparent documentation of verified client engagements and construction vendor roles."
      />

      {/* 2. Introduction / Project Evidence Statement (White Background) */}
      <section className="py-12 sm:py-16 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
            VERIFIED ENGAGEMENTS
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
            Documented Project Participation
          </h2>
          <p className="text-base sm:text-lg text-[#6B5E4E] font-body leading-relaxed max-w-3xl mx-auto">
            Chitrani Construction presents project engagements supported by verified documentation and work orders. Project records reflect documented vendor roles, contract dates, and site locations.
          </p>
        </div>
      </section>

      {/* 3. Featured Project — Ocean Star (Soft Cream Background) */}
      <section className="py-12 sm:py-20 bg-[#F5EEE5]" aria-label="Verified Project Portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
              FEATURED ENGAGEMENT
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
              Verified Construction Vendor Record
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <ProjectCard project={featuredProject} />
          </div>
        </div>
      </section>

      {/* 4. Project Information / Verified Facts Band (White Background) */}
      <section className="py-12 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.04)] space-y-8">
            <div className="flex items-center gap-3 border-b border-[#E8DDD0] pb-4">
              <FileCheck className="w-6 h-6 text-[#C96F1B] shrink-0" />
              <div>
                <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
                  CONTRACT DOCUMENTATION
                </span>
                <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
                  Ocean Star Engagement Record
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm font-body">
              <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-1">
                <span className="text-[#6B5E4E] block text-[11px] font-heading font-semibold uppercase">Client</span>
                <span className="font-semibold text-[#3D352D]">Suraj Estate Developers Ltd</span>
              </div>
              <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-1">
                <span className="text-[#6B5E4E] block text-[11px] font-heading font-semibold uppercase">Location</span>
                <span className="font-semibold text-[#3D352D]">Kashinath Dhuru Marg, Mumbai</span>
              </div>
              <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-1">
                <span className="text-[#6B5E4E] block text-[11px] font-heading font-semibold uppercase">Work Order</span>
                <span className="font-semibold text-[#3D352D]">OSWOJ0002126-27</span>
              </div>
              <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-1">
                <span className="text-[#6B5E4E] block text-[11px] font-heading font-semibold uppercase">Scheduled Period</span>
                <span className="font-semibold text-[#3D352D]">31 Jul 2026 – 31 Dec 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How Project Records Are Presented (Warm Cream Background) */}
      <section className="py-12 sm:py-20 bg-[#EADBC8]/40 border-y border-[#E8DDD0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
            DOCUMENTATION POLICY
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
            How Project Records Are Presented
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed max-w-3xl mx-auto">
            Chitrani Construction publishes only verified project engagements supported by contract records. Unconfirmed projects, unverified scope metrics, or speculative completion claims are deliberately excluded from this portfolio.
          </p>
        </div>
      </section>

      {/* 6. Related Capabilities Section (White Background) */}
      <section className="py-12 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] space-y-6">
            <div className="space-y-2">
              <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
                SERVICE INTEGRATION
              </span>
              <h3 className="font-heading font-semibold text-2xl text-[#3D352D]">
                Project Execution & Equipment Support
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to="/services/construction-contracting"
                className="p-6 bg-[#F5EEE5] hover:bg-[#EADBC8]/60 rounded-xl border border-[#E8DDD0] space-y-3 group transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#C96F1B] group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-heading font-semibold text-xl text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                  Construction Contracting
                </h4>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Project-based construction support for building and civil requirements in Maharashtra.
                </p>
              </Link>

              <Link
                to="/services/concrete-boom-placer-rental"
                className="p-6 bg-[#F5EEE5] hover:bg-[#EADBC8]/60 rounded-xl border border-[#E8DDD0] space-y-3 group transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center">
                    <Truck className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#C96F1B] group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-heading font-semibold text-xl text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                  Concrete Boom Placer Rental
                </h4>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Putzmeister M42-5 monthly rental with operator and helper for high-volume pours.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Project Discussion CTA Section (Dark Charcoal Background) */}
      <section className="py-12 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#3D352D] rounded-[18px] p-8 sm:p-14 text-white text-center space-y-6 shadow-xl max-w-4xl mx-auto">
            <div className="space-y-3">
              <span className="font-display text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block">
                PROJECT ENQUIRY
              </span>
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-white tracking-tight">
                Have a Project Requirement?
              </h2>
              <p className="text-sm sm:text-base text-[#D1C5B0] font-body leading-relaxed max-w-2xl mx-auto">
                Share your site location, project requirement and expected timeline so the relevant construction contracting or machinery deployment scope can be reviewed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/request-quote?service=construction-contracting"
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
