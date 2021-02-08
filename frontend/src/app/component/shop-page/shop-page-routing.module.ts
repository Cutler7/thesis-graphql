import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShopPageComponent} from './shop-page.component';
import {RouteName} from '../../shared/enum/route-name.enum';

const routes: Routes = [
  {
    path: '',
    component: ShopPageComponent,
    children: [
      {
        path: RouteName.LIST,
        loadChildren: () => import('./product-list/product-list.module')
          .then(m => m.ProductListModule),
      },
      {
        path: RouteName.DETAILS,
        loadChildren: () => import('./product-details/product-details.module')
          .then(m => m.ProductDetailsModule),
      },
      {
        path: RouteName.CART,
        loadChildren: () => import('./shopping-list/shopping-list.module')
          .then(m => m.ShoppingListModule),
      },
      {
        path: RouteName.PAYMENT,
        loadChildren: () => import('./delivery-and-payment/delivery-and-payment.module')
          .then(m => m.DeliveryAndPaymentModule),
      },
      {
        path: RouteName.ADMIN,
        // canActivate: [AuthGuard],
        loadChildren: () => import('./admin-page/admin-page.module')
          .then(m => m.AdminPageModule),
      },
      {
        path: '',
        redirectTo: RouteName.LIST,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopPageRoutingModule { }
