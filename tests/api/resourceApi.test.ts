export {};
const supertest = require("supertest")
const request = supertest("http://localhost:3000")

describe("When creating a new resource", () => {
  it("should respond with 201 created", () => {
    return request.post("/api/resources").expect(201)
  })

  it("should respond with data", async () => {
    const response = await request.post("/api/games")
    expect(response.body).toHaveProperty("data");
  })
})
