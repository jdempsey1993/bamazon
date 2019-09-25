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
  password: "password",
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
  connection.query("SELECT * FROM products", function(err,res){
  inquirer
  .prompt({
    name: "toBuyId",
    type: "list",
    message: "Whould you like to enter an [ID] the item you would like to purchase or [EXIT]?",
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
})

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
    .then(function(answer){
      
      console.log(answer)

      //Define choices
      
      var choiceItemName = answer.action

      var choiceItemQuantity = answer.value

      var choiceItem
      
      for (let i =0; i < res.length; i++) {
        item = res[i]

        if (item.product_name === choiceItemName){
          choiceItem = item
        }
        
      } console.log (choiceItem)

      if (choiceItem.stock_quantity>= choiceItemQuantity) {
        console.log (choiceItemQuantity + " " +choiceItem.product_name+ "sold!")
        
        console.log (choiceItem.stock_quantity-choiceItemQuantity)

        /// Update stock and process order
        connection.query("UPDATE products SET stock_quantity=") + (chosenItem.stock_quantity - choiceItemQuantity)
      } else { console.log ("Not enough stock, choose a small quanitity of"+choiceItem.product_name)
      start()
    }
    }
  )
}
}
