import {BaseModel} from './_base.model';

export class Comment extends BaseModel {

  author: string;

  rate: number;

  content: string;
}
