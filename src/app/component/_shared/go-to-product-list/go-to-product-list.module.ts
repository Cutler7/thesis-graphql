import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoToProductListComponent} from './go-to-product-list.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [GoToProductListComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [GoToProductListComponent],
})
export class GoToProductListModule {
}
