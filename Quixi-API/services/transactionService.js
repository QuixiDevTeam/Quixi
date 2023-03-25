const mongoose = require("mongoose");
const transactionSchema = require("../schema/transaction");

exports.createTransaction = async (transactionData, expenseId) => {
    transactionData._id = new mongoose.mongo.ObjectId();
    transactionData.expenseId = expenseId;
    const newTransaction = new transactionSchema(transactionData);
    await newTransaction.save();
    return newTransaction;
};

exports.fetchAllTransactions = async (expenseId) => {
};

exports.fetchTransactionById = async (transactionId) => {
};

exports.updateTransactionById = async (transactionId) => {
};

exports.deleteTransactionById = async (transactionId) => {
};
