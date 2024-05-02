import express from "express";
const router = express.Router();
import {createPost} from "../controllers/PostControllers";
import { authGuard, adminGuard } from "../middleware/authMiddleware";

router.post("/", authGuard, adminGuard, createPost);
router.put("/:slug", authGuard, adminGuard, createPost);

export default router;
