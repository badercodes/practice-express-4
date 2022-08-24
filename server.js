// Setup express server & import routes
const express = require("express");
const server = express();
const port = 3030; //this needs to be set with env variable later
const blogRoutes = require("./routes/BlogRoutes");
const shopRoutes = require("./routes/ShopRoutes");
const userRoutes = require("./routes/UserRoutes");
const adminRoutes = require("./routes/AdminRoutes");

// Server needs to be able parse data that's posted
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// routes to do actions on
server.get("/", (req, res) => res.send("<h1>You landed on index!</h1>"));
server.post("/create", (req, res) => {
  console.log(req.body);
  res.send(req.body);
  // verifying that I can successfully perform actions based on input sent from the front end.
  if (req.body.key) {
    let sentNumber = req.body.key;
    console.log(
      `There are currenlty ${sentNumber} monkeys jumping on the bed `
    );
  }
});

// using routes from routes folder
server.use("/blog", blogRoutes);
server.use("/shop", shopRoutes);
server.use("/user", userRoutes);
server.use("/admin", adminRoutes);

// listening to connections - last command on server
server.listen(port, () => console.log("I'm listening on port " + port));
