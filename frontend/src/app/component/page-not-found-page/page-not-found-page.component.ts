import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RouteName} from "../../shared/enum/route-name.enum";

@Component({
  selector: 'app-page-not-found-page',
  templateUrl: './page-not-found-page.component.html',
  styles: [
  ]
})
export class PageNotFoundPageComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  goToMainPage() {
    this.router.navigate([RouteName.SHOP]);
  }
}
