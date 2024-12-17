export class Category {
  private id?: number;
  private name: string;
  private userId?: number;

  constructor(name: string, id?: number, userId?: number) {
      this.id = id;
      this.name = name;
      this.userId = userId;
  }

  getName() {
      return this.name;
  }

  getId() {
      return this.id;
  }

  getUserId() {
      return this.userId;
  }
}
