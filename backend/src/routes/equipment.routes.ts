import { Router } from "express";
import { ZodError } from "zod";
import { successResponse } from "../utils/api-response.js";
import { AppError } from "../errors/app-error.js";
import {
  listActiveEquipment,
  getEquipmentBySlug,
} from "../repositories/catalog.repository.js";
import {
  categoryQuerySchema,
  slugParamSchema,
} from "../validation/catalog.schema.js";

const router = Router();

// GET /api/v1/equipment?category=...
router.get("/", async (req, res, next) => {
  try {
    const requestId = res.locals.requestId as string | undefined;

    const category = req.query.category;
    if (category !== undefined && typeof category === "string") {
      categoryQuerySchema.parse({ category });
    }

    const equipment = await listActiveEquipment(
      typeof category === "string" ? category : undefined,
    );
    res.status(200).json(successResponse(equipment, requestId));
  } catch (err) {
    if (err instanceof ZodError) {
      next(
        new AppError(
          400,
          "VALIDATION_ERROR",
          "Invalid query parameters.",
          Object.fromEntries(
            err.issues.map((i) => [i.path.join("."), i.message]),
          ),
        ),
      );
      return;
    }
    next(err);
  }
});

// GET /api/v1/equipment/:slug
router.get("/:slug", async (req, res, next) => {
  try {
    const requestId = res.locals.requestId as string | undefined;

    const { slug } = slugParamSchema.parse(req.params);

    const equipment = await getEquipmentBySlug(slug);
    if (!equipment) {
      next(
        new AppError(404, "NOT_FOUND", "Equipment not found."),
      );
      return;
    }

    res.status(200).json(successResponse(equipment, requestId));
  } catch (err) {
    if (err instanceof ZodError) {
      next(
        new AppError(
          400,
          "VALIDATION_ERROR",
          "Invalid path parameters.",
          Object.fromEntries(
            err.issues.map((i) => [i.path.join("."), i.message]),
          ),
        ),
      );
      return;
    }
    next(err);
  }
});

export { router as equipmentRoutes };
