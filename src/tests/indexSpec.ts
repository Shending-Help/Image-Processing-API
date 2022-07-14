import supertest from "supertest";
import app from "..";

const request = supertest(app);
describe("Test entrypoint responses", () => {
  it("the main route is working properly", async () => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
  });
});
