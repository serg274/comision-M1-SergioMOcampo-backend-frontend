import { Router } from "express";
import {
  ctrlCreateUser,
  ctrlLoginUser,
} from "../controllers/user.controller.mjs";
import {
  loginUserValidations,
  createUserValidations,
} from "../models/validations/user-auth-validation.mjs";

const authRouter = Router();

authRouter.post("/login", loginUserValidations, ctrlLoginUser);
authRouter.post("/register", createUserValidations, ctrlCreateUser);

export { authRouter };
