import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { projectsData } from '../data/projects';
import { ProjectHero } from '../components/projects/ProjectHero';
import { ProjectOverview } from '../components/projects/ProjectOverview';
import { ProjectFacts } from '../components/projects/ProjectFacts';
import { ProjectEngagement } from '../components/projects/ProjectEngagement';
import { ProjectCTA } from '../components/projects/ProjectCTA';
import { ChevronRight, Building2, Truck, ArrowRight } from 'lucide-react';
import { Reveal, SectionEyebrow } from '../components/common/Motion';

const VALID_SLUGS = ['ocean-star', 'godrej-nurture', 'capacite-infra'];

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Validate allowed slug strictly
  if (!slug || !VALID_SLUGS.includes(slug)) {
    return <Navigate to="/404" replace />;
  }

  const project = projectsData.find((p) => p.slug === slug);
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  // SEO title per project
  let seoTitle = 'Documented Project Engagement | Chitrani Construction';
  if (project.slug === 'ocean-star') {
    seoTitle = 'Ocean Star Concrete Pump Engagement | Chitrani Construction';
  } else if (project.slug === 'godrej-nurture') {
    seoTitle = 'Godrej Nurture Concrete Pump Requirement | Chitrani Construction';
  } else if (project.slug === 'capacite-infra') {
    seoTitle = 'Capacite Infra High-Rise Pump Requirement | Chitrani Construction';
  }

  return (
    <div className="bg-[#F5EEE5] text-[#3D352D] min-h-screen">
      <SEO
        title={seoTitle}
        description={project.description}
        canonicalPath={`/projects/${project.slug}`}
      />

      <ProjectHero
        title={project.title}
        badge={project.statusLabel?.toUpperCase() || 'VERIFIED VENDOR ENGAGEMENT'}
        intro={project.shortDescription}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview & Image */}
            <Reveal>
              <ProjectOverview project={project} />
            </Reveal>

            {/* Verified Project Facts */}
            <Reveal delay={0.1}>
              <ProjectFacts project={project} />
            </Reveal>

            {/* Vendor Engagement & Responsible Information Note */}
            <Reveal delay={0.15}>
              <ProjectEngagement />
            </Reveal>

            {/* Related Services Links */}
            <Reveal delay={0.2} className="bg-white rounded-2xl border border-[#E8DDD0] p-6 sm:p-10 space-y-6 shadow-sm">
              <div className="border-b border-[#E8DDD0] pb-4">
                <SectionEyebrow badge="SERVICE INTEGRATION" className="mb-1" />
                <h3 className="font-heading font-semibold text-2xl text-[#3D352D]">
                  Related Construction Services
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Link
                  to="/services/construction-contracting"
                  className="p-5 bg-[#F5EEE5] hover:bg-[#EADBC8]/60 rounded-xl border border-[#E8DDD0] space-y-2 group transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#C96F1B] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-heading font-semibold text-base text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                    Construction Contracting
                  </h4>
                  <p className="text-xs text-[#6B5E4E] font-body">
                    Civil and structural contracting support for building construction requirements.
                  </p>
                </Link>

                <Link
                  to="/services/concrete-boom-placer-rental"
                  className="p-5 bg-[#F5EEE5] hover:bg-[#EADBC8]/60 rounded-xl border border-[#E8DDD0] space-y-2 group transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center">
                      <Truck className="w-5 h-5" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#C96F1B] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-heading font-semibold text-base text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                    Concrete Equipment Support
                  </h4>
                  <p className="text-xs text-[#6B5E4E] font-body">
                    Explore Chitrani Construction’s concrete-placement equipment services.
                  </p>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6">
            <ProjectCTA
              title="Have a Similar Project Requirement?"
              description="Discuss concrete pumping parameters, equipment configuration, or civil execution support with our site engineering team."
              quoteLink="/request-quote?requirement=equipment-rental"
            />

            {/* Navigation back to all projects */}
            <div className="p-6 bg-white rounded-[20px] border border-[#E8DDD0] space-y-3 text-xs font-body">
              <span className="font-heading font-bold text-[#3D352D] uppercase tracking-wider block">
                Portfolio Navigation
              </span>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 font-heading font-bold text-[#C96F1B] hover:text-[#B35E17] uppercase tracking-wider"
              >
                <span>Back to Projects &amp; Client Engagements</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
