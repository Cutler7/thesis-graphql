import {BaseModel} from './_base.model';

export class Product extends BaseModel {

  name: string;

  description: string;

  price: number;

  img?: string;
}
