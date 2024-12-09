import { User } from "../entities/User";

import { UserUseCase } from "../use-case/UserUseCase";

export interface IUserRepository {
  createUser(user: User): Promise<User>;
  findById(id: number): Promise<User | null>;
  findAll(): Promise<User[]>;
  update(id: number, user: Partial<User>): Promise<User>;
  delete(id: number): Promise<void>;
}


