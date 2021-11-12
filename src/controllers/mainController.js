const fs = require("fs");
const { json } = require("express");
const { validationResult } = require("express-validator");
const session = require("express-session");

const actions = {
    addUsers: (user) => {
        let users = JSON.parse(fs.readFileSync("data/users.json", "utf-8"));
        let ids = users.map((x) => x.id);

        // let idMax = ids.reduce((acc,elem)=>acc<elem? acc:elem)
        let idMax = Math.max(...ids);

        let userWithId = { id: idMax + 1, ...user };
        users.push(userwithId);
        fs.writeFileSync("data/users.json", JSON.stringify(users, null, "  "));
    },
};

const mainController = {
    getRegister: (req, res) => {
        res.render("register");
    },

    postRegister: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            // actions.addUsers(req.body);
            req.session.loggedUser = req.body;
            res.send("Ok");
        } else {
            res.render("register", { errors: errors.array(), old: req.body });
        }
    },
    getLogin: (req, res) => {
        res.render("login");
    },
    postLogin: (req, res) => {
        let users = JSON.parse(
            fs.readFileSync("../../data/users.json", "utf-8")
        );
        console.log(users);
    },
};
module.exports = mainController;
