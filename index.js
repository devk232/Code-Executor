const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const code = require("./server/code");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3030;
app.get("/", (req, res) => {
  res.send("go to /code");
});

app.use("/code", code);

app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});
