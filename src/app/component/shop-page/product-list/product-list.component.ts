import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RouteName} from '../../../shared/enum/route-name.enum';
import {ProductService} from '../../../shared/service/product.service';
import {Product} from '../../../shared/model/product.model';
import {ShoppingCartService} from '../../../shared/service/shopping-cart.service';
import {ReportService} from '../../../shared/service/report.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [],
})
export class ProductListComponent implements OnInit {

  columns = ['image', 'name', 'price', 'action'];

  products: Product[] = [];

  constructor(
    private router: Router,
    private productService: ProductService,
    private reportService: ReportService,
    private shoppingCartService: ShoppingCartService,
  ) {
  }

  ngOnInit(): void {
    this.productService.getProductList()
      .then(res => this.products = res);
  }

  addToCart(product: Product) {
    this.shoppingCartService.addProduct(product);
    this.reportService.showUserInfo('Dodano artykuł do listy zakupów');
  }

  goToDetails(id: number) {
    this.router.navigate([RouteName.SHOP, RouteName.DETAILS, id]);
  }
}
