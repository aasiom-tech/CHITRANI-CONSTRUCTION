import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { getProjectBySlug } from '../data/projects';
import { ProjectHero } from '../components/projects/ProjectHero';
import { ProjectOverview } from '../components/projects/ProjectOverview';
import { ProjectFacts } from '../components/projects/ProjectFacts';
import { ProjectEngagement } from '../components/projects/ProjectEngagement';
import { ProjectCTA } from '../components/projects/ProjectCTA';
import { Reveal, SectionEyebrow } from '../components/common/Motion';
import { Building2, Truck, ArrowRight } from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Retrieve project dynamically from data layer
  const project = getProjectBySlug(slug || '');

  // Defensive validation: unknown project slug redirects to 404
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen">
      <SEO
        title={project.seoTitle || `${project.title} Project | Chitrani Construction`}
        description={project.seoDescription || project.scope}
        canonical={`https://chitraniconstruction.com/projects/${project.slug}`}
      />

      {/* Hero / Intro Header */}
      <ProjectHero
        title={project.title}
        badge={project.statusBadge || 'VERIFIED VENDOR ENGAGEMENT'}
        intro={`Chitrani Construction is documented as a construction vendor for the ${project.title} development in Mumbai.`}
        image={project.image}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview & Representative Image */}
            <Reveal>
              <ProjectOverview image={project.image} />
            </Reveal>

            {/* Verified Contract Metadata Facts */}
            <Reveal delay={0.1}>
              <ProjectFacts />
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
                    Concrete Boom Placer Rental
                  </h4>
                  <p className="text-xs text-[#6B5E4E] font-body">
                    Putzmeister M42-5 monthly rental with operator and helper for high-volume pours.
                  </p>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            <Reveal delay={0.15}>
              <ProjectCTA
                title="Inquire About Vendor Capabilities"
                description="Discuss contracting support, site coordination, and machinery rental for your project."
                quoteLink="/request-quote?service=construction-contracting"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};
