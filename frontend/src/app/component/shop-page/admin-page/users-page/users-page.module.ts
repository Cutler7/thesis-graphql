import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersPageRoutingModule} from './users-page-routing.module';
import {UsersPageComponent} from './users-page.component';
import {GoToProductListModule} from '../../../_shared/go-to-product-list/go-to-product-list.module';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [UsersPageComponent],
  imports: [
    CommonModule,
    UsersPageRoutingModule,
    GoToProductListModule,
    MatButtonModule,
    MatTableModule,
  ],
})
export class UsersPageModule { }
