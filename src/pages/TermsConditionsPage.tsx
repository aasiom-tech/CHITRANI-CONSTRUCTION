import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { TermsConditionsContent } from '../components/legal/TermsConditionsContent';

/* Note: Legal pages should be reviewed by qualified legal counsel before final public release. */

export const TermsConditionsPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Terms and Conditions | Chitrani Construction"
        description="Review the general terms for using the Chitrani Construction website and submitting construction or equipment-rental enquiries."
        canonicalPath="/terms-and-conditions"
      />

      <div className="bg-[#EADBC8] space-y-0 text-[#3D352D]">
        <PageHeader
          badge="LEGAL INFORMATION"
          title="Terms and Conditions"
          subtitle="These Terms and Conditions explain the general rules for using the Chitrani Construction website and submitting construction or equipment-rental enquiries."
          accentType="legal"
          breadcrumb={[{ label: 'Home', href: '/' }]}
        />

        <TermsConditionsContent />
      </div>
    </>
  );
};
