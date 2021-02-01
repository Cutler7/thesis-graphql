import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductListRoutingModule} from './product-list-routing.module';
import {ProductListComponent} from './product-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SearchPanelComponent} from './search-panel/search-panel.component';
import {MatCardModule} from '@angular/material/card';
import {AddProductButtonModule} from '../../_shared/add-product-button/add-product-button.module';
import {FormInputModule} from '../../_shared/form-input/form-input.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ProductListComponent, SearchPanelComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ProductListRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    AddProductButtonModule,
    FormInputModule,
    ReactiveFormsModule,
  ],
})
export class ProductListModule { }
