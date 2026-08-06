import React from 'react';
import { PageHeader } from '../common/PageHeader';

interface ProjectHeroProps {
  title: string;
  badge: string;
  intro: string;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ title, badge, intro }) => {
  return (
    <PageHeader
      title={title}
      subtitle={intro}
      badge={badge}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' }
      ]}
    />
  );
};
