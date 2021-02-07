import {Component, Input} from '@angular/core';
import {Comment} from '../../../../shared/model/comment.model';

@Component({
  selector: 'app-product-comments',
  templateUrl: './product-comments.component.html',
  styles: [],
})
export class ProductCommentsComponent {

  @Input()
  comments: Comment[] = [];

  readonly columns = ['author', 'createdAt', 'rate', 'content'];
}
