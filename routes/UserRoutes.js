const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("<h1>User homepage</h1>"));
router.get("/details", (req, res) => res.send("<h2>User details</h2>"));
router.post("/update", (req, res) =>
  res.send("<h2>Updated user details</h2>" + req.body.age)
);

module.exports = router;
