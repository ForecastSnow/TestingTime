import { mockingService } from "../services/mocking.Service.js";

class MockController {
    constructor(mockingService) {
        this.mockingService = mockingService;
    }

    async generateData(req, res) {

        const { quantity, petsPerUser } = req.body;

        const response = await mockingService.geneterateUserInDataBase(quantity, petsPerUser);

        res.status(200).json(response);


    }

    async mockResponse(req, res) {


        const { quantity, petsPerUser } = req.body;

        const response = await mockingService.generateMockUser(quantity, petsPerUser);

        res.status(200).json(response);

    }

}

export const mockController = new MockController(mockingService);