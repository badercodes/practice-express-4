// Setup express server
const express = require("express");
const server = express();
const port = 3030; //this needs to be set with env variable later

// Server needs to be able parse data that's posted
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// routes to do actions on
server.get("/", (req, res) => res.send("<h1>You landed on index!</h1>"));
server.post("/create", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// listening to connections - last command on server
server.listen(port, () => console.log("I'm listening on port " + port));
