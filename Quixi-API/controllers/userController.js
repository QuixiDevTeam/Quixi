const mongoose = require("mongoose");
const userService = require("../services/userService");

//Create and save a new user
exports.createUser = async (req, res) => {
    if (!req.body)
        return res.status(400).send({message: "Request body is required"});

    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        //Create a new user schema
        const newUser = await userService.createUser(req.body);
        const newCredential = await userService.createCredential(
            req.body,
            newUser._id
        );
        await session.commitTransaction();
        res.status(201).json({user: newUser});
    } catch (e) {
        await session.abortTransaction();
        res
            .status(500)
            .send({message: e.message || "There was an error saving the user"});
    } finally {
        await session.endSession();
    }
};

exports.loginUser = async (req, res) => {
    try {
        const user = await userService.loginUser(req.body);
        res.status(200).json({user: user.user, token: user.token});
    } catch (e) {
        res.status(500).send({message: e.message || "Server Error"});
    }
};

exports.find = async (req, res) => {
    try {
        let user;
        if (req.query.id) {
            user = await userService.findUserById(req.query.id);
        } else if (req.query.phoneNumber) {
            user = await userService.findUserByPhoneNumber(req.query.phoneNumber);
        } else {
            user = await userService.fetchAllUsers();
        }
        if (!user) {
            res.status(404).json({message: "User not found"});
            return;
        }
        res.status(200).json(user);
    } catch (e) {
        res.status(500).json({message: e.message || "Server Error"});
    }
};

exports.updateUserById = async (req, res) => {
    try {
        if (!req.body)
            return res
                .status(400)
                .send({message: "The body cannot be empty to update a user"});
        const id = req.params.id;
        req.body.updatedOn = new Date();
        const user = await userService.updateUserById(id, req.body);
        if (!user) return res.status(404).json({message: "User not found"});
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send({message: e.message || "Error when updating user"});
    }
};

exports.deleteUserById = async (req, res) => {
    try {
        if (!req.body)
            return res
                .status(400)
                .send({message: "The body cannot be empty to update a user"});
        const id = req.params.id;
        const user = await userService.deleteUserById(id);
        if (!user) return res.status(404).json({message: "User not found"});
        res.status(200).send({message: "User was deleted successfully"});
    } catch (e) {
        res.status(500).send({message: e.message || "Error when deleting user"});
    }
};
