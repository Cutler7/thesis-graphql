import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {InputType} from '../../../../shared/enum/input.type';
import {PRODUCT_CATEGORY} from '../../../../shared/const/product-category.const';
import {SelectItem} from '../../../../shared/interface/select-item.interface';
import {FilterArg} from '../../../../shared/interface/query-list-args.interface';
import {FilterOperator} from '../../../../shared/enum/filter-operator.enum';

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
  search = new EventEmitter<FilterArg[]>();

  constructor() {
  }

  ngOnInit(): void {
    this.prepareFormGroup();
  }

  searchClick() {
    if (this.form.valid) {
      this.search.emit(this.mapDataToFilterArgs());
    }
  }

  resetForm() {
    this.form.reset();
    this.search.emit([]);
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

  private mapDataToFilterArgs(): FilterArg[] {
    const value = this.form.value;
    const result: FilterArg[] = [];
    result.push({key: 'name', value: value.name, op: FilterOperator.EQ});
    result.push({key: 'description', value: value.searchInDescription ? value.name : null, op: FilterOperator.EQ});
    result.push({key: 'price', value: value.priceFrom.toString(), op: FilterOperator.GT});
    result.push({key: 'price', value: value.priceTo.toString(), op: FilterOperator.LT});
    result.push({key: 'category', value: value.category.join(), op: FilterOperator.IN});
    return result.filter(el => el.value);
  }
}
