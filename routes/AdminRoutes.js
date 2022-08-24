const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("You'll find a list of Admins here");
});

router.post("/add", (req, res) => {
  // if you send any data I'll echo it back to you
  if (req.body) {
    res.send(req.body);
  }
  console.log(req.body);
});

module.exports = router;
