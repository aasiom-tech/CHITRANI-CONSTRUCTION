import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { projectsData } from '../data/projects';
import { ProjectHero } from '../components/projects/ProjectHero';
import { ProjectOverview } from '../components/projects/ProjectOverview';
import { ProjectFacts } from '../components/projects/ProjectFacts';
import { ProjectEngagement } from '../components/projects/ProjectEngagement';
import { ProjectCTA } from '../components/projects/ProjectCTA';
import { ExternalLink, ShieldCheck, FileText, ChevronRight } from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Validate allowed slug strictly (only Ocean Star is public)
  if (!slug || slug !== 'ocean-star') {
    return <Navigate to="/404" replace />;
  }

  const project = projectsData.find((p) => p.slug === slug);
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  // SEO title for Ocean Star page
  const seoTitle = 'Ocean Star Concrete Pump Engagement | Chitrani Construction';

  const isConfirmed = project.status === 'confirmed';

  return (
    <div className="bg-[#F5EEE5] text-[#3D352D] min-h-screen">
      <SEO
        title={seoTitle}
        description={project.description}
        canonicalPath={`/projects/${project.slug}`}
      />

      <ProjectHero
        title={project.title}
        badge={project.statusLabel.toUpperCase()}
        intro={project.shortDescription}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview & Image */}
            <section>
              <ProjectOverview project={project} />
            </section>

            {/* Verified Project Facts */}
            <section>
              <ProjectFacts project={project} />
            </section>

            {/* Governance & Responsible Disclosure Note */}
            <section>
              <ProjectEngagement />
            </section>

            {/* Related Service Contextual Reference */}
            <section className="bg-white rounded-[20px] border border-[#E8DDD0] p-6 sm:p-8 space-y-4 shadow-[0_10px_30px_rgba(61,53,45,0.04)]">
              <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
                SERVICE REFERENCE
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#3D352D]">
                Related Concrete Placement Service
              </h3>

              <div className="p-5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h4 className="font-heading font-bold text-lg sm:text-xl text-[#3D352D]">
                    Concrete Equipment & Pumping Solutions
                  </h4>
                  <Link
                    to="/services/concrete-boom-placer-rental"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#C96F1B] hover:text-[#B35E17] uppercase tracking-wider shrink-0"
                  >
                    <span>Explore Equipment Services</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Explore Chitrani Construction’s current concrete-placement equipment services, including Putzmeister concrete placer rentals and site pumping support.
                </p>
              </div>
            </section>

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
                <span>Back to Projects & Client Engagements</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
