import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ExecutionStep {
  stepNumber: string;
  title: string;
  description: string;
}

const steps: ExecutionStep[] = [
  {
    stepNumber: '01',
    title: 'Requirement & Site Assessment',
    description: 'Understand drawings, quantities, timeline and scope.'
  },
  {
    stepNumber: '02',
    title: 'Commercial Proposal',
    description: 'Define rates, exclusions, measurement basis and responsibilities.'
  },
  {
    stepNumber: '03',
    title: 'Mobilisation',
    description: 'Deploy labour, supervisors, equipment and necessary resources.'
  },
  {
    stepNumber: '04',
    title: 'Execution',
    description: 'Execute as per approved drawings, specifications and site instructions.'
  },
  {
    stepNumber: '05',
    title: 'Quality & Progress Monitoring',
    description: 'Track workmanship, progress and site coordination.'
  },
  {
    stepNumber: '06',
    title: 'Measurement & Billing',
    description: 'Follow joint or agreed measurement and billing procedure.'
  },
  {
    stepNumber: '07',
    title: 'Completion & Handover',
    description: 'Close scope, documentation and handover requirements.'
  }
];

export const ExecutionProcessSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F5EEE5] text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block mb-2">
              STRUCTURED SITE WORKFLOW
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
              How We Execute Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6B5E4E] font-body max-w-md">
            A disciplined 7-step execution process ensuring transparent communication, quality control, and timely milestone completion.
          </p>
        </div>

        {/* Connected Process Grid (Responsive timeline layout) */}
        <div className="relative">

          {/* Connected timeline cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div
                key={step.stepNumber}
                className={`bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-7 shadow-[0_10px_30px_rgba(61,53,45,0.04)] hover:border-[#C96F1B]/50 transition-all duration-300 flex flex-col justify-between relative group ${
                  idx === 6 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Step Top Bar */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E8DDD0]">
                    <span className="font-heading font-bold text-2xl text-[#C96F1B] tracking-tight">
                      {step.stepNumber}
                    </span>
                    <span className="text-[10px] font-heading font-semibold text-[#6B5E4E] bg-[#F5EEE5] px-2.5 py-1 rounded-[8px] uppercase tracking-wider">
                      Step {step.stepNumber}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-lg text-[#3D352D] group-hover:text-[#C96F1B] transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Process Note & CTA */}
        <div className="mt-12 pt-8 border-t border-[#E8DDD0] flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/60 p-6 rounded-[16px] border">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-heading text-xs font-bold text-[#3D352D] uppercase tracking-wider block">
              Ready to discuss your project workflow?
            </span>
            <p className="text-xs text-[#6B5E4E] font-body">
              Submit your drawings or BOQ for an initial site assessment and commercial proposal.
            </p>
          </div>
          <Link
            to="/request-quote"
            className="px-6 py-3 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-all shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5 shrink-0"
          >
            <span>Initiate Project Discussion</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>

      </div>
    </section>
  );
};
