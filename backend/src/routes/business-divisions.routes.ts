import { Router } from "express";
import { successResponse } from "../utils/api-response.js";
import { listActiveDivisions } from "../repositories/catalog.repository.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const requestId = res.locals.requestId as string | undefined;
    const divisions = await listActiveDivisions();
    res.status(200).json(successResponse(divisions, requestId));
  } catch (err) {
    next(err);
  }
});

export { router as businessDivisionRoutes };
