import { IndustryItem } from '../types';
import resImg from '../assets/images/industries/residential-construction.webp';
import commImg from '../assets/images/industries/commercial-buildings.webp';
import infraImg from '../assets/images/industries/infrastructure-civil-works.webp';
import indImg from '../assets/images/industries/industrial-manufacturing.webp';
import wareImg from '../assets/images/industries/warehouse-logistics.webp';
import instImg from '../assets/images/industries/institutional-projects.webp';
import equipImg from '../assets/images/industries/contractor-equipment-support.webp';

export const industriesData: IndustryItem[] = [
  {
    id: 'residential-construction',
    slug: 'residential-construction',
    name: 'Residential Construction',
    iconName: 'Building2',
    description: 'Chitrani Construction may support residential project requirements involving structural construction, civil execution, concrete-intensive work, site coordination, and high-reach concrete placement.',
    image: resImg,
    capabilities: [
      'Structural and civil construction requirements',
      'Concrete-intensive building work',
      'High-rise concrete placement',
      'Resource and machinery coordination',
      'Boom placer rental with operator and helper'
    ]
  },
  {
    id: 'commercial-buildings',
    slug: 'commercial-buildings',
    name: 'Commercial Buildings',
    iconName: 'Building',
    description: 'Services may support commercial building requirements involving structured construction execution, concrete placement, site access coordination, and project-specific machinery deployment.',
    image: commImg,
    capabilities: [
      'Commercial structural requirements',
      'Civil construction support',
      'Large concrete pours',
      'Elevated placement requirements',
      'Equipment and crew coordination'
    ]
  },
  {
    id: 'infrastructure-civil-works',
    slug: 'infrastructure-civil-works',
    name: 'Infrastructure and Civil Works',
    iconName: 'Landmark',
    description: 'Chitrani Construction may support infrastructure-linked and civil project requirements that involve concrete-intensive execution, machinery coordination, and high-capacity concrete-placement support.',
    image: infraImg,
    capabilities: [
      'Infrastructure-related civil requirements',
      'Concrete-intensive work',
      'Large pour support',
      'Machinery coordination',
      'Site-specific deployment planning'
    ]
  },
  {
    id: 'industrial-manufacturing',
    slug: 'industrial-manufacturing',
    name: 'Industrial and Manufacturing Facilities',
    iconName: 'Factory',
    description: 'Services may be relevant to industrial and manufacturing-facility requirements involving structural works, concrete-heavy construction, equipment access planning, and contractor coordination.',
    image: indImg,
    capabilities: [
      'Structural construction requirements',
      'Concrete floors and structural elements',
      'Machinery access coordination',
      'Large pour support',
      'Project-specific resource planning'
    ]
  },
  {
    id: 'warehouse-logistics',
    slug: 'warehouse-logistics',
    name: 'Warehouses and Logistics Facilities',
    iconName: 'Warehouse',
    description: 'Chitrani Construction may support warehouse and logistics-facility requirements involving large structural areas, concrete-intensive work, access planning, and coordinated machinery deployment.',
    image: wareImg,
    capabilities: [
      'Warehouse structural requirements',
      'Large concrete areas',
      'Civil construction support',
      'Equipment access planning',
      'High-capacity placement support'
    ]
  },
  {
    id: 'institutional-projects',
    slug: 'institutional-projects',
    name: 'Institutional Projects',
    iconName: 'GraduationCap',
    description: 'Services may support institutional project requirements involving structural and civil construction, organised site coordination, and concrete-placement requirements.',
    image: instImg,
    capabilities: [
      'Institutional building requirements',
      'Civil and structural support',
      'Site and resource coordination',
      'Concrete-intensive work',
      'Equipment deployment where required'
    ]
  },
  {
    id: 'contractor-equipment-support',
    slug: 'contractor-equipment-support',
    name: 'Contractor Equipment Support',
    iconName: 'Truck',
    description: 'Chitrani Construction provides concrete boom placer rental for contractors requiring structured equipment deployment with an operator and helper.',
    image: equipImg,
    capabilities: [
      'Putzmeister M42-5 rental',
      '42-metre boom reach',
      '90 m³ capacity',
      'Operator and helper included',
      'Monthly single-shift deployment',
      'Large-volume concrete placement'
    ]
  }
];
