import { Router } from "express";
import * as PostController from "../controllers/postController";

const router = Router();

router.post('/:authorId', PostController.createPost);
router.get('/', PostController.getAllPosts);
router.get('/:postId', PostController.getPostById);
router.put('/:postId', PostController.updatePost);

export default router;