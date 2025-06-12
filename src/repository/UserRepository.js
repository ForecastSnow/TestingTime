import GenericRepository from "./GenericRepository.js";

export default class UserRepository extends GenericRepository {
    constructor(dao) {
        super(dao);
    }

    getUserByEmail = (email) => {
        return this.getBy({ email });
    }
    getUserById = (id) => {
        return this.getBy({ _id: id })
    }

    generateData = async (data) => {

        const response = await this.dao.insertMany(data);

        return response;

    }


}