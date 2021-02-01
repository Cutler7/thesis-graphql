import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddProductButtonComponent} from './add-product-button.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [AddProductButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
  ],
  exports: [
    AddProductButtonComponent,
  ],
})
export class AddProductButtonModule {
}
