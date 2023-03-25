//Import the necessary libraries to the application
const express = require("express");

// Create an instance of the Express router
const route = express.Router();

const checkAuth = require('../middleware/authentication')

const userController = require("../controllers/userController");

route.post("/signup", userController.createUser);
route.post("/login", userController.loginUser);
route.get("/", checkAuth, userController.find);
route.patch("/:id", checkAuth, userController.updateUserById);
route.delete("/:id", checkAuth, userController.deleteUserById);

//Export router
module.exports = route;
