import { param, body } from "express-validator";
import { isValidObjectId } from "mongoose";
import { applyValidations } from "../../middlewares/apply-validations.mjs";

export const createCommentValidations = [
  body("content")
    .notEmpty()
    .withMessage("El campo { content } no debe estar vacío.")
    .isString()
    .withMessage("El campo { content } debe ser un string."),
  param("travelPostId")
    .notEmpty()
    .withMessage("El parámetro { travelPostId } no debe estar vacío.")
    .isString()
    .withMessage("El parámetro { travelPostId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parámetro { travelPostId } debe ser una ID válida."),
  applyValidations,
];

export const listCommentsValidations = [
  param("travelPostId")
    .notEmpty()
    .withMessage("El parámetro { travelPostId } no debe estar vacío.")
    .isString()
    .withMessage("El parámetro { travelPostId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parámetro { travelPostId } debe ser una ID válida."),
  applyValidations,
];

export const getCommentValidations = [
  param("travelPostId")
    .notEmpty()
    .withMessage("El parámetro { travelPostId } no debe estar vacío.")
    .isString()
    .withMessage("El parámetro { travelPostId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parámetro { travelPostId } debe ser una ID válida."),
  param("commentId")
    .notEmpty()
    .withMessage("El parámetro { commentId } no debe estar vacío.")
    .isString()
    .withMessage("El parámetro { commentId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parámetro { commentId } debe ser una ID válida."),
  applyValidations,
];

export const updateCommentValidations = [
  param("travelPostId")
    .notEmpty()
    .withMessage("El parámetro { travelPostId } no debe estar vacío.")
    .isString()
    .withMessage("El parámetro { travelPostId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parámetro { travelPostId } debe ser una ID válida."),
  param("commentId")
    .notEmpty()
    .withMessage("El parámetro { commentId } no debe estar vacío.")
    .isString()
    .withMessage("El parámetro { commentId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parámetro { commentId } debe ser una ID válida."),
  body("content")
    .optional()
    .notEmpty()
    .withMessage("El campo { content } no debe estar vacío.")
    .isString()
    .withMessage("El campo { content } debe ser un string."),
  applyValidations,
];

export const deleteCommentValidations = [
  param("travelPostId")
    .notEmpty()
    .withMessage("El parámetro { travelPostId } no debe estar vacío.")
    .isString()
    .withMessage("El parámetro { travelPostId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parámetro { travelPostId } debe ser una ID válida."),
  param("commentId")
    .notEmpty()
    .withMessage("El parámetro { commentId } no debe estar vacío.")
    .isString()
    .withMessage("El parámetro { commentId } debe ser un string.")
    .custom(isValidObjectId)
    .withMessage("El parámetro { commentId } debe ser una ID válida."),
  applyValidations,
];
