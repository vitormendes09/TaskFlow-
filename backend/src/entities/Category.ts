export class Category {
    constructor(
      public id: number,
      public name: string,
      public userId: number // Relacionamento com User
    ) {}
  }
  