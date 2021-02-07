import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Comment} from '../../../../shared/model/comment.model';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styles: [],
})
export class ProductRatingComponent implements OnChanges {

  @Input()
  comments: Comment[] = [];

  avgRate: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.comments && this.comments) {
      const sum = this.comments.reduce((prevVal, currVal) => prevVal + currVal.rate, 0);
      this.avgRate = sum / this.comments.length;
    }
  }

  addComment() {

  }
}
