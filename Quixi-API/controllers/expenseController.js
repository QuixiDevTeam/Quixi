const mongoose = require("mongoose");
const expenseService = require("../services/expenseService");

exports.createExpense = async (req, res) => {
    if (!req.body)
        return res.status(400).send({message: "Request body is required"});
    try {
        const expense = await expenseService.createExpense(req.body);
        res.status(201).json(newExpense);
    } catch (e) {
        res
            .status(500)
            .send({message: e.message || "There was an error saving the expense"});
    }
};

exports.findExpenses = async (req, res) => {
    try {
        const expenses = await expenseService.fetchAllExpenses();
        res.status(200).json(expenses);
    } catch (e) {
        res.status(500).send({message: e.message || "Server Error"});
    }
};

exports.findExpenseById = async (req, res) => {
    try {
        const expenses = await expenseService.fetchExpenseById();
        res.status(200).json(expenses);
    } catch (e) {
        res.status(500).send({message: e.message || "Server Error"});
    }
};

exports.updateExpenseById = async (req, res) => {
    try {
        const expenses = await expenseService.updateExpenseById();
        res.status(200).json(expenses);
    } catch (e) {
        res.status(500).send({message: e.message || "Server Error"});
    }
};

exports.deleteExpenseById = async (req, res) => {
    try {
        const expenses = await expenseService.deleteExpenseById();
        res.status(200).json(expenses);
    } catch (e) {
        res.status(500).send({message: e.message || "Server Error"});
    }
};

exports;
