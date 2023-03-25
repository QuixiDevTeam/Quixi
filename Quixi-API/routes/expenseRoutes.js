const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/authentication");
const expenseController = require("../controllers/expenseController");
const transactionController = require("../controllers/transactionController");

router.post("/", checkAuth, expenseController.createExpense);
router.get("/", checkAuth, expenseController.findExpenses);
router.get("/:id", checkAuth, expenseController.findExpenseById);
router.patch("/:id", checkAuth, expenseController.updateExpenseById);
router.delete("/:id", checkAuth, expenseController.deleteExpenseById);

router.post(
    "/:id/transaction",
    checkAuth,
    transactionController.createTransaction
);
router.get(
    "/:id/transaction",
    checkAuth,
    transactionController.fetchAllTransactions
);
router.get(
    "/:id/transaction/:transactionId",
    checkAuth,
    transactionController.fetchTransactionById
);
router.patch(
    "/:id/transaction/:transactionId",
    checkAuth,
    transactionController.updateTransactionById
);
router.delete(
    "/:id/transaction/:transactionId",
    checkAuth,
    transactionController.deleteTransactionById
);

module.exports = router;
