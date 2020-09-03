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

