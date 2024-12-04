export class Task {
    constructor(
      public id: number,
      public title: string,
      public description: string | null,
      public dueDate: Date,
      public status: string,
      public userId: number, // Relacionamento com User
      public categoryId?: number // Relacionamento opcional com Category
    ) {}
  }
  