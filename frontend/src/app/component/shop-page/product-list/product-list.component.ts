import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RouteName} from '../../../shared/enum/route-name.enum';
import {Product} from '../../../shared/model/product.model';
import {ShoppingCartService} from '../../../shared/service/shopping-cart.service';
import {ReportService} from '../../../shared/service/report.service';
import {AuthorizationService} from '../../../shared/service/authorization.service';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDeleteDialogComponent} from './confirm-delete-dialog/confirm-delete-dialog.component';
import {ProductService} from '../../../shared/service/http/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [],
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  readonly columns = ['image', 'name', 'price', 'action'];

  get isUserLoggedIn(): boolean {
    return this.authorizationService.isUserLoggedIn();
  }

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private productService: ProductService,
    private reportService: ReportService,
    private shoppingCartService: ShoppingCartService,
    private authorizationService: AuthorizationService,
  ) {
  }

  ngOnInit(): void {
    this.productService.getProductList()
      .then(res => this.products = res as any)
      .catch(err => console.error(err));
  }

  addToCart(product: Product, count: number) {
    this.shoppingCartService.addProduct(product, count);
    this.reportService.showUserInfo('Dodano artykuł do listy zakupów');
  }

  editProduct(id: number) {

  }

  addNewProduct() {

  }

  deleteProduct(id: number) {
    this.dialog.open(ConfirmDeleteDialogComponent, {width: '400px'});
  }

  goToDetails(id: number) {
    this.router.navigate([RouteName.SHOP, RouteName.DETAILS, id]);
  }

  search(searchParams: any) {
    console.log(searchParams);
  }
}
