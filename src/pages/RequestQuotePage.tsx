import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { QuoteIntro } from '../components/quote/QuoteIntro';
import { QuoteFormContainer } from '../components/quote/QuoteFormContainer';
import { QuoteClarification } from '../components/quote/QuoteClarification';

type RequirementType = 'construction-contracting' | 'equipment-rental';

export const RequestQuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const rawParam = searchParams.get('requirement') || '';

  const initialRequirement: 'construction-contracting' | 'equipment-rental' =
    rawParam.toLowerCase().includes('equipment') ||
    rawParam.toLowerCase().includes('rental') ||
    rawParam.toLowerCase().includes('placer') ||
    rawParam.toLowerCase().includes('boom')
      ? 'equipment-rental'
      : 'construction-contracting';

  return (
    <>
      <SEO 
        title="Request a Quotation | Chitrani Construction"
        description="Share your construction, labour, civil work or boom placer rental requirement with Chitrani Construction for project discussion in Maharashtra."
        canonicalPath="/request-quote"
      />

      <div className="bg-[#EADBC8] space-y-0 text-[#3D352D]">
        {/* 1. Shared PageHeader */}
        <PageHeader
          badge="REQUEST A QUOTATION"
          title="Tell Us About Your Project Requirement"
          subtitle="Provide the basic project, service and timeline information Chitrani Construction would need for a commercial discussion."
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
