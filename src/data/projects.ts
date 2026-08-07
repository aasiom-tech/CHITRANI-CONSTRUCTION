import { ProjectItem } from '../types';
import oceanStarImg from '../assets/images/projects/ocean-star-project.webp';

export interface PriyaProjectItem extends ProjectItem {
  imageAlt?: string;
  isRepresentativeVisual?: boolean;
  statusBadge?: string;
  scheduledTimeline?: string;
  scopeNotice?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export const projectsData: PriyaProjectItem[] = [
  {
    id: 'ocean-star',
    slug: 'ocean-star',
    title: 'Ocean Star',
    category: 'Building Construction / Construction Vendor Engagement',
    client: 'Suraj Estate Developers Ltd',
    location: 'Kashinath Dhuru Marg, Mumbai – 400028',
    vendorRole: 'Construction Vendor',
    workOrderNumber: 'OSWOJ0002126-27',
    orderDate: '31 July 2026',
    scheduledCompletion: '31 December 2026',
    scheduledTimeline: 'Work order issued 31 July 2026 with scheduled completion 31 December 2026.',
    scope: 'Chitrani Construction is documented as a construction vendor for the Ocean Star development in Mumbai.',
    scopeNotice: 'Construction vendor engagement — detailed itemised scope not available in the current public project record.',
    engineeringHighlight: 'Verified engagement as a construction vendor for a major Mumbai building development.',
    image: oceanStarImg,
    imageAlt: 'Representative high-rise construction project visual for the Ocean Star engagement',
    isRepresentativeVisual: true,
    statusBadge: 'VERIFIED VENDOR ENGAGEMENT',
    seoTitle: 'Ocean Star Project | Chitrani Construction',
    seoDescription: 'Documented construction vendor engagement for the Ocean Star development by Suraj Estate Developers Ltd in Mumbai.'
  }
];

export const getProjectBySlug = (slug: string): PriyaProjectItem | undefined => {
  return projectsData.find((p) => p.slug === slug);
};
