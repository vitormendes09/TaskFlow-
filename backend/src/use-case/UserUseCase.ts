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

    //Buscando ID do Usuário 

    async getUserId(User): Promise<User|null> {
        const user = await this.UserRepository.findById(User.id);

        if(!user){
            throw new Error("User not found");
        }

        return user;
        
    } 
    

    //Listar Usuários
    async ListUser(): Promise<User[]>{
        return await this.UserRepository.findAll();
    }
        
    


    
   
}