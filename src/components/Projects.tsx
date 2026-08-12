import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, ArrowRight, FileText, HardHat } from 'lucide-react';
import { projectsData } from '../data/projects';

export const Projects: React.FC = () => {
  const project = projectsData[0];
  const altText = "Representative urban building construction project in Mumbai";

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#F5EEE5] text-[#3D352D] border-t border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
            PROJECT EXPERIENCE
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#3D352D] tracking-tight">
            Verified Project Engagement
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Chitrani Construction’s project portfolio is presented using transparent engagement documentation.
          </p>
        </div>

        {/* Single Project Card Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-[#C96F1B] motion-safe:hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div>
              <div className="relative aspect-[16/9] overflow-hidden bg-[#F5EEE5]">
                <img
                  src={project.image}
                  alt={altText}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E8DDD0] text-[11px] font-heading font-bold text-[#3D352D] flex items-center gap-1.5 uppercase tracking-wider">
                  <HardHat className="w-3.5 h-3.5 text-[#C96F1B]" />
                  <span>{project.statusLabel}</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div className="space-y-1">
                  <span className="font-heading text-xs text-[#C96F1B] font-bold uppercase tracking-wider block">
                    CATEGORY: {project.category}
                  </span>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352D] tracking-tight group-hover:text-[#C96F1B] transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="pt-3 border-t border-[#E8DDD0] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-body text-[#3D352D]">
                  <div className="p-3 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-start gap-2">
                    <Building2 className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase block">Client</span>
                      <span className="font-semibold">{project.client}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase block">Location</span>
                      <span className="font-semibold">{project.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to={`/projects/${project.slug}`}
                className="w-full sm:w-1/2 py-3.5 px-5 rounded-lg bg-[#3D352D] hover:bg-[#2D2620] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <span>View Project Details</span>
                <ArrowRight className="w-4 h-4 text-[#C96F1B]" />
              </Link>

              <Link
                to="/request-quote?requirement=construction-contracting"
                className="w-full sm:w-1/2 py-3.5 px-5 rounded-lg bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <FileText className="w-4 h-4" />
                <span>Discuss a Project Requirement</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
