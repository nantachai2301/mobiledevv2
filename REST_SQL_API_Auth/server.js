const express = require("express");
const cors = require("cors");
const restaurantRouter = require("./routes/restaurant.router");
const { sequelize } = require("./models");

// Create Server
const app = express();

const db = require ("./models")
const Roles = db.role;

db.sequelize.sync({force:true}).then(()=>{
  console.log("Drop and Resync database");
  initial();
})

const initial =()=>{
  Roles.create({
    id:"1",
    name:"user",
  });
   Roles.create({
    id:"2",
    name:"moderator",
  });
   Roles.create({
    id:"3",
    name:"admin",
  });
}
//Use Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router
app.get("/", (req, res) => {
  res.send("<h1>This is Restaurant API</h1>");
});
// Restaurant router
app.use("/apis", restaurantRouter);

// Running server
app.listen(5000, () => {
  console.log("Server listening to port 5000");
});
