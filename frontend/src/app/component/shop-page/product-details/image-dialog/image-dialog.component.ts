import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styles: [],
})
export class ImageDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public imgRef: string,
  ) {
  }

  ngOnInit() {
  }
}
