const http = require("http");
const fs = require("fs");
const express = require("express");

// const server = http.createServer();
//
// server.on("reuest", (req, res) => {
//   res.end(fs.readFileSync(__dirname + "/../client/index.html"));
// });
const app = express();

app.use(express.static("client"));
// app.get('/', req, res => {
//   res.sendFile()
// })
app.listen(5000);
