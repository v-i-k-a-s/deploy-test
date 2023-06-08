const mongosse = require("mongoose");
const env = require("dotenv").config();
require('dotenv').config();
mongosse
  // .connect("mongodb://127.0.0.1:27017/issue-tracker")
  .connect(process.env.mongoDBurl)
  .then(() => {
    console.log("db conected");
  })
  .catch((e) => {
    console.log(e, "not connected");
  });
