export interface BusinessDivision {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  displayOrder: number;
}

export interface ServiceSummary {
  id: string;
  name: string;
  slug: string;
  shortDescription: string | null;
  fullDescription: string | null;
  featured: boolean;
  displayOrder: number;
  division: { id: string; name: string; slug: string };
}

export interface ServiceDetail extends ServiceSummary {
  seoTitle: string | null;
  seoDescription: string | null;
}

export interface EquipmentCategory {
  id: string;
  name: string;
  slug: string;
}

export interface EquipmentListItem {
  id: string;
  name: string;
  slug: string;
  manufacturer: string | null;
  model: string | null;
  manufactureYear: number | null;
  description: string | null;
  publicStatus: string;
  featured: boolean;
  displayOrder: number;
  category: EquipmentCategory;
}

export interface EquipmentSpecification {
  name: string;
  value: string;
  unit: string | null;
  displayOrder: number;
}

export interface EquipmentDetail extends EquipmentListItem {
  specifications: EquipmentSpecification[];
}

export interface ContactSubmission {
  name: string;
  company?: string;
  email: string;
  phone: string;
  divisionId?: string;
  serviceId?: string;
  projectLocation?: string;
  message: string;
  consent: true;
}

export interface ContactAcknowledgement {
  referenceNumber: string;
  message: string;
}
