import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductQuantityComponent } from './product-quantity.component';



@NgModule({
  declarations: [ProductQuantityComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductQuantityComponent]
})
export class ProductQuantityModule { }
