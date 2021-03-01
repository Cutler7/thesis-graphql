import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {InputType} from '../../../../shared/enum/input.type';
import {PRODUCT_CATEGORY} from '../../../../shared/const/product-category.const';
import {SelectItem} from '../../../../shared/interface/select-item.interface';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styles: [],
})
export class SearchPanelComponent implements OnInit {

  InputType = InputType;

  form: FormGroup;

  readonly categories: SelectItem[] = PRODUCT_CATEGORY;

  @Output()
  search = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
    this.prepareFormGroup();
  }

  searchClick() {
    if (this.form.valid) {
      this.search.emit(this.form.value);
    }
  }

  resetForm() {
    this.form.reset();
  }

  private prepareFormGroup() {
    this.form = new FormGroup({
      name: new FormControl(''),
      searchInDescription: new FormControl(''),
      priceFrom: new FormControl(''),
      priceTo: new FormControl(''),
      category: new FormControl(''),
    });
  }
}
