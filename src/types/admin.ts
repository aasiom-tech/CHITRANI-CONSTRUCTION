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
