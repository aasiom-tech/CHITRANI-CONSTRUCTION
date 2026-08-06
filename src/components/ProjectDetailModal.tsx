import React, { useEffect } from 'react';
import { X, MapPin, Building2, Calendar, HardHat } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3D352D]/75 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white text-[#3D352D] rounded-[18px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E8DDD0] relative animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 text-[#3D352D] hover:bg-white transition-colors border border-[#E8DDD0] shadow-xs"
          aria-label="Close detail modal"
        >
          <X className="w-5 h-5 text-[#3D352D]" />
        </button>

        {/* Image Banner */}
        <div className="relative h-56 sm:h-72 bg-[#F5EEE5]">
          <img 
            src={project.image} 
            alt="Representative urban building construction project in Mumbai"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="font-heading text-xs text-[#C96F1B] font-bold uppercase tracking-wider block mb-1">
              WORK ORDER: {project.workOrderNumber}
            </span>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#3D352D] bg-[#F5EEE5] p-4 rounded-xl border border-[#E8DDD0] font-body">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
              <span><strong>Client:</strong> {project.client}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C96F1B] shrink-0" />
              <span><strong>Location:</strong> {project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <HardHat className="w-4 h-4 text-[#C96F1B] shrink-0" />
              <span><strong>Role:</strong> {project.vendorRole}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#C96F1B] shrink-0" />
              <span><strong>Order Date:</strong> {project.orderDate}</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xs text-[#C96F1B] font-bold uppercase tracking-wider mb-2">
              PROJECT ENGAGEMENT SUMMARY
            </h4>
            <p className="text-sm text-[#6B5E4E] font-body leading-relaxed bg-[#F5EEE5] p-4 rounded-xl border-l-4 border-[#C96F1B]">
              {project.scope}
            </p>
          </div>

          <div className="pt-2 flex justify-end">
            <a
              href="/request-quote?requirement=construction-contracting"
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider shadow-xs"
            >
              Discuss a Project Requirement
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
