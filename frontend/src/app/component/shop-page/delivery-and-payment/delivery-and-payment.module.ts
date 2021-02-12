import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DeliveryAndPaymentRoutingModule} from './delivery-and-payment-routing.module';
import {DeliveryAndPaymentComponent} from './delivery-and-payment.component';
import {GoToProductListModule} from '../../_shared/go-to-product-list/go-to-product-list.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {FormInputModule} from '../../_shared/form-input/form-input.module';


@NgModule({
  declarations: [DeliveryAndPaymentComponent],
  imports: [
    CommonModule,
    DeliveryAndPaymentRoutingModule,
    GoToProductListModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormInputModule,
  ],
})
export class DeliveryAndPaymentModule {
}
