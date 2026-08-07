import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { ContactMethods } from '../components/contact/ContactMethods';
import { ContactOffices } from '../components/contact/ContactOffices';
import { ContactFormSection } from '../components/contact/ContactFormSection';
import { ContactGuidance } from '../components/contact/ContactGuidance';
import { ContactFinalCTA } from '../components/contact/ContactFinalCTA';

export const ContactPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact Chitrani Construction | Project & Equipment Enquiries"
        description="Contact Chitrani Construction to discuss construction execution, manpower, civil work or equipment requirements in Maharashtra."
        canonicalPath="/contact"
      />

      <div className="bg-[#EADBC8] space-y-0 text-[#3D352D]">
        {/* 01. Shared PageHeader */}
        <PageHeader
          badge="CONTACT CHITRANI"
          title="Discuss Your Construction Requirement"
          subtitle="Invite developers, contractors and project teams to contact Chitrani regarding construction execution, manpower or equipment requirements."
          breadcrumb={[{ label: 'Home', href: '/' }]}
        />

        {/* 02. Direct Contact Methods */}
        <ContactMethods />

        {/* Office Locations */}
        <ContactOffices />

        {/* 03. Structured Project Enquiry Form */}
        <ContactFormSection />

        {/* 04. What Happens Next */}
        <ContactGuidance />

        {/* 05. Request Quotation CTA */}
        <ContactFinalCTA />

      </div>
    </>
  );
};

export default ContactPage;
