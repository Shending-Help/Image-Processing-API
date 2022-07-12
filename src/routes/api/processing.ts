import express from "express";
import sharp from "sharp";
import { promises as fsPromises } from "fs";

const processing = express.Router();

const inputFile = "images/fjord.jpg";
const outputFile = inputFile.substring(7);

processing.get("/", (req, res) => {
  res.send("resizing your picture xD");

  sharp(inputFile)
    .resize(200, 200)
    .toFile("output/200_200_" + outputFile, function(err) {});
});

export default processing;
