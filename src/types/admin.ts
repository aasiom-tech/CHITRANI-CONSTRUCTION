export type AdminRole = "super_admin" | "admin" | "viewer";

export interface AdminIdentity {
  id: string;
  role: AdminRole;
}

export const ROLE_LABELS: Record<AdminRole, string> = {
  super_admin: "Super Admin",
  admin: "Admin",
  viewer: "Viewer",
};

export interface DashboardEnquiries {
  total: number;
  new: number;
  contacted: number;
  qualified: number;
  closed: number;
}

export interface DashboardQuotes {
  total: number;
  new: number;
  under_review: number;
  clarification_required: number;
  quoted: number;
  won: number;
  lost: number;
  closed: number;
}

export interface DashboardCatalog {
  businessDivisions: number;
  services: number;
  equipment: number;
  projects: number;
  industries: number;
}

export interface DashboardSummary {
  enquiries: DashboardEnquiries;
  quotes: DashboardQuotes;
  catalog: DashboardCatalog;
}

// =============================================================================
// Admin Enquiry Management
// =============================================================================

export type AdminEnquiryStatus = "new" | "contacted" | "qualified" | "closed";

export const ENQUIRY_STATUS_LABELS: Record<AdminEnquiryStatus, string> = {
  new: "New",
  contacted: "Contacted",
  qualified: "Qualified",
  closed: "Closed",
};

export interface AdminEnquiryListItem {
  id: string;
  referenceNumber: string;
  name: string;
  company: string | null;
  email: string;
  phone: string;
  status: AdminEnquiryStatus;
  createdAt: string;
}

export interface AdminEnquiryListResponse {
  items: AdminEnquiryListItem[];
  total: number;
  page: number;
  limit: number;
}

export interface AdminEnquiryDivisionRef {
  id: string;
  name: string;
  slug: string;
}

export interface AdminEnquiryServiceRef {
  id: string;
  name: string;
  slug: string;
}

export interface AdminEnquiryDetail {
  id: string;
  referenceNumber: string;
  name: string;
  company: string | null;
  email: string;
  phone: string;
  projectLocation: string | null;
  message: string;
  status: AdminEnquiryStatus;
  division: AdminEnquiryDivisionRef | null;
  service: AdminEnquiryServiceRef | null;
  createdAt: string;
  updatedAt: string;
}

export interface AdminEnquiryNote {
  id: string;
  note: string;
  createdAt: string;
  authorName: string | null;
  authorRole: string | null;
}

export interface AdminEnquiryStatusHistoryEntry {
  id: string;
  oldStatus: AdminEnquiryStatus | null;
  newStatus: AdminEnquiryStatus;
  changedAt: string;
  actorName: string | null;
  actorRole: string | null;
}

export interface AdminEnquiryDetailResponse {
  enquiry: AdminEnquiryDetail;
  notes: AdminEnquiryNote[];
  statusHistory: AdminEnquiryStatusHistoryEntry[];
}

export interface AdminEnquiryStatusUpdateResponse {
  enquiryId: string;
  oldStatus: AdminEnquiryStatus | null;
  newStatus: AdminEnquiryStatus;
  changed: boolean;
  historyId: string | null;
}
