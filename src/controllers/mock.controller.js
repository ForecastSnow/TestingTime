import { mockingService } from "../services/mocking.Service.js";

class MockController {
    constructor(mockingService) {
        this.mockingService = mockingService;
    }

    async generateUsers(req, res) {

        const { quantity, petsPerUser } = req.body;

        const response = await mockingService.geneterateUserInDataBase(quantity, petsPerUser);

        res.status(200).json(response);


    }

    async generatePets(req, res) {

        const { quantity } = req.body;

        const response = await mockingService.geneteratePetsInDataBase(quantity);

        res.status(200).json(response);


    }

    async mockResponse(req, res) {


        const { quantity, petsPerUser } = req.body;

        const response = await mockingService.generateMockUser(quantity, petsPerUser);

        res.status(200).json(response);

    }

    async generateAdoptions(req, res) {


        const { quantity} = req.body;

        const response = await mockingService.generateAdoptions(quantity);

        res.status(200).json(response);

    }



}

export const mockController = new MockController(mockingService);