const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, { useUnifiedTopology: true });

client.connect(err => {
  if (err) throw err;

  const db = client.db("doughDB");

  const users = [
    {
      "username": "usertest",
      "password": "123456",
      "baseCurrency": "PHP",
      "accounts": [],
      "email": "test@email.com"
    }
  ];

  const accountTypes = [
    {
      "name": "Cash",
      "description": "Physical money"
    }
  ];

  const accounts = [
    {
        "userID": "<reference_to_user_id>",
        "accountType": "<reference_to_accounttype_id>",
        "balance": 5000
      }
  ];

  const categories = [
    {
        "userID": "<reference_to_user_id>",
        "name": "Groceries",
        "type": "Expense"
      }
  ];

  const loanDetails = [
    {
        "transactionID": "<reference_to_transaction_id>",
        "amount": 1000,
        "interestRate": 5,
        "startDate": "<ISODate>",
        "endDate": "<ISODate>",
        "loanType": "<reference_to_loantype_id"
      }
  ]

  const loanTypes = [
    {
        "userID": "<reference_to_user_id>",
        "name": "Personal Loan",
        "description": "A loan for personal expenses."
      }
  ]

  const transactions = [
    {
        "userID": "<reference_to_user_id>",
        "accountID": "<reference_to_account_id>",
        "categoryID": "<reference_to_category_id>",
        "type": "Loan",
        "amount": 1000,
        "status": "Unpaid",
        "date": "<ISODate>",
        "periodic": false,
        "loanDetailsID": "<reference_to_loandetails_id>"
      }
  ]

  db.collection("Users").insertMany(users, function(err, res) {
    if (err) throw err;
    console.log("Users inserted");
  });

  db.collection("AccountTypes").insertMany(accountTypes, function(err, res) {
    if (err) throw err;
    console.log("Account Types inserted");
  });

  db.collection("Accounts").insertMany(accounts, function(err, res) {
    if (err) throw err;
    console.log("Accounts inserted");
  });

  db.collection("Categories").insertMany(categories, function(err, res) {
    if (err) throw err;
    console.log("Categories inserted");
  });

  db.collection("LoanDetails").insertMany(loanDetails, function(err, res) {
    if (err) throw err;
    console.log("LoanDetails inserted");
  });

  db.collection("LoanTypes").insertMany(loanTypes, function(err, res) {
    if (err) throw err;
    console.log("LoanTypes inserted");
  });
 
  db.collection("Transactions").insertMany(transactions, function(err, res) {
    if (err) throw err;
    console.log("Transactions inserted");
  });
 


  client.close();
});
