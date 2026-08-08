import React from 'react';
import { PageHeader } from '../common/PageHeader';

interface EquipmentHeroProps {
  title: string;
  badge: string;
  intro: string;
  image?: string;
}

export const EquipmentHero: React.FC<EquipmentHeroProps> = ({ title, badge, intro, image }) => {
  return (
    <PageHeader
      title={title}
      subtitle={intro}
      badge={badge}
      accentType="equipment"
      meta="PUTZMEISTER M42-5 · 42 M REACH"
      heroImage={image}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Equipment Rental', href: '/equipment' }
      ]}
    />
  );
};
