import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersPageRoutingModule} from './users-page-routing.module';
import {UsersPageComponent} from './users-page.component';
import {GoToProductListModule} from '../../../_shared/go-to-product-list/go-to-product-list.module';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {AddUserDialogComponent} from './add-user-dialog/add-user-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {FormInputModule} from '../../../_shared/form-input/form-input.module';


@NgModule({
  declarations: [UsersPageComponent, AddUserDialogComponent],
  imports: [
    CommonModule,
    UsersPageRoutingModule,
    GoToProductListModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormInputModule,
  ],
})
export class UsersPageModule { }
