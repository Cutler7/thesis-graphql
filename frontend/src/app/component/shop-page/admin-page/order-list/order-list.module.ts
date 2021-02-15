import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderListRoutingModule} from './order-list-routing.module';
import {OrderListComponent} from './order-list.component';
import {GoToProductListModule} from '../../../_shared/go-to-product-list/go-to-product-list.module';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    OrderListRoutingModule,
    GoToProductListModule,
    MatTableModule,
  ],
})
export class OrderListModule { }
