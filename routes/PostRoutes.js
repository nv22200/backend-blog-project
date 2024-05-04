import express from "express";
const router = express.Router();
import { 
  createPost, 
  updatePost,
  deletePost,
  getPost,
  getAllPosts,
} from "../controllers/PostControllers";
import { authGuard, adminGuard } from "../middleware/authMiddleware";

router.route("/").post(authGuard, adminGuard, createPost).get(getAllPosts);
router
  .route("/:slug")
  .put(authGuard, adminGuard, updatePost)
  .delete(authGuard, adminGuard, deletePost)
  .get(getPost)
  
export default router;
