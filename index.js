const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

// Middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, "client/public")));
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/public/index.html"));
  });
}
app.use("/todo", require("./routes/todo"));

const PORT = process.env.PORT | 5000;
app.listen(5000, () => {
  console.log(`Server started on ${PORT}`);
});
