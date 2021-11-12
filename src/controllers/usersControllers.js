const fetch = require("node-fetch");

const usersController = {
    getUsers: async (req, res) => {
        try {
            let response = await fetch("https://reqres.in/api/users");
            let myJson = await response.json();
            console.log(myJson);
            res.render("users", { users: myJson.data });
        } catch (err) {
            console.error(err);
        }
    },

    getUser: async (req, res) => {
        try {
            let response = await fetch(
                "https://reqres.in/api/users/" + req.params.id
            );
            let myJson = await response.json();
            console.log(myJson);
            res.render("user", { user: myJson.data });
        } catch (err) {
            console.error(error);
        }
    },
};
module.exports = usersController;
