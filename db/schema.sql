-- * Create the `burgers_db`
drop database if exists gb_db;

CREATE DATABASE gb_db;
USE gb_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


INSERT INTO burgers (burger_name, devoured) VALUES ('The "Clasic Ed" with cheese', true);
INSERT INTO burgers (burger_name) VALUES ('The "Extra Dexter" grilled cheese burger');
INSERT INTO burgers (burger_name, devoured) VALUES ('The "TLC" with all that bacon', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Milkshake Burger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('The "Dear Amanda" hold the sauce', true);
INSERT INTO burgers (burger_name) VALUES ("Spatch's Special");
