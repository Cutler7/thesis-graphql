import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../shared/model/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styles: [],
})
export class AddProductComponent implements OnInit {

  productModel = new Product({properties: [{}]});
  constructor() { }

  ngOnInit(): void {
  }

}
