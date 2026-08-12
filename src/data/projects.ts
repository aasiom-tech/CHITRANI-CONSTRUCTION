// Projects data file - verified Ocean Star project and documented client requirements
import { ProjectItem } from '../types';
import oceanStarImg from '../assets/images/projects/ocean-star-project.webp';
import godrejNurtureImg from '../assets/images/projects/godrej-nurture-project.webp';
import capaciteInfraImg from '../assets/images/projects/capacite-infra-project.webp';

export const projectsData: ProjectItem[] = [
  {
    id: 'ocean-star',
    slug: 'ocean-star',
    title: 'Ocean Star',
    client: 'Suraj Estate Developers Ltd.',
    location: 'Kashinath Dhuru Marg, Next to Rameshwaram Building, Mumbai – 400028',
    category: 'Concrete Pump Deployment',
    status: 'confirmed',
    statusLabel: 'Confirmed Project Engagement',
    shortDescription: 'Chitrani Construction was engaged by Suraj Estate Developers Ltd. to provide concrete-pumping support for the Ocean Star development in Mumbai.',
    description: 'Chitrani Construction was engaged by Suraj Estate Developers Ltd. to provide concrete-pumping support for the Ocean Star development in Mumbai. The documented scope includes concrete pump deployment with pipeline and operating manpower for project concrete-placement requirements.',
    scope: [
      'Concrete pump deployment',
      '100-metre pipeline configuration',
      'Operating manpower support',
      'Concrete-placement support',
      'Site transportation / equipment support'
    ],
    equipment: 'SP 1087 Concrete Pump',
    equipmentLabel: 'Equipment Deployment',
    image: oceanStarImg,
    imageAlt: 'High-rise urban concrete construction activity for Ocean Star project in Mumbai',
    transparencyNote: 'Representative project image. Documented project engagement backed by client work order.'
  },
  {
    id: 'godrej-nurture',
    slug: 'godrej-nurture',
    title: 'Godrej Nurture',
    client: 'Godrej Nurture',
    location: 'LBS Road, Bhandup, Mumbai',
    category: 'Concrete Pump Requirement',
    status: 'quotation',
    statusLabel: 'Client Requirement',
    shortDescription: 'Chitrani Construction prepared a concrete-pump support proposal for the Godrej Nurture site at LBS Road, Bhandup.',
    description: 'Chitrani Construction prepared a concrete-pump support proposal for the Godrej Nurture site at LBS Road, Bhandup. The proposed scope covered concrete pump deployment with a 100-metre pipeline, operating manpower, diesel support and transportation to site.',
    scope: [
      'Concrete pump support',
      '100-metre pipeline configuration',
      'Operating manpower support',
      'Diesel-supported operation',
      'Site transportation'
    ],
    equipment: 'SP 1087 or equivalent',
    equipmentLabel: 'Proposed Equipment Configuration',
    image: godrejNurtureImg,
    imageAlt: 'Modern residential high-rise construction site with concrete pumping context for Godrej Nurture',
    transparencyNote: 'This page represents a documented client requirement/proposal and does not state project completion.'
  },
  {
    id: 'capacite-infra',
    slug: 'capacite-infra',
    title: 'Capacite Infra Projects Ltd.',
    client: 'Capacite Infra Projects Ltd.',
    location: 'Mumbai',
    category: 'High-Rise Concrete Pump Requirement',
    status: 'quotation',
    statusLabel: 'Client Requirement',
    shortDescription: 'Chitrani Construction prepared a high-rise concrete pumping proposal for Capacite Infra Projects Ltd. using a Putzmeister BSA 1408 / BAS1408HD-class pumping configuration.',
    description: 'Chitrani Construction prepared a high-rise concrete pumping proposal for Capacite Infra Projects Ltd. using a Putzmeister BSA 1408 / BAS1408HD-class pumping configuration with operator support and transportation to site.',
    scope: [
      'High-rise concrete pump requirement',
      'High-rise concrete-placement support',
      'Operator support',
      'Equipment transportation',
      'Proposed Putzmeister BSA 1408 / BAS1408HD-class configuration'
    ],
    equipment: 'Putzmeister BSA 1408 / BAS1408HD or equivalent',
    equipmentLabel: 'Proposed Equipment',
    image: capaciteInfraImg,
    imageAlt: 'High-rise construction with stationary concrete pumping equipment context for Capacite Infra Projects Ltd.',
    transparencyNote: 'This page represents a documented client requirement/proposal and does not state project completion.'
  }
];

export const getProjectBySlug = (slug: string): ProjectItem | undefined => {
  return projectsData.find((p) => p.slug === slug);
};
