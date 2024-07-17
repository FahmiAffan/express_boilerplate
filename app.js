require("./config/config.js");

const express = require("express");
const app = express();
const port = 4000;

const index = require("./router/index");
// const dbconfig = require("./config/config.js");


// app.use(index, dbconfig);
app.use(index);

app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
