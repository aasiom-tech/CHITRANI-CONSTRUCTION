import React, { useEffect } from 'react';
import { X, MapPin, Building2, ShieldCheck } from 'lucide-react';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2D2D]/75 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white text-[#2D2D2D] rounded-[20px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E7E7E7] relative animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 text-[#2D2D2D] hover:bg-white transition-colors border border-[#E7E7E7] shadow-xs"
          aria-label="Close detail modal"
        >
          <X className="w-5 h-5 text-[#2D2D2D]" />
        </button>

        {/* Image Banner */}
        <div className="relative h-56 sm:h-72 bg-[#F9F7F2]">
          <img 
            src={project.image} 
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="font-display text-xs text-[#FFB300] font-bold uppercase tracking-wider block mb-1">
              {project.category} • {project.status}
            </span>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#5D5D5D] bg-[#F9F7F2] p-3.5 rounded-md border border-[#E7E7E7] font-body">
            <div className="flex items-center gap-1.5 font-medium text-[#2D2D2D]">
              <MapPin className="w-4 h-4 text-[#FFB300]" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium text-[#2D2D2D]">
              <Building2 className="w-4 h-4 text-[#FFB300]" />
              <span>Client: {project.clientType}</span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xs text-[#FFB300] font-bold uppercase tracking-wider mb-2">
              ENGINEERING HIGHLIGHT & EXCELLENCE
            </h4>
            <p className="text-sm text-[#2D2D2D] font-body leading-relaxed bg-[#F9F7F2] p-4 rounded-md border-l-4 border-[#FFB300]">
              {project.engineeringHighlight}
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs text-[#FFB300] font-bold uppercase tracking-wider mb-2">
              CONTRACT SCOPE & DEPLOYMENT
            </h4>
            <p className="text-sm text-[#5D5D5D] font-body leading-relaxed">
              {project.scope}
            </p>
          </div>

          <div className="p-4 rounded-md bg-[#2D2D2D] text-white flex items-center gap-3 border border-white/10 font-body">
            <ShieldCheck className="w-6 h-6 text-[#FFB300] shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-white block font-heading">Verified Capability Reference</span>
              <span className="text-[#D0D0D0]">Executed under strict quality audits, cube testing, and EHS safety compliance.</span>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <a
              href="/request-quote"
              onClick={onClose}
              className="px-5 py-2.5 rounded-md bg-[#FFB300] hover:bg-[#E59A00] text-white font-heading text-xs font-bold uppercase tracking-wider shadow-xs"
            >
              Request Similar Project Estimate
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
