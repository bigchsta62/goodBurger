const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");
const { json } = require("express");

// default Route -- display all burgers
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//add new burger
router.post("/api/burgers", function (req, res) {
  burger.insertOne(req.body.burgerName, function (data) {
    // Send back the ID of the new burger
    res.json({ id: data.insertId });
    console.log(data);
    console.log(req.body.burgerName + " this guy");
  });
});

router.put("/api/burgers/:id", function (req, res) {
  const status = "devoured = "  + req.body.devoured;
  const condition = "id = " + req.params.id;
  console.log("status:", status);
  console.log("condition:", condition);
  
  burger.updateOne(status, condition, function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
