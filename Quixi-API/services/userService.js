const userSchema = require("../schema/user");
const credentialSchema = require("../schema/credential");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (userData) => {
    userData._id = new mongoose.mongo.ObjectId();
    const newUser = new userSchema(userData);
    await newUser.save();
    return newUser;
};

exports.createCredential = async (userData, id) => {
    const _id = new mongoose.mongo.ObjectId();
    const pass = await bcrypt.hash(userData.password, 10);
    console.log(pass);
    const newCredential = new credentialSchema({
        _id: _id,
        email: userData.email,
        password: pass,
        userId: id,
    });
    await newCredential.save();
    return newCredential;
};

exports.loginUser = async (userData) => {
    try {
        const credential = await credentialSchema.findOne({
            email: userData.email,
        });
        if (!credential) {
            throw new Error("Invalid login credentials");
        }
        const validPassword = await bcrypt.compare(
            userData.password,
            credential.password
        );
        if (!validPassword) {
            throw new Error("Invalid login credentials");
        }

        const user = await userSchema.findById(credential.userId);
        if (!user) {
            throw new Error("User not found");
        }
        const token = jwt.sign(
            {userId: user._id, email: user.email},
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        );
        return {user, token};
    } catch (e) {
        throw new Error(e.message);
    }
};

exports.findUserById = async (userId) => {
    const user = await userSchema.findById(userId);
    return user;
};

exports.findUserByPhoneNumber = async (phoneNumber) => {
    const user = await userSchema.findOne({phoneNumber: phoneNumber});
    return user;
};

exports.fetchAllUsers = async () => {
    const users = await userSchema.find();
    return users;
};

exports.updateUserById = async (userId, userData) => {
    const updatedUser = await userSchema.findByIdAndUpdate(userId, userData, {
        new: true,
        runValidators: true,
    });
    return updatedUser;
};

exports.deleteUserById = async (userId) => {
    const deletedUser = await userSchema.findByIdAndDelete(userId);
    return deletedUser;
};
