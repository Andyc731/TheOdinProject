const https = require("http");
const fs = require("fs");
const url = require("url");

fs.readFileSync("./index.html", "utf-8");

https
  .createServer(function (req, res) {
    if (req.url === "/favicon.ico") return;

    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url === "/") {
      fs.readFile("./index.html", "utf-8", (err, data) => {
        res.end(data);
      });
    } else {
      fs.readFile(`.${req.url}.html`, "utf-8", (err, data) => {
        if (err) {
          fs.readFile("./404.html", "utf-8", (err, data) => {
            res.end(data);
          });
        } else {
          res.end(data);
        }
      });
    }
  })
  .listen(8080);
