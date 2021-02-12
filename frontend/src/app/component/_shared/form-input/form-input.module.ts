import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormInputComponent} from './form-input.component';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FieldErrorsModule} from '../field-errors/field-errors.module';


@NgModule({
  declarations: [FormInputComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    FieldErrorsModule,
  ],
  exports: [FormInputComponent],
})
export class FormInputModule {
}
