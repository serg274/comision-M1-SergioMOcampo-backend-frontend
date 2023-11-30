import { Router } from "express";
import {
  ctrlCreateUser,
  ctrlLoginUser,
} from "../controllers/user.controller.js";
import {
  loginUserValidations,
  createUserValidations,
} from "../models/validations/user-auth-validation.js";

const authRouter = Router();

authRouter.post("/login", loginUserValidations, ctrlLoginUser);
authRouter.post("/register", createUserValidations, ctrlCreateUser);

export { authRouter };
