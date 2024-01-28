//jshint esversion:6
require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { error, log } = require("console");

const md5=require('md5');

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

console.log(process.env.SECRET);


 
const User = new mongoose.model("User", userSchema);

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/login", function (req, res) {
  res.render("login");
});
app.get("/register", function (req, res) {
  res.render("register");
});

app.post("/register", function (req, res) {
  const u1 = new User({
    email: req.body.username,
    password: md5(req.body.password)
  });
  u1.save()
  .then(() => {
    console.log("Successfully added");
    res.render("secrets");
  })
  .catch((err) => {
    console.log(err + " has occurred");
  });

});


app.post("/login",function(req,res){
    const user=req.body.username;
    const passw=md5(req.body.password); 

    User.findOne({ email: user })
  .then((found) => {
    if (found && found.password === passw) {
      res.render("secrets");
    }
  })
  .catch((err) => {
    console.log("error", err);
  });

});

app.listen(5000, function () {
  console.log("Server Started");
});
