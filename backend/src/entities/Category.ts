export class Category {

  private name: string;
  private id?: number;
  private userId?: number;
  constructor(
    name: string
  ) {

    this.name = name;
  }


  
  get getId() : number |undefined {
    return this.id
  }

  get getName(): string{
    return this.name;
  }

  get getUserId(): number | undefined{
    return this.userId;
  }
  
}
