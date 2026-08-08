import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { QuoteIntro } from '../components/quote/QuoteIntro';
import { QuoteFormContainer } from '../components/quote/QuoteFormContainer';
import { QuoteClarification } from '../components/quote/QuoteClarification';
import { motion, useReducedMotion } from 'motion/react';
import { FileText, CheckCircle2, Calculator, ShieldCheck } from 'lucide-react';

export const RequestQuotePage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [searchParams] = useSearchParams();
  const rawParam = searchParams.get('requirement') || '';

  const initialRequirement: 'construction-contracting' | 'equipment-rental' =
    rawParam.toLowerCase().includes('equipment') ||
    rawParam.toLowerCase().includes('rental') ||
    rawParam.toLowerCase().includes('placer') ||
    rawParam.toLowerCase().includes('boom')
      ? 'equipment-rental'
      : 'construction-contracting';

  // Custom Specification Document / BOQ Outline Graphic (NO REUSED PHOTO, NO GIANT TEXT)
  const quoteHeroVisual = (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-xs border border-[#E8DDD0] shadow-sm max-w-md ml-auto"
    >
      {/* Corner Bracket Accents */}
      <div className="absolute top-3 left-3 text-[#C96F1B]" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 6V2H6" stroke="currentColor" strokeWidth="2"/></svg>
      </div>
      <div className="absolute bottom-3 right-3 text-[#C96F1B]" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M18 14V18H14" stroke="currentColor" strokeWidth="2"/></svg>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#E8DDD0] pb-3">
          <div className="flex items-center gap-2 text-xs font-heading font-semibold text-[#3D352D] uppercase tracking-wider">
            <FileText className="w-4 h-4 text-[#C96F1B]" />
            <span>QUOTATION STRUCTURE</span>
          </div>
          <span className="text-[11px] font-specs font-bold text-[#C96F1B] bg-[#C96F1B]/10 px-2.5 py-0.5 rounded-md">
            SCOPE-BASED
          </span>
        </div>

        {/* Specification Document Outline Items */}
        <div className="py-1 space-y-2.5 text-xs font-body text-[#6B5E4E]">
          <div className="flex items-center justify-between p-2.5 bg-[#F5EEE5]/80 rounded-xl border border-[#E8DDD0]">
            <span className="flex items-center gap-2 font-heading font-semibold text-[#3D352D]">
              <Calculator className="w-3.5 h-3.5 text-[#C96F1B]" />
              Contracting / Civil BOQ
            </span>
            <span className="text-[11px] text-[#C96F1B] font-semibold">Scope & Drawing Review</span>
          </div>

          <div className="flex items-center justify-between p-2.5 bg-[#F5EEE5]/80 rounded-xl border border-[#E8DDD0]">
            <span className="flex items-center gap-2 font-heading font-semibold text-[#3D352D]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C96F1B]" />
              Equipment Rental Rate
            </span>
            <span className="text-[11px] font-specs font-bold text-[#3D352D]">Monthly Shift Basis</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[#6B5E4E] pt-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C96F1B] shrink-0" />
            <span>Structured commercial terms with operator and helper support</span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <SEO
        title="Request a Quotation | Chitrani Construction"
        description="Share your construction, labour, civil work or boom placer rental requirement with Chitrani Construction for project discussion in Maharashtra."
        canonicalPath="/request-quote"
      />

      <div className="bg-[#EADBC8] space-y-0 text-[#3D352D]">
        {/* 1. Shared PageHeader with Document Outline Graphic (No Reused Photo, No Giant Text) */}
        <PageHeader
          badge="REQUEST A QUOTATION"
          title="Tell Us About Your Project Requirement"
          subtitle="Provide the basic project, service and timeline information Chitrani Construction would need for a commercial discussion."
          accentType="quote"
          customRightVisual={quoteHeroVisual}
          breadcrumb={[{ label: 'Home', href: '/' }]}
        />

        {/* 2. Overview Intro */}
        <QuoteIntro />

        {/* 3. Interactive Multi-Step Quotation Form Container */}
        <QuoteFormContainer
          initialRequirement={initialRequirement}
        />

        {/* 4. Commercial Policy Clarification Callout */}
        <QuoteClarification />
      </div>
    </>
  );
};

export default RequestQuotePage;
