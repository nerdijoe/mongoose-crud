var Transaction = require("../models/transaction");

exports.create = (req, res, next) => {

/*

insert raw (select json) in postman
{
  "memberid": "thebeard",
  "days": 6,
  "out_date": "2017/04/26",
  "due_date": "2017/04/26",
  "in_date": "2017/04/26",
  "fine": 2000,
  "booklist":
    [
      "58ff3521a7e3d7184cd8d2fd",
      "58ff358ef4b47f185de3dd2f"
    ]
}

*/

  console.log(req.body);
  // console.log(JSON.parse(req.body));

  var newTransaction = Transaction({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    booklist: req.body.booklist
  });

  newTransaction.save( (err, transaction) => {
    if (err) res.send(err);

    res.send(transaction);
  })


}

exports.get_transactions = (req, res, next) => {
  Transaction.find( (err, transactions) => {
    if(err) res.send(err);

    res.send(transactions);
  })
}

exports.get_transaction = (req, res, next) => {
  Transaction.find({_id: req.params.id}, (err, transaction) => {
    if(err) res.send(err);

    res.send(transaction);
  })
}

exports.delete = (req, res, next) => {
  Transaction.findByIdAndRemove( req.params.id, (err, transaction) => {
    var message = {
      message: "Transaction has been deleted successfully.",
      id: transaction._id
    };
    res.send(message);
  })
}

exports.update = (req, res, next) => {
  Transaction.findById(req.params.id, (err, transaction) => {
    if (err) res.send(err);

    transaction.memberid = req.body.memberid || transaction.memberid;
    transaction.days = req.body.days || transaction.days;
    transaction.out_date = req.body.out_date || transaction.out_date;
    transaction.due_date = req.body.due_date || transaction.due_date;
    transaction.in_date = req.body.in_date || transaction.in_date;
    transaction.fine = req.body.fine || transaction.fine;
    transaction.booklist = req.body.booklist || transaction.booklist;

    // after updating the attributes, we need to save it
    transaction.save( (err, transaction) => {
      if (err) res.send(err);

      res.send(transaction);
    })

  })}
