import { Router } from "express";
import { ZodError } from "zod";
import { successResponse } from "../utils/api-response.js";
import { AppError } from "../errors/app-error.js";
import {
  listActiveServices,
  getServiceBySlug,
} from "../repositories/catalog.repository.js";
import {
  divisionSlugQuerySchema,
  slugParamSchema,
} from "../validation/catalog.schema.js";

const router = Router();

// GET /api/v1/services?divisionSlug=...
router.get("/", async (req, res, next) => {
  try {
    const requestId = res.locals.requestId as string | undefined;

    const divisionSlug = req.query.divisionSlug;
    if (divisionSlug !== undefined && typeof divisionSlug === "string") {
      divisionSlugQuerySchema.parse({ divisionSlug });
    }

    const services = await listActiveServices(
      typeof divisionSlug === "string" ? divisionSlug : undefined,
    );
    res.status(200).json(successResponse(services, requestId));
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

// GET /api/v1/services/:slug
router.get("/:slug", async (req, res, next) => {
  try {
    const requestId = res.locals.requestId as string | undefined;

    const { slug } = slugParamSchema.parse(req.params);

    const service = await getServiceBySlug(slug);
    if (!service) {
      next(
        new AppError(404, "NOT_FOUND", "Service not found."),
      );
      return;
    }

    res.status(200).json(successResponse(service, requestId));
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

export { router as serviceRoutes };
