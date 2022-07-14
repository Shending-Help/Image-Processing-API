import resize from "../middleware/processor";
//this suite tests the image processor
describe("Test Image Processor", (): void => {
  //this test tests the resize function in the processor.ts file
  it("the function is working properly", (): void => {
    expect(resize("images/fjord.jpg", 200, 200, "output/200_200_fjord.jpg"))
      .toBeTruthy;
  });
});
