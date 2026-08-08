import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectEngagement } from '../components/projects/ProjectEngagement';
import { ArrowRight, FileText, Building2, Truck } from 'lucide-react';
import { motion } from 'motion/react';

export const ProjectsPage: React.FC = () => {
  const oceanStar = projectsData.find((p) => p.slug === 'ocean-star') || projectsData[0];
  const supportingProjects = projectsData.filter((p) => p.slug !== 'ocean-star');

  return (
    <div className="bg-[#F5EEE5] text-[#3D352D] min-h-screen">
      <SEO 
        title="Projects & Client Engagements | Chitrani Construction"
        description="Explore the documented Ocean Star construction engagement with Chitrani Construction."
        canonicalPath="/projects"
      />

      {/* Page Header */}
      <PageHeader
        title="Construction and Concrete Pumping Engagements"
        subtitle="Explore selected construction and concrete-pumping requirements supported or proposed by Chitrani Construction across Mumbai projects and client engagements."
        badge="PROJECTS & CLIENT ENGAGEMENTS"
      />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-20">
        
        {/* Projects Layout Grid */}
        <section aria-label="Projects and Client Engagements Directory" className="space-y-10">
          {/* Section Sub-heading */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E8DDD0] pb-4">
            <div>
              <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block mb-1">
                FEATURED & PROPOSED ENGAGEMENTS
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352D] tracking-tight">
                Project Portfolio
              </h2>
            </div>
            <p className="text-xs text-[#6B5E4E] font-body max-w-md">
              Showing documented project deployments alongside official client requirement proposals.
            </p>
          </div>

          {/* 1. Featured Card: Ocean Star */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <ProjectCard project={oceanStar} featured={true} />
          </div>

          {/* 2 & 3. Supporting Grid Cards: Godrej Nurture & Capacite Infra */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {supportingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={false} />
            ))}
          </div>

        </section>

        {/* Responsible Information & Engagement Disclosures */}
        <section className="max-w-7xl mx-auto">
          <ProjectEngagement />
        </section>

        {/* Capability Links */}
        <section className="bg-white rounded-[20px] border border-[#E8DDD0] p-6 sm:p-8 shadow-[0_10px_30px_rgba(61,53,45,0.04)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#E8DDD0]">
            <div className="space-y-3 pb-6 md:pb-0 md:pr-6">
              <div className="flex items-center gap-2 text-[#C96F1B]">
                <Building2 className="w-5 h-5" />
                <span className="font-heading text-xs font-bold uppercase tracking-wider">Civil Execution</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-[#3D352D]">
                Construction Contracting
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                Review the structural civil contracting, RCC frame, masonry, and manpower execution support offered by Chitrani Construction.
              </p>
              <Link
                to="/services/construction-contracting"
                className="inline-flex items-center gap-2 text-xs font-heading font-bold text-[#C96F1B] hover:text-[#B35E17] uppercase tracking-wider pt-1"
              >
                <span>View Contracting Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-3 pt-6 md:pt-0 md:pl-6">
              <div className="flex items-center gap-2 text-[#C96F1B]">
                <Truck className="w-5 h-5" />
                <span className="font-heading text-xs font-bold uppercase tracking-wider">Equipment Fleet</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-[#3D352D]">
                Concrete Equipment Services
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                Explore Chitrani Construction’s concrete-placement equipment rental solutions including Putzmeister concrete boom placers.
              </p>
              <Link
                to="/services/concrete-boom-placer-rental"
                className="inline-flex items-center gap-2 text-xs font-heading font-bold text-[#C96F1B] hover:text-[#B35E17] uppercase tracking-wider pt-1"
              >
                <span>View Equipment Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* Final Project Enquiry CTA */}
        <section className="bg-[#3D352D] rounded-[20px] p-8 sm:p-12 text-white text-center space-y-6 shadow-xl max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
              COMMERCIAL CONSULTATION
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Discuss Your Project Requirements
            </h2>
            <p className="text-sm text-[#D1C5B0] font-body leading-relaxed">
              Contact our engineering team to discuss structural civil contracting support or machinery deployment parameters for your site.
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              to="/request-quote?requirement=equipment-rental"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5"
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
