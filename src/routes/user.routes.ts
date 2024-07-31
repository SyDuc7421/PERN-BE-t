import express from "express";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { getMeHandler } from "../controllers/user.controller";

const router = express.Router();

// Protected route
router.use(deserializeUser, requireUser);

// getCurrentUser
router.get("/me", getMeHandler);

export default router;
