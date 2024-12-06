import { User } from "../../entities/User";
import { IUserRepository } from "../../Interfaces/IUserRepository";

export class GetUserByTdUseCase{
    constructor(private UserRpository: IUserRepository){}

    async execute(userId: number): Promise<User|null>{
        const user = await this.UserRpository.findById(userId);
        if(!user){
            throw new Error("User not found");
        }

        return user;
    }
}