import {BaseModel} from './_base.model';
import {Comment} from './comment.model';
import {comments} from '../controller/_data';

export interface ProductProperty {
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

  abcd(a: any, b: any, c: any, d: any): Comment {
    console.log('abcd');
    return new Comment(comments[0]);
  }
}
