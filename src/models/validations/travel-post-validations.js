import { body, param } from "express-validator";
import { isValidObjectId } from "mongoose";
import { applyValidations } from "../../middlewares/apply-validations.mjs";

export const createTravelPostValidations = [
  body("title")
    .notEmpty()
    .withMessage("El campo { title } no debe estar vacío.")
    .isString()
    .withMessage("El campo { title } debe ser un string."),
  body("content")
    .notEmpty()
    .withMessage("El campo { content } no debe estar vacío.")
    .isString()
    .withMessage("El campo { content } debe ser un string."),
  param("userId")
    .notEmpty()
    .withMessage("El parámetro { userId } no debe estar vacío.")
    .isString()
    .withMessage("El parámetro { userId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parámetro { userId } debe ser una ID válida."),
  applyValidations,
];

export const listTravelPostsValidations = [
  param("userId")
    .notEmpty()
    .withMessage("El parámetro { userId } no debe estar vacío.")
    .isString()
    .withMessage("El parámetro { userId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parámetro { userId } debe ser una ID válida."),
  applyValidations,
];

export const deleteTravelPostValidations = [
  param("userId")
    .notEmpty()
    .withMessage("El parámetro { userId } no debe estar vacío.")
    .isString()
    .withMessage("El parámetro { userId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parámetro { userId } debe ser una ID válida."),
  param("postId")
    .notEmpty()
    .withMessage("El parámetro { postId } no debe estar vacío.")
    .isString()
    .withMessage("El parámetro { postId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parámetro { postId } debe ser una ID válida."),
  applyValidations,
];

export const getTravelPostValidations = [
  param("userId")
    .notEmpty()
    .withMessage("El parámetro { userId } no debe estar vacío.")
    .isString()
    .withMessage("El parámetro { userId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parámetro { userId } debe ser una ID válida."),
  param("postId")
    .notEmpty()
    .withMessage("El parámetro { postId } no debe estar vacío.")
    .isString()
    .withMessage("El parámetro { postId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parámetro { postId } debe ser una ID válida."),
  applyValidations,
];

export const updateTravelPostValidations = [
  param("userId")
    .notEmpty()
    .withMessage("El parámetro { userId } no debe estar vacío.")
    .isString()
    .withMessage("El parámetro { userId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parámetro { userId } debe ser una ID válida."),
  param("postId")
    .notEmpty()
    .withMessage("El parámetro { postId } no debe estar vacío.")
    .isString()
    .withMessage("El parámetro { postId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parámetro { postId } debe ser una ID válida."),
  body("title")
    .optional()
    .notEmpty()
    .withMessage("El campo { title } no debe estar vacío.")
    .isString()
    .withMessage("El campo { title } debe ser un string."),
  body("content")
    .optional()
    .notEmpty()
    .withMessage("El campo { content } no debe estar vacío.")
    .isString()
    .withMessage("El campo { content } debe ser un string."),
  applyValidations,
];
