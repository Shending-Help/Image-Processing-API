import express from "express";
import resize from "../../middleware/processor";
import path from "path";
const fs = require("fs");
//import { promises as fsPromises } from "fs";

const processing = express.Router();

//const inputFile = "images/fjord.jpg";
//const outputFile = inputFile.substring(7);

processing.get("/", (req, res) => {
  const inputFile = "images/" + req.query.filename;
  //const outputFile = inputFile.substring(7);
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  const outputFile = `output/${width}_${height}_` + req.query.filename;

  const avaialabeImages = [
    "encenadaport.jpg",
    "fjord.jpg",
    "icelandwaterfall.jpg",
    "palmtunnel.jpg",
    "santamonica.jpg",
  ];

  if (
    isNaN(Number(req.query.width)) ||
    isNaN(Number(req.query.height)) ||
    !avaialabeImages.includes(inputFile.substring(7))
  ) {
    res.send("incorrect width, height or filename");
  } else {
    fs.access(outputFile, (err: any) => {
      if (err) {
        console.log("the error was: " + err);
        resize(inputFile, width, height, outputFile).then(() => {
          res.sendFile(path.normalize(__dirname + `../../../../` + outputFile));
        });
      } else {
        res.sendFile(path.normalize(__dirname + `../../../../` + outputFile));
      }
    });
  }
});

export default processing;
