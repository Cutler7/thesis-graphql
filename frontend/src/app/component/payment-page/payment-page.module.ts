import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentPageRoutingModule } from './payment-page-routing.module';
import { PaymentPageComponent } from './payment-page.component';


@NgModule({
  declarations: [PaymentPageComponent],
  imports: [
    CommonModule,
    PaymentPageRoutingModule
  ]
})
export class PaymentPageModule { }
