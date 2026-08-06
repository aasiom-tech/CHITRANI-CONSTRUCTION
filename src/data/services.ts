import { ServiceItem } from '../types';
import contractingImg from '../assets/images/services/construction-contracting-service.webp';
import boomPlacerImg from '../assets/images/services/boom-placer-rental-service.webp';

export const servicesData: ServiceItem[] = [
  {
    id: 'construction-contracting',
    slug: 'construction-contracting',
    title: 'Construction Contracting',
    category: 'Civil Contracting',
    iconName: 'Building2',
    description: 'Structural and civil construction support for public and private sector requirements, with emphasis on organised execution, site coordination, concrete-intensive works, and project-specific resource planning.',
    image: contractingImg,
    details: [
      'Structural construction support',
      'Civil construction works',
      'Residential and commercial requirements',
      'Infrastructure-related civil support',
      'Site and resource coordination',
      'Concrete-intensive project execution'
    ],
    capabilities: [
      'Structural construction support',
      'Civil construction works',
      'Residential building requirements',
      'Commercial building requirements',
      'Infrastructure-related civil works',
      'Concrete-intensive execution',
      'Site coordination',
      'Resource planning',
      'Machinery coordination',
      'Public and private sector support'
    ],
    applications: [
      'Residential developments',
      'Commercial building works',
      'Concrete-intensive construction',
      'Structural execution support',
      'Infrastructure-linked civil requirements',
      'Contractor support requiring machinery coordination'
    ]
  },
  {
    id: 'concrete-boom-placer-rental',
    slug: 'concrete-boom-placer-rental',
    title: 'Concrete Boom Placer Rental',
    category: 'Machinery Rental',
    iconName: 'Truck',
    description: 'Putzmeister M42-5 concrete boom placer rental with an operator and helper for sites requiring dependable, high-capacity concrete-placement support.',
    image: boomPlacerImg,
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
      'Large-volume concrete pours',
      'Residential building projects',
      'Commercial construction',
      'Infrastructure-related concrete work',
      'Contractor equipment support'
    ]
  }
];
