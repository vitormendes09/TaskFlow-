import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../Interfaces/IUserRepository";
import { User } from "../entities/User";


const prisma = new PrismaClient();

export class UserRepository implements  IUserRepository {

    async createUser (user: User): Promise <User> {

        const createUser = await prisma.user.create({
            data: {
                name:user.getName,
                email:user.getEmail,
                password:user.getPassword
            },
        });


        return createUser;
        
    }


    async findById(id: number): Promise<User | null> {
        return await prisma.user.findUnique({where:{id}});
    }

   async findAll(): Promise<User[]> {
       return await prisma.user.findMany();
   }


   async update(id: number, user: Partial<User>): Promise<User> {
        return await prisma.user.update({
            where: {id},
            data: user,
   });}


   async delete(id: number): Promise<void> {
       await prisma.user.delete({where: {id}})
   }

}