import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FieldErrorsRoutingModule} from './field-errors-routing.module';
import {FieldErrorsComponent} from './field-errors.component';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [FieldErrorsComponent],
  imports: [
    CommonModule,
    FieldErrorsRoutingModule,
    MatInputModule,
  ],
  exports: [FieldErrorsComponent],
})
export class FieldErrorsModule {
}
