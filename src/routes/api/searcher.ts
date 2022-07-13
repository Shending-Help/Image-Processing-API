import express from "express";
import path from "path";

const fs = require("fs");

const searcher = express.Router();

searcher.get("/", (req, res) => {
  const inputFile = "images/" + req.query.filename;
  const outputFile = inputFile.substring(7);
  const width = Number(req.query.width);
  const height = Number(req.query.height);

  fs.access(inputFile, fs.constants.F_OK, (err: any) => {
    console.log("no pic of this name");
  });

  fs.readfile(inputFile, (content: any) => {
    try {
      res.end(content);
    } catch {
      res.end("no such image");
    }
  });

  res.sendFile(
    path.resolve(__dirname + `/output/${width}_${height}_` + outputFile)
  );
  console.log(
    path.resolve(__dirname + `/output/${width}_${height}_` + outputFile)
  );
});

export default searcher;
