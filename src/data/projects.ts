// Projects data file - only verified Ocean Star project is displayed
import { ProjectItem } from '../types';
import oceanStarImg from '../assets/images/projects/ocean-star-project.webp';

export const projectsData: ProjectItem[] = [
  {
    id: 'ocean-star',
    slug: 'ocean-star',
    title: 'Ocean Star',
    client: 'Suraj Estate Developers Ltd.',
    location: 'Kashinath Dhuru Marg, Mumbai – 400028',
    category: 'Construction Vendor Engagement',
    status: 'confirmed',
    statusLabel: 'Ongoing Project Engagement',
    shortDescription: 'Chitrani Construction is documented as a Construction Vendor for the Ocean Star project in Mumbai.',
    description: 'Ocean Star is an ongoing construction engagement involving Chitrani Construction as a Construction Vendor. Public project information is limited to verified commercial and project details.',
    // Optional fields can be omitted if not applicable
    // vendorRole, orderDate, scheduledCompletion, etc.
    image: oceanStarImg,
    imageAlt: 'Representative construction project visual for the Ocean Star engagement',
    transparencyNote: 'Representative project visual. Detailed scope and execution information will be published only when approved.'
  }
];
