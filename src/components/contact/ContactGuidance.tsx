import React from 'react';
import { HelpCircle } from 'lucide-react';

export const ContactGuidance: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Submit Your Requirement',
      description: 'Share your basic project location, service scope or equipment requirement.'
    },
    {
      step: '02',
      title: 'Chitrani Reviews the Enquiry',
      description: 'Our team reviews your site details, required scope and equipment schedule.'
    },
    {
      step: '03',
      title: 'Continue to Commercial Discussion',
      description: 'We follow up to discuss site conditions, measurement terms and commercial proposal.'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4 text-[#C96F1B]" />
            <span className="text-[#3D352D]">WHAT HAPPENS NEXT</span>
          </div>
          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
            How We Process Your Enquiry
          </h2>
        </div>

        {/* 3 Step Guidance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((item) => (
            <div key={item.step} className="bg-[#F5EEE5] p-6 rounded-[16px] border border-[#E8DDD0] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-xl text-[#C96F1B]">{item.step}</span>
                <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] bg-white px-2 py-0.5 rounded-[6px] uppercase">Step {item.step}</span>
              </div>
              <h3 className="font-heading font-semibold text-base text-[#3D352D]">{item.title}</h3>
              <p className="text-xs text-[#6B5E4E] font-body leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
