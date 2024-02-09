import { Router } from "express";
const router = Router();

import { postPrompt } from "../controllers/promptController.js";

router.post("/v1/engines/:model/completions", postPrompt);

export default router;
