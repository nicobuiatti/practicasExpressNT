const mainController = require("../controllers/mainController");
const consoleLogMiddleware = require("../middlewares/consoleLogMiddleware");
const { body } = require("express-validator");
const express = require("express");
const router = express.Router();

const registerValidations = [
    body("userName")
        .isLength({ min: 6 })
        .withMessage("Debes introducir un nombre de minimo 6 caracteres"),
    body("email").isEmail().withMessage("Debes completar un email válido"),
    body("password")
        .isLength({ min: 6 })
        .withMessage("debes introducir una contraseña de minimo 6 caracteres"),
];

router.get("/register", mainController.getRegister);

router.post("/register", registerValidations, mainController.postRegister);
module.exports = router;
