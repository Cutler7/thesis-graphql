import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styles: [],
})
export class ConfirmDeleteDialogComponent implements OnInit {

  productName: string = 'productName';

  constructor() {
  }

  ngOnInit(): void {
  }

}
