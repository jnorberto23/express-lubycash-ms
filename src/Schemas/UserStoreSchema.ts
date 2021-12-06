import { body } from "express-validator";

const schema = [
  body("email")
    .isEmail()
    .withMessage("email deve conter um endereço de email válido."),
  body("password")
    .isLength({ min: 5 })
    .withMessage("password deve conter ao menos 5 caracteres."),
  body("phone")
    .matches(/\([1-9]\d\)\s9?\d{4}-\d{4}/)
    .withMessage("phone deve conter um número de telefone válido."),
  body("cpf_number")
    .matches(/^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/)
    .withMessage("cpf deve conter um número de cpf válido, com 11 caracteres."),
  body("address")
    .isLength({ min: 5 })
    .withMessage("address deve conter ao menos 5 caracteres."),
  body("city")
    .isLength({ min: 2 })
    .withMessage("address deve conter ao menos 2 caracteres."),
  body("state")
    .isLength({ min: 2 })
    .withMessage("state deve conter 2 caracteres."),
];

export default schema;
