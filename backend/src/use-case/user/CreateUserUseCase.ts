import { User } from "../../entities/User";
import { IUserRepository } from "../../Interfaces/IUserRepository";

interface CreateUserDTO{
     name: string;
     email: string;
     password: string;
}

export class CreateUserUseCase {
    
    constructor(private UserRepository:IUserRepository){}


    async createUser(data: CreateUserDTO): Promise<CreateUserDTO>{ 

        const newUser = new User(0, data.name, data.email, data.password);

        return await this.UserRepository.createUser(newUser)

    }

   
}