// const { Sequelize } = require("sequelize");
import { Dialect } from "sequelize";
import dotenv from "dotenv";
import Mongoose from "mongoose";

dotenv.config();

// const mongoose: Mongoose = null;

const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URI);
    Mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
  } catch (err: any) {
    console.error('MongoDB Connection Error:', err.message);
    process.exit(1); // Exit process with failure
  }
};
export default connectDB;
