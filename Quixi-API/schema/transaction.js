const mongoose = require("mongoose");

const transcationSchema = new mongoose.Schema({
    _id: {
        type: mongoose.mongo.ObjectId,
    },
    amount: {
        type: Number,
        required: true,
    },
    createdOn: {
        type: Date,
        required: true,
    },
    updatedOn: {
        type: Date,
        required: true,
    },
    paidBy: {
        type: mongoose.mongo.ObjectId,
        required: true,
        ref: "User",
    },
    paidTo: {
        type: mongoose.mongo.ObjectId,
        required: true,
        ref: "User",
    },
    status: {
        type: String,
        required: true,
        default: "pending",
    },
});
