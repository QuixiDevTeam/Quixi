const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    _id: {
        type: mongoose.mongo.ObjectId,
    },
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    createdOn: {
        type: Date,
        required: true,
        default: Date.now,
    },
    updatedOn: {
        type: Date,
        required: true,
    },
    category: {
        type: String,
        required: true,
        default: "general",
    },
    transactions: {
        type: Array,
        required: true,
        ref: "Transaction",
    },
    receiptImg: {
        type: String,
        required: false,
        default: null,
    },
    createdBy: {
        type: mongoose.mongo.ObjectId,
        required: true,
        ref: "User",
    },
    splitMethod: {
        type: String,
        required: true,
    },
});

const Expense = mongoose.model("Expense", expenseSchema);
