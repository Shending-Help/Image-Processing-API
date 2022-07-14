import express from "express";
import { Request, Response } from "express";
import resize from "../../middleware/processor";
import path from "path";
import fs from "fs";

const processing = express.Router();

//routing the processing route that handles the get request to the image processing endpoint
processing.get("/", (req: Request, res: Response): void => {
  const inputFile: string = "images/" + req.query.filename;

  const width = Number(req.query.width);
  const height = Number(req.query.height);
  const outputFile: string = `output/${width}_${height}_` + req.query.filename;
  // the available image names in the images folder made into an array to check against the request query
  const avaialabeImages = [
    "encenadaport.jpg",
    "fjord.jpg",
    "icelandwaterfall.jpg",
    "palmtunnel.jpg",
    "santamonica.jpg",
  ];
  // checking if the query is valid and sending the correct response or error response
  if (
    isNaN(Number(req.query.width)) ||
    isNaN(Number(req.query.height)) ||
    !avaialabeImages.includes(inputFile.substring(7))
  ) {
    res.send("incorrect width, height or filename");
  } else {
    /* using fs.access to check if the file exists
    if so it will send the existing file or else it will make one */
    fs.access(outputFile, (err: unknown) => {
      if (err) {
        /* if the file does not exist 
        invoke the resize function imported from the processor.ts file to resize the image */
        resize(inputFile, width, height, outputFile).then((): void => {
          res.sendFile(path.normalize(__dirname + `../../../../` + outputFile));
        });
      } else {
        //file exists so send it no need to resize it again for performance i guess xD
        res.sendFile(path.normalize(__dirname + `../../../../` + outputFile));
      }
    });
  }
});

export default processing;
