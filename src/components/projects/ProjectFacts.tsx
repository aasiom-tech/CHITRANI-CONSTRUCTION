import React from 'react';
import { FileCheck, ShieldCheck, MapPin, Building2, Wrench, Tag } from 'lucide-react';
import { ProjectItem } from '../../types';

interface ProjectFactsProps {
  project: ProjectItem;
}

export const ProjectFacts: React.FC<ProjectFactsProps> = ({ project }) => {
  const isConfirmed = project.status === 'confirmed';

  const baseFacts = [
    { label: 'Project / Client', value: project.title, icon: Building2 },
    { label: 'Client / Developer', value: project.client, icon: Building2 },
    { label: 'Location', value: project.location, icon: MapPin },
    { label: 'Engagement Category', value: project.category, icon: Tag },
    { label: 'Engagement Status', value: project.statusLabel, icon: ShieldCheck },
  ];
  const equipmentFact = project.equipment && project.equipmentLabel ? [{ label: project.equipmentLabel, value: project.equipment, icon: Wrench }] : [];
  const facts = [...baseFacts, ...equipmentFact];

  return (
    <div className="bg-white rounded-[20px] border border-[#E8DDD0] p-6 sm:p-8 space-y-6 shadow-[0_10px_30px_rgba(61,53,45,0.04)]">
      <div className="flex items-center gap-3 border-b border-[#E8DDD0] pb-4">
        <FileCheck className="w-6 h-6 text-[#C96F1B] shrink-0" />
        <h3 className="font-heading font-bold text-2xl text-[#3D352D]">
          Documented Engagement Facts
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {facts.map((fact, idx) => {
          const IconComp = fact.icon;
          return (
            <div
              key={idx}
              className="p-4 bg-[#F5EEE5]/70 rounded-xl border border-[#E8DDD0] flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-white border border-[#E8DDD0] flex items-center justify-center shrink-0 mt-0.5">
                <IconComp className="w-4 h-4 text-[#C96F1B]" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] uppercase tracking-wider block">
                  {fact.label}
                </span>
                <span className="font-heading font-semibold text-sm sm:text-base text-[#3D352D] leading-snug block">
                  {fact.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {project.transparencyNote && (
        <div className="p-4 bg-[#F5EEE5] border border-[#E8DDD0] rounded-xl text-xs text-[#6B5E4E] font-body leading-relaxed">
          <strong className="text-[#3D352D]">Transparency Note:</strong> {project.transparencyNote}
        </div>
      )}
    </div>
  );
};
