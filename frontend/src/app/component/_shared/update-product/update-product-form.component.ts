import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {InputType} from 'src/app/shared/enum/input.type';
import {Product} from '../../../shared/model/product.model';
import {ProductService} from '../../../shared/service/http/product.service';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ReportService} from '../../../shared/service/report.service';
import {Router} from '@angular/router';
import {RouteName} from '../../../shared/enum/route-name.enum';

@Component({
  selector: 'app-update-product-form',
  templateUrl: './update-product-form.component.html',
  styles: [],
})
export class UpdateProductFormComponent implements OnInit, OnChanges {

  InputType = InputType;

  @Input()
  value: Product;

  form: FormGroup;

  constructor(
    private productService: ProductService,
    private reportService: ReportService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.prepareFormGroup();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value && this.value) {
      this.form.patchValue(this.value);
    }
  }

  saveProduct() {
    if (this.form.valid) {
      this.productService.createOrUpdateProduct(this.form.value)
        .then(() => this.reportService.showUserInfo('Zmiany zostały zapisane'))
        .then(() => this.router.navigate([RouteName.SHOP]));
    } else {
      this.reportService.showUserInfo('Popraw błędne dane');
    }
  }

  addProperty() {
    const list = this.form.get('properties') as FormArray;
    list.push(new FormGroup({
      name: new FormControl(''),
      value: new FormControl(''),
    }));
  }

  private prepareFormGroup() {
    this.form = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      description: new FormControl(''),
      img: new FormControl(''),
      price: new FormControl(''),
      quantity: new FormControl(''),
      properties: new FormArray([]),
    });
  }
}
