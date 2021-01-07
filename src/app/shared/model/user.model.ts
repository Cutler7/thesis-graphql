import {BaseModel} from './_base.model';

export class User extends BaseModel {

  username: string;

  name: string;

  surname: string;
}

const a = new User();
const b: InstanceType<typeof User>;
