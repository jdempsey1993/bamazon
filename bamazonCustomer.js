var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// Prompt to ask user what they would like to buy 
function start(){
  inquirer
  .prompt({
    name: "toBuyId",
    type: "list",
    message: "What is the [ID] of the item you would like to purchase?",
    choices:["ID","EXIT"]
  })
  .then(function(answer)){
    if (answer.toBuyId === "ID"){
      postId()
    }
    else if (answer.toBuyId === "EXIT"){
      connection.end()
    }
  }
}
