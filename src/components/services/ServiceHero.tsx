import React from 'react';
import { PageHeader } from '../common/PageHeader';

interface ServiceHeroProps {
  title: string;
  badge: string;
  intro: string;
  image?: string;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ title, badge, intro, image }) => {
  const isBoomPlacer = title.toLowerCase().includes('boom placer');
  const meta = isBoomPlacer ? 'PUTZMEISTER M42-5 · 42 M REACH' : undefined;

  return (
    <PageHeader
      title={title}
      subtitle={intro}
      badge={badge}
      accentType="services"
      meta={meta}
      heroImage={image}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' }
      ]}
    />
  );
};
