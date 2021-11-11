// const { json } = require("express");
const express = require("express");
const app = express();
const PORT = 3000;
const mainRouter = require("./src/routes/mainRoutes");
const session = require("express-session");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: "asd" }));

app.set("view engine", "ejs");

app.use("/", mainRouter);

app.listen(PORT, () => console.log(`esta andando en el puerto ${PORT}`));

//-------------------------

//validaciones
// const validateForm = [
//     body("userName")
//         .isLength({ min: 6 })
//         .withMessage("Debes introducir un nombre de minimo 6 caracteres"),
//     body("email").isEmail().withMessage("Debes completar un email válido"),
//     body("password")
//         .isLength({ min: 6 })
//         .withMessage("debes introducir una contraseña de minimo 6 caracteres"),
// ];
// app.get("/", (req, res) => {
//     res.render("index");
// });
// app.post("/", validateForm, (req, res) => {
//     let errors = validationResult(req);
//     if (errors.isEmpty()) {
//         actions.addUsers(req.body);
//         res.send("Ok");
//     } else {
//         res.render("index", { errors: errors.array(), old: req.body });
//     }

//     // if (errors.isEmpty()) {
//     //     res.send("Todo ok");
//     // } else {
//     //     res.send("error");
//     // }
// });

// app.listen(PORT, () => console.log("esta andando"));
