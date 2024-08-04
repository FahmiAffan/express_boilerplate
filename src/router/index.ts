// const express = require("express");
// const api = express.Router();
import express , { Request, Response } from "express";

const api = express.Router();


api.get("/", (req, res) => {
  res.json({
    date: new Date(),
    message: "Successfully Get Data",
  });
});

export default api
