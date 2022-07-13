import express from "express";
import sharp from "sharp";
import path from "path";
const fs = require("fs");
//import { promises as fsPromises } from "fs";

const processing = express.Router();

//const inputFile = "images/fjord.jpg";
//const outputFile = inputFile.substring(7);

processing.get("/", (req, res) => {
  const inputFile = "images/" + req.query.filename;
  // const outputFile = inputFile.substring(7);
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  const outputFile = `output/${width}_${height}_` + req.query.filename;
  fs.access(outputFile, (err: any) => {
    if (err) {
      sharp(inputFile)
        .resize((width as unknown) as number, (height as unknown) as number, {
          fit: "fill",
        })
        .toFile(outputFile, function(err) {})
        .toBuffer()
        .then((data) => {
          res.sendFile(path.normalize(__dirname + `../../../../` + outputFile));
        })
        .catch((err) => {
          res.send("image couldn't be retreived: " + err);
        });
    } else {
      res.sendFile(path.normalize(__dirname + `../../../../` + outputFile));
    }
  });
});

export default processing;
