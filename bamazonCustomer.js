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
    connection.query("SELECT * FROM products", function(err,res) {
    if (err) throw err
    console.log(res)
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
      
      var choiceItemId = parseInt(answer.item)
      var choiceItemQuantity = parseInt(answer.quantity)
      var choiceItem = res[0]
      console.log(res)
        for (let i =0; i < res.length; i++) {
        var item = res[i]
          ///  Need to comapare item_id 
          console.log(item)
          console.log(item.item_id);
          console.log(choiceItemId)
        if (item.item_id == choiceItemId){
          choiceItem = item
        }       
      } console.log (choiceItem)
        console.log (item)
        console.log (choiceItemId)
        console.log (choiceItemQuantity)
          if (choiceItem.stock_quantity >= choiceItemQuantity) {
        
            console.log (choiceItemQuantity + " " +choiceItem.product_name+ " sold!")``
          // console.log (choiceItem.stock_quantity-choiceItemQuantity)
          /// Update stock and process order
          var query = "UPDATE products SET stock_quantity = " + (choiceItem.stock_quantity - choiceItemQuantity) + "WHERE item_id = " + choiceItemId + ";"
          
            connection.query(query, function(err, result){
          });
        } else { console.log ("Not enough stock, choose a smaller quantity of"+choiceItem.product_name)
          start()
        }
    })
  }

}

)}
