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

  const projectsHeroVisual = (
    <div className="relative rounded-2xl overflow-hidden border border-[#E8DDD0] bg-[#F5EEE5] shadow-md group aspect-[16/10] max-h-[300px] sm:max-h-[340px]">
      <img
        src={oceanStar.image}
        alt={oceanStar.imageAlt || 'Representative visual of Ocean Star documented high-rise project engagement'}
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
          VENDOR ENGAGEMENT
        </span>
      </div>
    </div>
  );

  return (
    <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen">
      <SEO
        title="Documented Construction Projects & Vendor Engagements | Chitrani"
        description="Explore verified and approved project information published by Chitrani Construction, including the Ocean Star development engagement in Mumbai."
        canonicalPath="/projects"
      />

      {/* 1. Page Header */}
      <PageHeader
        badge="PROJECTS"
        title="Documented Project Engagement"
        subtitle="Explore verified and approved project information published by Chitrani Construction."
        accentType="projects"
        customRightVisual={projectsHeroVisual}
      />

      {/* 2. Introduction Section (White Viewport Background) */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <SectionEyebrow badge="VERIFIED ENGAGEMENT" className="justify-center mb-3" />
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight mb-4">
              Documented Project Participation
            </h2>
            <p className="text-base sm:text-lg text-[#6B5E4E] font-body leading-relaxed max-w-3xl mx-auto">
              Chitrani Construction presents project engagements supported by verified documentation. Project records reflect documented vendor roles, client details, and site locations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. Featured Project — Ocean Star (Soft Cream Viewport Background) */}
      <section className="py-16 sm:py-24 bg-[#F5EEE5] border-y border-[#E8DDD0]/70" aria-label="Verified Project Portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <SectionEyebrow badge="FEATURED ENGAGEMENT" className="justify-center mb-3" />
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#3D352D]">
                Verified Construction Vendor Record
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="max-w-4xl mx-auto">
            <ProjectCard project={oceanStar} featured={true} />
          </Reveal>
        </div>
      </section>

      {/* 4. Project Information / Verified Facts Band (White Viewport Background) */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="space-y-8">
            <div className="flex items-center gap-3 border-b border-[#E8DDD0] pb-4">
              <FileCheck className="w-6 h-6 text-[#C96F1B] shrink-0" />
              <div>
                <SectionEyebrow badge="ENGAGEMENT RECORD" className="mb-0.5" />
                <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
                  Ocean Star Information Summary
                </h3>
              </div>
            </div>

            <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm font-body">
              <StaggerItem>
                <div className="p-5 bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] space-y-1.5 hover:border-[#C96F1B]/40 transition-colors">
                  <span className="text-[#6B5E4E] block text-[11px] font-heading font-semibold uppercase tracking-wider">Client</span>
                  <span className="font-semibold text-[#3D352D] text-base">{oceanStar.client}</span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-5 bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] space-y-1.5 hover:border-[#C96F1B]/40 transition-colors">
                  <span className="text-[#6B5E4E] block text-[11px] font-heading font-semibold uppercase tracking-wider">Location</span>
                  <span className="font-semibold text-[#3D352D] text-base">{oceanStar.location}</span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-5 bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] space-y-1.5 hover:border-[#C96F1B]/40 transition-colors">
                  <span className="text-[#6B5E4E] block text-[11px] font-heading font-semibold uppercase tracking-wider">Vendor Role</span>
                  <span className="font-semibold text-[#3D352D] text-base">{oceanStar.category}</span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-5 bg-[#F5EEE5] rounded-2xl border border-[#E8DDD0] space-y-1.5 hover:border-[#C96F1B]/40 transition-colors">
                  <span className="text-[#6B5E4E] block text-[11px] font-heading font-semibold uppercase tracking-wider">Engagement Status</span>
                  <span className="font-semibold text-[#3D352D] text-base">{oceanStar.statusLabel || 'Ongoing Engagement'}</span>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </Reveal>
        </div>
      </section>

      {/* 5. How Project Records Are Presented (Warm Cream Viewport Background) */}
      <section className="py-16 sm:py-24 bg-[#EADBC8]/40 border-y border-[#E8DDD0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <SectionEyebrow badge="DOCUMENTATION POLICY" className="justify-center mb-3" />
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#3D352D] mb-4">
              How Project Records Are Presented
            </h2>
            <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed max-w-3xl mx-auto">
              Chitrani Construction publishes verified project engagements supported by documentation. Unconfirmed projects, unverified scope metrics, or speculative completion claims are excluded from this presentation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. Related Capabilities Section (White Background) */}
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

      {/* 7. Project Discussion CTA Section (Dark Charcoal Background) */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="bg-[#3D352D] rounded-3xl p-8 sm:p-16 text-white text-center space-y-8 shadow-xl max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C96F1B]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <SectionEyebrow badge="PROJECT ENQUIRY" className="justify-center mb-1 text-[#C96F1B]" />
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                Have a Project Requirement?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#D1C5B0] font-body leading-relaxed max-w-2xl mx-auto">
                Share your site location, project requirement and expected timeline so the relevant construction contracting or machinery deployment scope can be reviewed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
              <Link
                to="/request-quote?service=construction-contracting"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-md min-h-[44px] focus:outline-hidden focus:ring-2 focus:ring-white"
              >
                <FileText className="w-4 h-4" />
                <span>REQUEST A QUOTE</span>
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#F5EEE5] hover:bg-[#EADBC8] text-[#3D352D] font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all border border-[#E8DDD0] min-h-[44px] focus:outline-hidden focus:ring-2 focus:ring-white"
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
