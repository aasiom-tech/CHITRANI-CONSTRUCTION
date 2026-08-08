import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { PrivacyPolicyContent } from '../components/legal/PrivacyPolicyContent';

/* Note: Legal pages should be reviewed by qualified legal counsel before final public release. */

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy | Chitrani Construction"
        description="Read how Chitrani Construction handles information provided through construction, equipment-rental and quotation enquiries."
        canonicalPath="/privacy-policy"
      />

      <div className="bg-[#EADBC8] space-y-0 text-[#3D352D]">
        <PageHeader
          badge="LEGAL INFORMATION"
          title="Privacy Policy"
          subtitle="This Privacy Policy explains how information provided through the Chitrani Construction website may be used when responding to enquiries and quotation requests."
          accentType="legal"
          breadcrumb={[{ label: 'Home', href: '/' }]}
        />

        <PrivacyPolicyContent />
      </div>
    </>
  );
};
