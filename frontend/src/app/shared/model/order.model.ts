import {BaseModel} from './_base.model';
import {Product} from './product.model';

export interface OrderItem extends BaseModel {
  product: Product;
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

  status: string;

  paid: boolean;

  orderValue: number;

  products: OrderItem[];
}
