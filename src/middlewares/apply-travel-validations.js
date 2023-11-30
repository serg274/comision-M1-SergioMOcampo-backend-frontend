import { validationResult } from "express-validator";

function cleanErrors(errors) {
  const errorsGroup = {};

  errors.forEach((error) => {
    const { path, location, msg } = error;

    if (!errorsGroup[location]) {
      errorsGroup[location] = {};
    }

    if (!errorsGroup[location][path]) {
      errorsGroup[location][path] = [];
    }

    errorsGroup[location][path].push(msg);
  });

  return errorsGroup;
}

export const applyValidations = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const cleanedErrors = cleanErrors(errors.array());
    return res.status(400).json({ errors: cleanedErrors });
  }
  next();
};
