// Dependencies
// =============================================================
const connection = require("./connection.js");
// ORM
// =============================================================
const tableName = "burgers";

const orm = {
  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  selectAll: function (tableName, callback) {
    const s = "SELECT * FROM " + tableName;

    connection.query(s, function (err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method for performing a query of a single character in the table.
  // Again, we make use of the callback to grab a specific character from the database.

  insertOne: function (burger_name, callback) {
    const s =
      "INSERT INTO burgers (burger_name, devoured) VALUES ('" +
      `${burger_name}` +
      "',false)";

    console.log(s);
    connection.query(s, [`${burger_name}`], function (err, result) {
      callback(result);
    });
  },

  updateOne: function (status, condition, callback) {
   
    let s = "UPDATE " + tableName + " SET "
    s += status;
    s += " WHERE ";
    s += condition;
    console.log(condition);
    connection.query(s, function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
};

module.exports = orm;
