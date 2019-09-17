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
  //Call id function
  .then(function(answer){
    if (answer.toBuyId === "ID"){
      postId()
    }
    /// Ending connection if user chooses exit
    else if (answer.toBuyId === "EXIT"){
      connection.end()
    }
  })
}

//Function for calling item by ID
function postId() {
  //prompt user for ID of Item
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What is the ID of the item that you would like to buy?"
      },
      {
        name: "quantity",
        type: "input",
        message: "What is the number of units you would like to buy?"
      }
    ])
.then (function(answer) {
  // Insert item into DB list
  connection.query(
    "INSERT INTO items SET ?",
    {
      item_id: answer.item,
      product_name: answer.name,
      department_name: answer.department,
      price: answer.price,
      stock_quantity: answer.stock
    }
  )
})
}