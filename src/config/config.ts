// require("dotenv").config();
// const { Sequelize } = require("sequelize");
import { Sequelize } from "sequelize-typescript"
import { Dialect } from "sequelize";
import dotenv from "dotenv";
import { PostgresDialect } from "@sequelize/postgres";
import Users from "models/User.ts";

dotenv.config();

let dbDialect: Dialect = 'postgres';

const connection_detail = {
  development: {
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: dbDialect
  },
};

// const db = require("./config.json");

// const sequelize = new Sequelize({
//   database: db.development.database,
//   host: db.development.host,
//   username: db.development.username,
//   password: db.development.password,
//   dialect: db?.development?.dialect,
// });

const sequelize = new Sequelize(connection_detail.development);

sequelize.addModels([Users]);

try {
  sequelize.authenticate();
  // sequelize.sync();
  console.log("Connected to the database");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// module.exports = sequelize;
// module.exports = connection_detail;
export default sequelize
