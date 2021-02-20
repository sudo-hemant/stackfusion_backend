const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
var path = require("path");

require('dotenv').config()

const userRoute = require("./routes/userRoutes");
const InitiateMongoServer = require("./config/database");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());



/**
 * Router Middleware
 * Router - /user/*
 * * Router - /teacher/*
 * Method - *
 */
app.use("/user", userRoute);

// app.get('/', (req, res) => {
//     res.send('API WORKING');
//   });
   


if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
  
}




app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
