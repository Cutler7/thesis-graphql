import {Component, OnInit} from '@angular/core';
import {RouteName} from "../../shared/enum/route-name.enum";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToMainPage() {
    this.router.navigate([RouteName.SHOP]);
  }
}
