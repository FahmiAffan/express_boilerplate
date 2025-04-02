import express, { Application, NextFunction, Request, Response } from "express";
import index from "./infrastructure/express/router/index.ts"
import connectDB from './infrastructure/config/config.ts';
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { error } from "console";
// require("./config/config.js");


const app: Application = express();
const port = process.env.SERVER_PORT || '8080';

// const dbconfig = require("./config/config.js");


// app.use(index, dbconfig);
const allowedOrigins = process.env.ALLOWED_URL;
const corsOption: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});



app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(index);

app.listen(port, () => {
  connectDB();
  console.log(`Server run on port ${port}`);
});
