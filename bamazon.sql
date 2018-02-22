
 CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id INTEGER(20) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(50) NOT NULL,
	department_name VARCHAR(50),
	price INTEGER(10),
	stock_quality INTEGER(255),
	PRIMARY KEY (item_id)
);

USE bamazon_db;

INSERT INTO products (product_name, department_name, price, stock_quality)
VALUES ("Gummy Bears", "Food", 3, 100);
INSERT INTO products (product_name, department_name, price, stock_quality)
VALUES ("Hammer", "Tools", 20, 50);
INSERT INTO products (product_name, department_name, price, stock_quality)
VALUES ("Socks", "Clothing", 7, 150);
INSERT INTO products (product_name, department_name, price, stock_quality)
VALUES ("Air Freshener", "Houseware", 2, 25);
INSERT INTO products (product_name, department_name, price, stock_quality)
VALUES ("Dog Wig", "Pets", 20, 50);
INSERT INTO products (product_name, department_name, price, stock_quality)
VALUES ("Rubber Duck", "Pets", 4, 50);
INSERT INTO products (product_name, department_name, price, stock_quality)
VALUES ("Spam", "Food", 2, 25);
INSERT INTO products (product_name, department_name, price, stock_quality)
VALUES ("Chia Pet", "Housware", 14, 45);
INSERT INTO products (product_name, department_name, price, stock_quality)
VALUES ("Rubber Vommit", "Houseware", 7, 55);
INSERT INTO products (product_name, department_name, price, stock_quality)
VALUES ("Kitten Mittens", "Pets", 9, 75);
