import { Router } from "express";
import { ZodError } from "zod";
import { successResponse } from "../../utils/api-response.js";
import { AppError } from "../../errors/app-error.js";
import { requireAdminAuth } from "../../middleware/require-admin-auth.js";
import { requireAdminRole } from "../../middleware/require-admin-role.js";
import {
  createEnquiryNoteSchema,
  enquiryIdParamSchema,
  listEnquiriesQuerySchema,
  updateEnquiryStatusSchema,
} from "../../validation/admin-enquiries.schema.js";
import {
  createEnquiryNoteService,
  getEnquiryDetailService,
  listEnquiriesService,
  transitionEnquiryStatusService,
} from "../../services/admin-enquiries.service.js";

const router = Router();

function formatZodIssues(error: ZodError): Record<string, string> {
  return Object.fromEntries(error.issues.map((i) => [i.path.join("."), i.message]));
}

router.get("/", requireAdminAuth, async (req, res, next) => {
  try {
    const requestId = res.locals.requestId as string | undefined;

    const parsed = listEnquiriesQuerySchema.safeParse(req.query);
    if (!parsed.success) {
      throw new AppError(
        400,
        "VALIDATION_ERROR",
        "Invalid list query parameters.",
        formatZodIssues(parsed.error),
      );
    }

    const result = await listEnquiriesService(
      parsed.data.page,
      parsed.data.limit,
      parsed.data.status,
    );

    res.status(200).json(successResponse(result, requestId));
  } catch (err) {
    next(err);
  }
});

router.get("/:id", requireAdminAuth, async (req, res, next) => {
  try {
    const requestId = res.locals.requestId as string | undefined;

    const parsed = enquiryIdParamSchema.safeParse(req.params);
    if (!parsed.success) {
      throw new AppError(
        400,
        "VALIDATION_ERROR",
        "Invalid enquiry id.",
        { id: "Invalid UUID format." },
      );
    }

    const detail = await getEnquiryDetailService(parsed.data.id);

    res.status(200).json(successResponse(detail, requestId));
  } catch (err) {
    next(err);
  }
});

router.patch(
  "/:id/status",
  requireAdminAuth,
  requireAdminRole("admin"),
  async (req, res, next) => {
    try {
      const requestId = res.locals.requestId as string | undefined;

      const paramsParsed = enquiryIdParamSchema.safeParse(req.params);
      if (!paramsParsed.success) {
        throw new AppError(
          400,
          "VALIDATION_ERROR",
          "Invalid enquiry id.",
          { id: "Invalid UUID format." },
        );
      }

      const bodyParsed = updateEnquiryStatusSchema.safeParse(req.body);
      if (!bodyParsed.success) {
        throw new AppError(
          400,
          "VALIDATION_ERROR",
          "Invalid status update.",
          formatZodIssues(bodyParsed.error),
        );
      }

      const admin = req.admin!;

      const result = await transitionEnquiryStatusService({
        enquiryId: paramsParsed.data.id,
        status: bodyParsed.data.status,
        adminUserId: admin.adminUserId,
      });

      res.status(200).json(successResponse(result, requestId));
    } catch (err) {
      next(err);
    }
  },
);

router.post(
  "/:id/notes",
  requireAdminAuth,
  requireAdminRole("admin"),
  async (req, res, next) => {
    try {
      const requestId = res.locals.requestId as string | undefined;

      const paramsParsed = enquiryIdParamSchema.safeParse(req.params);
      if (!paramsParsed.success) {
        throw new AppError(
          400,
          "VALIDATION_ERROR",
          "Invalid enquiry id.",
          { id: "Invalid UUID format." },
        );
      }

      const bodyParsed = createEnquiryNoteSchema.safeParse(req.body);
      if (!bodyParsed.success) {
        throw new AppError(
          400,
          "VALIDATION_ERROR",
          "Invalid note.",
          formatZodIssues(bodyParsed.error),
        );
      }

      const admin = req.admin!;

      const note = await createEnquiryNoteService({
        enquiryId: paramsParsed.data.id,
        note: bodyParsed.data.note,
        adminUserId: admin.adminUserId,
      });

      res.status(201).json(successResponse(note, requestId));
    } catch (err) {
      next(err);
    }
  },
);

export { router as adminEnquiryRoutes };