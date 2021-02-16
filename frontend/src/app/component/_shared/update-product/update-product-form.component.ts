import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
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
})
export class UpdateProductFormComponent implements OnChanges {

  InputType = InputType;

  @Input()
  value: Product;

  form: FormGroup;

  refresh: boolean = true;

  get propertiesIdxList(): number[] {
    return Array.from((this.form.get('properties') as FormArray).controls.keys());
  }

  constructor(
    private productService: ProductService,
    private reportService: ReportService,
    private router: Router,
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value && this.value) {
      this.prepareFormGroup();
      this.adjustListLength(this.value?.properties?.length || 1);
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

  private adjustListLength(newLen: number) {
    const list = this.form.get('properties') as FormArray;
    list.clear();
    new Array(newLen).fill(1).forEach(() => this.addProperty());
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
