import sharp from "sharp";
/* the query params are the width and height of the image
   and the filename of the image are used as arguements to the resize function */
const resize = (
  inputFile: string,
  width: number,
  height: number,
  outputFile: string
) => {
  //using sharp to resize the image and returning a promise to be used in the .then() function
  return sharp(inputFile)
    .resize((width as unknown) as number, (height as unknown) as number, {
      fit: "fill",
    })
    .toFile(outputFile, function(err) {
      console.log(err);
    })
    .toBuffer();
};
/*     */
export default resize;
