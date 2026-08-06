import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectEngagement } from '../components/projects/ProjectEngagement';
import { Building2, ArrowRight, FileText } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const project = projectsData[0];

  return (
    <div className="bg-[#F5EEE5] text-[#3D352D] min-h-screen">
      <SEO 
        title="Verified Project Experience | Chitrani Construction"
        description="Review Chitrani Construction's verified project engagement record, including the Ocean Star development project in Mumbai."
        canonical="https://chitraniconstruction.com/projects"
      />

      {/* Page Header */}
      <PageHeader
        title="Verified Project Engagement"
        subtitle="Chitrani Construction’s project portfolio is presented using verified client and work-order information. The current listed engagement reflects the company’s role as a construction vendor for a Mumbai development project."
        badge="PROJECT EXPERIENCE"
      />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-20">
        
        {/* Single Premium Project Card */}
        <section aria-label="Project Directory">
          <div className="max-w-4xl mx-auto">
            <ProjectCard project={project} />
          </div>
        </section>

        {/* Project Engagement & Responsible Information Note */}
        <section className="max-w-4xl mx-auto">
          <ProjectEngagement />
        </section>

        {/* Construction Capability Link */}
        <section className="max-w-4xl mx-auto bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
                CAPABILITY REFERENCE
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#3D352D]">
                Construction Contracting
              </h3>
              <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                Review the structural and civil construction support offered by Chitrani Construction.
              </p>
            </div>

            <Link
              to="/services/construction-contracting"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F5EEE5] hover:bg-[#EADBC8] text-[#3D352D] font-heading text-xs font-bold uppercase tracking-wider transition-colors border border-[#E8DDD0] shrink-0"
            >
              <span>Explore Capability</span>
              <ArrowRight className="w-4 h-4 text-[#C96F1B]" />
            </Link>
          </div>
        </section>

        {/* Final Project Enquiry CTA */}
        <section className="bg-[#3D352D] rounded-[18px] p-8 sm:p-12 text-white text-center space-y-6 shadow-xl max-w-4xl mx-auto">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
              COMMERCIAL CONSULTATION
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
              Discuss Your Project Requirements
            </h2>
            <p className="text-sm text-[#D1C5B0] font-body leading-relaxed">
              Contact our engineering team to discuss structural civil contracting support or machinery deployment parameters.
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              to="/request-quote?requirement=construction-contracting"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>Discuss a Project Requirement</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};
