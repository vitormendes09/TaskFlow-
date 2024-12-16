import { PrismaClient} from "@prisma/client"
import { ICategoryRepository } from "../Interfaces/ICategory"
import { Category } from "../entities/Category"

const prisma = new PrismaClient();

export class CategoryRepository implements ICategoryRepository{

    async createCategory(category: Category): Promise<Category> {
        
       const CategoryData = await prisma.category.create({
            
            data: {
                name: category.getName,
                id: category.getId,
                userId: category.getUserId
                
            },
       });

       const createdCategory = new Category(
        this.createCategory.name
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