// Dependencies
// =============================================================
const connection = require("./connection.js");
// ORM
// =============================================================

function printQuestionMarks(num) {
    const arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

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

  insertOne: function (tableName, cols, vals, callback) {
    const s = "INSERT INTO " + tableName;

    s += " (";
    s += cols.toString();
    s += ") ";
    s += "VALUES (";
    s += printQuestionMarks(vals.length);
    s += ") ";

    console.log(queryString);
    connection.query(s, [action.text, action.complete], function (err, result) {
      callback(result);
    });
  },

  updateOne: function (action, callback) {
    const s = "UPDATE " + tableName + " SET text=? WHERE id=?";

    connection.query(s, [action.text, action.id], function (err, result) {
      callback(result);
    });
  },
};

module.exports = orm;
