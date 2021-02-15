import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EditProductRoutingModule} from './edit-product-routing.module';
import {EditProductComponent} from './edit-product.component';
import {GoToProductListModule} from '../../../_shared/go-to-product-list/go-to-product-list.module';
import {MatCardModule} from '@angular/material/card';
import {UpdateProductFormModule} from '../../../_shared/update-product/update-product-form.module';


@NgModule({
  declarations: [EditProductComponent],
  imports: [
    CommonModule,
    EditProductRoutingModule,
    GoToProductListModule,
    MatCardModule,
    UpdateProductFormModule,
  ],
})
export class EditProductModule {
}
