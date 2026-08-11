import { env } from "../config/env";

interface ApiResponse<T> {
  success: boolean;
  data: T;
  meta?: { requestId: string };
}

interface ApiErrorBody {
  success: false;
  error: { code: string; message: string; fields?: Record<string, string> };
}

export class PublicApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly code: string,
    message: string,
    public readonly fields?: Record<string, string>,
  ) {
    super(message);
    this.name = "PublicApiError";
  }
}

export async function publicFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${env.VITE_API_BASE_URL}${path}`, {
    method: "GET",
    headers: { "Accept": "application/json" },
  });

  if (!res.ok) {
    let body: ApiErrorBody | null = null;
    try { body = await res.json() as ApiErrorBody; } catch { /* ignore */ }
    throw new PublicApiError(res.status, body?.error?.code ?? "UNKNOWN", body?.error?.message ?? "Request failed", body?.error?.fields);
  }

  const json: ApiResponse<T> = await res.json();
  return json.data;
}

export async function publicPost<T>(path: string, payload: unknown): Promise<T> {
  const res = await fetch(`${env.VITE_API_BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let body: ApiErrorBody | null = null;
    try { body = await res.json() as ApiErrorBody; } catch { /* ignore */ }
    throw new PublicApiError(res.status, body?.error?.code ?? "UNKNOWN", body?.error?.message ?? "Request failed", body?.error?.fields);
  }

  const json: ApiResponse<T> = await res.json();
  return json.data;
}
