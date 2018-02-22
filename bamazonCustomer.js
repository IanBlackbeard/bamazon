// Dependencies
var mysql = require('mysql');
var inquirer = require('inquirer');

// Connection
var connection = mysql.createConnection({
  port: 8889,
  host: "localhost",
  user: "root",
  password: "root",
  database: "bamazon_db"
});
console.log("Connected to bamazon_db!");

// Display database list 
function productList(){
  connection.query("SELECT * FROM products", function (err, result) {
    console.log(result);
  })
  console.log("-------------------------------------");
  // orderRequest();
}

productList();
orderRequest();

// Order request
function orderRequest() {
  inquirer.prompt([
    {
      type: 'input', 
      name: 'itemId',
      message: 'What is the id of the product you would like to buy?', 
    },
    {
      type: 'input', 
      name: 'quan',
      message: 'How many would you like to buy?', 
    }
    ]).then (function (answers) {
        connection.query("SELECT * FROM productList WHERE id=?", [answers.itemId], function(err, res) {
          var newStock = res[0].stock_quantity - answers.quan
          conncetion.query(
            "UPDATE products SET ? WHERE ?", 
            [
              {
                stock_quantity: newStock
              },
              {
                id: answers.itemId
              }
            ],
          )
        })

    })

}
