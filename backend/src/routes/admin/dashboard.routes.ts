import { Router } from "express";
import { successResponse } from "../../utils/api-response.js";
import { requireAdminAuth } from "../../middleware/require-admin-auth.js";
import { getDashboardSummary } from "../../repositories/dashboard.repository.js";

const router = Router();

router.get("/dashboard", requireAdminAuth, async (_req, res, next) => {
  try {
    const requestId = res.locals.requestId as string | undefined;
    const summary = await getDashboardSummary();
    res.status(200).json(successResponse(summary, requestId));
  } catch (err) {
    next(err);
  }
});

export { router as dashboardRoutes };