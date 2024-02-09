import { Router } from "express";
const router = Router();

import promptRoutes from "./promptRoutes.js";

router.use("/", promptRoutes);

export default router;
