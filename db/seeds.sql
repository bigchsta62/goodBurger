-- 3. Still in the `db` folder, create a `seeds.sql` file. In this file, write insert queries to populate the 
-- `burgers` table with at least three entries.
INSERT INTO burgers (burger_name, devoured) VALUES ('The "Clasic Ed" with cheese', true);
INSERT INTO burgers (burger_name) VALUES ('The "Extra Dexter" grilled cheese burger');
INSERT INTO burgers (burger_name, devoured) VALUES ('The "TLC" with all that bacon', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Milkshake Burger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('The "Dear Amanda" hold the sauce', true);
INSERT INTO burgers (burger_name) VALUES ("Spatch's Special");


SELECT * FROM burgers;

-- 4. Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line
