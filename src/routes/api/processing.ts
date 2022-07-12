import express from 'express';
import sharp from 'sharp';   
import { promises as fsPromises } from 'fs';

const processing = express.Router();

const inputFile = 'images/encenadaport.jpg';
const outputFile =  'output/output.jpg';



processing.get('/', (req, res) => {

    res.send('resizing your picture xD');

    sharp(inputFile)
    .resize(300, 200)
    .toFile(outputFile, function(err) {
      // output.jpg is a 300 pixels wide and 200 pixels high image
      // containing a scaled and cropped version of input.jpg
    });    
    

 });

export default processing;