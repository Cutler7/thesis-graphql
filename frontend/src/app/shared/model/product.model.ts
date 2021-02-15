import {BaseModel} from './_base.model';
import {Comment} from './comment.model';

export interface ProductProperty extends BaseModel {
  name: string;
  value: string;
}

export class Product extends BaseModel {

  name: string;

  description: string;

  price: number;

  comments: Comment[] = [];

  properties: ProductProperty[] = [];

  img?: string;

  quantity: number;
}
