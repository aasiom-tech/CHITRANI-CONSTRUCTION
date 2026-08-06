import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { projectsData } from '../data/projects';
import { FinalCTA } from '../components/FinalCTA';
import { 
  MapPin, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  ChevronLeft, 
  ShieldAlert,
  Calendar,
  FileText,
  HardHat,
  ShieldCheck
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = projectsData.find(
    (p) => p.id === slug || p.slug === slug || slug === 'ocean-star'
  );

  if (!project) {
    return (
      <div className="py-24 bg-[#181A1B] text-white text-center">
        <div className="max-w-md mx-auto px-4 space-y-4">
          <ShieldAlert className="w-16 h-16 text-[#E3AA20] mx-auto" />
          <h1 className="text-2xl font-bold font-heading">Project Not Found</h1>
          <p className="text-sm text-[#D9D7D1]">
            The requested project profile could not be found or may have been updated.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xs bg-[#A9472B] text-white font-mono text-xs font-bold uppercase tracking-wider"
          >
            <ChevronLeft className="w-4 h-4 text-[#E3AA20]" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SEO 
        title={`${project.title} Case Study | Chitrani Construction`}
        description={`Detailed case study for ${project.title} in ${project.location}. Managed under Work Order ${project.workOrderNumber}.`}
        canonical={`https://chitraniconstruction.com/projects/${project.slug}`}
      />

      <PageHeader
        title={project.title}
        subtitle={`${project.category} project located in ${project.location}. Contract WO/CC/2024-089.`}
        badge={project.category}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' }
        ]}
      />

      <section className="py-16 bg-[#F5F2EB] text-[#181A1B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Main Showcase */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Primary Image */}
              <div className="relative rounded-xs overflow-hidden border border-[#D8D4CC] shadow-md bg-[#181A1B] h-[360px] sm:h-[440px]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181A1B] via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-xs bg-[#181A1B] text-[#E3AA20] border border-[#73787A]/30 font-mono text-xs font-bold uppercase">
                    Work Order: {project.workOrderNumber}
                  </span>
                </div>
              </div>

              {/* Work Order Specification Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-white rounded-xs border border-[#D8D4CC] font-mono text-xs shadow-xs">
                <div>
                  <div className="text-[#666A6C] text-[10px] uppercase">[CLIENT]:</div>
                  <div className="font-bold text-[#181A1B] mt-1 truncate">{project.client}</div>
                </div>

                <div>
                  <div className="text-[#666A6C] text-[10px] uppercase">[LOCATION]:</div>
                  <div className="font-bold text-[#181A1B] mt-1 truncate">{project.location}</div>
                </div>

                <div>
                  <div className="text-[#666A6C] text-[10px] uppercase">[ORDER DATE]:</div>
                  <div className="font-bold text-[#181A1B] mt-1">{project.orderDate}</div>
                </div>

                <div>
                  <div className="text-[#666A6C] text-[10px] uppercase">[ROLE]:</div>
                  <div className="font-bold text-[#A9472B] mt-1 truncate">Contractor</div>
                </div>
              </div>

              {/* Engineering Highlights & Scope */}
              <div className="bg-white p-6 sm:p-8 rounded-xs border border-[#D8D4CC] space-y-4 shadow-xs">
                <h3 className="text-xl font-heading font-bold text-[#181A1B] border-b border-[#D8D4CC] pb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#A9472B]" />
                  <span>Engineering Highlight</span>
                </h3>

                <p className="text-xs sm:text-sm text-[#181A1B] font-mono bg-[#F5F2EB] p-4 rounded-xs border border-[#D8D4CC] leading-relaxed">
                  {project.engineeringHighlight}
                </p>

                <h4 className="text-lg font-heading font-bold text-[#181A1B] pt-4">
                  Contract Execution Scope
                </h4>
                <p className="text-sm text-[#666A6C] leading-relaxed">
                  {project.scope}
                </p>
              </div>

              {/* Project Image Gallery */}
              {project.additionalImages && (
                <div className="bg-white p-6 sm:p-8 rounded-xs border border-[#D8D4CC] space-y-4 shadow-xs">
                  <h3 className="text-lg font-heading font-bold text-[#181A1B]">
                    Site Photography & Operations
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.additionalImages.map((img, idx) => (
                      <div key={idx} className="h-48 rounded-xs overflow-hidden border border-[#D8D4CC]">
                        <img 
                          src={img} 
                          alt={`Ocean Star site photo ${idx + 1}`} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-[#181A1B] text-white p-6 sm:p-8 rounded-xs border border-[#242729] space-y-4 shadow-md">
                <div className="flex items-center gap-2 text-[#E3AA20] font-mono text-xs font-bold uppercase">
                  <FileText className="w-4 h-4 text-[#A9472B]" />
                  <span>SIMILAR PROJECT TENDER</span>
                </div>

                <h3 className="text-xl font-heading font-bold text-white">
                  Planning a Similar Project?
                </h3>

                <p className="text-xs text-[#D9D7D1] leading-relaxed">
                  Discuss contract terms, BOQ estimations, and equipment allocation with our senior civil engineering team.
                </p>

                <Link
                  to={`/request-quote?requirement=${encodeURIComponent(`Similar to ${project.title}`)}`}
                  className="w-full py-3.5 px-4 rounded-xs bg-[#A9472B] hover:bg-[#7F3422] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#E3AA20]"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-4 h-4 text-[#E3AA20]" />
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
