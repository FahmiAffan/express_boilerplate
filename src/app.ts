import express, { Application, Request, Response } from "express";
import index from "./router/index.ts"
import bodyParser from "body-parser";
// require("./config/config.js");


const app: Application = express();
const port = 4000;

// const dbconfig = require("./config/config.js");


// app.use(index, dbconfig);
app.use(bodyParser.json());
app.use(index);

app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
