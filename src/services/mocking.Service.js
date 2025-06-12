import { faker } from "@faker-js/faker";
import Users from "../dao/Users.dao.js";
import { createHash } from "../utils/index.js"
import mongoose from "mongoose";

const daoUser = new Users;

class MockingService {

    constructor(Users) {
        this.users = Users;
    }

    generateMocksPets(quantity, owner) {

        const pets = [];

        for (let index = 0; index < quantity; index++) {

            pets.push({
                _id: new mongoose.Types.ObjectId(),
                name: faker.animal.petName(),
                specie: faker.animal.type(),
                birthDate: faker.date.birthdate(),
                owner: owner ? owner : "",
                image: "not image",
            })

        }

        return pets;

    }

    async generateMockUser(quantity, petsPerUser) {

        const users = [];

        for (let index = 0; index < quantity; index++) {

            const pets = this.generateMocksPets(petsPerUser)

            users.push({
                _id: new mongoose.Types.ObjectId(),
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                password: await createHash("coder123"),
                role: ["user", "admin"][Math.round(Math.random())],
                pets: pets ? pets : [],
                __v: 0
            })

        }

        return users;
    }

    async geneterateUserInDataBase(Quantity, petsPerUser) {

        const mocksUsers = await this.generateMockUser(Quantity, petsPerUser)

        return await daoUser.insertMany(mocksUsers);
    }



}


export const mockingService = new MockingService(daoUser);