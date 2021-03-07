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

  category: string;

  comments: Comment[] = [];

  properties: ProductProperty[] = [];

  img: File;

  fullImg: string;

  minImg: string;

  quantity: number;
}
