const mongoose = require('mongoose');

/**
 * Represents a user account.
 * @typedef {Object} User
 * @property {string} _id - The unique identifier for the user.
 * @property {string} name - The name of the user.
 * @property {number} accountBalance - The balance of the user's account.
 * @property {string} email - The email address associated with the user's account.
 * @property {string} phoneNumber - The phone number associated with the user's account.
 * @property {string} address - The address associated with the user's account.
 * @property {string} profileImgUrl - The URL address associated with the user's profile image.
 */

// Define the user schema using Mongoose
const userSchema = new mongoose.Schema({
    _id: {
        type: mongoose.mongo.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    accountBalance: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    createdOn: {
        type: Date,
        default: new Date,
        required: true
    },
    updatedOn: {
        type: Date,
        default: new Date,
        required: true
    },
    verified: {
        type: Boolean,
        default: false,
        required: true
    }
    ,
    profileImgUrl: {
        type: String,
        default: null,
        required: false
    }
});

// Create the User model using the user schema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;