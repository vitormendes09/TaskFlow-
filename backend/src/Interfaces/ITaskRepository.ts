
import { Task } from "../entities/Task";

export interface ItaskRepository{
    createTask(task:Task): Promise<Task>;
    findById(id: number): Promise<Task | null>;
    findAll(): Promise<Task[]>;
    update(id: number, user: Partial<Task>): Promise<Task>;
    delete(id: number): Promise<void>;
};