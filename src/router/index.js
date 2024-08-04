"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
// const api = express.Router();
var express_1 = require("express");
var api = express_1.default.Router();
api.get("/", function (req, res) {
    res.json({
        date: new Date(),
        message: "Successfully Get Data",
    });
});
exports.default = api;
