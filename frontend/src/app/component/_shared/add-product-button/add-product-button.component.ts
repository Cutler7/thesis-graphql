import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-add-product-button',
  templateUrl: './add-product-button.component.html',
  styles: [],
})
export class AddProductButtonComponent {

  count: number = 1;

  @Input()
  amountAvailable: number;

  @Output()
  addProductEvent = new EventEmitter<number>();

  addProduct() {
    this.addProductEvent.emit(this.count);
    this.count = 1;
  }

  increment() {
    if (this.count < this.amountAvailable) {
      this.count++;
    }
  }

  decrement() {
    if (this.count > 1) {
      this.count--;
    }
  }
}
