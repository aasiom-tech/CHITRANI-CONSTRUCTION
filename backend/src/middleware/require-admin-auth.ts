import type { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app-error.js";
import { getSupabasePublicClient } from "../lib/supabase-public.js";
import { getSupabaseAdminClient } from "../lib/supabase-admin.js";
import type { AdminIdentity } from "../types/admin-auth.js";

declare global {
  namespace Express {
    interface Request {
      admin?: AdminIdentity;
    }
  }
}

const BEARER_SCHEME = "Bearer";

function parseAuthorizationHeader(authHeader: string | undefined): string | null {
  if (!authHeader) return null;

  const [scheme, token] = authHeader.split(" ");
  if (scheme !== BEARER_SCHEME || !token) return null;

  return token;
}

export async function requireAdminAuth(
  req: Request,
  _res: Response,
  next: NextFunction,
): Promise<void> {
  const token = parseAuthorizationHeader(req.headers.authorization);

  if (!token) {
    next(new AppError(401, "UNAUTHENTICATED", "Authentication required."));
    return;
  }

  let authUserId: string;

  try {
    const supabase = getSupabasePublicClient();
    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data.user) {
      next(new AppError(401, "UNAUTHENTICATED", "Invalid or expired token."));
      return;
    }

    authUserId = data.user.id;
  } catch {
    next(new AppError(401, "UNAUTHENTICATED", "Token verification failed."));
    return;
  }

  try {
    const adminClient = getSupabaseAdminClient();
    const { data: adminUser, error } = await adminClient
      .from("admin_users")
      .select("id, auth_user_id, role, is_active")
      .eq("auth_user_id", authUserId)
      .single<{
        id: string;
        auth_user_id: string;
        role: AdminIdentity["role"];
        is_active: boolean;
      }>();

    if (error || !adminUser) {
      next(new AppError(403, "FORBIDDEN", "No active admin account found for this user."));
      return;
    }

    if (!adminUser.is_active) {
      next(new AppError(403, "FORBIDDEN", "Admin account is deactivated."));
      return;
    }

    req.admin = {
      authUserId: adminUser.auth_user_id,
      adminUserId: adminUser.id,
      role: adminUser.role,
    };

    next();
  } catch {
    next(new AppError(500, "INTERNAL_ERROR", "Admin authorization lookup failed."));
  }
}