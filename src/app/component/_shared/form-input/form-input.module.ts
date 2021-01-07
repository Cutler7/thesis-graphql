import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormInputRoutingModule} from './form-input-routing.module';
import {FormInputComponent} from './form-input.component';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [FormInputComponent],
  imports: [
    CommonModule,
    FormInputRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [FormInputComponent],
})
export class FormInputModule {
}
