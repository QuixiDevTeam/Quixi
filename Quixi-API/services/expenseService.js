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
    const expense = await expenseSchema.findById(expenseId);
    return expense;
};

exports.updateExpenseById = async (expenseId) => {
    const updatedExpense = await expenseSchema.findByIdAndUpdate(expenseId, updatedData, { new: true });
    return updatedExpense;
};

exports.deleteExpenseById = async (expenseId) => {
    const deletedExpense = await expenseSchema.findByIdAndDelete(expenseId);
    return deletedExpense;
};

exports.createTransaction = async (transactionData, expenseId) => {
    transactionData._id = new mongoose.mongo.ObjectId();
    transactionData.expenseId = expenseId;
    const newTransaction = new transactionSchema(transactionData);
    await newTransaction.save();
    return newTransaction;
};

exports.fetchAllTransactions = async (expenseId) => {
    const transactions = await transactionSchema.find({ expenseId });
    return transactions;
};

exports.fetchTransactionById = async (transactionId) => {
    const transaction = await transactionSchema.findById(transactionId);
    return transaction;
};

exports.updateTransactionById = async (transactionId) => {
    const updatedTransaction = await transactionSchema.findByIdAndUpdate(transactionId, updatedData, { new: true });
    return updatedTransaction;
};

exports.deleteTransactionById = async (transactionId) => {
    const deletedTransaction = await transactionSchema.findByIdAndDelete(transactionId);
    return deletedTransaction;
};
