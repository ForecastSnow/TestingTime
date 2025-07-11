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

describe("GET /api/users/{uid}", () => {

    it("retorna usuarios segun su id, se usan 10 random (10) ", async () => {

        let uids = [];

        const res = await request(app).get("/api/users");

        uids = res.body.payload.map(u => u._id).slice(0, 10);

        for (const uid of uids) {
            const res = await request(app).get(`/api/users/${uid}`);
            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual(
                expect.objectContaining({
                    status: "success",
                    payload: expect.objectContaining({
                        _id: expect.any(String),
                        first_name: expect.any(String),
                        last_name: expect.any(String),
                        email: expect.any(String),
                        password: expect.any(String),
                        role: expect.any(String),
                        pets: expect.any(Array),
                        __v: expect.any(Number),
                    })
                })
            );

        }

    });
});

describe("DELETE /api/users/{uid}", () => {


    it("ingresa un user en la db y lo elimina.", async () => {

        const mockUser = await fetch(`http://localhost:${process.env.PORT}/api/mocking/generateData`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "quantity": 1,
                "petsPerUser": 2
            }),
        });

        const resMockUser = await mockUser.json();

        const res = await request(app).delete(`/api/users/${resMockUser[0]._id}`)

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(
            expect.objectContaining({
                status: "success",
                message: "User deleted"
            })
        );

    })


})

describe("PUT /api/users/{uid}", () => {

    it("genera un user, lo modifica y lo elimina", async () => {

        const mockUser = await fetch(`http://localhost:${process.env.PORT}/api/mocking/generateData`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "quantity": 1,
                "petsPerUser": 2
            }),
        });

        const resMockUser = (await mockUser.json())[0];

        const modifiedUser = await fetch(`http://localhost:8080/api/users/${resMockUser._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name: "testBoy",
                last_name: "testboy",
                email: "testboy@gmail.com",
                password: "1234",
                role: "test",
            }),
        });

        const resModifiedUser = await modifiedUser.json();


        expect(resModifiedUser).toEqual(
            expect.objectContaining({
                status: "success",
                message: "User updated"
            })
        );

        const clear = await request(app).delete(`/api/users/${resMockUser._id}`)

        expect(clear.statusCode).toBe(200);
        expect(clear.body).toEqual(
            expect.objectContaining({
                status: "success",
                message: "User deleted"
            })
        );

    });

});


describe("GET /api/adoptions", () => {

    it("retorna los adoptions", async () => {

        const res = await request(app).get("/api/adoptions");

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(
            expect.objectContaining({
                status: "success",
                payload: expect.arrayContaining([
                    expect.objectContaining({
                        _id: expect.any(String),
                        pet: expect.any(String),
                        owner: expect.any(String),
                        __v: expect.any(Number),
                    })])
            }));

    })

})

describe("GET /api/adoptions", () => {

    it("retorna un adoption por uid", async () => {

        const res = await request(app).get("/api/adoptions");

        const uids = res.body.payload.map(u => u._id).slice(0, 10);

        for (const uid of uids) {
            const res = await request(app).get(`/api/adoptions/${uid}`);

            expect(res.body).toEqual(
                expect.objectContaining({
                    status: "success",
                    payload:
                        expect.objectContaining({
                            _id: expect.any(String),
                            pet: expect.any(String),
                            owner: expect.any(String),
                            __v: expect.any(Number),
                        })
                }));

        }



    });

});

describe("POST /api/adoptions", () => {

    it("genera un user y pet, se adopta y se elimina", async () => {


        const mockUser = await fetch(`http://localhost:${process.env.PORT}/api/mocking/generateData`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "quantity": 1,
                "petsPerUser": 0
            }),
        });

        const resMockUser = (await mockUser.json())[0];

        const mockPet = await fetch(`http://localhost:${process.env.PORT}/api/mocking/generatePets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "quantity": 1,
            }),
        });

        const resMockPet = (await mockPet.json())[0];

/*         expect(resModifiedUser).toEqual(
            expect.objectContaining({
                status: "success",
                message: "User updated"
            })
        );

        const clear = await request(app).delete(`/api/users/${resMockUser._id}`)

        expect(clear.statusCode).toBe(200);
        expect(clear.body).toEqual(
            expect.objectContaining({
                status: "success",
                message: "User deleted"
            })
        ); */

    });






})

