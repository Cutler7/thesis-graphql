import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RouteName} from '../../../shared/enum/route-name.enum';
import {ProductService} from '../../../shared/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [],
})
export class ProductListComponent implements OnInit {

  columns = ['image', 'name', 'price', 'action'];

  products: any[] = [];

  constructor(
    private router: Router,
    private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    this.productService.getProductList()
      .then(res => this.products = res);
  }

  goToDetails(row: any) {
    console.log(row);
    this.router.navigate([RouteName.SHOP, RouteName.DETAILS, row.id]);
  }
}
