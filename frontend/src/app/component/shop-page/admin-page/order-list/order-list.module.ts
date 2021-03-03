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
import {MatSortModule} from '@angular/material/sort';
import {SearchPanelComponent} from './search-panel/search-panel.component';
import {MatCardModule} from '@angular/material/card';
import {FormInputModule} from '../../../_shared/form-input/form-input.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    PhonePipe,
    OrderListComponent,
    OrderDetailsDialogComponent,
    SearchPanelComponent,
  ],
  imports: [
    CommonModule,
    OrderListRoutingModule,
    GoToProductListModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    StatusLabelModule,
    MatSortModule,
    MatCardModule,
    FormInputModule,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
})
export class OrderListModule { }
