import {Component, Inject, OnInit, Pipe, PipeTransform} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderService} from '../../../../../shared/service/http/order.service';
import {Order} from '../../../../../shared/model/order.model';
import {getItemLabel} from '../../../../../shared/util/get-item-label.function';
import {DELIVERY_METHOD} from '../../../../../shared/const/delivery-method.const';

@Pipe({name: 'phone'})
export class PhonePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return `+48 ${value.substr(0, 3)}-${value.substr(3, 3)}-${value.substr(6, 3)}`;
  }
}

@Component({
  selector: 'app-order-details-dialog',
  templateUrl: './order-details-dialog.component.html',
  styles: [],
})
export class OrderDetailsDialogComponent implements OnInit {

  order: Order;

  constructor(
    private orderService: OrderService,
    private dialogRef: MatDialogRef<OrderDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public orderId: string,
  ) {
  }

  ngOnInit(): void {
    this.orderService.getOrderById(this.orderId)
      .then(res => this.order = res);
  }

  getDelivery(value: string): string {
    return getItemLabel(DELIVERY_METHOD, value);
  }

  close() {
    this.dialogRef.close();
  }
}
