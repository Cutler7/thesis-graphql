import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styles: [],
})
export class ProductQuantityComponent {

  @Input()
  quantity: number;
}
