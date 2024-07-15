const express = require("express");
const api = express.Router();

api.get("/", (req, res) => {
  res.json({
    date: new Date(),
    message: "Successfully Get Data",
  });
});

module.exports = api;
