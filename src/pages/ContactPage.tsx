import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { ContactIntro } from '../components/contact/ContactIntro';
import { ContactMethods } from '../components/contact/ContactMethods';
import { ContactOffices } from '../components/contact/ContactOffices';
import { ContactFormSection } from '../components/contact/ContactFormSection';
import { ContactGuidance } from '../components/contact/ContactGuidance';
import { ContactFinalCTA } from '../components/contact/ContactFinalCTA';

export const ContactPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact Chitrani Construction | Mumbai and Jalgaon"
        description="Contact Chitrani Construction for civil and structural construction enquiries and Putzmeister M42-5 boom placer rental requirements."
        canonical="https://chitraniconstruction.com/contact"
      />

      <div className="bg-[#EADBC8] space-y-0 text-[#3D352D]">
        {/* 1. Shared PageHeader */}
        <PageHeader
          badge="CONTACT CHITRANI"
          title="Start a Conversation About Your Construction Requirement"
          subtitle="Contact Chitrani Construction for construction-contracting enquiries, concrete boom placer rental requirements and project-specific quotation support."
          breadcrumb={[{ label: 'Home', href: '/' }]}
        />

        {/* 2. Contact Introduction */}
        <ContactIntro />

        {/* 3. Direct Contact Methods */}
        <ContactMethods />

        {/* 4. Office Locations */}
        <ContactOffices />

        {/* 5. Contact Form */}
        <ContactFormSection />

        {/* 6. Enquiry Guidance */}
        <ContactGuidance />

        {/* 7. Contact Final CTA */}
        <ContactFinalCTA />

      </div>
    </>
  );
};
