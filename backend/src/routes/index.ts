import { Router } from "express";
import { healthRoutes } from "./health.routes.js";
import { businessDivisionRoutes } from "./business-divisions.routes.js";
import { serviceRoutes } from "./services.routes.js";
import { equipmentRoutes } from "./equipment.routes.js";

const router = Router();

router.use("/health", healthRoutes);
router.use("/business-divisions", businessDivisionRoutes);
router.use("/services", serviceRoutes);
router.use("/equipment", equipmentRoutes);

export { router };
