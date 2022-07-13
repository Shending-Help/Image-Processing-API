import supertest from "supertest";
import processing from "../routes/api/processing";

const request = supertest(processing);
describe("Test endpoint responses", () => {
  it("gets the api endpoint", async () => {
    const response = await request.get(
      "/api/processing/?filename=fjord.jpg&width=100&height=100"
    );
    expect(response.status).toBe(200);
  });
});
