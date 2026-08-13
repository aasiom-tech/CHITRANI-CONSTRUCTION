import type { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app-error.js";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  const requestId = res.locals.requestId as string | undefined;

  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      error: {
        code: err.code,
        message: err.message,
        ...(err.fields ? { fields: err.fields } : {}),
      },
      meta: requestId ? { requestId } : undefined,
    });
    return;
  }

  console.error(`[${requestId ?? "unknown"}] ${err.name}: ${err.message}`);

  res.status(500).json({
    success: false,
    error: {
      code: "INTERNAL_ERROR",
      message: "An unexpected error occurred.",
    },
    meta: requestId ? { requestId } : undefined,
  });
}
