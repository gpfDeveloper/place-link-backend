const express = require("express");
const app = express();

const uploadFile = require('./file-upload');

app.use(uploadFile.single('image'));

app.post("/upload", (req, res) => {
  const body = req.body;
  const file = req.file;
  console.log(body);
  console.log(file);
});

app.listen(8080);
