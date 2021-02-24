import {Component, OnInit} from '@angular/core';
import {Order} from '../../../../shared/model/order.model';
import {MatDialog} from '@angular/material/dialog';
import {OrderDetailsDialogComponent} from './order-details-dialog/order-details-dialog.component';
import {range} from 'lodash';

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
  ) {
  }

  ngOnInit(): void {
    const order = {
      _id: '1',
      orderNo: '12345',
      createdAt: new Date(),
      products: [],
      paid: true,
      status: 'PENDING',
    } as Order;
    range(20).forEach(e => this.orders.push(order));
  }

  openOrderDetails(id: string) {
    this.dialog.open(OrderDetailsDialogComponent, {
      width: '400px',
      data: id,
    });
  }
}
