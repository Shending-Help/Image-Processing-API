import supertest from "supertest";
import app from "..";

const request = supertest(app);

// this suite tests the endpoint
describe("Test endpoint responses", (): void => {
  // this test tests the endpoint to resize an image is a success
  it("The endpoint is a success", async (): Promise<void> => {
    const response = await request.get(
      "/api/processing/?filename=fjord.jpg&width=100&height=100"
    );
    expect(response.status).toBe(200);
  });
});
