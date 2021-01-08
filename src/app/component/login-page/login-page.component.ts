import {Component, OnInit} from '@angular/core';
import {RouteName} from '../../shared/enum/route-name.enum';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthorizationService} from '../../shared/service/authorization.service';
import {ReportService} from '../../shared/service/report.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [],
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService,
    private reportService: ReportService,
  ) {
  }

  ngOnInit(): void {
    this.prepareFormGroup();
  }

  onLogin() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.authorizationService.login(this.form.value)
        .then(() => this.router.navigate([RouteName.SHOP]))
        .catch(() => this.reportService.showUserInfo('Nie udało się zalogować'));
    }
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
