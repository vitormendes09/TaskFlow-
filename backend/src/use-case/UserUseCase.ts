import { User } from "../entities/User";
import { IUserRepository } from "../Interfaces/IUserRepository";

interface CreateUserDTO{
     name: string;
     email: string;
     password: string;
}

export class UserUseCase {
    
    constructor(private UserRepository:IUserRepository){}

    //Criando Usuário 
    async createUser(data: CreateUserDTO): Promise<CreateUserDTO>{ 

        const newUser = new User(0, data.name, data.email, data.password);
        return await this.UserRepository.createUser(newUser)

    }

    // Listando todos os usuários
    async listUsers(): Promise<User[]> {
        return await this.UserRepository.findAll();
    }

    // Buscando um usuário por ID
    async getUserById(id: number): Promise<User | null> {
        return await this.UserRepository.findById(id);
    }


   
}