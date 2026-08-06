import React from 'react';
import { PageHeader } from '../common/PageHeader';

interface EquipmentHeroProps {
  title: string;
  badge: string;
  intro: string;
}

export const EquipmentHero: React.FC<EquipmentHeroProps> = ({ title, badge, intro }) => {
  return (
    <PageHeader
      title={title}
      subtitle={intro}
      badge={badge}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Equipment Rental', href: '/equipment' }
      ]}
    />
  );
};
