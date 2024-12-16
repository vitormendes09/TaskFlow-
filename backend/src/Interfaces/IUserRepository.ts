import { User } from "../entities/User";



export interface IUserRepository {
  createUser(user: User): Promise<User>;
  findById(id: number): Promise<User | null>;
  findAll(): Promise<User[]>;
  delete(id: number): Promise<void>;
}


