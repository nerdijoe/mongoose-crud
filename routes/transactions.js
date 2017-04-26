var express = require('express');
var router = express.Router();
var transaction_controller = require("../controllers/transactionController");


// create transaction
router.post('/', transaction_controller.create);

// get all transactions
router.get('/', transaction_controller.get_transactions);

module.exports = router;
