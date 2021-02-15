import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductServiceMock} from '../../../shared/service/http/product-service-mock.service';
import {Product} from '../../../shared/model/product.model';
import {MatDialog} from '@angular/material/dialog';
import {ImageDialogComponent} from './image-dialog/image-dialog.component';
import {ShoppingCartService} from '../../../shared/service/shopping-cart.service';
import {ReportService} from '../../../shared/service/report.service';
import {AddCommentDialogComponent} from './add-comment-dialog/add-comment-dialog.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: [],
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private reportService: ReportService,
    private productService: ProductServiceMock,
    private shoppingCartService: ShoppingCartService,
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id)
      .then(res => {
        this.product = res;
        this.product.img = 'assets/img/example.jpg';
      });
  }

  addToCart(product: Product, count: number) {
    this.shoppingCartService.addProduct(product, count);
    this.reportService.showUserInfo('Dodano artykuł do listy zakupów');
  }

  showFullScreenImg() {
    this.dialog.open(ImageDialogComponent, {
      data: this.product.img,
    });
  }

  openAddCommentDialog() {
    const dialogRef = this.dialog.open(AddCommentDialogComponent, {width: '400px'});
    dialogRef.afterClosed().subscribe(val => console.log(val));
  }
}
