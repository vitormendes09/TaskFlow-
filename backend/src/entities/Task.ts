export type TaskStatus = "new" | "em esper" | "terminado";

export class Task {

  public id?: number;
  public userId?: number; // Relacionamento com User
  public categoryId?: number; // Relacionamento opcional com Category
  public status: TaskStatus;

    constructor(
      public title: string,
      public description: string | null,
      public dueDate: Date,
    ) {
      this.status = "new";
    }
  }
  