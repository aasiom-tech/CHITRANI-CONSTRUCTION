import { Router } from "express";
import { adminRoutes as meRoutes } from "./me.routes.js";
import { dashboardRoutes } from "./dashboard.routes.js";

const router = Router();

router.use(meRoutes);
router.use(dashboardRoutes);

export { router as adminRoutes };