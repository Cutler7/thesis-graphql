import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundPageRoutingModule } from './page-not-found-page-routing.module';
import { PageNotFoundPageComponent } from './page-not-found-page.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [PageNotFoundPageComponent],
  imports: [
    CommonModule,
    PageNotFoundPageRoutingModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class PageNotFoundPageModule { }
