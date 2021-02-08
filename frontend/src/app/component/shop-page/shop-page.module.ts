import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShopPageRoutingModule} from './shop-page-routing.module';
import {ShopPageComponent} from './shop-page.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [ShopPageComponent],
  imports: [
    CommonModule,
    ShopPageRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
  ]
})
export class ShopPageModule { }
