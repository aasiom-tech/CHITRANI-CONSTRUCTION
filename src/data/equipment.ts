import { EquipmentItem } from '../types';
import equipmentImg from '../assets/images/equipment/putzmeister-m42-5-equipment.webp';

export const equipmentData: EquipmentItem[] = [
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
    rentalStructure: 'Monthly deployment (12-hour shift, 26 working days per month, Sundays excluded)',
    clientScopeSummary: 'A 42-metre concrete boom placer suited to high-rise construction, large concrete pours, commercial developments, residential projects, and infrastructure-related concrete-placement requirements.',
    image: equipmentImg,
    description: 'Chitrani Construction provides the Putzmeister M42-5 concrete boom placer on structured monthly rental with an operator and helper for sites requiring dependable, high-capacity concrete-placement support.',
    keySpecs: [
      { label: 'Equipment', value: 'Putzmeister M42-5 Concrete Boom Placer' },
      { label: 'Boom Reach', value: '42 metres' },
      { label: 'Capacity', value: '90 m³' },
      { label: 'Year of Manufacture', value: '2020' },
      { label: 'AdBlue Equipped', value: 'Yes' },
      { label: 'Operator', value: 'Included' },
      { label: 'Helper', value: 'Included' },
      { label: 'Rental Model', value: 'Monthly deployment' },
      { label: 'Shift', value: 'One fixed 12-hour shift' },
      { label: 'Working Days', value: '26 working days per month' },
      { label: 'Sundays', value: 'Excluded' }
    ]
  }
];
