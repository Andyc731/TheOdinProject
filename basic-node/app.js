const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", function (req, res) {
  fs.readFile("./index.html", "utf-8", (err, data) => {
    res.send(data);
  });
});
app.get("/contact-me", function (req, res) {
  fs.readFile("./contact-me.html", "utf-8", (err, data) => {
    res.send(data);
  });
});
app.get("/about", function (req, res) {
  fs.readFile("./about.html", "utf-8", (err, data) => {
    res.send(data);
  });
});
app.get("/*", function (req, res) {
  fs.readFile("./404.html", "utf-8", (err, data) => {
    res.send(data);
  });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000");
});
