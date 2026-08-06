import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Building2, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { label: 'All Projects', key: 'All' },
    { label: 'Infrastructure', key: 'Infrastructure' },
    { label: 'Commercial', key: 'Commercial' },
    { label: 'Residential', key: 'Residential' },
  ];

  const filteredProjects = projectsData.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#F9F7F2] text-[#2D2D2D] border-t border-[#E7E7E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="font-display text-xs text-[#FFB300] font-bold tracking-wider uppercase block mb-2">
            CONTRACT TRACK RECORD & PORTFOLIO
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2D2D2D] tracking-tight">
            Featured Construction & Equipment Deployments
          </h2>
          <p className="mt-3 text-base text-[#5D5D5D] font-body">
            Demonstrated civil structural contracting and Putzmeister M42-5 concrete boom placer deployments across major projects.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-md font-heading text-xs tracking-wider uppercase transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat.key
                  ? 'bg-[#FFB300] text-white font-bold shadow-xs'
                  : 'bg-white text-[#5D5D5D] hover:text-[#2D2D2D] border border-[#E7E7E7]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-[20px] overflow-hidden border border-[#E7E7E7] hover:-translate-y-1 hover:border-[#FFB300] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col justify-between group shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
            >
              {/* Image & Badges */}
              <div className="relative h-48 overflow-hidden bg-[#F9F7F2]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-white/90 text-[#2D2D2D] border border-[#E7E7E7] font-display text-xs font-bold uppercase tracking-wider shadow-xs">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3">
                  <span className="px-2.5 py-1 rounded-md font-display text-xs font-bold uppercase shadow-xs bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Project</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#2D2D2D] mb-2 group-hover:text-[#FFB300] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 text-xs text-[#5D5D5D] font-body mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#FFB300]" />
                      {project.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-[#FFB300]" />
                      {project.client}
                    </span>
                  </div>

                  <p className="text-xs text-[#5D5D5D] font-body line-clamp-2 bg-[#F9F7F2] p-3 rounded-md border border-[#E7E7E7]">
                    {project.scope}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 px-3 rounded-md bg-[#F9F7F2] hover:bg-[#E7E7E7] border border-[#E7E7E7] text-[#2D2D2D] font-heading text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Quick Summary
                  </button>

                  <Link
                    to={`/projects/${project.id}`}
                    className="py-2.5 px-3 rounded-md bg-[#2D2D2D] hover:bg-[#444444] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Full Case</span>
                    <ArrowUpRight className="w-4 h-4 text-[#FFB300]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
