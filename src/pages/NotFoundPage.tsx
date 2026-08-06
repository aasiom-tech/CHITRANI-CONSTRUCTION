import React from 'react';
import { SEO } from '../components/common/SEO';
import { NotFoundContent } from '../components/not-found/NotFoundContent';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Page Not Found | Chitrani Construction"
        description="The requested page could not be found within the Chitrani Construction website."
        noindex={true}
      />
      <NotFoundContent />
    </>
  );
};
