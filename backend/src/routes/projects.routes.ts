import { Router } from "express";
import { ZodError } from "zod";
import { successResponse } from "../utils/api-response.js";
import { AppError } from "../errors/app-error.js";
import {
  listActiveIndustries,
  listActiveProjects,
  getProjectBySlug,
} from "../repositories/projects.repository.js";
import {
  projectSlugParamSchema,
  paginationQuerySchema,
} from "../validation/projects.schema.js";

const router = Router();

/* ------------------------------------------------------------------ */
/*  GET /api/v1/industries                                             */
/* ------------------------------------------------------------------ */

router.get("/industries", async (_req, res, next) => {
  try {
    const requestId = res.locals.requestId as string | undefined;
    const industries = await listActiveIndustries();
    res.status(200).json(successResponse(industries, requestId));
  } catch (err) {
    next(err);
  }
});

/* ------------------------------------------------------------------ */
/*  GET /api/v1/projects                                               */
/* ------------------------------------------------------------------ */

router.get("/projects", async (req, res, next) => {
  try {
    const requestId = res.locals.requestId as string | undefined;

    const { page, limit } = paginationQuerySchema.parse(req.query);

    const result = await listActiveProjects(page, limit);
    res.status(200).json(successResponse(result, requestId));
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

/* ------------------------------------------------------------------ */
/*  GET /api/v1/projects/:slug                                         */
/* ------------------------------------------------------------------ */

router.get("/projects/:slug", async (req, res, next) => {
  try {
    const requestId = res.locals.requestId as string | undefined;

    const { slug } = projectSlugParamSchema.parse(req.params);

    const project = await getProjectBySlug(slug);
    if (!project) {
      next(new AppError(404, "NOT_FOUND", "Project not found."));
      return;
    }

    res.status(200).json(successResponse(project, requestId));
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

export { router as projectsIndustriesRoutes };
