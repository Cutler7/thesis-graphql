import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmDeleteDialogComponent} from './confirm-delete-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ConfirmDeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class ConfirmDeleteDialogModule {
}
