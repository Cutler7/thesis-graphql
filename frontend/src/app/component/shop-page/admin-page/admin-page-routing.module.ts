import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPageComponent} from './admin-page.component';
import {RouteName} from '../../../shared/enum/route-name.enum';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path: RouteName.USERS,
        loadChildren: () => import('./users-page/users-page.module')
          .then(m => m.UsersPageModule),
      },
      {
        path: RouteName.ORDERS,
        loadChildren: () => import('./order-list/order-list.module')
          .then(m => m.OrderListModule),
      },
      {
        path: '',
        redirectTo: '/' + RouteName.SHOP + '/' + RouteName.LIST,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }
