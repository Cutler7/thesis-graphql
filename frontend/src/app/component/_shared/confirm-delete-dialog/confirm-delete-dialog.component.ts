import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styles: [],
})
export class ConfirmDeleteDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public content: string,
    public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
  ) {
  }
}
