import { env } from "../config/env";
import { supabase } from "./supabase";

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  meta: { requestId: string };
}

export interface ApiErrorBody {
  success: false;
  error: {
    code: string;
    message: string;
    fields?: Record<string, string>;
  };
  meta?: { requestId?: string };
}

export type ApiErrorKind = "unauthorized" | "forbidden" | "validation" | "server" | "other";

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly body: ApiErrorBody | null,
    public readonly kind: ApiErrorKind,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

function classifyStatus(status: number): ApiErrorKind {
  if (status === 401) return "unauthorized";
  if (status === 403) return "forbidden";
  if (status === 400 || status === 422) return "validation";
  if (status >= 500) return "server";
  return "other";
}

export async function apiFetch<T>(
  path: string,
  options: { method?: string; body?: unknown } = {},
): Promise<T> {
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${env.VITE_API_BASE_URL}${path}`, {
    method: options.method ?? "GET",
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const kind = classifyStatus(res.status);

  if (!res.ok) {
    let body: ApiErrorBody | null = null;
    try {
      body = (await res.json()) as ApiErrorBody;
    } catch {
      body = null;
    }
    throw new ApiError(
      res.status,
      body,
      kind,
      body?.error?.message ?? `API request failed: ${res.status}`,
    );
  }

  const json: ApiResponse<T> = await res.json();
  return json.data;
}
