import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';
import { Reveal, SectionEyebrow, StaggerGroup, StaggerItem } from '../components/common/Motion';
import {
  Building2,
  Truck,
  ArrowRight,
  FileText,
  PhoneCall,
  FileCheck
} from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const oceanStar = projectsData.find((p) => p.slug === 'ocean-star') || projectsData[0];
  const supportingProjects = projectsData.filter((p) => p.slug !== 'ocean-star');

  const projectsHeroVisual = (
    <div className="relative rounded-2xl overflow-hidden border border-[#E8DDD0] bg-[#F5EEE5] shadow-md group aspect-[16/10] max-h-[300px] sm:max-h-[340px]">
      <img
        src={oceanStar.image}
        alt={oceanStar.imageAlt}
        loading="eager"
        decoding="async"
        className="w-full h-full object-cover filter brightness-95 group-hover:scale-[1.025] transition-transform duration-500 ease-out"
      />
      {/* Project Timeline Accent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-heading font-medium">
        <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20">
          OCEAN STAR · MUMBAI
        </span>
        <span className="bg-[#C96F1B]/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-white font-semibold">
          CONFIRMED ENGAGEMENT
        </span>
      </div>
    </div>
  );

  return (
    <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen">
      <SEO
        title="Projects & Client Engagements | Chitrani Construction"
        description="Explore selected construction and concrete-pumping engagements and client requirements involving Ocean Star, Godrej Nurture and Capacite Infra Projects Ltd."
        canonicalPath="/projects"
      />

      {/* 1. Page Header */}
      <PageHeader
        badge="PROJECTS & CLIENT ENGAGEMENTS"
        title="Construction and Concrete Pumping Engagements"
        subtitle="Explore selected construction and concrete-pumping requirements supported or proposed by Chitrani Construction across Mumbai projects and client engagements."
        accentType="projects"
        customRightVisual={projectsHeroVisual}
      />

      {/* 2. Introduction Section */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <SectionEyebrow badge="DOCUMENTED ENGAGEMENTS" className="justify-center mb-3" />
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight mb-4">
              Project Portfolio & Client Requirements
            </h2>
            <p className="text-base sm:text-lg text-[#6B5E4E] font-body leading-relaxed max-w-3xl mx-auto">
              Chitrani Construction presents project engagements and client requirements supported by transparent documentation. Records reflect confirmed vendor roles alongside formal proposal specifications.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. Featured & Supporting Project Cards */}
      <section className="py-16 sm:py-24 bg-[#F5EEE5] border-y border-[#E8DDD0]/70" aria-label="Project Portfolio Directory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Sub-heading */}
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <SectionEyebrow badge="ENGAGEMENT DIRECTORY" className="justify-center mb-3" />
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#3D352D]">
                Documented Site Engagements & Proposals
              </h2>
            </Reveal>
          </div>

          {/* Featured Large Card: Ocean Star */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <ProjectCard project={oceanStar} featured={true} />
            </div>
          </Reveal>

          {/* Supporting Cards Grid: Godrej Nurture & Capacite Infra */}
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {supportingProjects.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} featured={false} />
              </StaggerItem>
            ))}
          </StaggerGroup>

        </div>
      </section>

      {/* 4. Verified Facts & Scope Summary */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="space-y-8">
            <div className="flex items-center gap-3 border-b border-[#E8DDD0] pb-4">
              <FileCheck className="w-6 h-6 text-[#C96F1B] shrink-0" />
              <div>
                <SectionEyebrow badge="TRANSPARENT RECORDS" className="mb-0.5" />
                <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
                  Portfolio Engagement Summary
                </h3>
              </div>
            </div>

            <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm font-body">
              <StaggerItem>
                <div className="p-6 bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] space-y-2 hover:border-[#C96F1B]/40 transition-colors h-full">
                  <span className="text-[#C96F1B] block text-[11px] font-heading font-bold uppercase tracking-wider">Confirmed Engagement</span>
                  <h4 className="font-heading font-bold text-lg text-[#3D352D]">Ocean Star</h4>
                  <p className="text-xs text-[#6B5E4E] font-body leading-relaxed">
                    Suraj Estate Developers Ltd. — Kashinath Dhuru Marg, Mumbai. SP 1087 Concrete Pump deployment with 100m pipeline.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-6 bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] space-y-2 hover:border-[#C96F1B]/40 transition-colors h-full">
                  <span className="text-[#6B5E4E] block text-[11px] font-heading font-bold uppercase tracking-wider">Client Requirement</span>
                  <h4 className="font-heading font-bold text-lg text-[#3D352D]">Godrej Nurture</h4>
                  <p className="text-xs text-[#6B5E4E] font-body leading-relaxed">
                    LBS Road, Bhandup, Mumbai. Concrete pump support proposal with 100m pipeline and operating manpower.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-6 bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] space-y-2 hover:border-[#C96F1B]/40 transition-colors h-full">
                  <span className="text-[#6B5E4E] block text-[11px] font-heading font-bold uppercase tracking-wider">Client Requirement</span>
                  <h4 className="font-heading font-bold text-lg text-[#3D352D]">Capacite Infra Projects Ltd.</h4>
                  <p className="text-xs text-[#6B5E4E] font-body leading-relaxed">
                    Mumbai. High-rise concrete pumping proposal utilizing Putzmeister BSA 1408 / BAS1408HD-class equipment configuration.
                  </p>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </Reveal>
        </div>
      </section>

      {/* 5. How Project Records Are Presented */}
      <section className="py-16 sm:py-24 bg-[#EADBC8]/40 border-y border-[#E8DDD0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <SectionEyebrow badge="DOCUMENTATION POLICY" className="justify-center mb-3" />
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#3D352D] mb-4">
              How Project Records Are Presented
            </h2>
            <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed max-w-3xl mx-auto">
              Chitrani Construction publishes documented project engagements and formal client requirements. Confirmed engagements reflect awarded work orders, while client requirements reflect documented commercial proposals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. Related Capabilities Section */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Reveal className="space-y-2">
            <SectionEyebrow badge="SERVICE INTEGRATION" className="mb-1" />
            <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
              Project Execution & Equipment Support
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Reveal delay={0.1}>
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
                  Construction Contracting
                </h4>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Structural civil contracting, RCC frame execution, masonry, and manpower support.
                </p>
              </Link>
            </Reveal>

            <Reveal delay={0.2}>
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
                  Concrete Boom Placer Rental
                </h4>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Putzmeister M42-5 monthly rental with operator and helper for high-volume pours.
                </p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Project Discussion CTA Section */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="bg-[#F5EEE5] rounded-3xl p-8 sm:p-16 text-[#3D352D] text-center space-y-8 border border-[#E8DDD0] shadow-lg max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C96F1B]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <SectionEyebrow badge="PROJECT ENQUIRY" className="justify-center mb-1 text-[#C96F1B]" />
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#3D352D] tracking-tight">
                Have a Project Requirement?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#6B5E4E] font-body leading-relaxed max-w-2xl mx-auto">
                Share your site location, project requirement and expected timeline so the relevant construction contracting or machinery deployment scope can be reviewed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
              <Link
                to="/request-quote?service=construction-contracting"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-md min-h-[44px] focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
              >
                <FileText className="w-4 h-4" />
                <span>REQUEST A QUOTE</span>
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-[#EADBC8] text-[#3D352D] font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all border border-[#E8DDD0] min-h-[44px] focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
              >
                <PhoneCall className="w-4 h-4 text-[#C96F1B]" />
                <span>CONTACT US</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
