import {Component, Input} from '@angular/core';
import {OrderItem} from '../../../../../shared/model/order.model';

@Component({
  selector: 'app-products-in-order',
  templateUrl: './products-in-order.component.html',
  styles: [],
})
export class ProductsInOrderComponent {

  @Input()
  orderItems: OrderItem[];

  readonly columns = ['product', 'amount', 'priceOne', 'priceAll'];
}
