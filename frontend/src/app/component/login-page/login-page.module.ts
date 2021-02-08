import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginPageRoutingModule} from './login-page-routing.module';
import {LoginPageComponent} from './login-page.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {FieldErrorsModule} from '../_shared/field-errors/field-errors.module';
import {FormInputModule} from '../_shared/form-input/form-input.module';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FieldErrorsModule,
    FormInputModule,
  ],
})
export class LoginPageModule { }
