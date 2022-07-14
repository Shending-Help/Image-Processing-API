//import supertest from "supertest";
import resize from "../middleware/processor";

describe("Test Image Processor", (): void => {
  /*
  it("gets the api endpoint", () => {
    expect(async () => {
      await resize("images/fjord.jpg", 200, 200, "output/200_200_fjord.jpg");
    }).not.toThrow();
  });
  */
  it("the function is working properly", () => {
    expect(resize("images/fjord.jpg", 200, 200, "output/200_200_fjord.jpg"))
      .toBeTruthy;
  });
});
