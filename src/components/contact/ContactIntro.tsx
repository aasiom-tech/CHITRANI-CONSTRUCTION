import React from 'react';
import { MessageSquare } from 'lucide-react';

export const ContactIntro: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider mx-auto">
            <MessageSquare className="w-4 h-4 text-[#C96F1B]" />
            <span className="text-[#3D352D]">GET IN TOUCH</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-heading font-semibold text-[#3D352D] tracking-tight">
            Project and Equipment Enquiries
          </h2>

          <p className="text-sm sm:text-base text-[#6B5E4E] leading-relaxed font-body">
            Share your project location, service requirement, equipment need and expected schedule with Chitrani Construction. The available information will help the team understand whether the enquiry relates to construction contracting, concrete boom placer rental or general business communication.
          </p>
        </div>
      </div>
    </section>
  );
};
