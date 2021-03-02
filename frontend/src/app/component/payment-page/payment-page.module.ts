import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PaymentPageRoutingModule} from './payment-page-routing.module';
import {PaymentPageComponent} from './payment-page.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [PaymentPageComponent],
  imports: [
    CommonModule,
    PaymentPageRoutingModule,
    MatButtonModule,
  ],
})
export class PaymentPageModule { }
