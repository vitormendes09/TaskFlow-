import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

export class UserService{
    constructor(private UserRepository:UserRepository){}


    async createUser(data: Omit<User, "id">){ 

        const newUser = new User(0, data.name, data.email, data.password)

        return await this.UserRepository.create(newUser);

    }

    async getUserById(id: number): Promise <User| null>{
        return await this.UserRepository.findById(id);
    }
}