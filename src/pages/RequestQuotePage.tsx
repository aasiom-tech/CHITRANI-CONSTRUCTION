import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { QuoteForm } from '../components/QuoteForm';
import { FinalCTA } from '../components/FinalCTA';

export const RequestQuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedRequirement = searchParams.get('requirement') || 'Construction Contracting';
  const preselectedEquipment = searchParams.get('equipment') || '';

  return (
    <div>
      <SEO 
        title="Request Proposal & Quote | Chitrani Construction"
        description="Request a formal civil contracting proposal or Putzmeister M42-5 concrete boom placer rental quote from Chitrani Construction."
        canonical="https://chitraniconstruction.com/request-quote"
      />

      <PageHeader
        title="Request a Formal Proposal"
        subtitle="Itemized BOQ estimations, civil contract proposals, and equipment rental scheduling desk."
        badge="ESTIMATION & TENDER DESK"
      />

      <QuoteForm
        preselectedRequirement={preselectedRequirement}
        preselectedEquipment={preselectedEquipment}
      />

      <FinalCTA />
    </div>
  );
};
