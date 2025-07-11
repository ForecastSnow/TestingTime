import express from "express";
import { mockController } from "../controllers/mock.controller.js"


const mocksRouter = express.Router();

mocksRouter.post("/generateData", mockController.generateUsers)

mocksRouter.post("/generatePets", mockController.generatePets)

mocksRouter.post("/generateAdoptions", mockController.generateAdoptions)

mocksRouter.post("/mockData", mockController.mockResponse)

export default mocksRouter;

