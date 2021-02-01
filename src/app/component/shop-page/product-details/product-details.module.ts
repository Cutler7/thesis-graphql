import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductDetailsRoutingModule} from './product-details-routing.module';
import {ProductDetailsComponent} from './product-details.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {GoToProductListModule} from '../../_shared/go-to-product-list/go-to-product-list.module';


@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    MatButtonModule,
    MatCardModule,
    GoToProductListModule,
  ],
})
export class ProductDetailsModule { }
