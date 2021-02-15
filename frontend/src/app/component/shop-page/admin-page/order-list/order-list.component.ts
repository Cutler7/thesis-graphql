import {Component, OnInit} from '@angular/core';
import {Order} from '../../../../shared/model/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styles: [],
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];

  readonly columns = ['orderNo', 'createdAt', 'orderSum', 'action'];

  constructor() {
  }

  ngOnInit(): void {
    this.orders.push({
      orderNo: '12345',
      createdAt: new Date(),
      products: [],
    } as Order);
  }

}
