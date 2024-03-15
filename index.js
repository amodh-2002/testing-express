require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Welcome to my world");
});

app.get("/shithouse", (req, res) => {
  res.send({ main: "Hello welcome to shithouse.json" });
});

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}`);
});
