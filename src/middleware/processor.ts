import sharp from "sharp";

const resize = (
  inputFile: string,
  width: number,
  height: number,
  outputFile: string
) => {
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
