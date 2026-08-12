export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  details: string[];
  capabilities: string[];
  applications: string[];
  image: string;
}

export interface EquipmentItem {
  id: string;
  slug: string;
  name: string;
  model: string;
  category: string;
  boomReach: string;
  capacity: string;
  manufactureYear: string;
  adBlueStatus: string;
  operatorInclusion: string;
  rentalStructure: string;
  clientScopeSummary: string;
  image: string;
  description: string;
  keySpecs: { label: string; value: string }[];
}

export type ProjectEngagementStatus = 'confirmed' | 'quotation';

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  location: string;
  vendorRole?: string;
  orderDate?: string;
  scheduledCompletion?: string;
  status: ProjectEngagementStatus;
  statusLabel: string;
  shortDescription: string;
  description: string;
  scope?: string[];
  equipment?: string;
  equipmentLabel?: string;
  image: string;
  imageAlt: string;
  transparencyNote?: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  iconName: string;
  description: string;
  capabilities: string[];
  image: string;
}

export interface QuoteFormData {
  requirementType: string;
  projectType: string;
  siteLocation: string;
  approxArea: string;
  startDate: string;
  budgetRange: string;
  equipmentType: string;
  quantity: number;
  rentalDuration: string;
  requiredDate: string;
  fullName: string;
  companyName: string;
  mobileNumber: string;
  email: string;
  contactMethod: 'Phone' | 'WhatsApp' | 'Email';
  boqFileName?: string;
  drawingFileName?: string;
  notes?: string;
}
