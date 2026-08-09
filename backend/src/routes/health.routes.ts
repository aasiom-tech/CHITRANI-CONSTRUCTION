import { Router } from "express";
import { successResponse } from "../utils/api-response.js";

const router = Router();

router.get("/", (req, res) => {
  const requestId = res.locals.requestId as string | undefined;
  res.status(200).json(
    successResponse(
      { status: "ok" },
      requestId,
    ),
  );
});

export { router as healthRoutes };
