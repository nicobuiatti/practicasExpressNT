const usersController = require("../controllers/usersControllers");
const express = require("express");
const router = express.Router();

router.get("/", usersController.getUsers);

router.get("/:id", usersController.getUser);

module.exports = router;
