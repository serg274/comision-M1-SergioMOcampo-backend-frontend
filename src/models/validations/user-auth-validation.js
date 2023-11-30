import { header } from "express-validator";
import { applyValidations } from "../../middlewares/apply-validations.js";

export const userAuthHeader = [
  header("authorization")
    .exists()
    .withMessage(
      "Debe enviar el encabezado { Authorization } con el token de usuario."
    ),
  applyValidations,
];
