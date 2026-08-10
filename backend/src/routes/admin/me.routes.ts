import { Router } from "express";
import { successResponse } from "../../utils/api-response.js";
import { requireAdminAuth } from "../../middleware/require-admin-auth.js";

const router = Router();

router.get("/me", requireAdminAuth, (req, res) => {
  const admin = req.admin!;
  const requestId = res.locals.requestId as string | undefined;

  res.status(200).json(
    successResponse(
      {
        id: admin.adminUserId,
        role: admin.role,
      },
      requestId,
    ),
  );
});

export { router as adminRoutes };