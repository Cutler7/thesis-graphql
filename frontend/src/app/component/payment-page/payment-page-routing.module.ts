import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PaymentPageComponent} from './payment-page.component';

const routes: Routes = [
  {
    path: ':id',
    component: PaymentPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentPageRoutingModule {
}
