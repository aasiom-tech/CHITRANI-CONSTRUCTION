import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { projectsData } from '../data/projects';
import { ProjectHero } from '../components/projects/ProjectHero';
import { ProjectOverview } from '../components/projects/ProjectOverview';
import { ProjectFacts } from '../components/projects/ProjectFacts';
import { ProjectEngagement } from '../components/projects/ProjectEngagement';
import { ProjectCTA } from '../components/projects/ProjectCTA';
import { ExternalLink } from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Validate allowed slug strictly
  if (slug !== 'ocean-star') {
    return <Navigate to="/404" replace />;
  }

  const project = projectsData.find((p) => p.slug === slug);
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="bg-[#F5EEE5] text-[#3D352D] min-h-screen">
      <SEO 
        title="Ocean Star Project Engagement | Chitrani Construction"
        description="Review verified client, location, work-order, and schedule details for the Ocean Star project engagement in Mumbai."
        canonical="https://chitraniconstruction.com/projects/ocean-star"
      />

      <ProjectHero
        title="Ocean Star"
        badge="PROJECT ENGAGEMENT"
        intro="Chitrani Construction was engaged as a construction vendor for the Ocean Star project at Kashinath Dhuru Marg, Mumbai."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview & Image */}
            <section>
              <ProjectOverview image={project.image} />
            </section>

            {/* Verified Project Facts */}
            <section>
              <ProjectFacts />
            </section>

            {/* Vendor Engagement & Responsible Information Note */}
            <section>
              <ProjectEngagement />
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
                    Construction Contracting
                  </h4>
                  <Link
                    to="/services/construction-contracting"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#C96F1B] hover:text-[#B35E17] uppercase tracking-wider"
                  >
                    <span>View Service</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Review the structural and civil construction support offered by Chitrani Construction.
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6">
            <ProjectCTA />
          </div>

        </div>
      </div>
    </div>
  );
};
