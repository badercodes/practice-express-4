// Setup express server & import routes
const express = require("express");
const server = express();
const port = 3030; //this needs to be set with env variable later
const blogRoutes = require("./routes/BlogRoutes");
const shopRoutes = require("./routes/ShopRoutes");
const userRoutes = require("./routes/UserRoutes");

// Server needs to be able parse data that's posted
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// routes to do actions on
server.get("/", (req, res) => res.send("<h1>You landed on index!</h1>"));
server.post("/create", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// using routes from routes folder
server.use("/blog", blogRoutes);
server.use("/shop", shopRoutes);
server.use("/user", userRoutes);

// listening to connections - last command on server
server.listen(port, () => console.log("I'm listening on port " + port));
