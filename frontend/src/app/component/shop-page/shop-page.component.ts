import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RouteName} from '../../shared/enum/route-name.enum';
import {AuthorizationService} from '../../shared/service/authorization.service';
import {ShoppingCartService} from '../../shared/service/shopping-cart.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styles: [],
})
export class ShopPageComponent implements OnInit, OnDestroy {

  get isUserLogged(): boolean {
    return this.authorizationService.isUserLoggedIn();
  }

  get username(): string {
    return this.authorizationService.getActiveUser()?.username;
  }

  numberOfProductsInCart: number;

  private subscription: Subscription;

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService,
    private shoppingCartService: ShoppingCartService,
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.shoppingCartService.getProductListObservable()
      .subscribe(list => this.numberOfProductsInCart = list.size);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToLoginPage() {
    this.router.navigate([RouteName.LOGIN]);
  }

  goToShoppingList() {
    this.router.navigate([RouteName.SHOP, RouteName.CART]);
  }

  goToProductList() {
    this.router.navigate([RouteName.SHOP, RouteName.LIST]);
  }

  goToUsersPage() {
    this.router.navigate([RouteName.SHOP, RouteName.ADMIN, RouteName.USERS]);
  }

  goToOrdersPage() {
    this.router.navigate([RouteName.SHOP, RouteName.ADMIN, RouteName.ORDERS]);
  }

  logout() {
    this.authorizationService.logout();
  }
}
