export type TaskStatus = string; // "new" | "em esper" | "terminado";

export class Task {

  private id?: number;
  private userId?: number| null; // Relacionamento com User
  private categoryId?: number | null; // Relacionamento opcional com Category
  private status: string; // TaskStatus;
  private title: string;
  private description: string;
  private dueDate: Date;

    constructor(
      title: string,
      description: string,
      dueDate: Date
    ) { 

      this.title = title;
      this.description = description;
      this.description = description;
      this.dueDate = dueDate;
      this.status = "new";
    }

    get getStatus() : string {
      return this.status;
    }
    get getTitle() : string {
      return this.title;
    }
    get getDescription() : string{
      return this.description;
    }
    get getdueDate() : Date {
      return this.dueDate;
    }
    get getId() : number |undefined {
      return this.id;
    }
    get getUserId() : number | null |undefined {
      return this.userId;
    }

    get getCategoryId(): number | null | undefined{
      return this.categoryId;
    }
    

    
    set SetTitle(newTitle : string) {

      if(newTitle.length <= 2 ){
        throw new Error ("O título deve ter pelo menos 2 caracteres")
      }
      this.title = newTitle;
    }

    set SetDescription(newDescription: string){
      this.description = newDescription;
    }
    
    set SetDueDate(newDueDate : Date){
      this.dueDate = newDueDate;
    }
  }
  