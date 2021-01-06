import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundPageComponent} from "./page-not-found-page.component";

const routes: Routes = [
  {
    path: '',
    component: PageNotFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNotFoundPageRoutingModule { }
