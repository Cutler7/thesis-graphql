import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductListRoutingModule} from './product-list-routing.module';
import {ProductListComponent} from './product-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ProductListRoutingModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class ProductListModule { }
