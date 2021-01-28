import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../shared/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: [],
})
export class ProductDetailsComponent implements OnInit {

  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(Number(id))
      .then(res => this.product = res);
  }
}
