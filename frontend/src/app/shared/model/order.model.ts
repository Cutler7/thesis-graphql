import {BaseModel} from './_base.model';

export interface OrderItem extends BaseModel {
  productId: string
  amount: number;
}

export class Order extends BaseModel {

  orderNo: string;

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

  products: OrderItem[];
}
