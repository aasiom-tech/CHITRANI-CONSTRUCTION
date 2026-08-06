import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { ContactForm } from '../components/ContactForm';
import { FinalCTA } from '../components/FinalCTA';

export const ContactPage: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Contact Offices & Dispatch | Chitrani Construction Mumbai & Jalgaon"
        description="Contact Chitrani Construction for civil contracting proposals and Putzmeister M42-5 concrete boom placer rental in Mumbai and Maharashtra."
        canonical="https://chitraniconstruction.com/contact"
      />

      <PageHeader
        title="Contact Dispatch & Corporate Offices"
        subtitle="Get in touch with our contract officers, technical civil engineers, and machinery dispatch desk."
        badge="REGIONAL HEADQUARTERS & DISPATCH"
      />

      <ContactForm />

      <FinalCTA />
    </div>
  );
};
