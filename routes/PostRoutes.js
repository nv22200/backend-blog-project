import express from "express";
const router = express.Router();
import { 
  createPost, 
  updatePost,
  deletePost,
} from "../controllers/PostControllers";
import { authGuard, adminGuard } from "../middleware/authMiddleware";

router.post("/", authGuard, adminGuard, createPost);
router
  .route("/:slug")
  .put(authGuard, adminGuard, updatePost)
  .delete(authGuard, adminGuard, deletePost);

export default router;
