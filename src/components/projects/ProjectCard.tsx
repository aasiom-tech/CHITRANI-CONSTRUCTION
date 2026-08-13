import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Building2, CheckCircle2, Wrench, ShieldCheck, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { ProjectItem } from '../../types';

interface ProjectCardProps {
  project: ProjectItem;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const isConfirmed = project.status === 'confirmed';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-[20px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(61,53,45,0.06)] hover:shadow-[0_20px_45px_rgba(61,53,45,0.12)] hover:border-[#C96F1B] transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
        featured ? 'lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-0' : 'h-full'
      }`}
    >
      {/* Image Container */}
      <div
        className={`relative overflow-hidden bg-[#F5EEE5] ${
          featured
            ? 'lg:col-span-6 min-h-[300px] sm:min-h-[360px] lg:min-h-[420px]'
            : 'aspect-[16/10] w-full'
        }`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Soft overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Status Badge */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          <span
            className={`px-3 py-1 rounded-full text-[11px] font-heading font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5 backdrop-blur-md ${
              isConfirmed
                ? 'bg-[#C96F1B] text-white border border-white/20'
                : 'bg-[#F5EEE5]/90 text-[#6B5E4E] border border-[#E8DDD0]'
            }`}
          >
            {isConfirmed ? (
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
            ) : (
              <FileText className="w-3.5 h-3.5 text-[#C96F1B]" />
            )}
            <span>{project.statusLabel}</span>
          </span>
        </div>

        {/* Representative Image Label */}
        <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-md bg-black/65 backdrop-blur-xs text-white text-[10px] font-heading font-medium uppercase tracking-wider">
          Representative project visual
        </div>
      </div>

      {/* Content Area */}
      <div
        className={`p-6 sm:p-8 flex flex-col justify-between space-y-6 ${
          featured ? 'lg:col-span-6' : 'flex-1'
        }`}
      >
        <div className="space-y-4">
          {/* Category & Title */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-[#F5EEE5] text-[#C96F1B] font-heading text-[11px] font-bold uppercase tracking-wider border border-[#E8DDD0]">
                {project.category}
              </span>
            </div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352D] tracking-tight group-hover:text-[#C96F1B] transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Client & Location Metadata */}
          <div className="p-4 bg-[#F5EEE5]/70 rounded-xl border border-[#E8DDD0] space-y-2 text-xs font-body text-[#3D352D]">
            <div className="flex items-start gap-2">
              <Building2 className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase block">Client / Developer</span>
                <span className="font-semibold">{project.client}</span>
              </div>
            </div>
            <div className="flex items-start gap-2 pt-2 border-t border-[#E8DDD0]">
              <MapPin className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase block">Location</span>
                <span className="font-semibold">{project.location}</span>
              </div>
            </div>
          </div>

          {/* Key Scope Points */}
          {project.scope && project.scope.length > 0 && (
            <div className="space-y-2 pt-1">
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
        </div>

        {/* Action CTAs */}
        <div className="pt-4 border-t border-[#E8DDD0] flex flex-col sm:flex-row items-center gap-3">
          <Link
            to={`/projects/${project.slug}`}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-[#EADBC8] text-[#3D352D] border border-[#E8DDD0] font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs group/btn"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 text-[#C96F1B] group-hover/btn:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/request-quote?requirement=equipment-rental"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#F5EEE5] hover:bg-[#EADBC8] text-[#3D352D] font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-[#E8DDD0]"
          >
            <span>Discuss Requirement</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
