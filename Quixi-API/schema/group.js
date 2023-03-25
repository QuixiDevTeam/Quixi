const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    _id: {
        type: mongoose.mongo.ObjectId,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    img: {
        type: String,
        default: null,
        required: false,
    },
    budget: {
        type: Number,
        required: false,
    },
    category: {
        type: String,
        required: false,
        default: "general"
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdOn: {
        type: Date,
        default: Date.now,
        required: true,
    },
    updatedOn: {
        type: Date,
        default: Date.now,
        required: true,
    },
    expenses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expense',
        required: false,
    }],
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group