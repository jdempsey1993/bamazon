DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(

item_id INT NOT NULL AUTO_INCREMENT,

product_name VARCHAR (100) NULL,

department_name VARCHAR (100) NULL,

stock_quantity INTEGER(100) NULL,   

price DECIMAL(10,2) NULL,

PRIMARY KEY(item_id)
); 

INSERT INTO products
(item_id, product_name, department_name, stock_quantity, price)
VALUES(1, "Laptop", "Electronics", 13, 799.99);

INSERT INTO products
(item_id, product_name, department_name, stock_quantity, price)
VALUES(2, "Desktop Computer", "Electronics", 9, 950.99);

INSERT INTO products
(item_id, product_name, department_name, stock_quantity, price)
VALUES(3, "iPhone", "Electronics", 27, 999.99);

INSERT INTO products
(item_id, product_name, department_name, stock_quantity, price)
VALUES(4, "Samsung Galaxy", "Electronics", 20, 899.99);

INSERT INTO products
(item_id, product_name, department_name, stock_quantity, price)
VALUES(5, "Airpods", "Electronics", 32, 149.99);

INSERT INTO products
(item_id, product_name, department_name, stock_quantity, price)
VALUES(6, "3.5 MM Headphones", "Electronics", 51, 29.99);

INSERT INTO products
(item_id, product_name, department_name, stock_quantity, price)
VALUES(7, "128 GB SD Card", "Electronics", 47, 39.99);

INSERT INTO products
(item_id, product_name, department_name, stock_quantity, price)
VALUES(8, "USB Charger", "Electronics", 63, 29.99);

INSERT INTO products
(item_id, product_name, department_name, stock_quantity, price)
VALUES(9, "Nintendo Switch", "Electronics", 17, 249.99);

INSERT INTO products
(item_id, product_name, department_name, stock_quantity, price)
VALUES(10, "4k Televison", "Electronics", 7, 1499.99);
