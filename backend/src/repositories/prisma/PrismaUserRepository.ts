import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../UserRepository";
import { User } from "../../entities/User";


const prisma = new PrismaClient();

export class PrismaUserRepository implements  UserRepository {

    async create (user: User): Promise <User> {

        const createUser = await prisma.user.create({
            data: {
                name:user.name,
                email:user.email,
                password:user.password
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
    });


   }


   async delete(id: number): Promise<void> {
       await prisma.user.delete({where: {id}})
   }

}