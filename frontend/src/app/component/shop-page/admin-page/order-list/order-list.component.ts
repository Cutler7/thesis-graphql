import {Component, OnInit} from '@angular/core';
import {Order} from '../../../../shared/model/order.model';
import {MatDialog} from '@angular/material/dialog';
import {OrderDetailsDialogComponent} from './order-details-dialog/order-details-dialog.component';
import {OrderService} from '../../../../shared/service/http/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styles: [],
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];

  readonly columns = ['orderNo', 'createdAt', 'orderSum', 'status', 'paid', 'action'];

  constructor(
    private dialog: MatDialog,
    private orderService: OrderService,
  ) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  openOrderDetails(id: string) {
    this.dialog.open(OrderDetailsDialogComponent, {
      width: '400px',
      data: id,
    });
  }

  private fetchData() {
    this.orderService.getOrderList()
      .then(res => this.orders = res.content)
      .then(() => this.countOrderPrice());
  }

  private countOrderPrice() {
    this.orders.forEach(order => {
      order.orderValue = order.products
        .reduce((result, currVal) => result + (currVal.amount * currVal.product.price), 0);
    });
  }
}
