import express from "express";
import { mockController } from "../controllers/mock.controller.js"


const mocksRouter = express.Router();

mocksRouter.post("/generateData", mockController.generateData)

mocksRouter.post("/mockData", mockController.mockResponse)

export default mocksRouter;

