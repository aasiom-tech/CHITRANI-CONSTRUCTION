import { EquipmentItem } from '../types';
import equipmentImg from '../assets/images/equipment/putzmeister-m42-5-equipment.webp';

export interface PriyaEquipmentItem extends EquipmentItem {
  imageAlt?: string;
  availabilityDisclaimer?: string;
  clientResponsibilities?: string[];
  applications?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const equipmentData: PriyaEquipmentItem[] = [
  {
    id: 'putzmeister-m42-5',
    slug: 'putzmeister-m42-5',
    name: 'Putzmeister M42-5 Concrete Boom Placer',
    model: 'Putzmeister M42-5',
    category: 'Concrete Placement Equipment',
    boomReach: '42 metres',
    capacity: '90 m³',
    manufactureYear: '2020',
    adBlueStatus: 'AdBlue equipped',
    operatorInclusion: 'Operator and helper included',
    rentalStructure: 'Monthly deployment (12-hour single shift, 26 working days per month, Sundays excluded)',
    clientScopeSummary: 'Structured monthly rental deployment of a 42m Putzmeister concrete boom placer with operating crew.',
    image: equipmentImg,
    imageAlt: 'Putzmeister M42-5 concrete boom placer machine',
    description: 'Chitrani Construction provides the Putzmeister M42-5 concrete boom placer on structured monthly rental with an operator and helper for sites requiring dependable, high-capacity concrete-placement support.',
    availabilityDisclaimer: 'Availability is subject to confirmation for the requested project period.',
    clientResponsibilities: [
      'Fuel supply',
      'AdBlue',
      'Operator accommodation',
      'Crew food and travel',
      'Site safety and security',
      'PPE',
      'Tools and tackles',
      'Internal shifting',
      'Supporting equipment',
      'Pipeline arrangements'
    ],
    applications: [
      'High-rise concrete placement',
      'Large-volume concrete pours',
      'Residential building projects',
      'Commercial construction',
      'Infrastructure-related concrete work',
      'Contractor equipment support'
    ],
    seoTitle: 'Putzmeister M42-5 Concrete Boom Placer Rental | Chitrani',
    seoDescription: 'Putzmeister M42-5 boom placer rental with 42m reach, 90 m³ capacity, Year 2020, AdBlue, operator, and helper for projects in Maharashtra.',
    keySpecs: [
      { label: 'Equipment', value: 'Putzmeister M42-5 Concrete Boom Placer' },
      { label: 'Boom Reach', value: '42 metres' },
      { label: 'Capacity', value: '90 m³' },
      { label: 'Year of Manufacture', value: '2020' },
      { label: 'AdBlue Equipped', value: 'Yes' },
      { label: 'Operating Crew', value: 'Operator and Helper Included' },
      { label: 'Rental Model', value: 'Monthly deployment' },
      { label: 'Shift Structure', value: 'One fixed 12-hour shift' },
      { label: 'Working Days', value: '26 working days per month' },
      { label: 'Rest Days', value: 'Sundays excluded' }
    ]
  }
];

export const getEquipmentBySlug = (slug: string): PriyaEquipmentItem | undefined => {
  return equipmentData.find((e) => e.slug === slug);
};
