import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../shared/service/product.service';
import {Product} from '../../../shared/model/product.model';
import {MatDialog} from '@angular/material/dialog';
import {ImageDialogComponent} from './image-dialog/image-dialog.component';

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
    private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(Number(id))
      .then(res => {
        this.product = res;
        this.product.img = 'assets/img/example.jpg';
      });
  }

  showFullScreenImg() {
    this.dialog.open(ImageDialogComponent, {
      data: this.product.img,
    });
  }
}
