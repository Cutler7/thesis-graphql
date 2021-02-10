import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductDetailsRoutingModule} from './product-details-routing.module';
import {ProductDetailsComponent} from './product-details.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {GoToProductListModule} from '../../_shared/go-to-product-list/go-to-product-list.module';
import {ImageDialogComponent} from './image-dialog/image-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {AddProductButtonModule} from '../../_shared/add-product-button/add-product-button.module';
import {MatTableModule} from '@angular/material/table';
import {ProductRatingComponent} from './product-rating/product-rating.component';
import {BarRatingModule} from 'ngx-bar-rating';
import {ProductCommentsComponent} from './product-comments/product-comments.component';
import {AddCommentDialogComponent} from './add-comment-dialog/add-comment-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormInputModule} from '../../_shared/form-input/form-input.module';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ImageDialogComponent,
    ProductRatingComponent,
    ProductCommentsComponent,
    AddCommentDialogComponent,
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    GoToProductListModule,
    AddProductButtonModule,
    MatTableModule,
    BarRatingModule,
    ReactiveFormsModule,
    FormInputModule,
  ],
})
export class ProductDetailsModule { }
