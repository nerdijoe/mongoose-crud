var express = require('express');
var router = express.Router();
var transaction_controller = require("../controllers/transactionController");


// create transaction
router.post('/', transaction_controller.create);

// get all transactions
router.get('/', transaction_controller.get_transactions);

// get one transaction
router.get('/:id', transaction_controller.get_transaction);

// delete
router.delete('/:id', transaction_controller.delete);

// update
router.put('/:id', transaction_controller.update);

module.exports = router;
