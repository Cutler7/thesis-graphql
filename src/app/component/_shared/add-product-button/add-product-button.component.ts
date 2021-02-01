import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-product-button',
  templateUrl: './add-product-button.component.html',
  styles: [],
})
export class AddProductButtonComponent {

  count: number = 1;

  @Output()
  addProduct = new EventEmitter<number>();

  increment() {
    if (this.count < 20) {
      this.count++;
    }
  }

  decrement() {
    if (this.count > 1) {
      this.count--;
    }
  }
}
