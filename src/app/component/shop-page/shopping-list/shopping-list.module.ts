import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShoppingListRoutingModule} from './shopping-list-routing.module';
import {ShoppingListComponent} from './shopping-list.component';
import {MatTableModule} from '@angular/material/table';
import {GoToProductListModule} from '../../_shared/go-to-product-list/go-to-product-list.module';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ShoppingListComponent],
  imports: [
    CommonModule,
    ShoppingListRoutingModule,
    MatTableModule,
    GoToProductListModule,
    MatButtonModule,
  ],
})
export class ShoppingListModule {
}
