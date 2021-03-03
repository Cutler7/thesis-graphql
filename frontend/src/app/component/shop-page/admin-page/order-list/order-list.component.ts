import {Component, OnInit} from '@angular/core';
import {Order} from '../../../../shared/model/order.model';
import {MatDialog} from '@angular/material/dialog';
import {OrderDetailsDialogComponent} from './order-details-dialog/order-details-dialog.component';
import {OrderService} from '../../../../shared/service/http/order.service';
import {FilterArg} from '../../../../shared/interface/query-list-args.interface';
import {Sort} from '@angular/material/sort';
import {PageResponse} from '../../../../shared/interface/page-response.interface';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styles: [],
})
export class OrderListComponent implements OnInit {

  orders: PageResponse<Order> = null;

  filterArgs: FilterArg[] = [];

  sortArg: string;

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

  search(searchParams: FilterArg[]) {
    this.filterArgs = searchParams;
    this.fetchData();
  }

  sortData(sort: Sort) {
    if (!sort.direction) {
      this.sortArg = null;
    } else {
      this.sortArg = `${sort.active}_${sort.direction}`;
    }
    this.fetchData();
  }

  private fetchData(page: number = 0, pageSize: number = 10) {
    this.orderService.getOrderList({page, pageSize, filterArgs: this.filterArgs, orderBy: this.sortArg})
      .then(res => this.orders = res)
      .then(() => this.countOrderPrice())
      .catch(err => console.error(err));
  }

  private countOrderPrice() {
    this.orders.content.forEach(order => {
      order.orderValue = order.products
        .reduce((result, currVal) => result + (currVal.amount * currVal.product.price), 0);
    });
  }
}
