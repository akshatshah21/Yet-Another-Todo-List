const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./db/pool");

// Middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/todo", require("./routes/todo"));

const PORT = process.env.PORT | 5000;
app.listen(5000, () => {
  console.log(`Server started on ${PORT}`);
});
