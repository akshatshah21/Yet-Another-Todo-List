const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

// Middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/todo", require("./routes/todo"));

// Static files
if (process.env.NODE_ENV === "production") {
  console.log("IN PRODUCTION");
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    console.log("GET request");
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, "client/public")));
  app.get("*", (req, res) => {
    console.log("[GET] Index");
    res.sendFile(path.join(__dirname + "/client/public/index.html"));
  });
}

const PORT = process.env.PORT | 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server has started on ${PORT}`);
});
