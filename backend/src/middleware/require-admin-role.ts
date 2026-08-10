import type { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app-error.js";
import type { AdminRole } from "../types/admin-auth.js";

function isAllowedRole(userRole: AdminRole, allowedRoles: readonly AdminRole[]): boolean {
  if (userRole === "super_admin") return true;
  return allowedRoles.includes(userRole);
}

export function requireAdminRole(...allowedRoles: AdminRole[]) {
  if (allowedRoles.length === 0) {
    throw new Error("requireAdminRole requires at least one role");
  }

  return (req: Request, _res: Response, next: NextFunction): void => {
    const admin = req.admin;

    if (!admin) {
      next(new AppError(401, "UNAUTHENTICATED", "Authentication required."));
      return;
    }

    if (!isAllowedRole(admin.role, allowedRoles)) {
      next(
        new AppError(
          403,
          "FORBIDDEN",
          `Insufficient permissions. Required: ${allowedRoles.join(" or ")}.`,
        ),
      );
      return;
    }

    next();
  };
}

export function isSuperAdmin(req: Request): boolean {
  return req.admin?.role === "super_admin";
}

export function isAdminOrAbove(req: Request): boolean {
  const role = req.admin?.role;
  return role === "admin" || role === "super_admin";
}