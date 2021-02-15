import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UpdateProductFormComponent} from './update-product-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormInputModule} from '../form-input/form-input.module';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [UpdateProductFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormInputModule,
    MatButtonModule,
  ],
  exports: [UpdateProductFormComponent],
})
export class UpdateProductFormModule {
}
