import { Router } from "express";

import {
  ctrlCreatePost,
  ctrlListPosts,
  ctrlGetPostById,
  ctrlUpdatePost,
  ctrlDeletePost,
} from "../controllers/travel.controller.js"; // Cambiado el controlador

import {
  createPostValidations,
  deletePostValidations,
  getPostValidations,
  listPostValidations,
  updatePostValidations,
} from "../models/validations/travel-post-validation.js"; // Cambiado la validación

const travelRouter = Router(); // Cambiado el nombre del enrutador

travelRouter.post("/:playlistId/viajes", createPostValidations, ctrlCreatePost); // Cambiada la ruta
travelRouter.get("/:playlistId/viajes", listPostValidations, ctrlListPosts); // Cambiada la ruta

travelRouter.get(
  "/:playlistId/viajes/:PostId",
  getPostValidations,
  ctrlGetPostById
);
travelRouter.patch(
  "/:playlistId/viajes/:PostId",
  updatePostValidations,
  ctrlUpdatePost
);
travelRouter.delete(
  "/:playlistId/viajes/:PostId",
  deletePostValidations,
  ctrlDeletePost
);

export { travelRouter };
