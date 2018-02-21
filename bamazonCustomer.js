// Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
// The app should then prompt users with two messages.

// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.

// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.

// However, if your store does have enough of the product, you should fulfill the customer's order.

// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});


con.connect(function(err) {
  if (err) {
  	console.log("error")
  }
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) {
    	console.log("error")
    }
    console.log("Result: " + result);
  });
});

//  CREATE DATABASE bamazon_db;

// USE bamazon_db;

// CREATE TABLE products (
// 	item_id INTEGER(20) AUTO_INCREMENT NOT NULL,
// 	product_name VARCHAR(50) NOT NULL,
// 	department_name VARCHAR(50),
// 	price INTEGER(10),
// 	stock_quality INTEGER(255),
// 	PRIMARY KEY (item_id)
// );

// USE bamazon_db;

// INSERT INTO products (product_name, department_name, price, stock_quality)
// VALUES ("Gummy Bears", "Food", 3, 100);
// INSERT INTO products (product_name, department_name, price, stock_quality)
// VALUES ("Hammer", "Tools", 20, 50);
// INSERT INTO products (product_name, department_name, price, stock_quality)
// VALUES ("Socks", "Clothing", 7, 150);
// INSERT INTO products (product_name, department_name, price, stock_quality)
// VALUES ("Air Freshener", "Houseware", 2, 25);
// INSERT INTO products (product_name, department_name, price, stock_quality)
// VALUES ("Dog Wig", "Pets", 20, 50);
// INSERT INTO products (product_name, department_name, price, stock_quality)
// VALUES ("Rubber Duck", "Pets", 4, 50);
// INSERT INTO products (product_name, department_name, price, stock_quality)
// VALUES ("Spam", "Food", 2, 25);
// INSERT INTO products (product_name, department_name, price, stock_quality)
// VALUES ("Chia Pet", "Housware", 14, 45);
// INSERT INTO products (product_name, department_name, price, stock_quality)
// VALUES ("Rubber Vommit", "Houseware", 7, 55);
// INSERT INTO products (product_name, department_name, price, stock_quality)
// VALUES ("Kitten Mittens", "Pets", 9, 75);


// SELECT * FROM products;
// DELETE * FROM products;

