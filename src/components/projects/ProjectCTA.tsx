import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';

interface ProjectCTAProps {
  title?: string;
  description?: string;
  quoteLink?: string;
}

export const ProjectCTA: React.FC<ProjectCTAProps> = ({
  title = 'Planning a Similar Project?',
  description = 'Discuss contract parameters, construction support, and machinery coordination with our civil execution team.',
  quoteLink = '/request-quote?requirement=construction-contracting'
}) => {
  return (
    <div className="bg-[#F5EEE5] text-[#3D352D] p-6 sm:p-8 rounded-[18px] border border-[#E8DDD0] space-y-5 shadow-lg">
      <div className="flex items-center gap-2 text-[#C96F1B] font-heading text-xs font-bold uppercase tracking-wider">
        <FileText className="w-4 h-4" />
        <span>PROJECT ENQUIRY</span>
      </div>

      <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#3D352D] tracking-tight">
        {title}
      </h3>

      <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
        {description}
      </p>

      <Link
        to={quoteLink}
        className="w-full py-3.5 px-6 rounded-lg bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs"
      >
        <span>Discuss a Project Requirement</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};
