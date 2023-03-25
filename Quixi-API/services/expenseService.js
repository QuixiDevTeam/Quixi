const mongoose = require("mongoose");
const expenseSchema = require("../schema/expense");
const transactionSchema = require("../schema/transaction");

exports.createExpense = async (expenseData) => {
    expenseData._id = new mongoose.mongo.ObjectId();
    const newExpense = new expenseSchema(expenseData);
    await newExpense.save();
    return newExpense;
};

exports.fetchAllExpenses = async () => {
    const expenses = await expenseSchema.find();
    return expenses;
};

exports.fetchExpenseById = async (expenseId) => {
};

exports.updateExpenseById = async (expenseId) => {
};

exports.deleteExpenseById = async (expenseId) => {
};

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
