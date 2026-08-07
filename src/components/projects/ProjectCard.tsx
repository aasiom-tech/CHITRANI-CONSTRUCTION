import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Building2, Calendar, FileText, HardHat, Info } from 'lucide-react';
import { PriyaProjectItem } from '../../data/projects';

interface ProjectCardProps {
  project: PriyaProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const altText = project.imageAlt || 'Representative high-rise construction project visual for the Ocean Star engagement';

  return (
    <div className="bg-white rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-[#C96F1B] motion-safe:hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Image Container with Visible Representative Label */}
        <div className="relative aspect-[16/9] overflow-hidden bg-[#F5EEE5]">
          <img
            src={project.image}
            alt={altText}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E8DDD0] text-[11px] font-heading font-semibold text-[#3D352D] flex items-center gap-1.5 uppercase tracking-wider shadow-xs">
            <HardHat className="w-3.5 h-3.5 text-[#C96F1B]" />
            <span>{project.vendorRole}</span>
          </div>

          <div className="absolute bottom-3 right-3 bg-[#3D352D]/90 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20 text-[10px] font-heading text-white flex items-center gap-1">
            <Info className="w-3 h-3 text-[#C96F1B]" />
            <span>Representative project visual</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-5">
          <div className="space-y-1">
            <span className="font-heading text-xs text-[#C96F1B] font-semibold uppercase tracking-wider block">
              WORK ORDER: {project.workOrderNumber}
            </span>
            <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D] tracking-tight group-hover:text-[#C96F1B] transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
            {project.scope}
          </p>

          {/* Verified Details Grid */}
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

            <div className="p-3 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-start gap-2">
              <Calendar className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase block">Order Date</span>
                <span className="font-body font-semibold">{project.orderDate}</span>
              </div>
            </div>

            <div className="p-3 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-start gap-2">
              <Calendar className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase block">Scheduled Completion</span>
                <span className="font-body font-semibold">{project.scheduledCompletion}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row items-center gap-3">
        <Link
          to={`/projects/${project.slug}`}
          className="w-full sm:w-1/2 min-h-[44px] py-3.5 px-5 rounded-lg bg-[#3D352D] hover:bg-[#2D2620] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
        >
          <span>View Project Details</span>
          <ArrowRight className="w-4 h-4 text-[#C96F1B]" />
        </Link>

        <Link
          to="/request-quote?service=construction-contracting"
          className="w-full sm:w-1/2 min-h-[44px] py-3.5 px-5 rounded-lg bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
        >
          <FileText className="w-4 h-4" />
          <span>Discuss Requirement</span>
        </Link>
      </div>
    </div>
  );
};
