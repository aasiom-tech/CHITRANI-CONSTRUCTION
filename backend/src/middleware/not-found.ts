import type { Request, Response } from "express";

export function notFound(req: Request, res: Response): void {
  const requestId = res.locals.requestId as string | undefined;
  res.status(404).json({
    success: false,
    error: {
      code: "NOT_FOUND",
      message: "The requested resource was not found.",
    },
    meta: requestId ? { requestId } : undefined,
  });
}
