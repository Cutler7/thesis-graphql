import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileInputComponent} from './file-input.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [FileInputComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
  ],
  exports: [FileInputComponent],
})
export class FileInputModule {
}
