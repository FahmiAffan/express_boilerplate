"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_ts_1 = require("./router/index.ts");
// require("./config/config.js");
var app = (0, express_1.default)();
var port = 4000;
// const dbconfig = require("./config/config.js");
// app.use(index, dbconfig);
app.use(index_ts_1.default);
app.listen(port, function () {
    console.log("Server run on port ".concat(port));
});
