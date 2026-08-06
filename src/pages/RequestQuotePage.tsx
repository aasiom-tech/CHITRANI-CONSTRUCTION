import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { QuoteIntro } from '../components/quote/QuoteIntro';
import { QuoteRequirementSelector } from '../components/quote/QuoteRequirementSelector';
import { QuoteFormContainer } from '../components/quote/QuoteFormContainer';
import { QuoteClarification } from '../components/quote/QuoteClarification';

type RequirementType = 'construction-contracting' | 'equipment-rental';

export const RequestQuotePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawParam = searchParams.get('requirement') || 'construction-contracting';

  const [requirement, setRequirement] = useState<RequirementType>(
    rawParam.toLowerCase().includes('equipment') || rawParam.toLowerCase().includes('rental') || rawParam.toLowerCase().includes('placer')
      ? 'equipment-rental'
      : 'construction-contracting'
  );

  useEffect(() => {
    const raw = searchParams.get('requirement') || '';
    if (raw.toLowerCase().includes('equipment') || raw.toLowerCase().includes('rental') || raw.toLowerCase().includes('placer')) {
      setRequirement('equipment-rental');
    } else if (raw.toLowerCase().includes('construction') || raw.toLowerCase().includes('contracting')) {
      setRequirement('construction-contracting');
    }
  }, [searchParams]);

  const handleSelectRequirement = (val: RequirementType) => {
    setRequirement(val);
    const newParams = new URLSearchParams(searchParams);
    newParams.set('requirement', val);
    setSearchParams(newParams);
  };

  return (
    <>
      <SEO 
        title="Request a Quote | Chitrani Construction"
        description="Request a detailed commercial quote for civil contracting or concrete boom placer rental in Maharashtra."
        canonical="https://chitraniconstruction.com/request-quote"
      />

      <div className="bg-[#EADBC8] space-y-0 text-[#3D352D]">
        {/* 1. Shared PageHeader */}
        <PageHeader
          badge="REQUEST A QUOTE"
          title="Share Your Project or Equipment Requirement"
          subtitle="Provide the project, location, service, schedule and equipment information required for Chitrani Construction to review your enquiry."
          breadcrumb={[{ label: 'Home', href: '/' }]}
        />

        {/* 2. Overview Intro */}
        <QuoteIntro />

        {/* 3. Requirement Selector */}
        <QuoteRequirementSelector
          selected={requirement}
          onSelect={handleSelectRequirement}
        />

        {/* 4. Interactive Quotation Experience */}
        <QuoteFormContainer
          initialRequirement={requirement}
        />

        {/* 5. Commercial Clarification Callout */}
        <QuoteClarification />
      </div>
    </>
  );
};
