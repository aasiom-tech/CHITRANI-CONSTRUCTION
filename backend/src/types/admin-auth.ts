export type AdminRole = "super_admin" | "admin" | "viewer";

export interface AdminIdentity {
  authUserId: string;
  adminUserId: string;
  role: AdminRole;
}

export interface AdminAuthRequest extends Request {
  admin?: AdminIdentity;
}

import type { Request } from "express";