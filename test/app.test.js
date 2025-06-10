import supertest from "supertest";
import request from "supertest";
import app from "../src/app.js";



describe("GET /api/users", () => {
    it("debe retornar la lista de usuarios registrados", async () => {
        const res = await request(app).get("/api/users");

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(
            expect.objectContaining({
                status: "success",
                payload: expect.arrayContaining([
                    expect.objectContaining({
                        _id: expect.any(String),
                        first_name: expect.any(String),
                        last_name: expect.any(String),
                        email: expect.any(String),
                        password: expect.any(String),
                        role: expect.any(String),
                        pets: expect.any(Array),
                        __v: expect.any(Number),
                    })
                ])
            }));
    });
});