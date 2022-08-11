const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h2>Blog homepage</h2>");
});

router.get("/posts", (req, res) => {
  res.send("<h2> List of posts </h2>");
});

router.post("/add", (req, res) => {
  res.send("<h2> Submit your post here </h2> \n" + req.body.value);
  console.log(req.body);
});

// export statement so that it can be imported in server.js
module.exports = router;
