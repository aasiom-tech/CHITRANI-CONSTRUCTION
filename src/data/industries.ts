import { IndustryItem } from '../types';
import resImg from '../assets/images/industries/residential-construction.webp';
import commImg from '../assets/images/industries/commercial-buildings.webp';
import infraImg from '../assets/images/industries/infrastructure-civil-works.webp';
import indImg from '../assets/images/industries/industrial-manufacturing.webp';
import wareImg from '../assets/images/industries/warehouse-logistics.webp';
import instImg from '../assets/images/industries/institutional-projects.webp';
import equipImg from '../assets/images/industries/contractor-equipment-support.webp';

export interface PriyaIndustryItem extends IndustryItem {
  evidenceLevel: 'evidenced' | 'applicability';
  evidenceNotice?: string;
  imageAlt?: string;
  relevantCapabilities?: string[];
  relatedServiceLinks?: { name: string; href: string }[];
}

export const industriesData: PriyaIndustryItem[] = [
  {
    id: 'residential-construction',
    slug: 'residential-construction',
    name: 'Residential Construction',
    iconName: 'Building2',
    evidenceLevel: 'evidenced',
    evidenceNotice: 'Building-construction context is supported by the documented Ocean Star construction vendor engagement in Mumbai.',
    description: 'Building construction requirements are supported by Chitrani Construction’s documented vendor participation on the Ocean Star development in Mumbai.',
    image: resImg,
    imageAlt: 'Residential building construction site',
    relevantCapabilities: [
      'Construction Contracting',
      'RCC Structural Work',
      'Civil Construction',
      'Brickwork & Blockwork',
      'Labour Contracting'
    ],
    relatedServiceLinks: [
      { name: 'Construction Contracting', href: '/services/construction-contracting' },
      { name: 'RCC Structural Work', href: '/services/rcc-structural-work' }
    ],
    capabilities: [
      'Structural and civil construction requirements',
      'Concrete-intensive building work',
      'Site execution coordination',
      'Contractor workforce support'
    ]
  },
  {
    id: 'infrastructure-civil-works',
    slug: 'infrastructure-civil-works',
    name: 'Infrastructure & Civil Works',
    iconName: 'Landmark',
    evidenceLevel: 'evidenced',
    evidenceNotice: 'Civil and infrastructure-related contractor requirements are relevant to Chitrani’s civil construction and machinery support structure.',
    description: 'Civil and infrastructure project requirements align with Chitrani Construction’s civil execution support and concrete boom placer rental capabilities.',
    image: infraImg,
    imageAlt: 'Infrastructure and civil engineering construction site',
    relevantCapabilities: [
      'Civil Construction',
      'RCC Structural Work',
      'Construction Contracting',
      'Concrete Boom Placer Rental'
    ],
    relatedServiceLinks: [
      { name: 'Civil Construction', href: '/services/civil-construction' },
      { name: 'Concrete Boom Placer Rental', href: '/services/concrete-boom-placer-rental' }
    ],
    capabilities: [
      'Infrastructure-related civil requirements',
      'Foundation concrete pours',
      'Civil project execution',
      'Machinery deployment support'
    ]
  },
  {
    id: 'contractor-equipment-support',
    slug: 'contractor-equipment-support',
    name: 'Contractor Equipment Support',
    iconName: 'Truck',
    evidenceLevel: 'evidenced',
    evidenceNotice: 'Concrete boom placer rental supports contractor-led concrete-placement requirements for project-based deployment.',
    description: 'Concrete boom placer deployment for main contractors requiring high-capacity concrete pumping capability with operator and helper.',
    image: equipImg,
    imageAlt: 'Concrete boom placer operating at a contractor site',
    relevantCapabilities: [
      'Concrete Boom Placer Rental',
      'Putzmeister M42-5 Equipment'
    ],
    relatedServiceLinks: [
      { name: 'Putzmeister M42-5 Equipment Details', href: '/equipment/putzmeister-m42-5' },
      { name: 'Concrete Boom Placer Rental Service', href: '/services/concrete-boom-placer-rental' }
    ],
    capabilities: [
      'Putzmeister M42-5 monthly rental',
      '42-metre boom reach',
      '90 m³ capacity',
      'Operator and helper included'
    ]
  },
  {
    id: 'commercial-buildings',
    slug: 'commercial-buildings',
    name: 'Commercial Buildings',
    iconName: 'Building',
    evidenceLevel: 'applicability',
    evidenceNotice: 'Applicable construction capability — service structure may support commercial building requirements based on project scope.',
    description: 'Construction services may support commercial building requirements depending on approved project scope, site conditions and required capabilities.',
    image: commImg,
    imageAlt: 'Commercial office building construction site',
    relevantCapabilities: [
      'Construction Contracting',
      'RCC Structural Work',
      'Civil Construction',
      'Concrete Boom Placer Rental'
    ],
    relatedServiceLinks: [
      { name: 'Construction Contracting', href: '/services/construction-contracting' }
    ],
    capabilities: [
      'Commercial structural requirements',
      'Civil construction support',
      'Elevated concrete placement',
      'Project site coordination'
    ]
  },
  {
    id: 'industrial-manufacturing',
    slug: 'industrial-manufacturing',
    name: 'Industrial & Manufacturing Facilities',
    iconName: 'Factory',
    evidenceLevel: 'applicability',
    evidenceNotice: 'Applicable construction capability — service structure may support industrial facility requirements based on agreed scope.',
    description: 'Construction services may support industrial and manufacturing project requirements where the requested civil, structural, workforce or concrete-placement scope aligns with Chitrani Construction’s available capabilities.',
    image: indImg,
    imageAlt: 'Industrial manufacturing facility construction site',
    relevantCapabilities: [
      'Civil Construction',
      'RCC Structural Work',
      'Concrete Boom Placer Rental'
    ],
    relatedServiceLinks: [
      { name: 'Civil Construction', href: '/services/civil-construction' }
    ],
    capabilities: [
      'Substructure concrete pours',
      'Industrial civil requirements',
      'Machinery access planning',
      'Site coordination'
    ]
  },
  {
    id: 'warehouse-logistics',
    slug: 'warehouse-logistics',
    name: 'Warehouses & Logistics Facilities',
    iconName: 'Warehouse',
    evidenceLevel: 'applicability',
    evidenceNotice: 'Applicable construction capability — service structure may support logistics facility requirements based on confirmed scope.',
    description: 'Construction services may support warehouse and logistics project requirements where civil, structural, masonry, workforce or concrete-placement support forms part of the approved scope.',
    image: wareImg,
    imageAlt: 'Logistics warehouse construction site',
    relevantCapabilities: [
      'Civil Construction',
      'Brickwork & Blockwork',
      'Concrete Boom Placer Rental'
    ],
    relatedServiceLinks: [
      { name: 'Civil Construction', href: '/services/civil-construction' }
    ],
    capabilities: [
      'Large area concrete pours',
      'Civil foundation support',
      'Blockwork walling',
      'Equipment deployment'
    ]
  },
  {
    id: 'institutional-projects',
    slug: 'institutional-projects',
    name: 'Institutional Projects',
    iconName: 'GraduationCap',
    evidenceLevel: 'applicability',
    evidenceNotice: 'Applicable construction capability — service structure may support institutional project requirements according to documentation.',
    description: 'Construction services may support institutional project requirements where the requested scope aligns with Chitrani Construction’s available construction capabilities.',
    image: instImg,
    imageAlt: 'Institutional building construction site',
    relevantCapabilities: [
      'Construction Contracting',
      'RCC Structural Work',
      'Labour Contracting'
    ],
    relatedServiceLinks: [
      { name: 'Construction Contracting', href: '/services/construction-contracting' }
    ],
    capabilities: [
      'Institutional civil support',
      'Structural RCC framing',
      'Masonry walling',
      'Workforce deployment'
    ]
  }
];

export const getEvidencedIndustries = (): PriyaIndustryItem[] => {
  return industriesData.filter((i) => i.evidenceLevel === 'evidenced');
};

export const getApplicabilityIndustries = (): PriyaIndustryItem[] => {
  return industriesData.filter((i) => i.evidenceLevel === 'applicability');
};
