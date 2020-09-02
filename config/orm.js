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

function objToSql(ob) {
  const arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (let key in ob) {
    let value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
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
