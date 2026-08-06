import React from 'react';
import { PageHeader } from '../common/PageHeader';

interface ServiceHeroProps {
  title: string;
  badge: string;
  intro: string;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ title, badge, intro }) => {
  return (
    <PageHeader
      title={title}
      subtitle={intro}
      badge={badge}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' }
      ]}
    />
  );
};
