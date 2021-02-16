import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-order-details-dialog',
  templateUrl: './order-details-dialog.component.html',
  styles: [],
})
export class OrderDetailsDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public orderId: string,
  ) {
  }

  ngOnInit(): void {
    console.log(this.orderId);
  }

}
