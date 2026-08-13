import React from 'react';
import { Building2, CheckCircle2, Wrench } from 'lucide-react';
import { ProjectItem } from '../../types';

interface ProjectOverviewProps {
  project: ProjectItem;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ project }) => {
  const isConfirmed = project.status === 'confirmed';

  return (
    <div className="bg-white rounded-[20px] border border-[#E8DDD0] p-6 sm:p-8 space-y-8 shadow-[0_10px_30px_rgba(61,53,45,0.04)]">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#F5EEE5] text-[#C96F1B] border border-[#E8DDD0] flex items-center justify-center shrink-0">
          <Building2 className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
              {project.category}
            </span>
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-heading font-bold uppercase tracking-wider ${
                isConfirmed ? 'bg-[#C96F1B] text-white' : 'bg-[#F5EEE5] text-[#6B5E4E] border border-[#E8DDD0]'
              }`}
            >
              {project.statusLabel}
            </span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352D] tracking-tight">
            {project.title} — Overview
          </h2>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4 text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
        <p>{project.description}</p>
      </div>

      {/* Key Scope Points */}
      {project.scope && project.scope.length > 0 && (
        <div className="space-y-2 pt-4">
          <span className="text-[11px] font-heading font-bold text-[#3D352D] uppercase tracking-wider block">
            Key Engagement Scope:
          </span>
          <ul className="space-y-1.5">
            {project.scope.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[#6B5E4E] font-body">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C96F1B] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Equipment Reference */}
      {project.equipment && project.equipmentLabel && (
        <div className="flex items-center gap-2 pt-2 text-xs font-body text-[#3D352D]">
          <Wrench className="w-4 h-4 text-[#C96F1B] shrink-0" />
          <span>
            <strong className="font-heading font-semibold">{project.equipmentLabel}:</strong> {project.equipment}
          </span>
        </div>
      )}

      {/* Hero / Main Image */}
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#E8DDD0] bg-[#F5EEE5]">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/65 backdrop-blur-md text-white text-[11px] font-heading uppercase tracking-wider">
          Representative project visual
        </div>
      </div>
    </div>
  );
};
