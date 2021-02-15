import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddProductRoutingModule} from './add-product-routing.module';
import {AddProductComponent} from './add-product.component';
import {GoToProductListModule} from '../../../_shared/go-to-product-list/go-to-product-list.module';
import {MatCardModule} from '@angular/material/card';
import {UpdateProductFormModule} from '../../../_shared/update-product/update-product-form.module';


@NgModule({
  declarations: [AddProductComponent],
  imports: [
    CommonModule,
    AddProductRoutingModule,
    GoToProductListModule,
    MatCardModule,
    UpdateProductFormModule,
  ],
})
export class AddProductModule {
}
