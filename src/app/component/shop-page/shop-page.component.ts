import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RouteName} from "../../shared/enum/route-name.enum";

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styles: [
  ]
})
export class ShopPageComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  goToLoginPage() {
    this.router.navigate([RouteName.LOGIN]);
  }
}
