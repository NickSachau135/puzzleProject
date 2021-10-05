const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

router.get("/riddle", function (req, res) {
  res.sendFile(path.join(__dirname + "/towel.html"));
});

router.get("/towel", function (req, res) {
  res.sendFile(path.join(__dirname + "/idk.html"));
});

router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/error.html"));
});

app.use("/", router);
app.listen(process.env.port || 3001);

console.log("Running at Port 3001");
