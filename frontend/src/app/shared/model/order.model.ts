import {BaseModel} from './_base.model';

export class Order extends BaseModel {

  name: string;

  surname: string;

  email: string;

  phone: string;

  street: string;

  houseNumber: string;

  apartmentNumber: string;

  city: string;

  postalCode: string;

  delivery: string;
}
