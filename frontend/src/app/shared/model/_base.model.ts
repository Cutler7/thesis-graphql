export class BaseModel {

  constructor(source: any = {}) {
    Object.keys(source)
      .forEach(key => this[key as keyof BaseModel] = source[key]);
  }

  id: number;

  createdAt: Date;
}
