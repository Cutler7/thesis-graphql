import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RouteName} from '../../shared/enum/route-name.enum';
import {AuthorizationService} from '../../shared/service/authorization.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styles: [],
})
export class ShopPageComponent implements OnInit {

  get isUserLogged(): boolean {
    return this.authorizationService.isUserLoggedIn();
  }

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService,
  ) {
  }

  ngOnInit(): void {
  }

  goToLoginPage() {
    this.router.navigate([RouteName.LOGIN]);
  }

  logout() {
    this.authorizationService.logout();
  }
}
