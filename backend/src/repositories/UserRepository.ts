import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../Interfaces/IUserRepository";
import { User } from "../entities/User";


const prisma = new PrismaClient();

export class UserRepository implements  IUserRepository {

    async createUser(user: User): Promise<User> {
        const createdUserData = await prisma.user.create({
            data: {
                name: user.getName,
                email: user.getEmail,
                password: user.getPassword,
            },
        });
    
        // Converte o retorno do Prisma para uma instância da classe User
        const createdUser = new User(
   
            createdUserData.name,
            createdUserData.email,
            createdUserData.password
        );
    
        return createdUser;
    }


    async findById(id: number): Promise<User | null> {
        const userData =  await prisma.user.findUnique({where:{id}});

        if (!userData) {
            return null;
        }
    
        // Converte o retorno do Prisma em uma instância da classe `User`
        return new User( userData.name, userData.email, userData.password);
    }

    async findAll(): Promise<User[]> {
        const usersData = await prisma.user.findMany();
    
     
        return usersData.map(user => new User( user.name, user.email, user.password));
    }
    



   async delete(id: number): Promise<void> {
       await prisma.user.delete({where: {id}})
   }

}