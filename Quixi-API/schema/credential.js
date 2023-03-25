const mongoose = require('mongoose');
const {mongo} = require("mongoose");

const credentialSchema = new mongoose.Schema({
    _id: {type: mongoose.mongo.ObjectId},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    userId: {type: mongoose.mongo.ObjectId, required: true, unique: true, ref: 'User'}
});

const Credential = mongoose.model('Credential', credentialSchema);

module.exports = Credential;