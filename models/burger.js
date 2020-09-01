// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, cb) {
    orm.insertOne(cols, function(res) {
      cb(res);
    });
  },
  updateOne: function(state, good_id, cb) {
    orm.updateOne(state, good_id, function(res) {
      cb(res);
    });
  },
  
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
