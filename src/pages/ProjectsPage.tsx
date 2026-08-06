import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { projectsData } from '../data/projects';
import { FinalCTA } from '../components/FinalCTA';
import { 
  Building2, 
  MapPin, 
  FileText, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  HardHat,
  ShieldCheck
} from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const project = projectsData[0]; // Ocean Star Project

  return (
    <div>
      <SEO 
        title="Featured Projects | Ocean Star Project | Chitrani Construction"
        description="Ocean Star Project by Chitrani Construction — structural contracting and concrete boom placer operations in Maharashtra."
        canonical="https://chitraniconstruction.com/projects"
      />

      <PageHeader
        title="Featured Projects & Case Studies"
        subtitle="Verified structural civil contracting and equipment deployment showcase."
        badge="PROJECT EXECUTION RECORD"
      />

      <section className="py-16 sm:py-24 bg-[#F5F2EB] text-[#181A1B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-mono text-xs text-[#A9472B] font-bold uppercase tracking-widest block">
              [VERIFIED PROJECT FEATURE]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#181A1B]">
              Ocean Star Project
            </h2>
            <p className="text-sm text-[#666A6C] leading-relaxed">
              Demonstrating turnkey structural execution and Putzmeister M42-5 concrete boom placer operations.
            </p>
          </div>

          {/* Featured Ocean Star Editorial Panel */}
          <div className="bg-white rounded-xs border border-[#D8D4CC] shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual Column */}
            <div className="lg:col-span-6 relative bg-[#181A1B] min-h-[360px] lg:min-h-full">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181A1B] via-transparent to-transparent opacity-80" />
              
              <div className="absolute top-4 left-4 bg-[#242729] text-[#E3AA20] px-3 py-1 rounded-xs font-mono text-xs font-bold uppercase border border-[#73787A]/30">
                {project.category}
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white p-4 bg-[#242729]/90 backdrop-blur-xs rounded-xs border border-[#73787A]/30">
                <div className="font-mono text-[10px] text-[#E3AA20] uppercase font-bold">
                  Work Order: {project.workOrderNumber}
                </div>
                <div className="font-heading font-bold text-lg text-white">
                  {project.title}
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#F5F2EB] text-[#A9472B] font-mono text-[11px] font-bold uppercase rounded-xs border border-[#D8D4CC]">
                  <HardHat className="w-3.5 h-3.5" />
                  <span>CONTRACTOR SCOPE VERIFIED</span>
                </div>

                <h3 className="text-2xl font-bold font-heading text-[#181A1B]">
                  {project.title}
                </h3>

                <p className="text-sm text-[#666A6C] leading-relaxed">
                  {project.scope}
                </p>

                {/* Grid Info */}
                <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs text-[#181A1B]">
                  <div className="p-3 bg-[#F5F2EB] rounded-xs border border-[#D8D4CC]">
                    <div className="text-[10px] text-[#666A6C] uppercase">Client:</div>
                    <div className="font-bold truncate">{project.client}</div>
                  </div>

                  <div className="p-3 bg-[#F5F2EB] rounded-xs border border-[#D8D4CC]">
                    <div className="text-[10px] text-[#666A6C] uppercase">Location:</div>
                    <div className="font-bold truncate">{project.location}</div>
                  </div>

                  <div className="p-3 bg-[#F5F2EB] rounded-xs border border-[#D8D4CC]">
                    <div className="text-[10px] text-[#666A6C] uppercase">Order Date:</div>
                    <div className="font-bold">{project.orderDate}</div>
                  </div>

                  <div className="p-3 bg-[#F5F2EB] rounded-xs border border-[#D8D4CC]">
                    <div className="text-[10px] text-[#666A6C] uppercase">Role:</div>
                    <div className="font-bold truncate">{project.vendorRole}</div>
                  </div>
                </div>

                {/* Highlight */}
                <div className="p-4 bg-[#181A1B] text-white rounded-xs border border-[#242729] space-y-1">
                  <div className="font-mono text-[10px] text-[#E3AA20] uppercase font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#A9472B]" />
                    <span>Engineering Highlight</span>
                  </div>
                  <p className="text-xs text-[#D9D7D1] leading-relaxed">
                    {project.engineeringHighlight}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#D8D4CC] flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/projects/ocean-star"
                  className="w-full sm:w-1/2 py-3 px-4 bg-[#181A1B] hover:bg-[#242729] text-white font-mono text-xs font-bold uppercase tracking-wider text-center rounded-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Detailed Project Case</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E3AA20]" />
                </Link>

                <Link
                  to={`/request-quote?requirement=${encodeURIComponent('Ocean Star Similar Project')}`}
                  className="w-full sm:w-1/2 py-3 px-4 bg-[#A9472B] hover:bg-[#7F3422] text-white font-mono text-xs font-bold uppercase tracking-wider text-center rounded-xs transition-colors flex items-center justify-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5 text-[#E3AA20]" />
                  <span>Request Proposal</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      <FinalCTA />
    </div>
  );
};
