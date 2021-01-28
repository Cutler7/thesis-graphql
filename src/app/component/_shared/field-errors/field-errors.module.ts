import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FieldErrorsComponent} from './field-errors.component';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [FieldErrorsComponent],
  imports: [
    CommonModule,
    MatInputModule,
  ],
  exports: [FieldErrorsComponent],
})
export class FieldErrorsModule {
}
