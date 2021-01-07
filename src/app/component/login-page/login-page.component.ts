import {Component, OnInit} from '@angular/core';
import {RouteName} from '../../shared/enum/route-name.enum';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [],
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.prepareFormGroup();
  }

  onLogin() {
    this.form.markAllAsTouched();
    console.log(this.form);
  }

  clearFormValues() {
    this.form.reset();
  }

  goToMainPage() {
    this.router.navigate([RouteName.SHOP]);
  }

  private prepareFormGroup() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }
}
