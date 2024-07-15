const express = require("express");
const app = express();
const port = 4000;

const index = require("./router");

app.use(index);

app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
