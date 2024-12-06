import { User } from "../../entities/User";
import { IUserRepository } from "../../Interfaces/IUserRepository";

export class ListUserUseCase{
    constructor(private UserRepository: IUserRepository){}

    async execute(): Promise<User[]>{
        return await this.UserRepository.findAll();
    }
}