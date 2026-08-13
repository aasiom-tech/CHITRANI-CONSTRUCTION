import rateLimit, { ipKeyGenerator } from "express-rate-limit";
import { isIP } from "node:net";

function getClientIp(req: { ip?: string; socket?: { remoteAddress?: string }; headers?: Record<string, string | string[] | undefined> }): string {
  const raw = req.headers?.["x-real-ip"];
  const candidate = typeof raw === "string" ? raw.trim() : "";

  if (candidate && isIP(candidate) !== 0) {
    return candidate;
  }

  const fallback = req.ip ?? req.socket?.remoteAddress ?? "unknown";
  return fallback;
}

export const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  keyGenerator: (req) => {
    const ip = getClientIp(req);
    return ipKeyGenerator(ip);
  },
  handler: (_req, res) => {
    const requestId = res.locals.requestId as string | undefined;
    res.status(429).json({
      success: false,
      error: {
        code: "RATE_LIMITED",
        message: "Too many contact requests. Please try again later.",
      },
      meta: requestId ? { requestId } : undefined,
    });
  },
});
