import { Category } from "../entities/Category";

export interface ICategoryRepository{
    createCategory(category: Category):Promise<Category>;
    findByID(id: number): Promise<Category | null>
    findAll(): Promise <Category []>;
    update(id: number, user: Partial<Category>): Promise <Category>;
    delete(id: number): Promise<void>;
};