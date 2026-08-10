import { Router } from "express";
import { ZodError } from "zod";
import { successResponse } from "../utils/api-response.js";
import { AppError } from "../errors/app-error.js";
import { insertContactEnquiry } from "../repositories/contact.repository.js";
import { submitContactEnquirySchema } from "../validation/contact.schema.js";
import { contactRateLimiter } from "../middleware/contact-rate-limit.js";

const router = Router();

router.post("/", contactRateLimiter, async (req, res, next) => {
  try {
    const requestId = res.locals.requestId as string | undefined;

    const input = submitContactEnquirySchema.parse(req.body);

    const result = await insertContactEnquiry({
      name: input.name,
      company: input.company,
      email: input.email,
      phone: input.phone,
      division_id: input.divisionId,
      service_id: input.serviceId,
      project_location: input.projectLocation,
      message: input.message,
      consent: input.consent,
    });

    res.status(201).json(successResponse(result, requestId));
  } catch (err) {
    if (err instanceof ZodError) {
      next(
        new AppError(
          400,
          "VALIDATION_ERROR",
          "Please check the submitted fields.",
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

export { router as contactRoutes };
