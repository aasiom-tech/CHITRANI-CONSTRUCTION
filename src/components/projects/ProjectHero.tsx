import React from 'react';
import { PageHeader } from '../common/PageHeader';

interface ProjectHeroProps {
  title: string;
  badge: string;
  intro: string;
  image?: string;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ title, badge, intro, image }) => {
  return (
    <PageHeader
      title={title}
      subtitle={intro}
      badge={badge}
      accentType="projects"
      meta="OCEAN STAR · MUMBAI"
      heroImage={image}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' }
      ]}
    />
  );
};
