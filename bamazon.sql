DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(

item_id INT NOT NULL,

product_name VARCHAR (100) NOT NULL,

department_name VARCHAR (100) NOT NULL,

price INTEGER(100) NOT NULL,

stock_quantity INTEGER(100) NOT NULL
); 

INSERT INTO products
(item_id, product_name, department_name, price, stock_quantity)
VALUES(1, "Laptop", "Electronics", 790, 13);

INSERT INTO products
(item_id, product_name, department_name, price, stock_quantity)
VALUES(2, "Desktop Computer", "Electronics", 950, 9);

INSERT INTO products
(item_id, product_name, department_name, price, stock_quantity)
VALUES(3, "iPhone", "Electronics", 1000, 27);

INSERT INTO products
(item_id, product_name, department_name, price, stock_quantity)
VALUES(4, "Samsung Galaxy", "Electronics", 899, 20);

INSERT INTO products
(item_id, product_name, department_name, price, stock_quantity)
VALUES(5, "Airpods", "Electronics", 199, 32);

INSERT INTO products
(item_id, product_name, department_name, price, stock_quantity)
VALUES(6, "3.5 MM Headphones", "Electronics", 29, 51);

INSERT INTO products
(item_id, product_name, department_name, price, stock_quantity)
VALUES(7, "128 GB SD Card", "Electronics", 39, 47);

INSERT INTO products
(item_id, product_name, department_name, price, stock_quantity)
VALUES(8, "USB Charger", "Electronics", 29, 63);

INSERT INTO products
(item_id, product_name, department_name, price, stock_quantity)
VALUES(9, "Nintendo Switch", "Electronics", 299, 17);

INSERT INTO products
(item_id, product_name, department_name, price, stock_quantity)
VALUES(10, "4k Televison", "Electronics", 1500, 7);
