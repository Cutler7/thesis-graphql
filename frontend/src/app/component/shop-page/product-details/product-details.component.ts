import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../../shared/model/product.model';
import {MatDialog} from '@angular/material/dialog';
import {ImageDialogComponent} from './image-dialog/image-dialog.component';
import {ShoppingCartService} from '../../../shared/service/shopping-cart.service';
import {ReportService} from '../../../shared/service/report.service';
import {AddCommentDialogComponent} from './add-comment-dialog/add-comment-dialog.component';
import {ProductService} from '../../../shared/service/http/product.service';
import {Comment} from '../../../shared/model/comment.model';
import {getItemLabel} from 'src/app/shared/util/get-item-label.function';
import {PRODUCT_CATEGORY} from '../../../shared/const/product-category.const';

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
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.fetchData(id);
  }

  addToCart(product: Product, count: number) {
    this.shoppingCartService.addProduct(product, count);
    this.product.quantity -= count;
    this.reportService.showUserInfo('Dodano artykuł do listy zakupów');
  }

  showFullScreenImg() {
    this.dialog.open(ImageDialogComponent, {
      data: this.product.fullImg,
    });
  }

  openAddCommentDialog() {
    const dialogRef = this.dialog.open(AddCommentDialogComponent, {width: '400px'});
    dialogRef.afterClosed().subscribe(val => this.addComment(val));
  }

  getItemLabel(category: string): string {
    return getItemLabel(PRODUCT_CATEGORY, category);
  }

  private addComment(comment: Comment) {
    this.productService.addComment(this.product._id, comment)
      .then(() => this.fetchData(this.product._id))
      .then(() => this.reportService.showUserInfo(`Dodano komentarz dla produktu: ${this.product.name}`));
  }

  private fetchData(id: string) {
    this.productService.getProductById(id)
      .then(res => {
        this.product = res;
        this.updateProductAmount();
      });
  }

  private updateProductAmount() {
    const amount = this.shoppingCartService.getProductList().get(this.product._id)?.count || 0;
    this.product.quantity -= amount;
  }
}
