export interface HomeServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  ctaText: string;
  link: string;
}

export const homeServicesData: HomeServiceItem[] = [
  {
    id: 'rcc-structural-work',
    number: '01',
    title: 'RCC Structural Work',
    description: 'Reinforced concrete structure execution including formwork, shuttering, steel reinforcement binding and concrete pouring coordination for high-rise and commercial structures.',
    ctaText: 'Explore RCC Services',
    link: '/services#rcc'
  },
  {
    id: 'civil-construction',
    number: '02',
    title: 'Civil Construction',
    description: 'End-to-end civil works, foundation execution, structural masonry, site preparation and concrete-intensive work coordination for developers and general contractors.',
    ctaText: 'Explore Civil Work',
    link: '/services#civil'
  },
  {
    id: 'brickwork-blockwork',
    number: '03',
    title: 'Brickwork & Blockwork',
    description: 'Quality structural masonry, AAC blockwork, traditional brickwork and internal wall partition execution with trained masons and site supervision.',
    ctaText: 'View Scope',
    link: '/services#brickwork'
  },
  {
    id: 'construction-labour-contracting',
    number: '04',
    title: 'Construction Labour Contracting',
    description: 'Deployment of skilled masons, shuttering carpenters, bar-benders and site labourers for scheduled construction packages across Maharashtra.',
    ctaText: 'Discuss Manpower Requirement',
    link: '/request-quote?service=labour'
  },
  {
    id: 'boom-placer-rental',
    number: '05',
    title: 'Boom Placer Rental',
    description: 'Putzmeister M42-5 high-capacity concrete boom placer rental with trained operator and helper for high-volume, rapid concrete placement.',
    ctaText: 'Request Rental Quote',
    link: '/request-quote?requirement=equipment-rental'
  }
];
