import { PrismaClient } from "@prisma/client";

import { ItaskRepository } from "../Interfaces/ITaskRepository";

import{ Task } from "../entities/Task";

import { User } from "../entities/User";


import { UserUseCase } from "../use-case/UserUseCase"



const prisma = new PrismaClient();

export class TaskRepository implements ItaskRepository{

    

    async createTask(task: Task): Promise<Task> {
        const createTaskData = await prisma.task.create({
                data: { 
                    title: task.getTitle,
                    description: task.getDescription ,
                    dueDate: task.getdueDate,
                    status: task.getStatus
                }
            });

        
        const createTask = new Task(
            createTaskData.title,
            createTaskData.description,
            createTaskData.dueDate,
            
        );
            return createTask;
    }

   findById(id: number): Promise<Task | null> {
       throw new Error("Method not implemented.");
   }
   findAll(): Promise<Task[]> {
       throw new Error("Method not implemented.");
   }
   update(id: number, user: Partial<Task>): Promise<Task> {
       throw new Error("Method not implemented.");
   }
   delete(id: number): Promise<void> {
       throw new Error("Method not implemented.");
   }


   


}