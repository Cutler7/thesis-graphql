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
import {MatDialogModule} from '@angular/material/dialog';
import {UpdateAmountDialogComponent} from './update-amount-dialog/update-amount-dialog.component';
import {ConfirmDeleteDialogModule} from '../../_shared/confirm-delete-dialog/confirm-delete-dialog.module';
import {ProductQuantityModule} from '../../_shared/product-quantity/product-quantity.module';


@NgModule({
  declarations: [
    ProductListComponent,
    SearchPanelComponent,
    UpdateAmountDialogComponent,
  ],
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
    MatDialogModule,
    ConfirmDeleteDialogModule,
    ProductQuantityModule,
  ],
})
export class ProductListModule { }
