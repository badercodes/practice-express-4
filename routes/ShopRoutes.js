const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Main shop page!</h1>");
});

router.get("/hot", (req, res) => {
  res.send("<h2>Hot selling items in the shop!</h2>");
});

router.post("/order", (req, res) =>
  res.send("<h2>You want to order\n</h2>" + req.body.item)
);

// export statement so that it can be imported in server.js
module.exports = router;
