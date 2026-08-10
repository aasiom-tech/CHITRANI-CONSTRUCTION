import type { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app-error.js";
import type { AdminRole } from "../types/admin-auth.js";

const ROLE_HIERARCHY: Record<AdminRole, number> = {
  viewer: 1,
  admin: 2,
  super_admin: 3,
};

function roleMeetsRequirement(userRole: AdminRole, requiredRoles: AdminRole[]): boolean {
  const userLevel = ROLE_HIERARCHY[userRole];
  return requiredRoles.some((r) => ROLE_HIERARCHY[r] <= userLevel);
}

export function requireAdminRole(...requiredRoles: AdminRole[]) {
  if (requiredRoles.length === 0) {
    throw new Error("requireAdminRole requires at least one role");
  }

  return (req: Request, _res: Response, next: NextFunction): void => {
    const admin = req.admin;

    if (!admin) {
      next(new AppError(401, "UNAUTHENTICATED", "Authentication required."));
      return;
    }

    if (!roleMeetsRequirement(admin.role, requiredRoles)) {
      next(
        new AppError(
          403,
          "FORBIDDEN",
          `Insufficient permissions. Required: ${requiredRoles.join(" or ")}.`,
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
  return req.admin !== undefined && ROLE_HIERARCHY[req.admin.role] >= ROLE_HIERARCHY.admin;
}