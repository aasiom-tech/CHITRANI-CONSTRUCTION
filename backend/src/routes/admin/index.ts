import { Router } from "express";
import { adminRoutes as meRoutes } from "./me.routes.js";

const router = Router();

router.use(meRoutes);

export { router as adminRoutes };