import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusLabelComponent} from './status-label.component';
import {FormInputModule} from '../form-input/form-input.module';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [StatusLabelComponent],
  imports: [
    CommonModule,
    FormInputModule,
    MatButtonModule,
  ],
  exports: [StatusLabelComponent],
})
export class StatusLabelModule {
}
