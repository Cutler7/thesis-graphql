import {Component} from '@angular/core';
import {RouteName} from '../../../shared/enum/route-name.enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-go-to-product-list',
  templateUrl: './go-to-product-list.component.html',
  styles: [],
})
export class GoToProductListComponent {

  constructor(
    private router: Router,
  ) {
  }

  goToProductList() {
    this.router.navigate([RouteName.SHOP, RouteName.LIST]);
  }
}
