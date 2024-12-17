import { PrismaClient} from "@prisma/client"
import { ICategoryRepository } from "../Interfaces/ICategory"
import { Category } from "../entities/Category"

const prisma = new PrismaClient();

interface CreateCategoryDTO {
    name: string;
    userId?: number;
}


export class CategoryRepository implements ICategoryRepository{

    async createCategory(category: CreateCategoryDTO): Promise<Category> {
        const categoryData = await prisma.category.create({
            data: {
                name: category.name,
                userId: category.userId,
            },
        });
    
        const createdCategory = new Category(
            categoryData.name,
            categoryData.id,
            categoryData.userId
        );
    
        return createdCategory;
    }
    
    
    findByID(id: number): Promise<Category | null> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Category[]> {
        throw new Error("Method not implemented.");
    }
    update(id: number, user: Partial<Category>): Promise<Category> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

}