import { Router } from "express";
import {
  ctrlCreateTravelPost,
  ctrlListTravelPosts,
  ctrlGetTravelPostById,
  ctrlAddComment,
  ctrlDeleteComment,
} from "../controllers/travel.controller.mjs";
import {
  createTravelPostValidations,
  listTravelPostsValidations,
  getTravelPostValidations,
  addCommentValidations,
  deleteCommentValidations,
} from "../models/validations/travel-post-validation.mjs";

const travelRouter = Router();

travelRouter.post("/", createTravelPostValidations, ctrlCreateTravelPost);
travelRouter.get("/", listTravelPostsValidations, ctrlListTravelPosts);

travelRouter.get("/:postId", getTravelPostValidations, ctrlGetTravelPostById);
travelRouter.post("/:postId/comments", addCommentValidations, ctrlAddComment);
travelRouter.delete(
  "/:postId/comments/:commentId",
  deleteCommentValidations,
  ctrlDeleteComment
);

export { travelRouter };
