import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'construction-contracting',
    slug: 'construction-contracting',
    title: 'Construction Contracting',
    category: 'Civil Contracting',
    iconName: 'Building2',
    description: 'Comprehensive structural construction contracting for residential, commercial, and heavy civil works.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80',
    details: [
      'Structural RCC framing and foundation execution',
      'High-rise residential and commercial civil works',
      'Quality shuttering and reinforcement steel tying',
      'Contract supervision and on-site EHS compliance'
    ],
    capabilities: [
      'End-to-End RCC Structural Framework Execution',
      'Substructure Raft, Footings & Column Casting',
      'Mivan & Conventional Formwork Engineering',
      'Strict Quality Inspection & Slab Integrity Checks'
    ],
    applications: [
      'Multi-storey Residential Towers',
      'Commercial Plazas & Tech Hubs',
      'Industrial Sheds & PEB Substructures',
      'Civic & Infrastructure Works'
    ]
  },
  {
    id: 'concrete-boom-placer-rental',
    slug: 'concrete-boom-placer-rental',
    title: 'Concrete Boom Placer Rental',
    category: 'Machinery Rental',
    iconName: 'Truck',
    description: 'High-capacity Putzmeister M42-5 Concrete Boom Placer rental complete with certified operator and helper for uninterrupted concrete pours.',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80',
    details: [
      'Putzmeister M42-5 Truck-Mounted Boom Placer',
      '42m vertical reach & 160 m³/h output capacity',
      'Full operator and maintenance helper crew included',
      'Flexible shift, weekly, and monthly rental terms'
    ],
    capabilities: [
      'Mass Foundation & Heavy Raft Concrete Pouring',
      'High-Rise Vertical Concrete Placement',
      'Precision Placement with Reduced Manual Labor',
      'AdBlue Compliant Low-Emission Engine Execution'
    ],
    applications: [
      'High-Rise Residential Slabs',
      'Bridge & Flyover Deck Casting',
      'Industrial Superflat Floor Slabs',
      'Commercial Basement Raft Pours'
    ]
  }
];
