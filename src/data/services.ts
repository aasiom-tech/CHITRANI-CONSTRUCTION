import { ServiceItem } from '../types';
import contractingImg from '../assets/images/services/construction-contracting-service.webp';
import rccImg from '../assets/images/services/rcc-structural-work.webp';
import civilImg from '../assets/images/services/civil-construction.webp';
import brickworkImg from '../assets/images/services/brickwork-blockwork.webp';
import labourImg from '../assets/images/services/labour-contracting.webp';
import boomPlacerImg from '../assets/images/services/boom-placer-rental-service.webp';

export interface PriyaServiceItem extends ServiceItem {
  shortTitle?: string;
  summary?: string;
  overview?: string;
  scope?: string[];
  keyHighlights?: string[];
  serviceConsiderations?: string[];
  relatedServiceSlugs?: string[];
  relatedEquipmentSlug?: string;
  relatedEquipment?: { name: string; href: string }[];
  relatedIndustries?: { name: string; href: string }[];
  imageAlt?: string;
  ctaLabel?: string;
  seoTitle?: string;
  seoDescription?: string;
  status: 'published' | 'confirmation_required';
}

export const servicesData: PriyaServiceItem[] = [
  {
    id: 'construction-contracting',
    slug: 'construction-contracting',
    title: 'Construction Contracting',
    shortTitle: 'Construction Support',
    category: 'Civil Contracting',
    iconName: 'Building2',
    description: 'Project-based construction support for building and civil requirements, with scope defined according to project documentation, site conditions and commercial agreement.',
    summary: 'Organised structural and civil construction execution support for commercial, residential, and infrastructure-linked projects.',
    overview: 'Project-based construction support for building and civil requirements, with scope defined according to drawings, site conditions and commercial agreement.',
    scope: [
      'Building construction support',
      'Civil project execution requirements',
      'Site coordination',
      'Structural construction requirements',
      'Concrete-intensive project work where included in approved scope'
    ],
    keyHighlights: [
      'Single-point contractor coordination',
      'Concrete-intensive structural execution',
      'Verified construction-vendor experience on Mumbai projects',
      'Site coordination and execution planning'
    ],
    serviceConsiderations: [
      'Approved project documentation and BOQ',
      'Site access and layout conditions',
      'Project schedule and milestones',
      'Commercial agreement'
    ],
    relatedServiceSlugs: ['rcc-structural-work', 'civil-construction', 'brickwork-blockwork', 'labour-contracting'],
    relatedEquipmentSlug: 'putzmeister-m42-5',
    relatedEquipment: [
      { name: 'Putzmeister M42-5 Concrete Boom Placer', href: '/equipment/putzmeister-m42-5' }
    ],
    relatedIndustries: [
      { name: 'Residential Construction', href: '/industries' },
      { name: 'Commercial Buildings', href: '/industries' }
    ],
    image: contractingImg,
    imageAlt: 'Construction site representing contracting and project execution services',
    ctaLabel: 'Request Contracting Quote',
    seoTitle: 'Construction Contracting Services | Chitrani Construction',
    seoDescription: 'Structural and civil construction support for residential, commercial, infrastructure-linked, and concrete-intensive project requirements in Maharashtra.',
    status: 'published',
    details: [
      'Building construction support',
      'Civil project execution requirements',
      'Site coordination',
      'Structural construction requirements'
    ],
    capabilities: [
      'Building construction support',
      'Civil project execution',
      'Residential building requirements',
      'Commercial building requirements',
      'Concrete-intensive execution',
      'Site coordination'
    ],
    applications: [
      'Building construction requirements',
      'Civil project support',
      'Concrete-intensive project execution'
    ]
  },
  {
    id: 'rcc-structural-work',
    slug: 'rcc-structural-work',
    title: 'RCC Structural Work',
    shortTitle: 'RCC Framing & Formwork',
    category: 'Structural Works',
    iconName: 'Building2',
    description: 'Reinforced cement concrete construction support for structural requirements within building projects, according to approved drawings, project scope and site conditions.',
    summary: 'Reinforced cement concrete structural execution support according to approved drawings and project documentation.',
    overview: 'Reinforced cement concrete construction support for structural requirements within building projects, according to approved drawings, project scope and site conditions.',
    scope: [
      'RCC structural work',
      'Reinforced concrete components',
      'Slab and column requirements where included in project scope',
      'Reinforcement-related structural activities',
      'Execution according to approved project documentation'
    ],
    keyHighlights: [
      'RCC structural framing execution',
      'Reinforcement-related structural activities',
      'Execution according to approved drawings',
      'Site coordination for concrete works'
    ],
    serviceConsiderations: [
      'Approved structural drawings',
      'Project scope and specifications',
      'Site conditions and access',
      'Required timeline',
      'Commercial agreement'
    ],
    relatedServiceSlugs: ['civil-construction', 'construction-contracting', 'concrete-boom-placer-rental'],
    relatedEquipmentSlug: 'putzmeister-m42-5',
    relatedEquipment: [
      { name: 'Putzmeister M42-5 Concrete Boom Placer', href: '/equipment/putzmeister-m42-5' }
    ],
    relatedIndustries: [
      { name: 'Residential Construction', href: '/industries' },
      { name: 'Commercial Buildings', href: '/industries' }
    ],
    image: rccImg,
    imageAlt: 'RCC structural construction with reinforcement and concrete work',
    ctaLabel: 'Inquire RCC Support',
    seoTitle: 'RCC Structural Work | Chitrani Construction',
    seoDescription: 'RCC structural framing and concrete execution support for building projects in Maharashtra.',
    status: 'published',
    details: [
      'RCC structural work',
      'Reinforced concrete components',
      'Slab and column requirements',
      'Reinforcement-related structural activities'
    ],
    capabilities: [
      'RCC framing',
      'Concrete structural work',
      'Reinforcement supervision',
      'Concrete pour planning'
    ],
    applications: [
      'Structural frames',
      'Slabs and columns',
      'Reinforced concrete components'
    ]
  },
  {
    id: 'civil-construction',
    slug: 'civil-construction',
    title: 'Civil Construction',
    shortTitle: 'Civil Works',
    category: 'Civil Contracting',
    iconName: 'Building2',
    description: 'Civil construction support for building and infrastructure-related project requirements, based on approved drawings, site conditions and agreed scope.',
    summary: 'Civil construction support including building-related civil work, foundation-related requirements, and site execution coordination.',
    overview: 'Civil construction support for building and infrastructure-related project requirements, based on approved drawings, site conditions and agreed scope.',
    scope: [
      'Civil construction activities',
      'Building-related civil work',
      'Foundation-related requirements where included in project scope',
      'Concrete and structural civil requirements',
      'Site execution coordination'
    ],
    keyHighlights: [
      'Civil construction support',
      'Building and infrastructure-related civil work',
      'Foundation-related requirements',
      'Site execution coordination'
    ],
    serviceConsiderations: [
      'Approved drawings and BOQ',
      'Site conditions',
      'Project schedule',
      'Scope boundaries',
      'Commercial requirements'
    ],
    relatedServiceSlugs: ['construction-contracting', 'rcc-structural-work', 'brickwork-blockwork'],
    relatedEquipmentSlug: 'putzmeister-m42-5',
    relatedEquipment: [
      { name: 'Putzmeister M42-5 Concrete Boom Placer', href: '/equipment/putzmeister-m42-5' }
    ],
    relatedIndustries: [
      { name: 'Infrastructure and Civil Works', href: '/industries' },
      { name: 'Industrial and Manufacturing Facilities', href: '/industries' }
    ],
    image: civilImg,
    imageAlt: 'Civil construction activity at an active project site',
    ctaLabel: 'Inquire Civil Support',
    seoTitle: 'Civil Construction Services | Chitrani Construction',
    seoDescription: 'Civil execution and site foundation construction support for infrastructure and building projects in Maharashtra.',
    status: 'published',
    details: [
      'Civil construction activities',
      'Building-related civil work',
      'Foundation-related requirements',
      'Site execution coordination'
    ],
    capabilities: [
      'Civil site support',
      'Foundation work execution',
      'Concrete civil works',
      'Site coordination'
    ],
    applications: [
      'Building civil works',
      'Foundation/site works',
      'Infrastructure-related civil requirements'
    ]
  },
  {
    id: 'brickwork-blockwork',
    slug: 'brickwork-blockwork',
    title: 'Brickwork & Blockwork',
    shortTitle: 'Masonry Work',
    category: 'Masonry Works',
    iconName: 'Building2',
    description: 'Masonry construction support for brick and block wall requirements within building and civil projects.',
    summary: 'Masonry walling and blockwork execution support according to approved drawings and project scope.',
    overview: 'Masonry construction support for brick and block wall requirements within building and civil projects.',
    scope: [
      'Brick masonry',
      'Block masonry',
      'Wall construction',
      'Internal and external masonry requirements where specified',
      'Work according to approved drawings and project scope'
    ],
    keyHighlights: [
      'Brick masonry walling',
      'Block masonry walling',
      'Internal wall partitions',
      'External masonry walls'
    ],
    serviceConsiderations: [
      'Approved layout and drawings',
      'Wall/material requirements stated in project documents',
      'Site coordination',
      'Project schedule',
      'Commercial scope'
    ],
    relatedServiceSlugs: ['construction-contracting', 'labour-contracting', 'rcc-structural-work'],
    relatedIndustries: [
      { name: 'Residential Construction', href: '/industries' },
      { name: 'Commercial Buildings', href: '/industries' }
    ],
    image: brickworkImg,
    imageAlt: 'Brickwork and blockwork masonry construction activity',
    ctaLabel: 'Inquire Masonry Support',
    seoTitle: 'Brickwork & Blockwork Services | Chitrani Construction',
    seoDescription: 'AAC blockwork and brick masonry construction support for residential and commercial projects in Maharashtra.',
    status: 'published',
    details: [
      'Brick masonry',
      'Block masonry',
      'Wall construction',
      'Internal and external masonry requirements'
    ],
    capabilities: [
      'Blockwork masonry',
      'Brick masonry',
      'Wall construction',
      'Site coordination'
    ],
    applications: [
      'Internal wall construction',
      'External masonry',
      'Partition/block wall requirements'
    ]
  },
  {
    id: 'labour-contracting',
    slug: 'labour-contracting',
    title: 'Construction Labour Contracting',
    shortTitle: 'Labour Contracting',
    category: 'Manpower Support',
    iconName: 'Building2',
    description: 'Construction workforce support for project execution requirements based on agreed activities, site conditions and deployment scope.',
    summary: 'Organised site workforce coordination based on project activities and schedule requirements.',
    overview: 'Construction workforce support for project execution requirements based on agreed activities, site conditions and deployment scope.',
    scope: [
      'Construction workforce deployment',
      'Site activity support',
      'Project-specific labour requirements',
      'Workforce coordination according to agreed scope',
      'Deployment according to project schedule'
    ],
    keyHighlights: [
      'Construction workforce deployment',
      'Site activity support',
      'Project-specific manpower coordination',
      'Deployment according to schedule'
    ],
    serviceConsiderations: [
      'Required activities',
      'Deployment period',
      'Site requirements',
      'Schedule',
      'Commercial agreement'
    ],
    relatedServiceSlugs: ['construction-contracting', 'civil-construction', 'brickwork-blockwork'],
    relatedIndustries: [
      { name: 'Contractor Equipment Support', href: '/industries' },
      { name: 'Residential Construction', href: '/industries' }
    ],
    image: labourImg,
    imageAlt: 'Construction workforce carrying out coordinated site activities',
    ctaLabel: 'Inquire Labour Support',
    seoTitle: 'Construction Labour Contracting | Chitrani Construction',
    seoDescription: 'Organised construction manpower and helper team deployment for civil building projects in Maharashtra.',
    status: 'published',
    details: [
      'Construction workforce deployment',
      'Site activity support',
      'Project-specific labour requirements',
      'Deployment according to project schedule'
    ],
    capabilities: [
      'Workforce deployment',
      'Site activity support',
      'Manpower coordination',
      'Schedule-based deployment'
    ],
    applications: [
      'Project workforce requirements',
      'Civil/construction activity support',
      'Site deployment needs'
    ]
  },
  {
    id: 'concrete-boom-placer-rental',
    slug: 'concrete-boom-placer-rental',
    title: 'Concrete Boom Placer Rental',
    shortTitle: 'Boom Placer Rental',
    category: 'Machinery Rental',
    iconName: 'Truck',
    description: 'Putzmeister M42-5 concrete boom placer rental with an operator and helper for sites requiring dependable, high-capacity concrete-placement support.',
    summary: 'Structured monthly rental deployment of a 42m Putzmeister concrete boom placer with operating crew.',
    overview: 'Putzmeister M42-5 concrete boom placer rental for concrete-placement requirements at construction sites.',
    scope: [
      'Putzmeister M42-5 monthly rental',
      '42-metre boom reach deployment',
      '90 m³ capacity concrete placement support',
      'Dedicated operator & helper included',
      'Single fixed 12-hour shift (26 working days per month, Sundays excluded)'
    ],
    keyHighlights: [
      '42m reach suitable for high-rise and wide pours',
      '2020-manufactured AdBlue-equipped machinery',
      'Operator and helper included in deployment',
      'Structured monthly single-shift agreement'
    ],
    serviceConsiderations: [
      'Model: Putzmeister M42-5',
      'Boom reach: 42 m',
      'Capacity: 90 m³',
      'Year: 2020',
      'AdBlue: Yes',
      'Crew: Operator + helper',
      'Shift: 12-hour single shift',
      'Working days: 26 working days/month excluding Sundays',
      'Availability: Subject to confirmation for the requested project period'
    ],
    relatedServiceSlugs: ['construction-contracting', 'rcc-structural-work'],
    relatedEquipmentSlug: 'putzmeister-m42-5',
    relatedEquipment: [
      { name: 'Putzmeister M42-5 Equipment Details', href: '/equipment/putzmeister-m42-5' }
    ],
    relatedIndustries: [
      { name: 'Contractor Equipment Support', href: '/industries' },
      { name: 'Residential Construction', href: '/industries' }
    ],
    image: boomPlacerImg,
    imageAlt: 'Concrete boom placer operating during a construction concrete pour',
    ctaLabel: 'Request Rental Quote',
    seoTitle: 'Concrete Boom Placer Rental | Chitrani Construction',
    seoDescription: 'Putzmeister M42-5 boom placer rental with 42-metre reach, 90 m³ capacity, operator, and helper for construction projects in Maharashtra.',
    status: 'published',
    details: [
      '42-metre boom reach',
      '90 m³ capacity',
      'Operator and helper included',
      'Monthly single-shift deployment',
      'High-rise and large-pour applications',
      'Contractor equipment support'
    ],
    capabilities: [
      '42-metre boom reach',
      '90 m³ capacity',
      'Operator and helper included',
      'Monthly single-shift deployment',
      'High-rise and large-pour applications',
      'Contractor equipment support'
    ],
    applications: [
      'High-rise concrete placement',
      'Large concrete pours',
      'Difficult access placement requirements',
      'Contractor equipment support'
    ]
  }
];

export const getPublishedServices = (): PriyaServiceItem[] => {
  return servicesData.filter((s) => s.status === 'published');
};

export const getServiceBySlug = (slug: string): PriyaServiceItem | undefined => {
  return servicesData.find((s) => s.slug === slug);
};
