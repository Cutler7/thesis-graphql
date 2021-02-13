import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-product-button',
  templateUrl: './add-product-button.component.html',
  styles: [],
})
export class AddProductButtonComponent {

  count: number = 1;

  @Output()
  addProductEvent = new EventEmitter<number>();

  addProduct() {
    this.addProductEvent.emit(this.count);
    this.count = 1;
  }

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
