export type TaskStatus = string; // "new" | "em esper" | "terminado";

export class Task {

  public id?: number;
  public userId?: number| null; // Relacionamento com User
  public categoryId?: number | null; // Relacionamento opcional com Category
  public status: TaskStatus;

    constructor(
      public title: string,
      public description: string | null,
      public dueDate: Date,
    ) {
      this.status = "new";
    }
  }
  