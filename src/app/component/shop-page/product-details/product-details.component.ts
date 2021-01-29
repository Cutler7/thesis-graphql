import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../shared/service/product.service';
import {RouteName} from '../../../shared/enum/route-name.enum';
import {Product} from '../../../shared/model/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: [],
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(Number(id))
      .then(res => this.product = res);
  }

  goToProductList() {
    this.router.navigate([RouteName.SHOP, RouteName.LIST]);
  }
}
