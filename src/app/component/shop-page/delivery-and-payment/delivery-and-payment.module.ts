import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DeliveryAndPaymentRoutingModule} from './delivery-and-payment-routing.module';
import {DeliveryAndPaymentComponent} from './delivery-and-payment.component';
import {GoToProductListModule} from '../../_shared/go-to-product-list/go-to-product-list.module';


@NgModule({
  declarations: [DeliveryAndPaymentComponent],
  imports: [
    CommonModule,
    DeliveryAndPaymentRoutingModule,
    GoToProductListModule,
  ],
})
export class DeliveryAndPaymentModule {
}
