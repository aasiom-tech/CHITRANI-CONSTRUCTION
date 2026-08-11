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
