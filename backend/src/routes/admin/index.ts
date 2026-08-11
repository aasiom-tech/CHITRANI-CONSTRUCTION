import { Router } from "express";
import { adminRoutes as meRoutes } from "./me.routes.js";
import { dashboardRoutes } from "./dashboard.routes.js";
import { adminEnquiryRoutes } from "./enquiries.routes.js";

const router = Router();

router.use(meRoutes);
router.use(dashboardRoutes);
router.use("/enquiries", adminEnquiryRoutes);

export { router as adminRoutes };