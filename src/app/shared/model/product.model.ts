import {BaseModel} from './_base.model';

export interface ProductProperty {
  name: string;
  value: string;
}

export class Product extends BaseModel {

  name: string;

  description: string;

  price: number;

  properties: ProductProperty[] = [];

  img?: string;
}
