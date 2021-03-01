import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderListRoutingModule} from './order-list-routing.module';
import {OrderListComponent} from './order-list.component';
import {GoToProductListModule} from '../../../_shared/go-to-product-list/go-to-product-list.module';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {OrderDetailsDialogComponent, PhonePipe} from './order-details-dialog/order-details-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {StatusLabelModule} from '../../../_shared/status-label/status-label.module';


@NgModule({
  declarations: [
    PhonePipe,
    OrderListComponent,
    OrderDetailsDialogComponent,
  ],
  imports: [
    CommonModule,
    OrderListRoutingModule,
    GoToProductListModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    StatusLabelModule,
  ],
})
export class OrderListModule { }
